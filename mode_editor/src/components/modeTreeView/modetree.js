import './modetree.css';

const options = {
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
        let graph = new vis.Network(element, data, options);
        graph.once("stabilized", function () {
            graph.fit();
        });
        this.elm = element;
        this.graph = graph;
    }
}

export async function makeTree() {
    const data = await import('../../modeldata').then(mod => mod.getGraphData());
    const vis = await import('vis-network/peer');
    return new ModeTreeView(vis, data);
}