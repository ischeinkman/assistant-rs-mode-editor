import './modetree.css'

/**
 * @typedef {Object} ModeTreeData 
 * @property {HTMLElement} element 
 * @property {import('vis-network/peer').Network} graph
 */


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
 * @type {Promise<?ModeTreeData>}
 */
var graph_promise = Promise.resolve();

/**
 * @returns {Promise<ModeTreeData>}
 */
export function getGraph() {
    graph_promise = graph_promise.then(initGraph);
    return graph_promise;
}

/**
 * @returns {HTMLElement}
 */
function buildElm() {
    var retvl = document.createElement('div');
    retvl.classList.add('modegraph');
    return retvl;
}

/**
 * 
 * @param {HTMLElement} elm 
 * @param {import('vis-network/peer').Data} data 
 * @returns {Promise<import('vis-network/peer').Network>}
 */
function buildGraph(elm, data) {
    let vis_promise = import('vis-network/peer');
    return vis_promise
        .then((vis) => {
            var graph = new vis.Network(elm, data, options);
            graph.once("stabilized", function () {
                graph.fit();
            });
            return graph;
        });
}

/**
 * 
 * @param {ModeTreeData} [previous]
 * @returns {Promise<ModeTreeData>}
 */
function initGraph(previous) {
    if (!!previous && !!previous.element && previous.element.isConnected) {
        return Promise.resolve(previous);
    }
    return import('./modeldata')
        .then(mod => mod.getGraphData())
        .then(async data => {
            let element = buildElm();
            let graph = await buildGraph(element, data);
            return { graph: graph, element: element };
        });
}