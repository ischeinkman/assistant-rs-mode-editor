import './index.css';

async function cb(evt) {
    const modeldata_promise = import('./modeldata');
    let newdata_promise = import('./loading')
        .then(module => module.parse_files(evt.target.files));
    const [modeldata, data] = await Promise.all([modeldata_promise, newdata_promise]);
    await modeldata.loadData(data);
    const mode_list = await import('./components/modeListView/mode_list');
    let mode_view = mode_list.makeList((await modeldata.getData()).get(), false);
    let root_elm = document.getElementById('container');
    while (root_elm.hasChildNodes()) {
        root_elm.removeChild(root_elm.firstChild);
    }
    root_elm.appendChild(mode_view.elm);
}

document.addEventListener("DOMContentLoaded", mymain);

function mymain() {
    document.getElementById("tomlupload").onchange = cb;
}

