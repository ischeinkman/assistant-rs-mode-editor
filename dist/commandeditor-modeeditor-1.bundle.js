(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["commandeditor-modeeditor-1"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/commandEditorView/command_editor.css":
/*!***************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/commandEditorView/command_editor.css ***!
  \***************************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/** Wrapper styling **/\n.commandEditorView {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  border-radius: 15px;\n\n  background-color: white;\n\n  font-size: 16px;\n  color: black;\n\n  height: 100%;\n}\n\n/** Field table entries **/\n.commandEditorView .fieldRow {\n  margin-left: 10px;\n  margin-right: 10px;\n  margin-bottom: 10px;\n\n  text-align: center;\n  flex-grow: 1;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-content: center;\n}\n\n.commandEditorView .fieldLabel {\n  text-align: center;\n  justify-self: center;\n  align-self: center;\n  height: min-content;\n  font-family: sans-serif;\n  font-weight: bold;\n}\n\n.commandEditorView .fieldEditor {\n  align-self: center;\n  align-items: right;\n  justify-items: center;\n  flex-grow: 1;\n  max-width: 70%;\n  max-height: min-content;\n}\n\n.commandEditorView .fieldEditor input {\n  width: 100%;\n  font-size: 16px;\n}\n\n/** Push down the top row **/\n.commandEditorView .messageRow {\n  margin-top: 10px;\n}\n\n/** Next mode is editting is done via separate list view instead of raw input text;\ntherefore, it needs some extra custom stylings **/\n.commandEditorView .modeEditor {\n  display: flex;\n  flex-direction: row;\n}\n\n.commandEditorView .modeLabel {\n  flex-grow: 1;\n  align-self: center;\n  font-family: sans-serif;\n}\n\n.commandEditorView .modeChangeButton {\n  align-self: center;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-top: 3px;\n  padding-bottom: 3px;\n}\n\n/** Save/Cancel buttons **/\n.commandEditorView .finishRow {\n  margin-bottom: 30px;\n\n  flex-grow: 2;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-content: center;\n}\n\n.commandEditorView .finishButton {\n  font-size: 20px;\n  height: fit-content;\n  align-self: flex-end;\n}\n\n\n", "",{"version":3,"sources":["command_editor.css"],"names":[],"mappings":"AAAA,sBAAsB;AACtB;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;;EAE9B,mBAAmB;;EAEnB,uBAAuB;;EAEvB,eAAe;EACf,YAAY;;EAEZ,YAAY;AACd;;AAEA,0BAA0B;AAC1B;EACE,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;;EAEnB,kBAAkB;EAClB,YAAY;;EAEZ,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,oBAAoB;EACpB,kBAAkB;EAClB,mBAAmB;EACnB,uBAAuB;EACvB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,qBAAqB;EACrB,YAAY;EACZ,cAAc;EACd,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,eAAe;AACjB;;AAEA,4BAA4B;AAC5B;EACE,gBAAgB;AAClB;;AAEA;iDACiD;AACjD;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,mBAAmB;EACnB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA,0BAA0B;AAC1B;EACE,mBAAmB;;EAEnB,YAAY;;EAEZ,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,qBAAqB;AACvB;;AAEA;EACE,eAAe;EACf,mBAAmB;EACnB,oBAAoB;AACtB","file":"command_editor.css","sourcesContent":["/** Wrapper styling **/\n.commandEditorView {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  border-radius: 15px;\n\n  background-color: white;\n\n  font-size: 16px;\n  color: black;\n\n  height: 100%;\n}\n\n/** Field table entries **/\n.commandEditorView .fieldRow {\n  margin-left: 10px;\n  margin-right: 10px;\n  margin-bottom: 10px;\n\n  text-align: center;\n  flex-grow: 1;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-content: center;\n}\n\n.commandEditorView .fieldLabel {\n  text-align: center;\n  justify-self: center;\n  align-self: center;\n  height: min-content;\n  font-family: sans-serif;\n  font-weight: bold;\n}\n\n.commandEditorView .fieldEditor {\n  align-self: center;\n  align-items: right;\n  justify-items: center;\n  flex-grow: 1;\n  max-width: 70%;\n  max-height: min-content;\n}\n\n.commandEditorView .fieldEditor input {\n  width: 100%;\n  font-size: 16px;\n}\n\n/** Push down the top row **/\n.commandEditorView .messageRow {\n  margin-top: 10px;\n}\n\n/** Next mode is editting is done via separate list view instead of raw input text;\ntherefore, it needs some extra custom stylings **/\n.commandEditorView .modeEditor {\n  display: flex;\n  flex-direction: row;\n}\n\n.commandEditorView .modeLabel {\n  flex-grow: 1;\n  align-self: center;\n  font-family: sans-serif;\n}\n\n.commandEditorView .modeChangeButton {\n  align-self: center;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-top: 3px;\n  padding-bottom: 3px;\n}\n\n/** Save/Cancel buttons **/\n.commandEditorView .finishRow {\n  margin-bottom: 30px;\n\n  flex-grow: 2;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-content: center;\n}\n\n.commandEditorView .finishButton {\n  font-size: 20px;\n  height: fit-content;\n  align-self: flex-end;\n}\n\n\n"]}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/commandEditorView/command_editor.css":
/*!*************************************************************!*\
  !*** ./src/components/commandEditorView/command_editor.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./command_editor.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/commandEditorView/command_editor.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/commandEditorView/command_editor.handlebars":
/*!********************************************************************!*\
  !*** ./src/components/commandEditorView/command_editor.handlebars ***!
  \********************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(/*! ../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            "
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"mode") : depth0), depth0))
    + "\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"mode") : depth0)) != null ? lookupProperty(stack1,"length") : stack1),{"name":"if","hash":{"includeZero":true},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":26,"column":12},"end":{"line":30,"column":19}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    return "            [DEFAULT]\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "            [END]\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"fieldRow messageRow\">\n    <div class=\"fieldLabel messageLabel\">\n        Message:\n    </div>\n    <div class=\"fieldEditor messageEditor\">\n        <input type=\"text\" value=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"message") : depth0), depth0))
    + "\"></input>\n    </div>\n</div>\n<div class=\"fieldRow execRow\">\n    <div class=\"fieldLabel execLabel\">\n        Command:\n    </div>\n    <div class=\"fieldEditor execEditor\">\n        <input type=\"text\" value=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"command") : depth0), depth0))
    + "\"></input>\n    </div>\n</div>\n<div class=\"fieldRow modeRow\">\n    <div class=\"fieldLabel modeLabel\">\n        Next Mode:\n    </div>\n    <div class=\"fieldEditor modeEditor\">\n        <div class=\"modeLabel\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"mode") : depth0)) != null ? lookupProperty(stack1,"length") : stack1),{"name":"if","hash":{"includeZero":false},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":23,"column":12},"end":{"line":31,"column":19}}})) != null ? stack1 : "")
    + "        </div>\n        <button class=\"modeChangeButton divButton\">\n            Edit\n        </button>\n    </div>\n</div>\n<div class=\"finishRow\">\n    <button class=\"divButton finishButton saveButton\">Save</button>\n    <button class=\"divButton finishButton cancelButton\">Cancel</button>\n</div>";
},"useData":true});

/***/ }),

