import './index.css';

async function cb(evt) {
    const modeldata_promise = import(/* webpackChunkName: `modeldata-index-1` */ './modeldata');
    let newdata_promise = import(/* webpackChunkName: `dataloading-index-1` */'./loading')
        .then(module => module.parse_files(evt.target.files));
    const [modeldata, data] = await Promise.all([modeldata_promise, newdata_promise]);
    await modeldata.loadData(data);
    const mode_list = await import(/* webpackChunkName: `modellist-index-1` */'./components/modeListView/mode_list');
    const modenames = await modeldata.getModeNames();
    let mode_view = mode_list.makeList(modenames, {
        finishButtons: [
            { ident: "addButton", text: "Add", onclick: () => { console.log('TODO: add mode.'); } },
            {
                ident: "downloadButton", text: "Download", onclick: () => {
                    import(/* webpackChunkName: 'dataloading-index-2' */ './loading')
                        .then(mod => mod.save_toml());
                }
            }
        ]
    });
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

