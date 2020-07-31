
var parentdata = {}

export function make_parentdata(modeldata) {
    let raw = modeldata.get();
    let mapped = raw.reduce(function (acc, cur) {
        acc[cur.name] = cur;
        return acc;
    }, {});
    var queue = [];
    let root_node = mapped[""];
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
    var qdx = 0;
    while (queue.length > 0) {
        let nxt = queue.pop();
        let cur_lvl = parentdata[nxt].level;
        let children = mapped[nxt].command
            .map(cmd => cmd.mode)
            .filter(nxt => nxt !== undefined);
        let relevant = children
            .filter(tst => parentdata[tst] === undefined || parentdata[tst].level > cur_lvl + 1);
        relevant.forEach(child => {
            parentdata[child] = { level: cur_lvl + 1, parent: nxt };
            if (!queue.includes(child)) {
                queue.push(child);
            }
        })
        qdx += 1;
        if (qdx > 2014) {
            throw new Error("FUKK");
        }
    }
}

export function get_parentdata(mode) {
    return parentdata[mode];
}