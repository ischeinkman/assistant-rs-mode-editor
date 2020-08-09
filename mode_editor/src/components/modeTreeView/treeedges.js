import {other_opts, make_cmd_nodeid} from './modetree';

/** @typedef {Object} GraphEdge 
 * @property {string} id 
 * @property {string} from 
 * @property {string} to 
 */

var edges_view;
/** @returns {Promise<import('vis-data/peer').DataSet<GraphEdge, "id">>} */
export function getEdgesView() {
    if (!edges_view) {
        edges_view = getEdgesViewInner();
    }
    return edges_view;
}

async function getEdgesViewInner() {
    const vis = await import('vis-data/peer');
    const data = await import('../../modeldata').then(mod => mod.getData());
    var ev = new vis.DataSet();
    var edges_pipe = vis.createNewDataPipeFrom(data)
        .flatMap(function (mode) {
            /** @type {GraphEdge[]} */
            var retvl = [];
            for (var idx = 0; idx < mode.command.length; idx++) {
                let cmd = mode.command[idx];
                let cmd_nodeid = make_cmd_nodeid(mode, idx, cmd);
                retvl.push({
                    from: mode.name,
                    to: cmd_nodeid,
                    length: !!cmd.mode ? other_opts.ALEN : other_opts.TERMLEN,
                });
                if (!!cmd.mode) {
                    retvl.push({
                        from: cmd_nodeid,
                        to: cmd.mode,
                        length: other_opts.TERMLEN,
                    });
                }
            }
            return retvl;
        })
        .to(ev);
    edges_pipe.all().start();
    return ev;
}