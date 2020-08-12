import {get_parentdata} from './parents'

const STEP = 800;
const SPREAD = Math.PI / 4.0;

/**
 * @type {Object.<string, number>}
 */
var posangle_data = { "": Math.PI / 2.0 };

/**
 * @param {string} node 
 * @returns {number}
 */
function get_posangle(node) {
    if (posangle_data[node] === undefined) {
        let parent_angle = get_posangle(get_parentdata(node).parent);
        let offset = Math.random() * SPREAD;
        posangle_data[node] = parent_angle + offset;
    }
    return posangle_data[node];
}
/** @typedef {Object} Positon 
 * @property {number} x
 * @property {number} y
 */

 /**
  * @param {string} node 
  * @returns {Position}
  */
export function get_nodepos(node) {
    let R = STEP;
    let this_angle = get_posangle(node);
    var cur_x = R * Math.cos(this_angle);
    var cur_y = R * Math.sin(this_angle);
    var curnode = get_parentdata(node).parent;
    while (curnode !== undefined) {
        let pangle = get_posangle(curnode);
        let px = R * Math.cos(pangle);
        let py = R * Math.sin(pangle);
        cur_x += px;
        cur_y += py;
        curnode = get_parentdata(curnode).parent;
    }
    return { x: cur_x, y: cur_y };
}