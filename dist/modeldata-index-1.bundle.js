(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modeldata-index-1"],{

/***/ "./src/modeldata.js":
/*!**************************!*\
  !*** ./src/modeldata.js ***!
  \**************************/
/*! exports provided: getData, loadData, getModeNames, getRootMode, getMode, addMode, getCommand, setCommand, copyCommand, commandEquals, compareCommand, modeEquals, copyMode */
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
        if(!prevmd) {
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
    retvl.add({name : "", command : []});
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
    if(commandEquals(cmda, cmdb)) {
        return 0;
    }
    let a_is_root = !cmda.message || cmda.message.length === 0;
    let b_is_root = !cmdb.message || cmdb.message.length === 0;

    /* First is the default command */
    if(a_is_root && !b_is_root) {
        return -1;
    }
    if(!a_is_root && b_is_root) {
        return 1;
    }

    /* Next all transition commands */
    if(cmda.mode !== undefined && cmdb.mode === undefined) {
        return -1;
    }
    if(cmdb.mode !== undefined && cmda.mode === undefined) {
        return 1;
    }

    if(cmda.mode !== undefined && cmdb.mode !== undefined) {
        if(cmda.mode < cmdb.mode) {
            return -1;
        }
        if (cmdb.mode < cmda.mode) {
            return 1;
        }
    }

    if(cmda.command < cmdb.command) {
        return -1;
    }
    if(cmdb.command < cmda.command) {
        return 1;
    }
    if(cmda.message < cmdb.message) {
        return -1;
    }
    if(cmdb.message < cmda.message) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxkYXRhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCOztBQUVBLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsY0FBYyxVQUFVO0FBQ3hCOztBQUVBO0FBQ0EsY0FBYyx5REFBeUQ7QUFDaEU7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWE7QUFDYjtBQUNPO0FBQ1A7QUFDQTtBQUNBLHFCQUFxQixzQkFBc0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw4QkFBOEI7QUFDbkQ7QUFDQTtBQUNBLDZCQUE2QiwrQkFBK0I7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLGNBQWMseURBQXlEO0FBQ3ZFO0FBQ0Esc0JBQXNCLG1NQUF3RTtBQUM5RixpQ0FBaUMsK0JBQStCO0FBQ2hFLGVBQWUsd0JBQXdCO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWE7QUFDYjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYTtBQUNiO0FBQ087QUFDUDtBQUNBO0FBQ0EsdUJBQXVCLDhCQUE4QjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYTtBQUNiO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxRQUFRO0FBQ25CLGFBQWE7QUFDYjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsK0JBQStCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWE7QUFDYjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLGFBQWE7QUFDYjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsYUFBYTtBQUNiO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWE7QUFDYjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBCQUEwQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFlBQVk7QUFDWjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJtb2RlbGRhdGEtaW5kZXgtMS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKiBAdHlwZWRlZiB7T2JqZWN0fSBDb21tYW5kIFxuICogQHByb3BlcnR5IHtzdHJpbmd9IG1lc3NhZ2UgXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW2NvbW1hbmRdXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW21vZGVdXG4gKi9cblxuLyoqIEB0eXBlZGVmIHtPYmplY3R9IE1vZGUgXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbmFtZSBcbiAqIEBwcm9wZXJ0eSB7Q29tbWFuZFtdfSBjb21tYW5kXG4gKi9cblxudmFyIGRhdGFfcHJvbWlzZTtcbi8qKiBAcmV0dXJucyB7UHJvbWlzZTwgaW1wb3J0KCd2aXMtZGF0YS9wZWVyJykuRGF0YVNldDxNb2RlLCBcIm5hbWVcIj4+IH0gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhKCkge1xuICAgIGlmICghZGF0YV9wcm9taXNlKSB7XG4gICAgICAgIGRhdGFfcHJvbWlzZSA9IGdldERhdGFJbm5lcigpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YV9wcm9taXNlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7TW9kZVtdfSBuZXdkYXRhIFxuICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkRGF0YShuZXdkYXRhKSB7XG4gICAgbGV0IGRhdGFzdG9yZSA9IGF3YWl0IGdldERhdGEoKTtcbiAgICB2YXIgbmV3Um9vdCA9IHVuZGVmaW5lZDtcbiAgICBmb3IgKHZhciBpZHggPSAwOyBpZHggPCBuZXdkYXRhLmxlbmd0aDsgaWR4KyspIHtcbiAgICAgICAgbGV0IGN1cm1kID0gbmV3ZGF0YVtpZHhdO1xuICAgICAgICBpZiAoY3VybWQubmFtZSA9PT0gXCJcIikge1xuICAgICAgICAgICAgaWYgKG5ld1Jvb3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdkYXRhLnNwbGljZShpZHgsIDEpO1xuICAgICAgICAgICAgaWR4IC09IDE7XG4gICAgICAgICAgICBuZXdSb290ID0gY3VybWQ7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcHJldm1kID0gZGF0YXN0b3JlLmdldChjdXJtZC5uYW1lKTtcbiAgICAgICAgaWYoIXByZXZtZCkge1xuICAgICAgICAgICAgY3VybWQuY29tbWFuZC5zb3J0KGNvbXBhcmVDb21tYW5kKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwcmV2bWQgJiYgIW1vZGVFcXVhbHMoY3VybWQsIHByZXZtZCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAobmV3Um9vdCkge1xuICAgICAgICBsZXQgcHJldlJvb3QgPSBhd2FpdCBnZXRSb290TW9kZSgpO1xuICAgICAgICBmb3IgKGlkeCA9IDA7IGlkeCA8IG5ld1Jvb3QuY29tbWFuZC5sZW5ndGg7IGlkeCsrKSB7XG4gICAgICAgICAgICBsZXQgbmV3Q21kID0gbmV3Um9vdC5jb21tYW5kW2lkeF07XG4gICAgICAgICAgICB2YXIgYWxyZWFkeUV4aXN0cyA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yICh2YXIgamR4ID0gMDsgamR4IDwgcHJldlJvb3QuY29tbWFuZC5sZW5ndGg7IGpkeCsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHByZXZDbWQgPSBwcmV2Um9vdC5jb21tYW5kW2pkeF07XG4gICAgICAgICAgICAgICAgaWYgKGNvbW1hbmRFcXVhbHMocHJldkNtZCwgbmV3Q21kKSkge1xuICAgICAgICAgICAgICAgICAgICBhbHJlYWR5RXhpc3RzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChwcmV2Q21kLm1lc3NhZ2UudHJpbSgpLnRvTG93ZXJDYXNlKCkgPT09IG5ld0NtZC5tZXNzYWdlLnRyaW0oKS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWFscmVhZHlFeGlzdHMpIHtcbiAgICAgICAgICAgICAgICBwcmV2Um9vdC5jb21tYW5kLnB1c2gobmV3Q21kKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwcmV2Um9vdC5jb21tYW5kLnNvcnQoY29tcGFyZUNvbW1hbmQpO1xuICAgICAgICBkYXRhc3RvcmUudXBkYXRlT25seShwcmV2Um9vdCk7XG4gICAgfVxuICAgIGRhdGFzdG9yZS5hZGQobmV3ZGF0YSk7XG4gICAgZGF0YXN0b3JlLmZsdXNoKCk7XG59XG5cblxuLyoqIEByZXR1cm5zIHtQcm9taXNlPCBpbXBvcnQoJ3Zpcy1kYXRhL3BlZXInKS5EYXRhU2V0PE1vZGUsIFwibmFtZVwiPj4gfSAqL1xuYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YUlubmVyKCkge1xuICAgIGNvbnN0IHZpcyA9IGF3YWl0IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInZpc2RhdGFkZXAtbW9kZWxkYXRhLTFcIiAqLyAndmlzLWRhdGEvcGVlcicpO1xuICAgIGxldCByZXR2bCA9IG5ldyB2aXMuRGF0YVNldCh7IGZpZWxkSWQ6IFwibmFtZVwiLCBxdWV1ZTogdHJ1ZSB9KTtcbiAgICByZXR2bC5hZGQoe25hbWUgOiBcIlwiLCBjb21tYW5kIDogW119KTtcbiAgICByZXR2bC5mbHVzaCgpO1xuICAgIHJldHVybiByZXR2bDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1vZGVOYW1lcygpIHtcbiAgICBsZXQgZGF0YXN0b3JlID0gYXdhaXQgZ2V0RGF0YSgpO1xuICAgIHJldHVybiBkYXRhc3RvcmUuZ2V0SWRzKCk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IG1vZGVuYW1lIFxuICogQHJldHVybnMge1Byb21pc2U8TW9kZT59XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSb290TW9kZSgpIHtcbiAgICB2YXIgcmV0dmwgPSBhd2FpdCBnZXRNb2RlKFwiXCIpO1xuICAgIGlmIChyZXR2bCkge1xuICAgICAgICByZXR1cm4gcmV0dmw7XG4gICAgfVxuICAgIGF3YWl0IGFkZE1vZGUoXCJcIik7XG4gICAgcmV0dXJuIGF3YWl0IGdldE1vZGUoXCJcIik7XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IG1vZGVuYW1lIFxuICogQHJldHVybnMge1Byb21pc2U8TW9kZSB8IHVuZGVmaW5lZD59XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRNb2RlKG1vZGVuYW1lKSB7XG4gICAgbGV0IGRhdGEgPSBhd2FpdCBnZXREYXRhKCk7XG4gICAgbGV0IHJhd19yZXR2bCA9IGRhdGEuZ2V0KG1vZGVuYW1lKTtcbiAgICBpZiAocmF3X3JldHZsKSB7XG4gICAgICAgIHJldHVybiBjb3B5TW9kZShyYXdfcmV0dmwpO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBtb2RlbmFtZSBcbiAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkTW9kZShtb2RlbmFtZSkge1xuICAgIGxldCBkYXRhc3RvcmUgPSBhd2FpdCBnZXREYXRhKCk7XG4gICAgdHJ5IHtcbiAgICAgICAgZGF0YXN0b3JlLmFkZCh7IG5hbWU6IG1vZGVuYW1lLCBjb21tYW5kOiBbXSB9KTtcbiAgICAgICAgZGF0YXN0b3JlLmZsdXNoKCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjYXRjaCB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHBhcmVudE1vZGUgXG4gKiBAcGFyYW0ge251bWJlcn0gaWR4IFxuICogQHJldHVybnMge1Byb21pc2U8Q29tbWFuZCB8IHVuZGVmaW5lZD59XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb21tYW5kKHBhcmVudE1vZGUsIGlkeCkge1xuICAgIGxldCBtb2RlID0gYXdhaXQgZ2V0TW9kZShwYXJlbnRNb2RlKTtcbiAgICBpZiAoIW1vZGUgfHwgbW9kZS5jb21tYW5kLmxlbmd0aCA8PSBpZHgpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgbGV0IHJldHZsID0gbW9kZS5jb21tYW5kW2lkeF07XG4gICAgcmV0dXJuIGNvcHlDb21tYW5kKHJldHZsKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyZW50TW9kZSBcbiAqIEBwYXJhbSB7bnVtYmVyfSBpZHggXG4gKiBAcGFyYW0ge0NvbW1hbmR9IGNtZCBcbiAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2V0Q29tbWFuZChwYXJlbnRNb2RlLCBpZHgsIGNtZCkge1xuICAgIGxldCBwcmV2ZGF0YSA9IGF3YWl0IGdldE1vZGUocGFyZW50TW9kZSk7XG4gICAgaWYgKCFwcmV2ZGF0YSB8fCBwcmV2ZGF0YS5jb21tYW5kLmxlbmd0aCA8IGlkeCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZvciAodmFyIGpkeCA9IDA7IGpkeCA8IHByZXZkYXRhLmNvbW1hbmQubGVuZ3RoOyBqZHgrKykge1xuICAgICAgICBsZXQgY3VyY21kID0gcHJldmRhdGEuY29tbWFuZFtqZHhdO1xuICAgICAgICBpZiAoY29tbWFuZEVxdWFscyhjdXJjbWQsIGNtZCkpIHtcbiAgICAgICAgICAgIHJldHVybiBqZHggPT09IGlkeDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAocHJldmRhdGEuY29tbWFuZC5sZW5ndGggPT09IGlkeCkge1xuICAgICAgICBwcmV2ZGF0YS5jb21tYW5kLnB1c2goY21kKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHByZXZkYXRhLmNvbW1hbmRbaWR4XSA9IGNtZDtcbiAgICB9XG4gICAgcHJldmRhdGEuY29tbWFuZC5zb3J0KGNvbXBhcmVDb21tYW5kKTtcbiAgICBsZXQgZGF0YXN0b3JlID0gYXdhaXQgZ2V0RGF0YSgpO1xuICAgIGRhdGFzdG9yZS51cGRhdGVPbmx5KHByZXZkYXRhKTtcbiAgICBkYXRhc3RvcmUuZmx1c2goKTtcbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuXG4vKipcbiAqIEBwYXJhbSB7Q29tbWFuZH0gY21kIFxuICogQHJldHVybnMge0NvbW1hbmR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb3B5Q29tbWFuZChjbWQpIHtcbiAgICBpZiAoIWNtZCkge1xuICAgICAgICByZXR1cm4gY21kO1xuICAgIH1cbiAgICB2YXIgbXNnID0gY21kLm1lc3NhZ2U7XG4gICAgdmFyIGV4ZSA9IGNtZC5jb21tYW5kO1xuICAgIHZhciBueHQgPSBjbWQubW9kZTtcbiAgICByZXR1cm4ge1xuICAgICAgICBtZXNzYWdlOiBtc2csXG4gICAgICAgIGNvbW1hbmQ6IGV4ZSxcbiAgICAgICAgbW9kZTogbnh0LFxuICAgIH07XG59XG5cbi8qKlxuICogXG4gKiBAcGFyYW0ge0NvbW1hbmR9IGNtZGEgXG4gKiBAcGFyYW0ge0NvbW1hbmR9IGNtZGIgXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbW1hbmRFcXVhbHMoY21kYSwgY21kYikge1xuICAgIGlmIChjbWRhID09PSBjbWRiKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gY21kYS5tZXNzYWdlID09PSBjbWRiLm1lc3NhZ2VcbiAgICAgICAgJiYgY21kYS5jb21tYW5kID09PSBjbWRiLmNvbW1hbmRcbiAgICAgICAgJiYgY21kYS5tb2RlID09PSBjbWRiLm1vZGU7XG59XG5cbi8qKlxuICogXG4gKiBAcGFyYW0ge0NvbW1hbmR9IGNtZGEgXG4gKiBAcGFyYW0ge0NvbW1hbmR9IGNtZGIgXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyZUNvbW1hbmQoY21kYSwgY21kYikge1xuICAgIGlmKGNvbW1hbmRFcXVhbHMoY21kYSwgY21kYikpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGxldCBhX2lzX3Jvb3QgPSAhY21kYS5tZXNzYWdlIHx8IGNtZGEubWVzc2FnZS5sZW5ndGggPT09IDA7XG4gICAgbGV0IGJfaXNfcm9vdCA9ICFjbWRiLm1lc3NhZ2UgfHwgY21kYi5tZXNzYWdlLmxlbmd0aCA9PT0gMDtcblxuICAgIC8qIEZpcnN0IGlzIHRoZSBkZWZhdWx0IGNvbW1hbmQgKi9cbiAgICBpZihhX2lzX3Jvb3QgJiYgIWJfaXNfcm9vdCkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIGlmKCFhX2lzX3Jvb3QgJiYgYl9pc19yb290KSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cblxuICAgIC8qIE5leHQgYWxsIHRyYW5zaXRpb24gY29tbWFuZHMgKi9cbiAgICBpZihjbWRhLm1vZGUgIT09IHVuZGVmaW5lZCAmJiBjbWRiLm1vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIGlmKGNtZGIubW9kZSAhPT0gdW5kZWZpbmVkICYmIGNtZGEubW9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cblxuICAgIGlmKGNtZGEubW9kZSAhPT0gdW5kZWZpbmVkICYmIGNtZGIubW9kZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmKGNtZGEubW9kZSA8IGNtZGIubW9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjbWRiLm1vZGUgPCBjbWRhLm1vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYoY21kYS5jb21tYW5kIDwgY21kYi5jb21tYW5kKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgaWYoY21kYi5jb21tYW5kIDwgY21kYS5jb21tYW5kKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICBpZihjbWRhLm1lc3NhZ2UgPCBjbWRiLm1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICBpZihjbWRiLm1lc3NhZ2UgPCBjbWRhLm1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIDA7XG59XG5cbi8qKlxuICogQHBhcmFtIHtNb2RlfSBtZGEgXG4gKiBAcGFyYW0ge01vZGV9IG1kYiBcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gbW9kZUVxdWFscyhtZGEsIG1kYikge1xuICAgIGlmIChtZGEgPT09IG1kYikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKG1kYS5uYW1lICE9PSBtZGIubmFtZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChtZGEuY29tbWFuZC5sZW5ndGggIT09IG1kYi5jb21tYW5kLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZvciAodmFyIGlkeCA9IDA7IGlkeCA8IG1kYS5jb21tYW5kLmxlbmd0aDsgaWR4KyspIHtcbiAgICAgICAgbGV0IGNtZGEgPSBtZGEuY29tbWFuZFtpZHhdO1xuICAgICAgICBsZXQgY21kYiA9IG1kYi5jb21tYW5kW2lkeF07XG4gICAgICAgIGlmICghY29tbWFuZEVxdWFscyhjbWRhLCBjbWRiKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7TW9kZX0gbW9kIFxuICogQHJldHVybiB7TW9kZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvcHlNb2RlKG1vZCkge1xuICAgIGlmICghbW9kKSB7XG4gICAgICAgIHJldHVybiBtb2Q7XG4gICAgfVxuICAgIHZhciBuYW0gPSBtb2QubmFtZTtcbiAgICB2YXIgY21kcyA9IG1vZC5jb21tYW5kLm1hcChjb3B5Q29tbWFuZCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogbmFtLFxuICAgICAgICBjb21tYW5kOiBjbWRzXG4gICAgfTtcbn0iXSwic291cmNlUm9vdCI6IiJ9