
/** @typedef {Object} Command 
 * @property {string} message 
 * @property {string} [command]
 * @property {string} [mode]
 */

/** @typedef {Object} Mode 
 * @property {string} name 
 * @property {Command[]} command
 */

const vis_import = import('vis-data/peer');

/** @type {Promise< import('vis-data/peer').DataSet<Mode, "name">> } */
var data_promise;
/** @type { import('vis-data/peer').DataSet<Mode, "name"> } */
var data;
export function getData() {
    if (!data_promise) {
        data_promise = vis_import.then(vis => new vis.DataSet({ fieldId: "name", queue: true, }))
            .then(dt => {
                data = dt;
                return data;
            });
    }
    return data_promise;
}

