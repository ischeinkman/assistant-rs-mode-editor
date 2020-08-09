import './modetree.css';

/**
 * @typedef {import('../../modeldata').Command} Command
 * @typedef {import('../../modeldata').Mode} Mode
 */

const ALEN = 100;
const BLEN = 100;
const TERMLEN = 50;
const MODEMASS = 1000;
const CMD_TERM_MASS = 1;
const CMD_CONN_MASS = 50;

export const other_opts = {
    ALEN: ALEN,
    BLEN: BLEN,
    TERMLEN: TERMLEN,
    MODEMASS: MODEMASS,
    CMD_TERM_MASS: CMD_TERM_MASS,
    CMD_CONN_MASS: CMD_CONN_MASS,
    CMD_TERM_OFFSET: { x: 0, y: 0 },
    CMD_CONN_OFFSET: { x: (ALEN + BLEN) / 2.0, y: (ALEN + BLEN) / 2.0 },

};
export const vis_opts = {
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
};




/**
 * @class ModeTreeView 
 * @property {HTMLElement} elm 
 * @property {import('vis-network/peer').Network} graph
 */
class ModeTreeView {
    /**
     * 
     * @param {typeof import('vis-network')} vis 
     * @param {Object} data 
     * @param {import('vis-data/peer').DataSet<import('../../modeldata').GraphNode, "id">} data.nodes
     * @param {import('vis-data/peer').DataSet<import('../../modeldata').GraphEdge, "id">} data.edges
     */
    constructor(vis, data) {
        let element = document.createElement('div');
        element.classList.add('modegraph');
        let graph = new vis.Network(element, data, vis_opts);
        graph.once("stabilized", function () {
            graph.fit();
        });
        this.elm = element;
        this.graph = graph;
    }
}

export async function makeTree() {
    const nodes = await import('./treenodes').then(mod => mod.getNodesView());
    const edges = await import('./treeedges').then(mod => mod.getEdgesView());
    const data = {
        nodes: nodes,
        edges: edges,
    };
    const vis = await import('vis-network/peer');
    return new ModeTreeView(vis, data);
}

/* eslint-disable no-unused-vars */
/**
 * 
 * @param {Mode} mode 
 * @param {number} idx 
 * @param {Command} cmd 
 * @returns {string}
 */
export function make_cmd_nodeid(mode, idx, cmd) {
    return mode.name + " -- " + idx;
}
/* eslint-enable no-unused-vars */