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
     * @param {Mode[]} dt 
     */
    constructor(dt, showCancel) {
        this.data = dt.map(copyMode);

        this.elm = document.createElement('div');
        this.elm.classList.add('modeListView');
        this.elm.innerHTML = template({ data: this.data, showCancel: showCancel });

        this.onclick = async (modename) => {
            const editorImport = await import('../modeEditorView/mode_editor');
            let mode = this.data.find(md => md.name === modename);
            let view = editorImport.makeEditor(mode);
            const prevSelf = this;
            view.oncancel = () => {
                view.elm.replaceWith(prevSelf.elm);
            };
            this.elm.replaceWith(view.elm);
            console.log(mode);
        };
        this.onadd = () => {
            console.log('On add called!');
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

/**
 * @param {Command} cmd 
 * @returns {Command}
 */
function copyCommand(cmd) {
    return {
        message: cmd.message,
        command: cmd.command,
        mode: cmd.mode,
    };
}

/**
 * @param {Mode} md 
 * @returns {Mode}
 */
function copyMode(md) {
    let ncmds = md.command.map(copyCommand);
    let nname = md.name + "";
    return {
        name: nname,
        command: ncmds,
    };
}