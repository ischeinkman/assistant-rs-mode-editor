import './index.css';
import {getGraph} from './modetree';

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
        .then(() => getGraph())
        .then(dt => {
            document.getElementById('container').appendChild(dt.element);
            dt.graph.fit();
            dt.graph.stabilize();
            console.log("FIN");
            window.MMM = dt;
        })
}

document.addEventListener("DOMContentLoaded", mymain);

function mymain() {
    document.getElementById("tomlupload").onchange = cb;
}