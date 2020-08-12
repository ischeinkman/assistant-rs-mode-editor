(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dataloading-index-1"],{

/***/ "./src/loading.js":
/*!************************!*\
  !*** ./src/loading.js ***!
  \************************/
/*! exports provided: parse_files, make_toml_data, save_toml */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse_files", function() { return parse_files; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "make_toml_data", function() { return make_toml_data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "save_toml", function() { return save_toml; });


/**
 * 
 * @param {File} file 
 * @returns {Promise<string>}
 */
function read_file(file) {
    let freader = new FileReader();
    return new Promise(function (resolve, reject) {
        freader.onerror = function (err) {
            reject(err);
        };
        freader.onabort = function (err) {
            reject(err);
        };
        freader.onload = function () {
            resolve(freader.result);
        };
        freader.readAsText(file);
    });
}

/**
 * 
 * @param {File[]} fls 
 * @returns {Promise<import('./modeldata').Mode[]>}
 */
async function parse_files(fls) {
    const TOML = await Promise.all(/*! import() | tomldep-loading-1 */[__webpack_require__.e("vendors~tomldep-loading-1"), __webpack_require__.e("tomldep-loading-1")]).then(__webpack_require__.t.bind(null, /*! @iarna/toml */ "./node_modules/@iarna/toml/toml.js", 7));
    let promises = [...fls].map((fl) => read_file(fl).then(TOML.parse));
    const alldata = await Promise.all(promises);
    var rootmode = {
        name: '',
        command: [],
    };
    var modes = [];
    for (var idx = 0; idx < alldata.length; idx++) {
        let cur = alldata[idx];
        let commands = cur['command'] || [];
        let curmodes = cur['mode'] || [];
        for (var jdx = 0; jdx < commands.length; jdx++) {
            rootmode.command.push(commands[jdx]);
        }
        for (jdx = 0; jdx < curmodes.length; jdx++) {
            modes.push(curmodes[jdx]);
        }
    }
    modes.push(rootmode);
    return modes;
}

async function make_toml_data() {
    const TOML = await Promise.all(/*! import() | tomldep-loading-2 */[__webpack_require__.e("vendors~tomldep-loading-1"), __webpack_require__.e("tomldep-loading-1")]).then(__webpack_require__.t.bind(null, /*! @iarna/toml */ "./node_modules/@iarna/toml/toml.js", 7));
    const datamod = await __webpack_require__.e(/*! import() | modeldata-loading-1 */ "modeldata-index-1").then(__webpack_require__.bind(null, /*! ./modeldata */ "./src/modeldata.js"));
    const rootmode = await datamod.getRootMode();
    const command = rootmode.command; 
    const modenames = await datamod.getModeNames();
    const modepromise = modenames.filter(name => !!name).map(name => datamod.getMode(name));
    const mode = await Promise.all(modepromise);
    return TOML.stringify({command : command, mode : mode});
}

async function save_toml() {
    let content = await make_toml_data();
    let wrapped = new Blob([content], {type : "text/plain;charset=utf-8"});
    let downloader = await __webpack_require__.e(/*! import() | filesaverdep-loading-1 */ "filesaverdep-loading-1").then(__webpack_require__.t.bind(null, /*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js", 7));
    downloader.saveAs(wrapped, "assistant.toml");
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbG9hZGluZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7QUFDTztBQUNQLHVCQUF1QixtUEFBaUU7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsc0JBQXNCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix1QkFBdUI7QUFDaEQ7QUFDQTtBQUNBLHFCQUFxQix1QkFBdUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1AsdUJBQXVCLG1QQUFpRTtBQUN4RiwwQkFBMEIsOEpBQWtFO0FBQzVGO0FBQ0EscUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsK0JBQStCO0FBQzFEOztBQUVPO0FBQ1A7QUFDQSx1Q0FBdUMsbUJBQW1CLGVBQWU7QUFDekUsMkJBQTJCLHVNQUFvRTtBQUMvRjtBQUNBLEMiLCJmaWxlIjoiZGF0YWxvYWRpbmctaW5kZXgtMS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLyoqXG4gKiBcbiAqIEBwYXJhbSB7RmlsZX0gZmlsZSBcbiAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59XG4gKi9cbmZ1bmN0aW9uIHJlYWRfZmlsZShmaWxlKSB7XG4gICAgbGV0IGZyZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZyZWFkZXIub25lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICB9O1xuICAgICAgICBmcmVhZGVyLm9uYWJvcnQgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfTtcbiAgICAgICAgZnJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXNvbHZlKGZyZWFkZXIucmVzdWx0KTtcbiAgICAgICAgfTtcbiAgICAgICAgZnJlYWRlci5yZWFkQXNUZXh0KGZpbGUpO1xuICAgIH0pO1xufVxuXG4vKipcbiAqIFxuICogQHBhcmFtIHtGaWxlW119IGZscyBcbiAqIEByZXR1cm5zIHtQcm9taXNlPGltcG9ydCgnLi9tb2RlbGRhdGEnKS5Nb2RlW10+fVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcGFyc2VfZmlsZXMoZmxzKSB7XG4gICAgY29uc3QgVE9NTCA9IGF3YWl0IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInRvbWxkZXAtbG9hZGluZy0xXCIgKi8gJ0BpYXJuYS90b21sJyk7XG4gICAgbGV0IHByb21pc2VzID0gWy4uLmZsc10ubWFwKChmbCkgPT4gcmVhZF9maWxlKGZsKS50aGVuKFRPTUwucGFyc2UpKTtcbiAgICBjb25zdCBhbGxkYXRhID0gYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICAgIHZhciByb290bW9kZSA9IHtcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIGNvbW1hbmQ6IFtdLFxuICAgIH07XG4gICAgdmFyIG1vZGVzID0gW107XG4gICAgZm9yICh2YXIgaWR4ID0gMDsgaWR4IDwgYWxsZGF0YS5sZW5ndGg7IGlkeCsrKSB7XG4gICAgICAgIGxldCBjdXIgPSBhbGxkYXRhW2lkeF07XG4gICAgICAgIGxldCBjb21tYW5kcyA9IGN1clsnY29tbWFuZCddIHx8IFtdO1xuICAgICAgICBsZXQgY3VybW9kZXMgPSBjdXJbJ21vZGUnXSB8fCBbXTtcbiAgICAgICAgZm9yICh2YXIgamR4ID0gMDsgamR4IDwgY29tbWFuZHMubGVuZ3RoOyBqZHgrKykge1xuICAgICAgICAgICAgcm9vdG1vZGUuY29tbWFuZC5wdXNoKGNvbW1hbmRzW2pkeF0pO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoamR4ID0gMDsgamR4IDwgY3VybW9kZXMubGVuZ3RoOyBqZHgrKykge1xuICAgICAgICAgICAgbW9kZXMucHVzaChjdXJtb2Rlc1tqZHhdKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBtb2Rlcy5wdXNoKHJvb3Rtb2RlKTtcbiAgICByZXR1cm4gbW9kZXM7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtYWtlX3RvbWxfZGF0YSgpIHtcbiAgICBjb25zdCBUT01MID0gYXdhaXQgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwidG9tbGRlcC1sb2FkaW5nLTJcIiAqLyAnQGlhcm5hL3RvbWwnKTtcbiAgICBjb25zdCBkYXRhbW9kID0gYXdhaXQgaW1wb3J0KC8qd2VicGFja0NodW5rTmFtZTogXCJtb2RlbGRhdGEtbG9hZGluZy0xXCIgKi8gJy4vbW9kZWxkYXRhJyk7XG4gICAgY29uc3Qgcm9vdG1vZGUgPSBhd2FpdCBkYXRhbW9kLmdldFJvb3RNb2RlKCk7XG4gICAgY29uc3QgY29tbWFuZCA9IHJvb3Rtb2RlLmNvbW1hbmQ7IFxuICAgIGNvbnN0IG1vZGVuYW1lcyA9IGF3YWl0IGRhdGFtb2QuZ2V0TW9kZU5hbWVzKCk7XG4gICAgY29uc3QgbW9kZXByb21pc2UgPSBtb2RlbmFtZXMuZmlsdGVyKG5hbWUgPT4gISFuYW1lKS5tYXAobmFtZSA9PiBkYXRhbW9kLmdldE1vZGUobmFtZSkpO1xuICAgIGNvbnN0IG1vZGUgPSBhd2FpdCBQcm9taXNlLmFsbChtb2RlcHJvbWlzZSk7XG4gICAgcmV0dXJuIFRPTUwuc3RyaW5naWZ5KHtjb21tYW5kIDogY29tbWFuZCwgbW9kZSA6IG1vZGV9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVfdG9tbCgpIHtcbiAgICBsZXQgY29udGVudCA9IGF3YWl0IG1ha2VfdG9tbF9kYXRhKCk7XG4gICAgbGV0IHdyYXBwZWQgPSBuZXcgQmxvYihbY29udGVudF0sIHt0eXBlIDogXCJ0ZXh0L3BsYWluO2NoYXJzZXQ9dXRmLThcIn0pO1xuICAgIGxldCBkb3dubG9hZGVyID0gYXdhaXQgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiZmlsZXNhdmVyZGVwLWxvYWRpbmctMVwiICovJ2ZpbGUtc2F2ZXInKTtcbiAgICBkb3dubG9hZGVyLnNhdmVBcyh3cmFwcGVkLCBcImFzc2lzdGFudC50b21sXCIpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=