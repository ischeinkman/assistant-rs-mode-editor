function cb(evt) {
    let modeldata_promise = import('./modeldata')
        .then(mod => mod.getData());
    init_graph()
        .then(() => import('./loading'))
        .then(module => module.parse_files(evt.target.files))
        .then((data) => modeldata_promise.then(modeldata => {
            modeldata.add(data);
            modeldata.flush();
        }))
        .then(() => {
            graph.stabilize();
            graph.fit();
        });
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
};

var graph;
function init_graph() {
    if (!graph) {
        let data_promise = import('./modeldata').then(mod => mod.getGraphData());
        return import('vis-network/peer').then(vis => data_promise.then(data => {
            var graphelm = document.getElementById("modegraph");
            graph = new vis.Network(graphelm, data, options);
            graph.on("click", function (data) {
                draw_mode(data);
            });
            graph.once("stabilized", function () {
                graph.fit();
            });
            graph.on("dragStart", function () {
                let viewer = document.getElementById("modeviewer");
                viewer.style.display = "none";
            });
        }));
    }
    else {
        return Promise.resolve({});
    }
}

function draw_mode(evt) {
    if (evt.nodes.length != 1) {
        return;
    }
    let viewer = document.getElementById("modeviewer");
    viewer.style.display = "";
    viewer.style.position = "absolute";
    viewer.style.top = evt.pointer.DOM.y;
    viewer.style.left = evt.pointer.DOM.x;
}


document.addEventListener("DOMContentLoaded", mymain);

function mymain() {
    document.getElementById("tomlupload").onchange = cb;
}