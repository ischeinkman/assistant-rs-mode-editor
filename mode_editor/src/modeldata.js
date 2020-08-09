
/** @typedef {Object} Command 
 * @property {string} message 
 * @property {string} [command]
 * @property {string} [mode]
 */

/** @typedef {Object} Mode 
 * @property {string} name 
 * @property {Command[]} command
 */

var data_promise;
/** @returns {Promise< import('vis-data/peer').DataSet<Mode, "name">> } */
export function getData() {
    if (!data_promise) {
        data_promise = getDataInner();
    }
    return data_promise;
}


/** @returns {Promise< import('vis-data/peer').DataSet<Mode, "name">> } */
async function getDataInner() {
    const vis = await import('vis-data/peer');
    return new vis.DataSet({ fieldId: "name", queue: true });
}