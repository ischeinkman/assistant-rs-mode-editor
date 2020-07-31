import { DataSet, createNewDataPipeFrom } from 'vis-data/peer';
import { Network } from 'vis-network/peer';
import { parse_files } from "./loading";
import { make_parentdata, get_parentdata } from "./parents";
import { get_nodepos } from "./turtling";

const TERMLEN = 50;
const ALEN = 100;
const BLEN = 100;
const MODEMASS = 1000;
const CMD_TERM_MASS = 1;
const CMD_CONN_MASS = 50;
const CMD_TERM_OFFSET = { x: 0, y: 0 };
const CMD_CONN_OFFSET = { x: (ALEN + BLEN) / 2.0, y: (ALEN + BLEN) / 2.0 }

function cb(evt) {
    init();
    parse_files(evt.target.files)
        .then((data) => {
            modeldata.add(data);
            modeldata.flush();
            data
        })
        .then(() => {
            graph.stabilize();
            graph.fit();
        })
}

var modeldata = new DataSet({ fieldId: "name", queue: true, });

var edgeview = new DataSet();
var edgepipe = createNewDataPipeFrom(modeldata)
    .flatMap(function (mode) {
        var retvl = [];
        for (var idx = 0; idx < mode.command.length; idx++) {
            let cmd = mode.command[idx];
            let cmd_nodeid = make_cmd_nodeid(mode, idx, cmd);
            retvl.push({
                from: mode.name,
                to: cmd_nodeid,
                length: (!!cmd.mode) ? ALEN : TERMLEN,
            });
            if (!!cmd.mode) {
                retvl.push({
                    from: cmd_nodeid,
                    to: cmd.mode,
                    length: BLEN,
                })
            }
        }
        return retvl;
    })
    .to(edgeview);
edgepipe.all().start();

var nodeview = new DataSet();
var nodepipe = createNewDataPipeFrom(modeldata)
    .flatMap(function (mode) {
        if (!get_parentdata(mode)) {
            make_parentdata(modeldata);
        }
        var retvl = [];
        let modenode = make_mode_node(mode);
        retvl.push(modenode);
        for (var idx = 0; idx < mode.command.length; idx++) {
            let cmd = mode.command[idx];
            let cmdnode = make_command_node(cmd, mode, idx);
            if (!!cmd.mode) {
                retvl.push(cmdnode);
            }
        }
        return retvl;
    })
    .to(nodeview);
nodepipe.all().start();


var data = {
    nodes: nodeview,
    edges: edgeview,
}
var options = {
    layout: {
        hierarchical: {
            enabled: false,
            sortMethod: "directed",
            shakeTowards: "roots",
        }
    },
    edges: {
        arrows: {
            to: {
                enabled: true,
                type: "arrow",
            }
        },
        smooth: false,
    },
    physics: {
        enabled: true,
        solver: "hierarchicalRepulsion",
        hierarchicalRepulsion: {
            avoidOverlap: 1.0,
            springConstant: 7,
            centralGravity: 0.00,
            damping: 4.0,
        },
        stabilization: {
            enabled: true,
            fit: true,
            iterations: 100,
        },
        timestep: 1,
        adaptiveTimestep: true,
    }
}
function make_command_node(cmd, mode, idx) {
    let cmdid = make_cmd_nodeid(mode, idx, cmd);
    let lbl = cmd.message.replaceAll(" ", "") || "<DEFAULT>";
    let mpos = get_nodepos(mode.name);
    let lvl = 2 * get_parentdata(mode.name).level;
    let is_terminal = cmd.mode === undefined;
    var retvl = {
        id: cmdid,
        label: lbl.charAt(0),
        color: (is_terminal) ? "lightgreen" : "green",
        font: {
            size: 10
        },
        level: lvl + 1,
        x: mpos.x + ((is_terminal) ? CMD_TERM_OFFSET.x : CMD_CONN_OFFSET.x),
        y: mpos.y + ((is_terminal) ? CMD_TERM_OFFSET.y : CMD_CONN_OFFSET.y),
        mass: (is_terminal) ? CMD_TERM_MASS : CMD_CONN_MASS,
        _data: cmd,
        _parent: mode,
    };
    return retvl;
}
function make_mode_node(mode) {
    let mpos = get_nodepos(mode.name);
    let lvl = 2 * get_parentdata(mode.name).level;
    let is_root = (!mode.name) || mode.name.length <= 0;
    var retvl = {
        id: mode.name,
        label: mode.name.charAt(0),
        color: (is_root) ? "red" : "blue",
        font: {
            size: 16
        },
        mass: MODEMASS,
        level: lvl,
        x: mpos.x,
        y: mpos.y,
        _data: mode,
    };
    if (is_root) {
        retvl.fixed = {
            x: true, y: true,
        };
    }
    return retvl;
}
function make_cmd_nodeid(mode, idx, cmd) {
    return mode.name + " -- " + idx;
}
var graph;
function init() {
    if (!graph) {
        var graphelm = document.getElementById("modegraph");
        graph = new Network(graphelm, data, options);
        graph.on("click", function (data) {
            draw_mode(data);
        })
        graph.once("stabilized", function () {
            graph.fit()
        })
        graph.on("dragStart", function () {
            let viewer = document.getElementById("modeviewer");
            viewer.style.display = "none";
        })
    }
}

function draw_mode(evt) {
    if (evt.nodes.length != 1) {
        return;
    }
    let nd = nodeview.get(evt.nodes[0]);
    let viewer = document.getElementById("modeviewer");
    viewer.style.display = "";
    viewer.style.position = "absolute";
    viewer.style.top = evt.pointer.DOM.y;
    viewer.style.left = evt.pointer.DOM.x;
}


document.addEventListener("DOMContentLoaded", mymain)

function mymain() {
    document.getElementById("tomlupload").onchange = cb;
}