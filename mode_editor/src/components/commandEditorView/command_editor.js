import template from './command_editor.handlebars';
import './command_editor.css';

/** 
 * @typedef {import('../../modeldata').Command} Command
 * 
 */

/**
 * @param {string} parentMode
 * @param {Command} cmd 
 * @param {Function} onsave
 * @param {Function} oncancel
 * @param {Function} oneditmode
 */
export function makeEditor(parentMode, cmd, onsave, oncancel, oneditmode) {
    var elm = document.createElement('div');
    elm.classList.add('commandEditorView');
    elm.innerHTML = template(cmd);
    elm.addEventListener("change", () => {
        onsave(parentMode, cmd);
    });
    elm.addEventListener("keypress", (evt) => {
        if (evt.key === "Enter") {
            onsave(parentMode, cmd);
        }
    });
    elm.getElementsByClassName('messageEditor')[0].oninput = (evt) => {
        cmd.message = evt.target.value;
    };
    elm.getElementsByClassName('execEditor')[0].oninput = (evt) => {
        cmd.command = evt.target.value;
    };
    elm.getElementsByClassName('saveButton')[0].onclick = () => onsave(parentMode, cmd);
    elm.getElementsByClassName('cancelButton')[0].onclick = () => oncancel(parentMode, cmd);
    elm.getElementsByClassName('modeChangeButton')[0].onclick = () => oneditmode(parentMode, cmd);
    return elm;
}