/***/ "./src/components/commandEditorView/command_editor.js":
/*!************************************************************!*\
  !*** ./src/components/commandEditorView/command_editor.js ***!
  \************************************************************/
/*! exports provided: makeEditor */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeEditor", function() { return makeEditor; });
/* harmony import */ var _command_editor_handlebars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./command_editor.handlebars */ "./src/components/commandEditorView/command_editor.handlebars");
/* harmony import */ var _command_editor_handlebars__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_command_editor_handlebars__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _command_editor_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./command_editor.css */ "./src/components/commandEditorView/command_editor.css");
/* harmony import */ var _command_editor_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_command_editor_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _divButton_divButton_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../divButton/divButton.css */ "./src/components/divButton/divButton.css");
/* harmony import */ var _divButton_divButton_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_divButton_divButton_css__WEBPACK_IMPORTED_MODULE_2__);




/** 
 * @typedef {import('../../modeldata').Command} Command
 * 
 */

/**
 * @param {string} parentMode
 * @param {Command} cmd 
 * @param {number} idx
 * @returns CommandEditorView
 */
function makeEditor(parentMode, idx, cmd) {
    return new CommandEditorView(parentMode, idx, cmd);
}

/**
 * @callback EditModeCallback
 * @param {string} modename
 * @param {number} idx 
 * @param {Command} cmd 
 */
