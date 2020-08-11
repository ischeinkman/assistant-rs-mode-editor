
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

/**
 * @param {Mode[]} newdata 
 * @returns {Promise<boolean>}
 */
export async function loadData(newdata) {
    let datastore = await getData();
    var newRoot = undefined;
    for (var idx = 0; idx < newdata.length; idx++) {
        let curmd = newdata[idx];
        if (curmd.name === "") {
            if (newRoot) {
                return false;
            }
            newdata.splice(idx, 1);
            idx -= 1;
            newRoot = curmd;
            continue;
        }
        let prevmd = datastore.get(curmd.name);
        if (prevmd && !modeEquals(curmd, prevmd)) {
            return false;
        }
    }
    if (newRoot) {
        let prevRoot = await getRootMode();
        for (idx = 0; idx < newRoot.command.length; idx++) {
            let newCmd = newRoot.command[idx];
            var alreadyExists = false;
            for (var jdx = 0; jdx < prevRoot.command.length; jdx++) {
                let prevCmd = prevRoot.command[jdx];
                if (commandEquals(prevCmd, newCmd)) {
                    alreadyExists = true;
                    break;
                }
                if (prevCmd.message.trim().toLowerCase() === newCmd.message.trim().toLowerCase()) {
                    return false;
                }
            }
            if (!alreadyExists) {
                prevRoot.command.push(newCmd);
            }
        }
        datastore.updateOnly(prevRoot);
    }
    datastore.add(newdata);
    datastore.flush();
}


/** @returns {Promise< import('vis-data/peer').DataSet<Mode, "name">> } */
async function getDataInner() {
    const vis = await import('vis-data/peer');
    return new vis.DataSet({ fieldId: "name", queue: true });
}

export async function getModeNames() {
    let datastore = await getData();
    return datastore.getIds();
}

/**
 * @param {string} modename 
 * @returns {Promise<Mode>}
 */
export async function getRootMode() {
    var retvl = await getMode("");
    if (retvl) {
        return retvl;
    }
    await addMode("");
    return await getMode("");
}

/**
 * @param {string} modename 
 * @returns {Promise<Mode | undefined>}
 */
export async function getMode(modename) {
    let data = await getData();
    let raw_retvl = data.get(modename);
    if (raw_retvl) {
        return copyMode(raw_retvl);
    }
    return undefined;
}

/**
 * @param {string} modename 
 * @returns {Promise<boolean>}
 */
export async function addMode(modename) {
    let datastore = await getData();
    try {
        datastore.add({ name: modename, command: [] });
        datastore.flush();
        return true;
    }
    catch {
        return false;
    }
}

/**
 * @param {string} parentMode 
 * @param {number} idx 
 * @returns {Promise<Command | undefined>}
 */
export async function getCommand(parentMode, idx) {
    let mode = await getMode(parentMode);
    if (!mode || mode.command.length <= idx) {
        return undefined;
    }
    let retvl = mode.command[idx];
    return copyCommand(retvl);
}

/**
 * @param {string} parentMode 
 * @param {number} idx 
 * @param {Command} cmd 
 * @returns {Promise<boolean>}
 */
export async function setCommand(parentMode, idx, cmd) {
    let prevdata = await getMode(parentMode);
    if (!prevdata || prevdata.command.length < idx) {
        return false;
    }
    for (var jdx = 0; jdx < prevdata.command.length; jdx++) {
        let curcmd = prevdata.command[jdx];
        if (commandEquals(curcmd, cmd)) {
            return jdx === idx;
        }
    }
    if (prevdata.command.length === idx) {
        prevdata.command.push(cmd);
    }
    else {
        prevdata.command[idx] = cmd;
    }
    let datastore = await getData();
    datastore.updateOnly(prevdata);
    datastore.flush();
    return true;
}


/**
 * @param {Command} cmd 
 * @returns {Command}
 */
export function copyCommand(cmd) {
    if (!cmd) {
        return cmd;
    }
    var msg = cmd.message;
    var exe = cmd.command;
    var nxt = cmd.mode;
    return {
        message: msg,
        command: exe,
        mode: nxt,
    };
}

/**
 * 
 * @param {Command} cmda 
 * @param {Command} cmdb 
 * @returns {boolean}
 */
export function commandEquals(cmda, cmdb) {
    if (cmda === cmdb) {
        return true;
    }
    return cmda.message === cmdb.message
        && cmda.command === cmdb.command
        && cmda.mode === cmdb.mode;
}

/**
 * @param {Mode} mda 
 * @param {Mode} mdb 
 * @returns {boolean}
 */
export function modeEquals(mda, mdb) {
    if (mda === mdb) {
        return true;
    }
    if (mda.name !== mdb.name) {
        return false;
    }
    if (mda.command.length !== mdb.command.length) {
        return false;
    }
    for (var idx = 0; idx < mda.command.length; idx++) {
        let cmda = mda.command[idx];
        let cmdb = mdb.command[idx];
        if (!commandEquals(cmda, cmdb)) {
            return false;
        }
    }
    return true;
}

/**
 * @param {Mode} mod 
 * @return {Mode}
 */
export function copyMode(mod) {
    if (!mod) {
        return mod;
    }
    var nam = mod.name;
    var cmds = mod.command.map(copyCommand);
    return {
        name: nam,
        command: cmds
    };
}