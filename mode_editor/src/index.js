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
            return modeldata;
        });
    data_finish_promise
        .then(async data => {
            let mode_editor = await import('./components/modeEditorView/mode_editor');
            let root_mode = data.get("");
            let mode_view = mode_editor.makeEditor(root_mode);
            let root_elm = document.getElementById('container');
            root_elm.appendChild(mode_view.elm);
        });
}

document.addEventListener("DOMContentLoaded", mymain);

function mymain() {
    document.getElementById("tomlupload").onchange = cb;
}