/**
 * @callback SaveCallback 
 * @param {string} parentMode 
 * @param {number} idx 
 * @param {Command} cmd 
 * @returns {Promise<void>}
 */

/**
 * @callback CancelCallback 
 * @param {string} parentMode 
 * @param {number} idx 
 * @param {Command} cmd 
 * @returns {Promise<void>}
 */



/**
 * @class CommandEditorView 
 * @property elm {HTMLElement}
 * @property parentMode {string}
 * @property idx {number}
 * @property cmd {Command}
 */
class CommandEditorView {
    /**
     * 
     * @param {string} prtMd 
     * @param {number} indx 
     * @param {Command} commd 
     */
    constructor(prtMd, indx, commd) {
        this.parentMode = prtMd;
        this.idx = indx;
        this.cmd = commd;
        this.elm = document.createElement('div');
        this.elm.classList.add('commandEditorView');

        /**
         * @type {SaveCallback}
         */
        this.onsave = async function (parentMode, idx, cmd) {
            const mod = await __webpack_require__.e(/*! import() | modeldata-commandeditor-1 */ "modeldata-index-1").then(__webpack_require__.bind(null, /*! ../../modeldata */ "./src/modeldata.js"));
            await mod.setCommand(parentMode, idx, cmd);
        };

        /**
         * @type {CancelCallback}
         */
        this.oncancel = function () {
            return Promise.resolve({});
        };

        /**
         * @type {EditModeCallback }
         */
        this.oneditmode = async function () {
            const mod = await __webpack_require__.e(/*! import() | modeldata-commandeditor-2 */ "modeldata-index-1").then(__webpack_require__.bind(null, /*! ../../modeldata */ "./src/modeldata.js"));
            let modenames = await mod.getModeNames();
            modenames.push('[END]');
            const viewmod = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../modeListView/mode_list */ "./src/components/modeListView/mode_list.js"));
            let nview = viewmod.makeList(modenames, true);
            const prevSelf = this;
            nview.onclick = (modename) => {
                if(modename === '[END]') {
                    prevSelf.cmd.mode = undefined;
                }
                else {
                    prevSelf.cmd.mode = modename;
                }
                prevSelf.reloadView();
                nview.elm.replaceWith(prevSelf.elm);
            };
            nview.oncancel = () => {
                nview.elm.replaceWith(prevSelf.elm);
            };
            this.elm.replaceWith(nview.elm);
        };

        this.elm.addEventListener("keypress", (evt) => {
            if (evt.key === "Enter") {
                this.onsave(this.parentMode, this.idx, this.cmd);
            }
        });
        this.reloadView();
    }

    reloadView() {
        this.elm.innerHTML = _command_editor_handlebars__WEBPACK_IMPORTED_MODULE_0___default()(this.cmd);
        this.elm.getElementsByClassName('messageEditor')[0].oninput = (evt) => {
            this.cmd.message = evt.target.value;
        };
        this.elm.getElementsByClassName('execEditor')[0].oninput = (evt) => {
            this.cmd.command = evt.target.value;
        };
        this.elm.getElementsByClassName('saveButton')[0].onclick = () => this.onsave(this.parentMode, this.idx, this.cmd);
        this.elm.getElementsByClassName('cancelButton')[0].onclick = () => this.oncancel(this.parentMode, this.idx, this.cmd);
        this.elm.getElementsByClassName('modeChangeButton')[0].onclick = () => this.oneditmode(this.parentMode, this.idx, this.cmd);
    }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tYW5kRWRpdG9yVmlldy9jb21tYW5kX2VkaXRvci5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbWFuZEVkaXRvclZpZXcvY29tbWFuZF9lZGl0b3IuY3NzPzY1MTciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbWFuZEVkaXRvclZpZXcvY29tbWFuZF9lZGl0b3IuaGFuZGxlYmFycyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tYW5kRWRpdG9yVmlldy9jb21tYW5kX2VkaXRvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQytGO0FBQy9GLDhCQUE4QixtRkFBMkI7QUFDekQ7QUFDQSw4QkFBOEIsUUFBUyxnREFBZ0Qsa0JBQWtCLDJCQUEyQixtQ0FBbUMsMEJBQTBCLDhCQUE4QixzQkFBc0IsaUJBQWlCLG1CQUFtQixHQUFHLCtEQUErRCxzQkFBc0IsdUJBQXVCLHdCQUF3Qix5QkFBeUIsaUJBQWlCLG9CQUFvQix3QkFBd0IsbUNBQW1DLDBCQUEwQixHQUFHLG9DQUFvQyx1QkFBdUIseUJBQXlCLHVCQUF1Qix3QkFBd0IsNEJBQTRCLHNCQUFzQixHQUFHLHFDQUFxQyx1QkFBdUIsdUJBQXVCLDBCQUEwQixpQkFBaUIsbUJBQW1CLDRCQUE0QixHQUFHLDJDQUEyQyxnQkFBZ0Isb0JBQW9CLEdBQUcsbUVBQW1FLHFCQUFxQixHQUFHLHVGQUF1RixzRkFBc0Ysa0JBQWtCLHdCQUF3QixHQUFHLG1DQUFtQyxpQkFBaUIsdUJBQXVCLDRCQUE0QixHQUFHLDBDQUEwQyx1QkFBdUIsdUJBQXVCLHdCQUF3QixxQkFBcUIsd0JBQXdCLEdBQUcsZ0VBQWdFLHdCQUF3QixtQkFBbUIsb0JBQW9CLHdCQUF3QixrQ0FBa0MsMEJBQTBCLEdBQUcsc0NBQXNDLG9CQUFvQix3QkFBd0IseUJBQXlCLEdB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OztBQUVBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsUUFBUTtBQUNuQixhQUFhO0FBQ2I7Ozs7QUFJQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLHlCQUF5QjtBQUN6QixrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLDhCQUE4Qix3S0FBNkU7QUFDM0c7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDOztBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSw4QkFBOEIsd0tBQTZFO0FBQzNHO0FBQ0E7QUFDQSxrQ0FBa0Msb0pBQXNGO0FBQ3hIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBLDZCQUE2QixpRUFBUTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoiY29tbWFuZGVkaXRvci1tb2RlZWRpdG9yLTEuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyoqIFdyYXBwZXIgc3R5bGluZyAqKi9cXG4uY29tbWFuZEVkaXRvclZpZXcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuXFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogYmxhY2s7XFxuXFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi8qKiBGaWVsZCB0YWJsZSBlbnRyaWVzICoqL1xcbi5jb21tYW5kRWRpdG9yVmlldyAuZmllbGRSb3cge1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcblxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZmxleC1ncm93OiAxO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jb21tYW5kRWRpdG9yVmlldyAuZmllbGRMYWJlbCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY29tbWFuZEVkaXRvclZpZXcgLmZpZWxkRWRpdG9yIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiByaWdodDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIG1heC13aWR0aDogNzAlO1xcbiAgbWF4LWhlaWdodDogbWluLWNvbnRlbnQ7XFxufVxcblxcbi5jb21tYW5kRWRpdG9yVmlldyAuZmllbGRFZGl0b3IgaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi8qKiBQdXNoIGRvd24gdGhlIHRvcCByb3cgKiovXFxuLmNvbW1hbmRFZGl0b3JWaWV3IC5tZXNzYWdlUm93IHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi8qKiBOZXh0IG1vZGUgaXMgZWRpdHRpbmcgaXMgZG9uZSB2aWEgc2VwYXJhdGUgbGlzdCB2aWV3IGluc3RlYWQgb2YgcmF3IGlucHV0IHRleHQ7XFxudGhlcmVmb3JlLCBpdCBuZWVkcyBzb21lIGV4dHJhIGN1c3RvbSBzdHlsaW5ncyAqKi9cXG4uY29tbWFuZEVkaXRvclZpZXcgLm1vZGVFZGl0b3Ige1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5jb21tYW5kRWRpdG9yVmlldyAubW9kZUxhYmVsIHtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uY29tbWFuZEVkaXRvclZpZXcgLm1vZGVDaGFuZ2VCdXR0b24ge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gIHBhZGRpbmctdG9wOiAzcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xcbn1cXG5cXG4vKiogU2F2ZS9DYW5jZWwgYnV0dG9ucyAqKi9cXG4uY29tbWFuZEVkaXRvclZpZXcgLmZpbmlzaFJvdyB7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcblxcbiAgZmxleC1ncm93OiAyO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNvbW1hbmRFZGl0b3JWaWV3IC5maW5pc2hCdXR0b24ge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJjb21tYW5kX2VkaXRvci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsc0JBQXNCO0FBQ3RCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7O0VBRTlCLG1CQUFtQjs7RUFFbkIsdUJBQXVCOztFQUV2QixlQUFlO0VBQ2YsWUFBWTs7RUFFWixZQUFZO0FBQ2Q7O0FBRUEsMEJBQTBCO0FBQzFCO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7O0VBRW5CLGtCQUFrQjtFQUNsQixZQUFZOztFQUVaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGNBQWM7RUFDZCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQSw0QkFBNEI7QUFDNUI7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7aURBQ2lEO0FBQ2pEO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQSwwQkFBMEI7QUFDMUI7RUFDRSxtQkFBbUI7O0VBRW5CLFlBQVk7O0VBRVosYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEJcIixcImZpbGVcIjpcImNvbW1hbmRfZWRpdG9yLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiogV3JhcHBlciBzdHlsaW5nICoqL1xcbi5jb21tYW5kRWRpdG9yVmlldyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiBibGFjaztcXG5cXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLyoqIEZpZWxkIHRhYmxlIGVudHJpZXMgKiovXFxuLmNvbW1hbmRFZGl0b3JWaWV3IC5maWVsZFJvdyB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmbGV4LWdyb3c6IDE7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNvbW1hbmRFZGl0b3JWaWV3IC5maWVsZExhYmVsIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jb21tYW5kRWRpdG9yVmlldyAuZmllbGRFZGl0b3Ige1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IHJpZ2h0O1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgZmxleC1ncm93OiAxO1xcbiAgbWF4LXdpZHRoOiA3MCU7XFxuICBtYXgtaGVpZ2h0OiBtaW4tY29udGVudDtcXG59XFxuXFxuLmNvbW1hbmRFZGl0b3JWaWV3IC5maWVsZEVkaXRvciBpbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLyoqIFB1c2ggZG93biB0aGUgdG9wIHJvdyAqKi9cXG4uY29tbWFuZEVkaXRvclZpZXcgLm1lc3NhZ2VSb3cge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLyoqIE5leHQgbW9kZSBpcyBlZGl0dGluZyBpcyBkb25lIHZpYSBzZXBhcmF0ZSBsaXN0IHZpZXcgaW5zdGVhZCBvZiByYXcgaW5wdXQgdGV4dDtcXG50aGVyZWZvcmUsIGl0IG5lZWRzIHNvbWUgZXh0cmEgY3VzdG9tIHN0eWxpbmdzICoqL1xcbi5jb21tYW5kRWRpdG9yVmlldyAubW9kZUVkaXRvciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLmNvbW1hbmRFZGl0b3JWaWV3IC5tb2RlTGFiZWwge1xcbiAgZmxleC1ncm93OiAxO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbi5jb21tYW5kRWRpdG9yVmlldyAubW9kZUNoYW5nZUJ1dHRvbiB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgcGFkZGluZy10b3A6IDNweDtcXG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XFxufVxcblxcbi8qKiBTYXZlL0NhbmNlbCBidXR0b25zICoqL1xcbi5jb21tYW5kRWRpdG9yVmlldyAuZmluaXNoUm93IHtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuXFxuICBmbGV4LWdyb3c6IDI7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY29tbWFuZEVkaXRvclZpZXcgLmZpbmlzaEJ1dHRvbiB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblxcblxcblwiXX1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbW1hbmRfZWRpdG9yLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvcnVudGltZS5qc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIiAgICAgICAgICAgIFwiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbihjb250YWluZXIubGFtYmRhKChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcIm1vZGVcIikgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXG5cIjtcbn0sXCIzXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gKChzdGFjazEgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiaWZcIikuY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwibW9kZVwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShzdGFjazEsXCJsZW5ndGhcIikgOiBzdGFjazEpLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e1wiaW5jbHVkZVplcm9cIjp0cnVlfSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oNCwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLnByb2dyYW0oNiwgZGF0YSwgMCksXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjI2LFwiY29sdW1uXCI6MTJ9LFwiZW5kXCI6e1wibGluZVwiOjMwLFwiY29sdW1uXCI6MTl9fX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIik7XG59LFwiNFwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgcmV0dXJuIFwiICAgICAgICAgICAgW0RFRkFVTFRdXFxuXCI7XG59LFwiNlwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgcmV0dXJuIFwiICAgICAgICAgICAgW0VORF1cXG5cIjtcbn0sXCJjb21waWxlclwiOls4LFwiPj0gNC4zLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBhbGlhczE9Y29udGFpbmVyLmxhbWJkYSwgYWxpYXMyPWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gXCI8ZGl2IGNsYXNzPVxcXCJmaWVsZFJvdyBtZXNzYWdlUm93XFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZmllbGRMYWJlbCBtZXNzYWdlTGFiZWxcXFwiPlxcbiAgICAgICAgTWVzc2FnZTpcXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkRWRpdG9yIG1lc3NhZ2VFZGl0b3JcXFwiPlxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIHZhbHVlPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJtZXNzYWdlXCIpIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIj48L2lucHV0PlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cXG48ZGl2IGNsYXNzPVxcXCJmaWVsZFJvdyBleGVjUm93XFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZmllbGRMYWJlbCBleGVjTGFiZWxcXFwiPlxcbiAgICAgICAgQ29tbWFuZDpcXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkRWRpdG9yIGV4ZWNFZGl0b3JcXFwiPlxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIHZhbHVlPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJjb21tYW5kXCIpIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIj48L2lucHV0PlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cXG48ZGl2IGNsYXNzPVxcXCJmaWVsZFJvdyBtb2RlUm93XFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZmllbGRMYWJlbCBtb2RlTGFiZWxcXFwiPlxcbiAgICAgICAgTmV4dCBNb2RlOlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZmllbGRFZGl0b3IgbW9kZUVkaXRvclxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RlTGFiZWxcXFwiPlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJpZlwiKS5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJtb2RlXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KHN0YWNrMSxcImxlbmd0aFwiKSA6IHN0YWNrMSkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7XCJpbmNsdWRlWmVyb1wiOmZhbHNlfSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMSwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLnByb2dyYW0oMywgZGF0YSwgMCksXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjIzLFwiY29sdW1uXCI6MTJ9LFwiZW5kXCI6e1wibGluZVwiOjMxLFwiY29sdW1uXCI6MTl9fX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcIm1vZGVDaGFuZ2VCdXR0b24gZGl2QnV0dG9uXFxcIj5cXG4gICAgICAgICAgICBFZGl0XFxuICAgICAgICA8L2J1dHRvbj5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XFxuPGRpdiBjbGFzcz1cXFwiZmluaXNoUm93XFxcIj5cXG4gICAgPGJ1dHRvbiBjbGFzcz1cXFwiZGl2QnV0dG9uIGZpbmlzaEJ1dHRvbiBzYXZlQnV0dG9uXFxcIj5TYXZlPC9idXR0b24+XFxuICAgIDxidXR0b24gY2xhc3M9XFxcImRpdkJ1dHRvbiBmaW5pc2hCdXR0b24gY2FuY2VsQnV0dG9uXFxcIj5DYW5jZWw8L2J1dHRvbj5cXG48L2Rpdj5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pOyIsImltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2NvbW1hbmRfZWRpdG9yLmhhbmRsZWJhcnMnO1xuaW1wb3J0ICcuL2NvbW1hbmRfZWRpdG9yLmNzcyc7XG5pbXBvcnQgJy4uL2RpdkJ1dHRvbi9kaXZCdXR0b24uY3NzJztcblxuLyoqIFxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vLi4vbW9kZWxkYXRhJykuQ29tbWFuZH0gQ29tbWFuZFxuICogXG4gKi9cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyZW50TW9kZVxuICogQHBhcmFtIHtDb21tYW5kfSBjbWQgXG4gKiBAcGFyYW0ge251bWJlcn0gaWR4XG4gKiBAcmV0dXJucyBDb21tYW5kRWRpdG9yVmlld1xuICovXG5leHBvcnQgZnVuY3Rpb24gbWFrZUVkaXRvcihwYXJlbnRNb2RlLCBpZHgsIGNtZCkge1xuICAgIHJldHVybiBuZXcgQ29tbWFuZEVkaXRvclZpZXcocGFyZW50TW9kZSwgaWR4LCBjbWQpO1xufVxuXG4vKipcbiAqIEBjYWxsYmFjayBFZGl0TW9kZUNhbGxiYWNrXG4gKiBAcGFyYW0ge3N0cmluZ30gbW9kZW5hbWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBpZHggXG4gKiBAcGFyYW0ge0NvbW1hbmR9IGNtZCBcbiAqL1xuLyoqXG4gKiBAY2FsbGJhY2sgU2F2ZUNhbGxiYWNrIFxuICogQHBhcmFtIHtzdHJpbmd9IHBhcmVudE1vZGUgXG4gKiBAcGFyYW0ge251bWJlcn0gaWR4IFxuICogQHBhcmFtIHtDb21tYW5kfSBjbWQgXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBDYW5jZWxDYWxsYmFjayBcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJlbnRNb2RlIFxuICogQHBhcmFtIHtudW1iZXJ9IGlkeCBcbiAqIEBwYXJhbSB7Q29tbWFuZH0gY21kIFxuICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gKi9cblxuXG5cbi8qKlxuICogQGNsYXNzIENvbW1hbmRFZGl0b3JWaWV3IFxuICogQHByb3BlcnR5IGVsbSB7SFRNTEVsZW1lbnR9XG4gKiBAcHJvcGVydHkgcGFyZW50TW9kZSB7c3RyaW5nfVxuICogQHByb3BlcnR5IGlkeCB7bnVtYmVyfVxuICogQHByb3BlcnR5IGNtZCB7Q29tbWFuZH1cbiAqL1xuY2xhc3MgQ29tbWFuZEVkaXRvclZpZXcge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwcnRNZCBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5keCBcbiAgICAgKiBAcGFyYW0ge0NvbW1hbmR9IGNvbW1kIFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHBydE1kLCBpbmR4LCBjb21tZCkge1xuICAgICAgICB0aGlzLnBhcmVudE1vZGUgPSBwcnRNZDtcbiAgICAgICAgdGhpcy5pZHggPSBpbmR4O1xuICAgICAgICB0aGlzLmNtZCA9IGNvbW1kO1xuICAgICAgICB0aGlzLmVsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmVsbS5jbGFzc0xpc3QuYWRkKCdjb21tYW5kRWRpdG9yVmlldycpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7U2F2ZUNhbGxiYWNrfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5vbnNhdmUgPSBhc3luYyBmdW5jdGlvbiAocGFyZW50TW9kZSwgaWR4LCBjbWQpIHtcbiAgICAgICAgICAgIGNvbnN0IG1vZCA9IGF3YWl0IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIm1vZGVsZGF0YS1jb21tYW5kZWRpdG9yLTFcIiAqLyAnLi4vLi4vbW9kZWxkYXRhJyk7XG4gICAgICAgICAgICBhd2FpdCBtb2Quc2V0Q29tbWFuZChwYXJlbnRNb2RlLCBpZHgsIGNtZCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtDYW5jZWxDYWxsYmFja31cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMub25jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHt9KTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge0VkaXRNb2RlQ2FsbGJhY2sgfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5vbmVkaXRtb2RlID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgbW9kID0gYXdhaXQgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwibW9kZWxkYXRhLWNvbW1hbmRlZGl0b3ItMlwiICovICcuLi8uLi9tb2RlbGRhdGEnKTtcbiAgICAgICAgICAgIGxldCBtb2RlbmFtZXMgPSBhd2FpdCBtb2QuZ2V0TW9kZU5hbWVzKCk7XG4gICAgICAgICAgICBtb2RlbmFtZXMucHVzaCgnW0VORF0nKTtcbiAgICAgICAgICAgIGNvbnN0IHZpZXdtb2QgPSBhd2FpdCBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJtb2Rldmlldy1jb21tYW5kZWRpdG9yLTFcIiAqLyBcIi4uL21vZGVMaXN0Vmlldy9tb2RlX2xpc3RcIik7XG4gICAgICAgICAgICBsZXQgbnZpZXcgPSB2aWV3bW9kLm1ha2VMaXN0KG1vZGVuYW1lcywgdHJ1ZSk7XG4gICAgICAgICAgICBjb25zdCBwcmV2U2VsZiA9IHRoaXM7XG4gICAgICAgICAgICBudmlldy5vbmNsaWNrID0gKG1vZGVuYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYobW9kZW5hbWUgPT09ICdbRU5EXScpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJldlNlbGYuY21kLm1vZGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwcmV2U2VsZi5jbWQubW9kZSA9IG1vZGVuYW1lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcmV2U2VsZi5yZWxvYWRWaWV3KCk7XG4gICAgICAgICAgICAgICAgbnZpZXcuZWxtLnJlcGxhY2VXaXRoKHByZXZTZWxmLmVsbSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbnZpZXcub25jYW5jZWwgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbnZpZXcuZWxtLnJlcGxhY2VXaXRoKHByZXZTZWxmLmVsbSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5lbG0ucmVwbGFjZVdpdGgobnZpZXcuZWxtKTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmVsbS5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgKGV2dCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2dC5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICAgICAgICAgIHRoaXMub25zYXZlKHRoaXMucGFyZW50TW9kZSwgdGhpcy5pZHgsIHRoaXMuY21kKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucmVsb2FkVmlldygpO1xuICAgIH1cblxuICAgIHJlbG9hZFZpZXcoKSB7XG4gICAgICAgIHRoaXMuZWxtLmlubmVySFRNTCA9IHRlbXBsYXRlKHRoaXMuY21kKTtcbiAgICAgICAgdGhpcy5lbG0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWVzc2FnZUVkaXRvcicpWzBdLm9uaW5wdXQgPSAoZXZ0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNtZC5tZXNzYWdlID0gZXZ0LnRhcmdldC52YWx1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5lbG0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZXhlY0VkaXRvcicpWzBdLm9uaW5wdXQgPSAoZXZ0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNtZC5jb21tYW5kID0gZXZ0LnRhcmdldC52YWx1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5lbG0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2F2ZUJ1dHRvbicpWzBdLm9uY2xpY2sgPSAoKSA9PiB0aGlzLm9uc2F2ZSh0aGlzLnBhcmVudE1vZGUsIHRoaXMuaWR4LCB0aGlzLmNtZCk7XG4gICAgICAgIHRoaXMuZWxtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NhbmNlbEJ1dHRvbicpWzBdLm9uY2xpY2sgPSAoKSA9PiB0aGlzLm9uY2FuY2VsKHRoaXMucGFyZW50TW9kZSwgdGhpcy5pZHgsIHRoaXMuY21kKTtcbiAgICAgICAgdGhpcy5lbG0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbW9kZUNoYW5nZUJ1dHRvbicpWzBdLm9uY2xpY2sgPSAoKSA9PiB0aGlzLm9uZWRpdG1vZGUodGhpcy5wYXJlbnRNb2RlLCB0aGlzLmlkeCwgdGhpcy5jbWQpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9