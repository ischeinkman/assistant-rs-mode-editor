import template from './command_editor.handlebars';
import './command_editor.css';
import '../divButton/divButton.css';
import '../viewWrapper/viewWrapper.css';

/** 
 * @typedef {import('../../modeldata').Command} Command
 * 
 */

/**
 * @param {string} parentMode
 * @param {Command} cmd 
 * @param {number} idx
 * @returns CommandEditorView
 */
export function makeEditor(parentMode, idx, cmd) {
    return new CommandEditorView(parentMode, idx, cmd);
}

/**
 * @callback EditModeCallback
 * @param {string} modename
 * @param {number} idx 
 * @param {Command} cmd 
 */
/**
 * @callback SaveCallback 
 * @param {string} parentMode 
 * @param {number} idx 
 * @param {Command} cmd 
 * @returns {Promise<void>}
 */

/**
 * @callback CancelCallback 
 * @param {string} parentMode 
 * @param {number} idx 
 * @param {Command} cmd 
 * @returns {Promise<void>}
 */



/**
 * @class CommandEditorView 
 * @property elm {HTMLElement}
 * @property parentMode {string}
 * @property idx {number}
 * @property cmd {Command}
 */
class CommandEditorView {
    /**
     * 
     * @param {string} prtMd 
     * @param {number} indx 
     * @param {Command} commd 
     */
    constructor(prtMd, indx, commd) {
        this.parentMode = prtMd;
        this.idx = indx;
        this.cmd = commd;
        this.elm = document.createElement('div');
        this.elm.classList.add('commandEditorView');
        this.elm.classList.add('viewWrapper');

        /**
         * @type {SaveCallback}
         */
        this.onsave = async function (parentMode, idx, cmd) {
            const mod = await import(/* webpackChunkName: "modeldata-commandeditor-1" */ '../../modeldata');
            await mod.setCommand(parentMode, idx, cmd);
        };

        /**
         * @type {CancelCallback}
         */
        this.oncancel = function () {
            return Promise.resolve({});
        };

        /**
         * @type {EditModeCallback }
         */
        this.oneditmode = async function () {
            const mod = await import(/* webpackChunkName: "modeldata-commandeditor-2" */ '../../modeldata');
            let modenames = await mod.getModeNames();
            modenames.push('[END]');
            const viewmod = await import(/* webpackChunkName: "modeview-commandeditor-1" */ "../modeListView/mode_list");
            let nview = viewmod.makeList(modenames, true);
            const prevSelf = this;
            nview.onclick = (modename) => {
                if(modename === '[END]') {
                    prevSelf.cmd.mode = undefined;
                }
                else {
                    prevSelf.cmd.mode = modename;
                }
                prevSelf.reloadView();
                nview.elm.replaceWith(prevSelf.elm);
            };
            nview.oncancel = () => {
                nview.elm.replaceWith(prevSelf.elm);
            };
            this.elm.replaceWith(nview.elm);
        };

        this.elm.addEventListener("keypress", (evt) => {
            if (evt.key === "Enter") {
                this.onsave(this.parentMode, this.idx, this.cmd);
            }
        });
        this.reloadView();
    }

    reloadView() {
        this.elm.innerHTML = template(this.cmd);
        this.elm.getElementsByClassName('messageEditor')[0].oninput = (evt) => {
            this.cmd.message = evt.target.value;
        };
        this.elm.getElementsByClassName('execEditor')[0].oninput = (evt) => {
            this.cmd.command = evt.target.value;
        };
        this.elm.getElementsByClassName('saveButton')[0].onclick = () => this.onsave(this.parentMode, this.idx, this.cmd);
        this.elm.getElementsByClassName('cancelButton')[0].onclick = () => this.oncancel(this.parentMode, this.idx, this.cmd);
        this.elm.getElementsByClassName('modeChangeButton')[0].onclick = () => this.oneditmode(this.parentMode, this.idx, this.cmd);
    }
}