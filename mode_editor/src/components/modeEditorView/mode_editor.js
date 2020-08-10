import template from './mode_editor.handlebars';
import './mode_editor.css';

/**
 * @typedef {import('../../modeldata').Command} Command
 * @typedef {import('../../modeldata').Mode} Mode
 *
 */

/**
 * @param {Mode} mode
 * @param {Function} onrename
 * @param {Function} oncancel
 * @param {Function} oneditmode
 * @returns {ModeEditorView}
 */
export function makeEditor(mode) {
    return new ModeEditorView(mode);
}

/**
 * @callback EditCommandCallback
 * @param {string} modename
 * @param {number} idx 
 * @param {Command} cmd 
 * @returns {Promise<void>}
 */
/**
 * @callback RenameCallback 
 * @param {Mode} mode
 * @returns {Promise<void>}
 */
/**
 * @callback CancelCallback 
 * @param {Mode} mode
 * @returns {Promise<void>}
 */

/**
 * @class ModeEditorView 
 * @property elm {HTMLElement}
 * @property mode {Mode}
 * @property onrename {RenameCallback}
 * @property oncancel {CancelCallback}
 * @property oneditcommand {EditCommandCallback}
 */
class ModeEditorView {

    /**
     * @param {Mode} md 
     */
    constructor(md) {
        this.mode = {
            name: md.name,
            command: md.command.slice()
        };

        /** @type {RenameCallback} */
        this.onrename = function () { return Promise.resolve({}); };

        /** @type {CancelCallback} */
        this.oncancel = function () { return Promise.resolve({}); };

        /** @type {EditCommandCallback} */
        this.oneditcommand = async function (modename, idx, cmd) {
            const mod = await import('../commandEditorView/command_editor');
            console.log('==== MODE EDITCOMMAND ====');
            console.log(arguments);
            const prevSelf = this;
            let newview = mod.makeEditor(modename, idx, cmd);
            let make_prev_view = async function () {
                newview.elm.replaceWith(prevSelf.elm);
            };
            const prevsave = newview.onsave;
            newview.onsave = (parentMode, idx, cmd) => prevsave(parentMode, idx, cmd).then(() => make_prev_view());
            newview.oncancel = make_prev_view;
            this.elm.replaceWith(newview.elm);
        };
        this.elm = document.createElement('div');
        this.elm.classList.add('modeEditorView');
        this.elm.innerHTML = template(this.mode);
        if (this.mode.name) {
            this.elm.getElementsByClassName('renameButton')[0].onclick = () => this.onrename(this.mode);
        }
        this.elm.getElementsByClassName('cancelButton')[0].onclick = () => this.oncancel(this.mode);
        var editButtons = this.elm.getElementsByClassName('commandEditButton');
        for (var idx = 0; idx < this.mode.command.length; idx++) {
            let jdx = idx | 0;
            let btn = editButtons[idx];
            let cmd = this.mode.command[idx];
            btn.onclick = () => this.oneditcommand(this.mode.name, jdx, cmd);
        }
    }
}
