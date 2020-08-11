import template from './mode_list.handlebars';
import './mode_list.css';


export function makeList(data, showCancel) {
    return new ModeListView(data, showCancel);
}

/**
 * @typedef {import('../../modeldata').Command} Command
 * @typedef {import('../../modeldata').Mode} Mode
 *
 */

class ModeListView {

    /**
     * 
     * @param {string[]} dt 
     */
    constructor(dt, showCancel) {
        this.modenames = dt;
        this.elm = document.createElement('div');
        this.elm.classList.add('modeListView');
        this.elm.innerHTML = template({ data: this.modenames, showCancel: showCancel });

        this.onclick = async (modename) => {
            const editorImport = await import(/* webpackChunkName: "modeeditor-modelist-1" */ '../modeEditorView/mode_editor');
            let mode = await import(/* webpackChunkName: "modeldata-modelist-1" */ '../../modeldata').then(mod => mod.getMode(modename));
            let view = editorImport.makeEditor(mode);
            const prevSelf = this;
            view.oncancel = () => {
                view.elm.replaceWith(prevSelf.elm);
            };
            this.elm.replaceWith(view.elm);
        };
        this.onadd = () => {
        };
        this.elm.onclick = (ev) => {
            const modename = ev.target.getAttribute('value');
            if (!modename && ev.target.classList.contains('addButton')) {
                this.onadd();
            }
            else {
                this.onclick(modename);
            }
        };
    }
}
