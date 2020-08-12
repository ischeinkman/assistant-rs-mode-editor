import template from './mode_list.handlebars';
import './mode_list.css';
import '../divButton/divButton.css';
import '../finishRow/finishRow.css';
import '../viewWrapper/viewWrapper.css';

/**
 * 
 * @param {string[]} data 
 * @param {any} options 
 * @returns {ModeListView}
 */
export function makeList(data, options) {
    return new ModeListView(data, options);
}

/**
 * @typedef {import('../../modeldata').Command} Command
 * @typedef {import('../../modeldata').Mode} Mode
 *
 */

/**
 * @class ModeListView 
 * @property elm {HTMLElement}
 * @property modenames {string[]}
 */
class ModeListView {

    /**
     * 
     * @param {string[]} dt 
     */
    constructor(dt, options) {
        this.showCancel = false;
        this.finishButtons = [];
        if (options === true || options === false) {
            this.showCancel = options;
        }
        else if (options['showCancel'] === true || options['showCancel'] === false) {
            this.showCancel = options.showCancel;
        }
        if (options[0] && options[0].ident && options[0].text && options[0].callback) {
            this.finishButtons = options;
        }
        else if (options['finishButtons'] && options['finishButtons'][0]) {
            this.finishButtons = options['finishButtons'];
        }
        this.modenames = dt;
        this.elm = document.createElement('div');
        this.elm.classList.add('modeListView');
        this.elm.classList.add('viewWrapper');

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
        this.oncancel = () => {
        };
        this.reloadView();
    }

    reloadView() {
        this.elm.innerHTML = template({ data: this.modenames, showCancel: this.showCancel, finishButtons: this.finishButtons });
        if (this.finishButtons && this.finishButtons.length > 0) {
            let finishElms = this.elm.getElementsByClassName('finishButton');
            for (var jdx = 0; jdx < this.finishButtons.length; jdx++) {
                const curdata = this.finishButtons[jdx];
                const curelm = finishElms[jdx];
                if (curelm.textContent !== curdata.text || !curelm.classList.contains(curdata.ident)) {
                    //TODO: this
                    console.log("FOUND ERROR!");
                }
                curelm.onclick = () => {
                    curdata.onclick();
                };
            }
        }

        const self = this;
        let entryElms = this.elm.getElementsByClassName('modeListEntry');
        for (var idx = 0; idx < entryElms.length; idx++) {
            const curElm = entryElms[idx];
            const vl = curElm.getAttribute('value');
            curElm.onclick = () => {
                self.onclick(vl);
            };
        }

        let addElm = this.elm.getElementsByClassName('addButton');
        for (idx = 0; idx < addElm.length; idx++) {
            addElm[idx].onclick = () => {
                self.onadd();
            };
        }
        let cancelElm = this.elm.getElementsByClassName('cancelButton');
        for (idx = 0; idx < cancelElm.length; idx++) {
            cancelElm[idx].onclick = () => {
                self.oncancel();
            };
        }
    }
}
