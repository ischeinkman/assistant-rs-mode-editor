(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modeldata-index-1"],{

/***/ "./src/modeldata.js":
/*!**************************!*\
  !*** ./src/modeldata.js ***!
  \**************************/
/*! exports provided: getData, loadData, getModeNames, getRootMode, getMode, addMode, getCommand, setCommand, deleteCommand, copyCommand, commandEquals, compareCommand, modeEquals, copyMode */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return getData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadData", function() { return loadData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getModeNames", function() { return getModeNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRootMode", function() { return getRootMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMode", function() { return getMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMode", function() { return addMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCommand", function() { return getCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCommand", function() { return setCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCommand", function() { return deleteCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyCommand", function() { return copyCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commandEquals", function() { return commandEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareCommand", function() { return compareCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modeEquals", function() { return modeEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyMode", function() { return copyMode; });

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
function getData() {
    if (!data_promise) {
        data_promise = getDataInner();
    }
    return data_promise;
}

/**
 * @param {Mode[]} newdata 
 * @returns {Promise<boolean>}
 */
async function loadData(newdata) {
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
        if (!prevmd) {
            curmd.command.sort(compareCommand);
        }
        else if (prevmd && !modeEquals(curmd, prevmd)) {
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
        prevRoot.command.sort(compareCommand);
        datastore.updateOnly(prevRoot);
    }
    datastore.add(newdata);
    datastore.flush();
}


/** @returns {Promise< import('vis-data/peer').DataSet<Mode, "name">> } */
async function getDataInner() {
    const vis = await __webpack_require__.e(/*! import() | visdatadep-modeldata-1 */ "vendors~visdatadep-modeldata-1").then(__webpack_require__.bind(null, /*! vis-data/peer */ "./node_modules/vis-data/peer/index.js"));
    let retvl = new vis.DataSet({ fieldId: "name", queue: true });
    retvl.add({ name: "", command: [] });
    retvl.flush();
    return retvl;
}

async function getModeNames() {
    let datastore = await getData();
    return datastore.getIds();
}

/**
 * @param {string} modename 
 * @returns {Promise<Mode>}
 */
async function getRootMode() {
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
async function getMode(modename) {
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
async function addMode(modename) {
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
async function getCommand(parentMode, idx) {
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
async function setCommand(parentMode, idx, cmd) {
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
    prevdata.command.sort(compareCommand);
    let datastore = await getData();
    datastore.updateOnly(prevdata);
    datastore.flush();
    return true;
}

/**
 * @param {string} parentMode 
 * @param {number} idx 
 * @param {Command} cmd 
 * @returns {Promise<boolean>}
 */
async function deleteCommand(parentMode, idx, cmd) {
    let prevdata = await getMode(parentMode);
    if (!prevdata || prevdata.command.length <= idx) {
        return false;
    }
    if (cmd && !commandEquals(cmd, prevdata.command[idx])) {
        return false;
    }
    prevdata.command.splice(idx, 1);
    let datastore = await getData();
    datastore.updateOnly(prevdata);
    datastore.flush();
    return true;
}


/**
 * @param {Command} cmd 
 * @returns {Command}
 */
function copyCommand(cmd) {
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
function commandEquals(cmda, cmdb) {
    if (cmda === cmdb) {
        return true;
    }
    return cmda.message === cmdb.message
        && cmda.command === cmdb.command
        && cmda.mode === cmdb.mode;
}

/**
 * 
 * @param {Command} cmda 
 * @param {Command} cmdb 
 * @returns {number}
 */
function compareCommand(cmda, cmdb) {
    if (commandEquals(cmda, cmdb)) {
        return 0;
    }
    let a_is_root = !cmda.message || cmda.message.length === 0;
    let b_is_root = !cmdb.message || cmdb.message.length === 0;

    /* First is the default command */
    if (a_is_root && !b_is_root) {
        return -1;
    }
    if (!a_is_root && b_is_root) {
        return 1;
    }

    /* Next all transition commands */
    if (cmda.mode !== undefined && cmdb.mode === undefined) {
        return -1;
    }
    if (cmdb.mode !== undefined && cmda.mode === undefined) {
        return 1;
    }

    if (cmda.mode !== undefined && cmdb.mode !== undefined) {
        if (cmda.mode < cmdb.mode) {
            return -1;
        }
        if (cmdb.mode < cmda.mode) {
            return 1;
        }
    }

    if (cmda.command < cmdb.command) {
        return -1;
    }
    if (cmdb.command < cmda.command) {
        return 1;
    }
    if (cmda.message < cmdb.message) {
        return -1;
    }
    if (cmdb.message < cmda.message) {
        return 1;
    }

    return 0;
}

/**
 * @param {Mode} mda 
 * @param {Mode} mdb 
 * @returns {boolean}
 */
function modeEquals(mda, mdb) {
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
function copyMode(mod) {
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxkYXRhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQjs7QUFFQSxjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsVUFBVTtBQUN4Qjs7QUFFQTtBQUNBLGNBQWMseURBQXlEO0FBQ2hFO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7QUFDTztBQUNQO0FBQ0E7QUFDQSxxQkFBcUIsc0JBQXNCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsOEJBQThCO0FBQ25EO0FBQ0E7QUFDQSw2QkFBNkIsK0JBQStCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxjQUFjLHlEQUF5RDtBQUN2RTtBQUNBLHNCQUFzQixtTUFBd0U7QUFDOUYsaUNBQWlDLCtCQUErQjtBQUNoRSxlQUFlLHdCQUF3QjtBQUN2QztBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYTtBQUNiO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWE7QUFDYjtBQUNPO0FBQ1A7QUFDQTtBQUNBLHVCQUF1Qiw4QkFBOEI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWE7QUFDYjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsUUFBUTtBQUNuQixhQUFhO0FBQ2I7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLCtCQUErQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLFFBQVE7QUFDbkIsYUFBYTtBQUNiO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYTtBQUNiO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsYUFBYTtBQUNiO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixhQUFhO0FBQ2I7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYTtBQUNiO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMEJBQTBCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLEtBQUs7QUFDaEIsWUFBWTtBQUNaO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6Im1vZGVsZGF0YS1pbmRleC0xLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqIEB0eXBlZGVmIHtPYmplY3R9IENvbW1hbmQgXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbWVzc2FnZSBcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbY29tbWFuZF1cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbbW9kZV1cbiAqL1xuXG4vKiogQHR5cGVkZWYge09iamVjdH0gTW9kZSBcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBuYW1lIFxuICogQHByb3BlcnR5IHtDb21tYW5kW119IGNvbW1hbmRcbiAqL1xuXG52YXIgZGF0YV9wcm9taXNlO1xuLyoqIEByZXR1cm5zIHtQcm9taXNlPCBpbXBvcnQoJ3Zpcy1kYXRhL3BlZXInKS5EYXRhU2V0PE1vZGUsIFwibmFtZVwiPj4gfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGEoKSB7XG4gICAgaWYgKCFkYXRhX3Byb21pc2UpIHtcbiAgICAgICAgZGF0YV9wcm9taXNlID0gZ2V0RGF0YUlubmVyKCk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhX3Byb21pc2U7XG59XG5cbi8qKlxuICogQHBhcmFtIHtNb2RlW119IG5ld2RhdGEgXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWREYXRhKG5ld2RhdGEpIHtcbiAgICBsZXQgZGF0YXN0b3JlID0gYXdhaXQgZ2V0RGF0YSgpO1xuICAgIHZhciBuZXdSb290ID0gdW5kZWZpbmVkO1xuICAgIGZvciAodmFyIGlkeCA9IDA7IGlkeCA8IG5ld2RhdGEubGVuZ3RoOyBpZHgrKykge1xuICAgICAgICBsZXQgY3VybWQgPSBuZXdkYXRhW2lkeF07XG4gICAgICAgIGlmIChjdXJtZC5uYW1lID09PSBcIlwiKSB7XG4gICAgICAgICAgICBpZiAobmV3Um9vdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld2RhdGEuc3BsaWNlKGlkeCwgMSk7XG4gICAgICAgICAgICBpZHggLT0gMTtcbiAgICAgICAgICAgIG5ld1Jvb3QgPSBjdXJtZDtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwcmV2bWQgPSBkYXRhc3RvcmUuZ2V0KGN1cm1kLm5hbWUpO1xuICAgICAgICBpZiAoIXByZXZtZCkge1xuICAgICAgICAgICAgY3VybWQuY29tbWFuZC5zb3J0KGNvbXBhcmVDb21tYW5kKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwcmV2bWQgJiYgIW1vZGVFcXVhbHMoY3VybWQsIHByZXZtZCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAobmV3Um9vdCkge1xuICAgICAgICBsZXQgcHJldlJvb3QgPSBhd2FpdCBnZXRSb290TW9kZSgpO1xuICAgICAgICBmb3IgKGlkeCA9IDA7IGlkeCA8IG5ld1Jvb3QuY29tbWFuZC5sZW5ndGg7IGlkeCsrKSB7XG4gICAgICAgICAgICBsZXQgbmV3Q21kID0gbmV3Um9vdC5jb21tYW5kW2lkeF07XG4gICAgICAgICAgICB2YXIgYWxyZWFkeUV4aXN0cyA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yICh2YXIgamR4ID0gMDsgamR4IDwgcHJldlJvb3QuY29tbWFuZC5sZW5ndGg7IGpkeCsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHByZXZDbWQgPSBwcmV2Um9vdC5jb21tYW5kW2pkeF07XG4gICAgICAgICAgICAgICAgaWYgKGNvbW1hbmRFcXVhbHMocHJldkNtZCwgbmV3Q21kKSkge1xuICAgICAgICAgICAgICAgICAgICBhbHJlYWR5RXhpc3RzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChwcmV2Q21kLm1lc3NhZ2UudHJpbSgpLnRvTG93ZXJDYXNlKCkgPT09IG5ld0NtZC5tZXNzYWdlLnRyaW0oKS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWFscmVhZHlFeGlzdHMpIHtcbiAgICAgICAgICAgICAgICBwcmV2Um9vdC5jb21tYW5kLnB1c2gobmV3Q21kKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwcmV2Um9vdC5jb21tYW5kLnNvcnQoY29tcGFyZUNvbW1hbmQpO1xuICAgICAgICBkYXRhc3RvcmUudXBkYXRlT25seShwcmV2Um9vdCk7XG4gICAgfVxuICAgIGRhdGFzdG9yZS5hZGQobmV3ZGF0YSk7XG4gICAgZGF0YXN0b3JlLmZsdXNoKCk7XG59XG5cblxuLyoqIEByZXR1cm5zIHtQcm9taXNlPCBpbXBvcnQoJ3Zpcy1kYXRhL3BlZXInKS5EYXRhU2V0PE1vZGUsIFwibmFtZVwiPj4gfSAqL1xuYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YUlubmVyKCkge1xuICAgIGNvbnN0IHZpcyA9IGF3YWl0IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInZpc2RhdGFkZXAtbW9kZWxkYXRhLTFcIiAqLyAndmlzLWRhdGEvcGVlcicpO1xuICAgIGxldCByZXR2bCA9IG5ldyB2aXMuRGF0YVNldCh7IGZpZWxkSWQ6IFwibmFtZVwiLCBxdWV1ZTogdHJ1ZSB9KTtcbiAgICByZXR2bC5hZGQoeyBuYW1lOiBcIlwiLCBjb21tYW5kOiBbXSB9KTtcbiAgICByZXR2bC5mbHVzaCgpO1xuICAgIHJldHVybiByZXR2bDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1vZGVOYW1lcygpIHtcbiAgICBsZXQgZGF0YXN0b3JlID0gYXdhaXQgZ2V0RGF0YSgpO1xuICAgIHJldHVybiBkYXRhc3RvcmUuZ2V0SWRzKCk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IG1vZGVuYW1lIFxuICogQHJldHVybnMge1Byb21pc2U8TW9kZT59XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSb290TW9kZSgpIHtcbiAgICB2YXIgcmV0dmwgPSBhd2FpdCBnZXRNb2RlKFwiXCIpO1xuICAgIGlmIChyZXR2bCkge1xuICAgICAgICByZXR1cm4gcmV0dmw7XG4gICAgfVxuICAgIGF3YWl0IGFkZE1vZGUoXCJcIik7XG4gICAgcmV0dXJuIGF3YWl0IGdldE1vZGUoXCJcIik7XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IG1vZGVuYW1lIFxuICogQHJldHVybnMge1Byb21pc2U8TW9kZSB8IHVuZGVmaW5lZD59XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRNb2RlKG1vZGVuYW1lKSB7XG4gICAgbGV0IGRhdGEgPSBhd2FpdCBnZXREYXRhKCk7XG4gICAgbGV0IHJhd19yZXR2bCA9IGRhdGEuZ2V0KG1vZGVuYW1lKTtcbiAgICBpZiAocmF3X3JldHZsKSB7XG4gICAgICAgIHJldHVybiBjb3B5TW9kZShyYXdfcmV0dmwpO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBtb2RlbmFtZSBcbiAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkTW9kZShtb2RlbmFtZSkge1xuICAgIGxldCBkYXRhc3RvcmUgPSBhd2FpdCBnZXREYXRhKCk7XG4gICAgdHJ5IHtcbiAgICAgICAgZGF0YXN0b3JlLmFkZCh7IG5hbWU6IG1vZGVuYW1lLCBjb21tYW5kOiBbXSB9KTtcbiAgICAgICAgZGF0YXN0b3JlLmZsdXNoKCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjYXRjaCB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHBhcmVudE1vZGUgXG4gKiBAcGFyYW0ge251bWJlcn0gaWR4IFxuICogQHJldHVybnMge1Byb21pc2U8Q29tbWFuZCB8IHVuZGVmaW5lZD59XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb21tYW5kKHBhcmVudE1vZGUsIGlkeCkge1xuICAgIGxldCBtb2RlID0gYXdhaXQgZ2V0TW9kZShwYXJlbnRNb2RlKTtcbiAgICBpZiAoIW1vZGUgfHwgbW9kZS5jb21tYW5kLmxlbmd0aCA8PSBpZHgpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgbGV0IHJldHZsID0gbW9kZS5jb21tYW5kW2lkeF07XG4gICAgcmV0dXJuIGNvcHlDb21tYW5kKHJldHZsKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyZW50TW9kZSBcbiAqIEBwYXJhbSB7bnVtYmVyfSBpZHggXG4gKiBAcGFyYW0ge0NvbW1hbmR9IGNtZCBcbiAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2V0Q29tbWFuZChwYXJlbnRNb2RlLCBpZHgsIGNtZCkge1xuICAgIGxldCBwcmV2ZGF0YSA9IGF3YWl0IGdldE1vZGUocGFyZW50TW9kZSk7XG4gICAgaWYgKCFwcmV2ZGF0YSB8fCBwcmV2ZGF0YS5jb21tYW5kLmxlbmd0aCA8IGlkeCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZvciAodmFyIGpkeCA9IDA7IGpkeCA8IHByZXZkYXRhLmNvbW1hbmQubGVuZ3RoOyBqZHgrKykge1xuICAgICAgICBsZXQgY3VyY21kID0gcHJldmRhdGEuY29tbWFuZFtqZHhdO1xuICAgICAgICBpZiAoY29tbWFuZEVxdWFscyhjdXJjbWQsIGNtZCkpIHtcbiAgICAgICAgICAgIHJldHVybiBqZHggPT09IGlkeDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAocHJldmRhdGEuY29tbWFuZC5sZW5ndGggPT09IGlkeCkge1xuICAgICAgICBwcmV2ZGF0YS5jb21tYW5kLnB1c2goY21kKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHByZXZkYXRhLmNvbW1hbmRbaWR4XSA9IGNtZDtcbiAgICB9XG4gICAgcHJldmRhdGEuY29tbWFuZC5zb3J0KGNvbXBhcmVDb21tYW5kKTtcbiAgICBsZXQgZGF0YXN0b3JlID0gYXdhaXQgZ2V0RGF0YSgpO1xuICAgIGRhdGFzdG9yZS51cGRhdGVPbmx5KHByZXZkYXRhKTtcbiAgICBkYXRhc3RvcmUuZmx1c2goKTtcbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyZW50TW9kZSBcbiAqIEBwYXJhbSB7bnVtYmVyfSBpZHggXG4gKiBAcGFyYW0ge0NvbW1hbmR9IGNtZCBcbiAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ29tbWFuZChwYXJlbnRNb2RlLCBpZHgsIGNtZCkge1xuICAgIGxldCBwcmV2ZGF0YSA9IGF3YWl0IGdldE1vZGUocGFyZW50TW9kZSk7XG4gICAgaWYgKCFwcmV2ZGF0YSB8fCBwcmV2ZGF0YS5jb21tYW5kLmxlbmd0aCA8PSBpZHgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoY21kICYmICFjb21tYW5kRXF1YWxzKGNtZCwgcHJldmRhdGEuY29tbWFuZFtpZHhdKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHByZXZkYXRhLmNvbW1hbmQuc3BsaWNlKGlkeCwgMSk7XG4gICAgbGV0IGRhdGFzdG9yZSA9IGF3YWl0IGdldERhdGEoKTtcbiAgICBkYXRhc3RvcmUudXBkYXRlT25seShwcmV2ZGF0YSk7XG4gICAgZGF0YXN0b3JlLmZsdXNoKCk7XG4gICAgcmV0dXJuIHRydWU7XG59XG5cblxuLyoqXG4gKiBAcGFyYW0ge0NvbW1hbmR9IGNtZCBcbiAqIEByZXR1cm5zIHtDb21tYW5kfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29weUNvbW1hbmQoY21kKSB7XG4gICAgaWYgKCFjbWQpIHtcbiAgICAgICAgcmV0dXJuIGNtZDtcbiAgICB9XG4gICAgdmFyIG1zZyA9IGNtZC5tZXNzYWdlO1xuICAgIHZhciBleGUgPSBjbWQuY29tbWFuZDtcbiAgICB2YXIgbnh0ID0gY21kLm1vZGU7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWVzc2FnZTogbXNnLFxuICAgICAgICBjb21tYW5kOiBleGUsXG4gICAgICAgIG1vZGU6IG54dCxcbiAgICB9O1xufVxuXG4vKipcbiAqIFxuICogQHBhcmFtIHtDb21tYW5kfSBjbWRhIFxuICogQHBhcmFtIHtDb21tYW5kfSBjbWRiIFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21tYW5kRXF1YWxzKGNtZGEsIGNtZGIpIHtcbiAgICBpZiAoY21kYSA9PT0gY21kYikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGNtZGEubWVzc2FnZSA9PT0gY21kYi5tZXNzYWdlXG4gICAgICAgICYmIGNtZGEuY29tbWFuZCA9PT0gY21kYi5jb21tYW5kXG4gICAgICAgICYmIGNtZGEubW9kZSA9PT0gY21kYi5tb2RlO1xufVxuXG4vKipcbiAqIFxuICogQHBhcmFtIHtDb21tYW5kfSBjbWRhIFxuICogQHBhcmFtIHtDb21tYW5kfSBjbWRiIFxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmVDb21tYW5kKGNtZGEsIGNtZGIpIHtcbiAgICBpZiAoY29tbWFuZEVxdWFscyhjbWRhLCBjbWRiKSkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgbGV0IGFfaXNfcm9vdCA9ICFjbWRhLm1lc3NhZ2UgfHwgY21kYS5tZXNzYWdlLmxlbmd0aCA9PT0gMDtcbiAgICBsZXQgYl9pc19yb290ID0gIWNtZGIubWVzc2FnZSB8fCBjbWRiLm1lc3NhZ2UubGVuZ3RoID09PSAwO1xuXG4gICAgLyogRmlyc3QgaXMgdGhlIGRlZmF1bHQgY29tbWFuZCAqL1xuICAgIGlmIChhX2lzX3Jvb3QgJiYgIWJfaXNfcm9vdCkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIGlmICghYV9pc19yb290ICYmIGJfaXNfcm9vdCkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG5cbiAgICAvKiBOZXh0IGFsbCB0cmFuc2l0aW9uIGNvbW1hbmRzICovXG4gICAgaWYgKGNtZGEubW9kZSAhPT0gdW5kZWZpbmVkICYmIGNtZGIubW9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgaWYgKGNtZGIubW9kZSAhPT0gdW5kZWZpbmVkICYmIGNtZGEubW9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cblxuICAgIGlmIChjbWRhLm1vZGUgIT09IHVuZGVmaW5lZCAmJiBjbWRiLm1vZGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoY21kYS5tb2RlIDwgY21kYi5tb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNtZGIubW9kZSA8IGNtZGEubW9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY21kYS5jb21tYW5kIDwgY21kYi5jb21tYW5kKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgaWYgKGNtZGIuY29tbWFuZCA8IGNtZGEuY29tbWFuZCkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgaWYgKGNtZGEubWVzc2FnZSA8IGNtZGIubWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIGlmIChjbWRiLm1lc3NhZ2UgPCBjbWRhLm1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIDA7XG59XG5cbi8qKlxuICogQHBhcmFtIHtNb2RlfSBtZGEgXG4gKiBAcGFyYW0ge01vZGV9IG1kYiBcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gbW9kZUVxdWFscyhtZGEsIG1kYikge1xuICAgIGlmIChtZGEgPT09IG1kYikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKG1kYS5uYW1lICE9PSBtZGIubmFtZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChtZGEuY29tbWFuZC5sZW5ndGggIT09IG1kYi5jb21tYW5kLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZvciAodmFyIGlkeCA9IDA7IGlkeCA8IG1kYS5jb21tYW5kLmxlbmd0aDsgaWR4KyspIHtcbiAgICAgICAgbGV0IGNtZGEgPSBtZGEuY29tbWFuZFtpZHhdO1xuICAgICAgICBsZXQgY21kYiA9IG1kYi5jb21tYW5kW2lkeF07XG4gICAgICAgIGlmICghY29tbWFuZEVxdWFscyhjbWRhLCBjbWRiKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7TW9kZX0gbW9kIFxuICogQHJldHVybiB7TW9kZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvcHlNb2RlKG1vZCkge1xuICAgIGlmICghbW9kKSB7XG4gICAgICAgIHJldHVybiBtb2Q7XG4gICAgfVxuICAgIHZhciBuYW0gPSBtb2QubmFtZTtcbiAgICB2YXIgY21kcyA9IG1vZC5jb21tYW5kLm1hcChjb3B5Q29tbWFuZCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogbmFtLFxuICAgICAgICBjb21tYW5kOiBjbWRzXG4gICAgfTtcbn0iXSwic291cmNlUm9vdCI6IiJ9