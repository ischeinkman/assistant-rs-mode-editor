import './index.css';


/**
 * @type {import('./components/modeListView/mode_list').ModeListView}
 */
var rootView;

async function uploadFile() {
    let elm = document.createElement('input');
    elm.setAttribute('type', 'file');
    elm.setAttribute('multiple', 'true');
    elm.onchange = async (evt) => {
        const modeldata_promise = import(/* webpackChunkName: `modeldata-index-1` */ './modeldata');
        let newdata_promise = import(/* webpackChunkName: `dataloading-index-1` */'./loading')
            .then(module => module.parse_files(evt.target.files));
        const [modeldata, data] = await Promise.all([modeldata_promise, newdata_promise]);
        await modeldata.loadData(data);
        const modenames = await modeldata.getModeNames();
        rootView.modenames = modenames;
        rootView.reloadView();
    };
    elm.click();
}

document.addEventListener("DOMContentLoaded", mymain);

async function mymain() {
    const modeldata = await import(/* webpackChunkName: `modeldata-index-1` */ './modeldata');
    const modenames = await modeldata.getModeNames();
    const mode_list = await import(/* webpackChunkName: `modellist-index-1` */'./components/modeListView/mode_list');
    rootView = mode_list.makeList(modenames, {
        finishButtons: [
            { ident: "addButton", text: "+", onclick: () => { console.log('TODO: add mode.'); } },
            { ident: 'uploadButton', text: '\u21E1', onclick: uploadFile },
            {
                ident: "downloadButton", text: "\u21E3", onclick: () => {
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
    root_elm.appendChild(rootView.elm);
}

