
/** @typedef {Object} ParentData 
 * @property {number} level 
 * @property {string |undefined} parent
 */

/** @type {Object.<string, ParentData>} */
var parentdata = {};

/**
 * @typedef {import('./modeldata').Mode} Mode
 * @typedef {import('./modeldata').Command} Command
 */

export async function remake_parentdata() {
    const datamod = await import('./modeldata');

    /** @type string[] */
    var queue = [];
    let root_node = await datamod.getRootMode();
    parentdata[""] = { level: 0 };
    let children = root_node.command
        .map(cmd => cmd.mode)
        .filter(nxt => nxt !== undefined);

    children.forEach(nxt => {
        parentdata[nxt] = {
            parent: "",
            level: 1,
        };
        queue.push(nxt);
    });
    while (queue.length > 0) {
        let nxt = queue.pop();
        let cur_lvl = parentdata[nxt].level;
        let children = (await datamod.getMode(nxt)).command
            .map(cmd => cmd.mode)
            .filter(nxt => nxt !== undefined);
        let relevant = children
            .filter(tst => parentdata[tst] === undefined || parentdata[tst].level > cur_lvl + 1);
        relevant.forEach(child => {
            parentdata[child] = { level: cur_lvl + 1, parent: nxt };
            if (!queue.includes(child)) {
                queue.push(child);
            }
        });
    }
}

/**
 * @param {string} mode 
 * @returns {ParentData}
 */
export function get_parentdata(mode) {
    return parentdata[mode];
}