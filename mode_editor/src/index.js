import './index.css';

function cb(evt) {
    let modeldata_promise = import('./modeldata')
        .then(mod => mod.getData());
    let newdata_promise = import('./loading')
        .then(module => module.parse_files(evt.target.files));
    let data_finish_promise = Promise.all([modeldata_promise, newdata_promise])
        .then(([modeldata, data]) => {
            modeldata.add(data);
            modeldata.flush();
        });
    data_finish_promise
        .then(() => init_graph())
        .then(graph => {
            graph.stabilize();
            graph.fit();
        });
}

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

var graph_promise;
function init_graph() {
    if (!graph_promise) {
        let data_promise = import('./modeldata').then(mod => mod.getGraphData());
        let vis_promise = import('vis-network/peer');
        graph_promise = Promise.all([vis_promise, data_promise])
            .then(([vis, data]) => {
                var graphelm = document.getElementById("modegraph");
                var graph = new vis.Network(graphelm, data, options);
                graph.once("stabilized", function () {
                    graph.fit();
                });
                return graph;
            });
    }
    return graph_promise;
}

document.addEventListener("DOMContentLoaded", mymain);

function mymain() {
    document.getElementById("tomlupload").onchange = cb;
}