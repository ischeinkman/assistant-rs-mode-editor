import { get_parentdata, make_parentdata } from './parents';
import { get_nodepos } from './turtling';

/** @typedef {Object} Command 
 * @property {string} message 
 * @property {string} [command]
 * @property {string} [mode]
 */

/** @typedef {Object} Mode 
 * @property {string} name 
 * @property {Command[]} command
 */

const TERMLEN = 50;
const ALEN = 100;
const BLEN = 100;
const CMD_TERM_OFFSET = { x: 0, y: 0 };
const CMD_CONN_OFFSET = { x: (ALEN + BLEN) / 2.0, y: (ALEN + BLEN) / 2.0 };
const MODEMASS = 1000;
const CMD_TERM_MASS = 1;
const CMD_CONN_MASS = 50;

const vis_import = import('vis-data/peer');



/** @type {Promise< import('vis-data/peer').DataSet<Mode, "name">> } */
var data_promise;
/** @type { import('vis-data/peer').DataSet<Mode, "name"> } */
var data;
export function getData() {
    if (!data_promise) {
        data_promise = vis_import.then(vis => new vis.DataSet({ fieldId: "name", queue: true, }))
            .then(dt => {
                data = dt;
                return data;
            });
    }
    return data_promise;
}

/** @typedef {CommandNode | ModeNode} GraphNode */

/**
 * @param {Mode} mode 
 * @returns {GraphNode[]}
 */
function make_mode_nodes(mode) {
    if (!get_parentdata(mode.name)) {
        make_parentdata(data);
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
}


/** @type {Promise<import('vis-data/peer').DataSet<GraphNode, "id">>} */
var nodes_view;
function getNodesView() {
    if (!nodes_view) {
        nodes_view = getData()
            .then(data => vis_import.then(vis => {
                var nv = new vis.DataSet();
                var nodes_pipe = vis.createNewDataPipeFrom(data)
                    .flatMap(make_mode_nodes)
                    .to(nv);
                nodes_pipe.all().start();
                return nv;
            }));
    }
    return nodes_view;
}

/** @typedef {Object} CommandNode 
 * @property {string} id
 * @property {Commnad} _data 
 * @property {Mode} _parent 
 *
 * @property {number} level
 * @property {number} x
 * @property {number} y
 */

/**
 * @param {Command} cmd 
 * @param {Mode} mode 
 * @param {number} idx 
 * @returns {CommandNode}
 */
function make_command_node(cmd, mode, idx) {
    let cmdid = make_cmd_nodeid(mode, idx, cmd);
    /** @type {string} */
    let lbl = cmd.message.replaceAll(" ", "") || "<DEFAULT>";
    let mpos = get_nodepos(mode.name);
    let lvl = 2 * get_parentdata(mode.name).level;
    let is_terminal = cmd.mode === undefined;
    var retvl = {
        id: cmdid,
        label: lbl.charAt(0),
        color: is_terminal ? "lightgreen" : "green",
        font: {
            size: 10
        },
        level: lvl + 1,
        x: mpos.x + (is_terminal ? CMD_TERM_OFFSET.x : CMD_CONN_OFFSET.x),
        y: mpos.y + (is_terminal ? CMD_TERM_OFFSET.y : CMD_CONN_OFFSET.y),
        mass: is_terminal ? CMD_TERM_MASS : CMD_CONN_MASS,
        _data: cmd,
        _parent: mode,
    };
    return retvl;
}

/**
 * @typedef {Object} ModeNode 
 * @property {string} id
 * @property {Mode} _data 
 * 
 * @property {number} level
 * @property {number} x
 * @property {number} y
 */

/**
 * 
 * @param {Mode} mode 
 * @returns {ModeNode}
 */
function make_mode_node(mode) {
    let mpos = get_nodepos(mode.name);
    let lvl = 2 * get_parentdata(mode.name).level;
    let is_root = !mode.name || mode.name.length <= 0;
    var retvl = {
        id: mode.name,
        label: mode.name.charAt(0),
        color: is_root ? "red" : "blue",
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

/**
 * 
 * @param {Mode} mode 
 * @param {number} idx 
 * @param {Command} cmd 
 * @returns {string}
 */
/* eslint-disable no-unused-vars */
function make_cmd_nodeid(mode, idx, cmd) {
    return mode.name + " -- " + idx;
}
/* eslint-enable no-unused-vars */

/** @typedef {Object} GraphEdge 
 * @property {string} id 
 * @property {string} from 
 * @property {string} to 
 */
/** @type {import('vis-data/peer').DataSet<GraphEdge, "id">} */
var edges_view;
function getEdgesView() {
    if (!edges_view) {
        edges_view = getData().then(data => vis_import.then(vis => {
            var ev = new vis.DataSet();
            var edges_pipe = vis.createNewDataPipeFrom(data)
                .flatMap(function (mode) {
                    /** @type {GraphEdge[]} */
                    var retvl = [];
                    for (var idx = 0; idx < mode.command.length; idx++) {
                        let cmd = mode.command[idx];
                        let cmd_nodeid = make_cmd_nodeid(mode, idx, cmd);
                        retvl.push({
                            from: mode.name,
                            to: cmd_nodeid,
                            length: !!cmd.mode ? ALEN : TERMLEN,
                        });
                        if (!!cmd.mode) {
                            retvl.push({
                                from: cmd_nodeid,
                                to: cmd.mode,
                                length: BLEN,
                            });
                        }
                    }
                    return retvl;
                })
                .to(ev);
            edges_pipe.all().start();
            return ev;
        }));
    }
    return edges_view;
}

export function getGraphData() {
    return Promise.all([getNodesView(), getEdgesView()])
        .then(function (dataarr) {
            return {
                nodes: dataarr[0],
                edges: dataarr[1],
            };
        });
}