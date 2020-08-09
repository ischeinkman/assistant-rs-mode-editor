import { get_parentdata } from '../../parents';
import { get_nodepos } from '../../turtling';
import { other_opts, make_cmd_nodeid } from './modetree';


/**
 * @typedef {import('../../modeldata').Command} Command
 * @typedef {import('../../modeldata').Mode} Mode
 */

/** @typedef {Object} CommandNode 
 * @property {string} id
 * @property {Command} _data 
 * @property {Mode} _parent 
 *
 * @property {number} level
 * @property {number} x
 * @property {number} y
 */

/**
* @typedef {Object} ModeNode
* @property {string} id
* @property {Mode} _data 
* 
* @property {number} level
* @property {number} x
* @property {number} y
* 
*/

/** @typedef {CommandNode | ModeNode} GraphNode */

var nodes_view;
/** @returns {Promise<import('vis-data/peer').DataSet<GraphNode, "id">>} */
export function getNodesView() {
    if (!nodes_view) {
        nodes_view = getNodesViewInner();
    }
    return nodes_view;
}

/** @returns {Promise<import('vis-data/peer').DataSet<GraphNode, "id">>} */
async function getNodesViewInner() {
    const vis = await import('vis-data/peer');
    const data = await import('../../modeldata').then(mod => mod.getData());
    var nv = new vis.DataSet();
    var nodes_pipe = vis.createNewDataPipeFrom(data)
        .flatMap(make_mode_nodes)
        .to(nv);
    nodes_pipe.all().start();
    return nv;

}

/**
 * @param {Mode} mode 
 * @returns {GraphNode[]}
 */
function make_mode_nodes(mode) {
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
        mass: other_opts.MODEMASS,
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
        x: mpos.x + (is_terminal ? other_opts.CMD_TERM_OFFSET.x : other_opts.CMD_CONN_OFFSET.x),
        y: mpos.y + (is_terminal ? other_opts.CMD_TERM_OFFSET.y : other_opts.CMD_CONN_OFFSET.y),
        mass: is_terminal ? other_opts.CMD_TERM_MASS : other_opts.CMD_CONN_MASS,
        _data: cmd,
        _parent: mode,
    };
    return retvl;
}
