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
___CSS_LOADER_EXPORT___.push([module.i, "/** Wrapper styling **/\n.commandEditorView {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  border-radius: 15px;\n\n  background-color: white;\n\n  font-size: 16px;\n  color: black;\n\n  height: 100%;\n}\n\n/** Field table entries **/\n.commandEditorView .fieldRow {\n  margin-left: 10px;\n  margin-right: 10px;\n  margin-bottom: 10px;\n\n  text-align: center;\n  flex-grow: 1;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-content: center;\n}\n\n.commandEditorView .fieldLabel {\n  text-align: center;\n  justify-self: center;\n  align-self: center;\n  height: min-content;\n  font-family: sans-serif;\n  font-weight: bold;\n}\n\n.commandEditorView .fieldEditor {\n  align-self: center;\n  align-items: right;\n  justify-items: center;\n  flex-grow: 1;\n  max-width: 70%;\n  max-height: min-content;\n}\n\n.commandEditorView .fieldEditor input {\n  width: 100%;\n  font-size: 16px;\n}\n\n/** Push down the top row **/\n.commandEditorView .messageRow {\n  margin-top: 10px;\n}\n\n/** Next mode is editting is done via separate list view instead of raw input text;\ntherefore, it needs some extra custom stylings **/\n.commandEditorView .modeEditor {\n  display: flex;\n  flex-direction: row;\n}\n\n.commandEditorView .modeLabel {\n  flex-grow: 1;\n  align-self: center;\n  font-family: sans-serif;\n}\n\n.commandEditorView .modeChangeButton {\n  align-self: center;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-top: 3px;\n  padding-bottom: 3px;\n}", "",{"version":3,"sources":["command_editor.css"],"names":[],"mappings":"AAAA,sBAAsB;AACtB;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;;EAE9B,mBAAmB;;EAEnB,uBAAuB;;EAEvB,eAAe;EACf,YAAY;;EAEZ,YAAY;AACd;;AAEA,0BAA0B;AAC1B;EACE,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;;EAEnB,kBAAkB;EAClB,YAAY;;EAEZ,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,oBAAoB;EACpB,kBAAkB;EAClB,mBAAmB;EACnB,uBAAuB;EACvB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,qBAAqB;EACrB,YAAY;EACZ,cAAc;EACd,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,eAAe;AACjB;;AAEA,4BAA4B;AAC5B;EACE,gBAAgB;AAClB;;AAEA;iDACiD;AACjD;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,mBAAmB;EACnB,gBAAgB;EAChB,mBAAmB;AACrB","file":"command_editor.css","sourcesContent":["/** Wrapper styling **/\n.commandEditorView {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  border-radius: 15px;\n\n  background-color: white;\n\n  font-size: 16px;\n  color: black;\n\n  height: 100%;\n}\n\n/** Field table entries **/\n.commandEditorView .fieldRow {\n  margin-left: 10px;\n  margin-right: 10px;\n  margin-bottom: 10px;\n\n  text-align: center;\n  flex-grow: 1;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-content: center;\n}\n\n.commandEditorView .fieldLabel {\n  text-align: center;\n  justify-self: center;\n  align-self: center;\n  height: min-content;\n  font-family: sans-serif;\n  font-weight: bold;\n}\n\n.commandEditorView .fieldEditor {\n  align-self: center;\n  align-items: right;\n  justify-items: center;\n  flex-grow: 1;\n  max-width: 70%;\n  max-height: min-content;\n}\n\n.commandEditorView .fieldEditor input {\n  width: 100%;\n  font-size: 16px;\n}\n\n/** Push down the top row **/\n.commandEditorView .messageRow {\n  margin-top: 10px;\n}\n\n/** Next mode is editting is done via separate list view instead of raw input text;\ntherefore, it needs some extra custom stylings **/\n.commandEditorView .modeEditor {\n  display: flex;\n  flex-direction: row;\n}\n\n.commandEditorView .modeLabel {\n  flex-grow: 1;\n  align-self: center;\n  font-family: sans-serif;\n}\n\n.commandEditorView .modeChangeButton {\n  align-self: center;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-top: 3px;\n  padding-bottom: 3px;\n}"]}]);
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
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(__webpack_require__(/*! ../finishRow/finishButton.handlebars */ "./src/components/finishRow/finishButton.handlebars"),depth0,{"name":"../finishRow/finishButton","hash":{"text":"Save","ident":"saveButton"},"data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(__webpack_require__(/*! ../finishRow/finishButton.handlebars */ "./src/components/finishRow/finishButton.handlebars"),depth0,{"name":"../finishRow/finishButton","hash":{"text":"Cancel","ident":"cancelButton"},"data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
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
    + "        </div>\n        <button class=\"modeChangeButton divButton\">\n            Edit\n        </button>\n    </div>\n</div>\n"
    + ((stack1 = container.invokePartial(__webpack_require__(/*! ../finishRow/finishRow.handlebars */ "./src/components/finishRow/finishRow.handlebars"),depth0,{"name":"../finishRow/finishRow","fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

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
/* harmony import */ var _finishRow_finishRow_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../finishRow/finishRow.css */ "./src/components/finishRow/finishRow.css");
/* harmony import */ var _finishRow_finishRow_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_finishRow_finishRow_css__WEBPACK_IMPORTED_MODULE_3__);





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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tYW5kRWRpdG9yVmlldy9jb21tYW5kX2VkaXRvci5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbWFuZEVkaXRvclZpZXcvY29tbWFuZF9lZGl0b3IuY3NzPzY1MTciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbWFuZEVkaXRvclZpZXcvY29tbWFuZF9lZGl0b3IuaGFuZGxlYmFycyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tYW5kRWRpdG9yVmlldy9jb21tYW5kX2VkaXRvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQytGO0FBQy9GLDhCQUE4QixtRkFBMkI7QUFDekQ7QUFDQSw4QkFBOEIsUUFBUyxnREFBZ0Qsa0JBQWtCLDJCQUEyQixtQ0FBbUMsMEJBQTBCLDhCQUE4QixzQkFBc0IsaUJBQWlCLG1CQUFtQixHQUFHLCtEQUErRCxzQkFBc0IsdUJBQXVCLHdCQUF3Qix5QkFBeUIsaUJBQWlCLG9CQUFvQix3QkFBd0IsbUNBQW1DLDBCQUEwQixHQUFHLG9DQUFvQyx1QkFBdUIseUJBQXlCLHVCQUF1Qix3QkFBd0IsNEJBQTRCLHNCQUFzQixHQUFHLHFDQUFxQyx1QkFBdUIsdUJBQXVCLDBCQUEwQixpQkFBaUIsbUJBQW1CLDRCQUE0QixHQUFHLDJDQUEyQyxnQkFBZ0Isb0JBQW9CLEdBQUcsbUVBQW1FLHFCQUFxQixHQUFHLHVGQUF1RixzRkFBc0Ysa0JBQWtCLHdCQUF3QixHQUFHLG1DQUFtQyxpQkFBaUIsdUJBQXVCLDRCQUE0QixHQUFHLDBDQUEwQyx1QkFBdUIsdUJBQXVCLHdCQUF3QixxQkFBcUIsd0JBQXdCLEdBQUcsT0FBTyxnRkFBZ0YsTUFBTSxVQUFVLFlBQVksY0FBYyxjQUFjLGNBQWMsV0FBVyxXQUFXLFVBQVUsTUFBTSxZQUFZLE1BQU0sWUFBWSxhQUFhLGNB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QVE7QUFDbkIsYUFBYTtBQUNiOzs7O0FBSUE7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQix5QkFBeUI7QUFDekIsa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSw4QkFBOEIsd0tBQTZFO0FBQzNHO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLHFDQUFxQztBQUNyQzs7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsOEJBQThCLHdLQUE2RTtBQUMzRztBQUNBO0FBQ0Esa0NBQWtDLG9KQUFzRjtBQUN4SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkIsaUVBQVE7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6ImNvbW1hbmRlZGl0b3ItbW9kZWVkaXRvci0xLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qKiBXcmFwcGVyIHN0eWxpbmcgKiovXFxuLmNvbW1hbmRFZGl0b3JWaWV3IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6IGJsYWNrO1xcblxcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4vKiogRmllbGQgdGFibGUgZW50cmllcyAqKi9cXG4uY29tbWFuZEVkaXRvclZpZXcgLmZpZWxkUm93IHtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG5cXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZsZXgtZ3JvdzogMTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY29tbWFuZEVkaXRvclZpZXcgLmZpZWxkTGFiZWwge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNvbW1hbmRFZGl0b3JWaWV3IC5maWVsZEVkaXRvciB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogcmlnaHQ7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBtYXgtd2lkdGg6IDcwJTtcXG4gIG1heC1oZWlnaHQ6IG1pbi1jb250ZW50O1xcbn1cXG5cXG4uY29tbWFuZEVkaXRvclZpZXcgLmZpZWxkRWRpdG9yIGlucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4vKiogUHVzaCBkb3duIHRoZSB0b3Agcm93ICoqL1xcbi5jb21tYW5kRWRpdG9yVmlldyAubWVzc2FnZVJvdyB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4vKiogTmV4dCBtb2RlIGlzIGVkaXR0aW5nIGlzIGRvbmUgdmlhIHNlcGFyYXRlIGxpc3QgdmlldyBpbnN0ZWFkIG9mIHJhdyBpbnB1dCB0ZXh0O1xcbnRoZXJlZm9yZSwgaXQgbmVlZHMgc29tZSBleHRyYSBjdXN0b20gc3R5bGluZ3MgKiovXFxuLmNvbW1hbmRFZGl0b3JWaWV3IC5tb2RlRWRpdG9yIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4uY29tbWFuZEVkaXRvclZpZXcgLm1vZGVMYWJlbCB7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuLmNvbW1hbmRFZGl0b3JWaWV3IC5tb2RlQ2hhbmdlQnV0dG9uIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICBwYWRkaW5nLXRvcDogM3B4O1xcbiAgcGFkZGluZy1ib3R0b206IDNweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiY29tbWFuZF9lZGl0b3IuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHNCQUFzQjtBQUN0QjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCOztFQUU5QixtQkFBbUI7O0VBRW5CLHVCQUF1Qjs7RUFFdkIsZUFBZTtFQUNmLFlBQVk7O0VBRVosWUFBWTtBQUNkOztBQUVBLDBCQUEwQjtBQUMxQjtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1COztFQUVuQixrQkFBa0I7RUFDbEIsWUFBWTs7RUFFWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixjQUFjO0VBQ2QsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUEsNEJBQTRCO0FBQzVCO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO2lEQUNpRDtBQUNqRDtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckJcIixcImZpbGVcIjpcImNvbW1hbmRfZWRpdG9yLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiogV3JhcHBlciBzdHlsaW5nICoqL1xcbi5jb21tYW5kRWRpdG9yVmlldyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiBibGFjaztcXG5cXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLyoqIEZpZWxkIHRhYmxlIGVudHJpZXMgKiovXFxuLmNvbW1hbmRFZGl0b3JWaWV3IC5maWVsZFJvdyB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmbGV4LWdyb3c6IDE7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNvbW1hbmRFZGl0b3JWaWV3IC5maWVsZExhYmVsIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jb21tYW5kRWRpdG9yVmlldyAuZmllbGRFZGl0b3Ige1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IHJpZ2h0O1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgZmxleC1ncm93OiAxO1xcbiAgbWF4LXdpZHRoOiA3MCU7XFxuICBtYXgtaGVpZ2h0OiBtaW4tY29udGVudDtcXG59XFxuXFxuLmNvbW1hbmRFZGl0b3JWaWV3IC5maWVsZEVkaXRvciBpbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLyoqIFB1c2ggZG93biB0aGUgdG9wIHJvdyAqKi9cXG4uY29tbWFuZEVkaXRvclZpZXcgLm1lc3NhZ2VSb3cge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLyoqIE5leHQgbW9kZSBpcyBlZGl0dGluZyBpcyBkb25lIHZpYSBzZXBhcmF0ZSBsaXN0IHZpZXcgaW5zdGVhZCBvZiByYXcgaW5wdXQgdGV4dDtcXG50aGVyZWZvcmUsIGl0IG5lZWRzIHNvbWUgZXh0cmEgY3VzdG9tIHN0eWxpbmdzICoqL1xcbi5jb21tYW5kRWRpdG9yVmlldyAubW9kZUVkaXRvciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLmNvbW1hbmRFZGl0b3JWaWV3IC5tb2RlTGFiZWwge1xcbiAgZmxleC1ncm93OiAxO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbi5jb21tYW5kRWRpdG9yVmlldyAubW9kZUNoYW5nZUJ1dHRvbiB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgcGFkZGluZy10b3A6IDNweDtcXG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XFxufVwiXX1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbW1hbmRfZWRpdG9yLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvcnVudGltZS5qc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIiAgICAgICAgICAgIFwiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbihjb250YWluZXIubGFtYmRhKChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcIm1vZGVcIikgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXG5cIjtcbn0sXCIzXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gKChzdGFjazEgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiaWZcIikuY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwibW9kZVwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShzdGFjazEsXCJsZW5ndGhcIikgOiBzdGFjazEpLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e1wiaW5jbHVkZVplcm9cIjp0cnVlfSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oNCwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLnByb2dyYW0oNiwgZGF0YSwgMCksXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjI2LFwiY29sdW1uXCI6MTJ9LFwiZW5kXCI6e1wibGluZVwiOjMwLFwiY29sdW1uXCI6MTl9fX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIik7XG59LFwiNFwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgcmV0dXJuIFwiICAgICAgICAgICAgW0RFRkFVTFRdXFxuXCI7XG59LFwiNlwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgcmV0dXJuIFwiICAgICAgICAgICAgW0VORF1cXG5cIjtcbn0sXCI4XCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxO1xuXG4gIHJldHVybiAoKHN0YWNrMSA9IGNvbnRhaW5lci5pbnZva2VQYXJ0aWFsKHJlcXVpcmUoXCIuLi9maW5pc2hSb3cvZmluaXNoQnV0dG9uLmhhbmRsZWJhcnNcIiksZGVwdGgwLHtcIm5hbWVcIjpcIi4uL2ZpbmlzaFJvdy9maW5pc2hCdXR0b25cIixcImhhc2hcIjp7XCJ0ZXh0XCI6XCJTYXZlXCIsXCJpZGVudFwiOlwic2F2ZUJ1dHRvblwifSxcImRhdGFcIjpkYXRhLFwiaW5kZW50XCI6XCIgICAgXCIsXCJoZWxwZXJzXCI6aGVscGVycyxcInBhcnRpYWxzXCI6cGFydGlhbHMsXCJkZWNvcmF0b3JzXCI6Y29udGFpbmVyLmRlY29yYXRvcnN9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyAoKHN0YWNrMSA9IGNvbnRhaW5lci5pbnZva2VQYXJ0aWFsKHJlcXVpcmUoXCIuLi9maW5pc2hSb3cvZmluaXNoQnV0dG9uLmhhbmRsZWJhcnNcIiksZGVwdGgwLHtcIm5hbWVcIjpcIi4uL2ZpbmlzaFJvdy9maW5pc2hCdXR0b25cIixcImhhc2hcIjp7XCJ0ZXh0XCI6XCJDYW5jZWxcIixcImlkZW50XCI6XCJjYW5jZWxCdXR0b25cIn0sXCJkYXRhXCI6ZGF0YSxcImluZGVudFwiOlwiICAgIFwiLFwiaGVscGVyc1wiOmhlbHBlcnMsXCJwYXJ0aWFsc1wiOnBhcnRpYWxzLFwiZGVjb3JhdG9yc1wiOmNvbnRhaW5lci5kZWNvcmF0b3JzfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKTtcbn0sXCJjb21waWxlclwiOls4LFwiPj0gNC4zLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBhbGlhczE9Y29udGFpbmVyLmxhbWJkYSwgYWxpYXMyPWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gXCI8ZGl2IGNsYXNzPVxcXCJmaWVsZFJvdyBtZXNzYWdlUm93XFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZmllbGRMYWJlbCBtZXNzYWdlTGFiZWxcXFwiPlxcbiAgICAgICAgTWVzc2FnZTpcXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkRWRpdG9yIG1lc3NhZ2VFZGl0b3JcXFwiPlxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIHZhbHVlPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJtZXNzYWdlXCIpIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIj48L2lucHV0PlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cXG48ZGl2IGNsYXNzPVxcXCJmaWVsZFJvdyBleGVjUm93XFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZmllbGRMYWJlbCBleGVjTGFiZWxcXFwiPlxcbiAgICAgICAgQ29tbWFuZDpcXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkRWRpdG9yIGV4ZWNFZGl0b3JcXFwiPlxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIHZhbHVlPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJjb21tYW5kXCIpIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIj48L2lucHV0PlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cXG48ZGl2IGNsYXNzPVxcXCJmaWVsZFJvdyBtb2RlUm93XFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZmllbGRMYWJlbCBtb2RlTGFiZWxcXFwiPlxcbiAgICAgICAgTmV4dCBNb2RlOlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZmllbGRFZGl0b3IgbW9kZUVkaXRvclxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RlTGFiZWxcXFwiPlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJpZlwiKS5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJtb2RlXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KHN0YWNrMSxcImxlbmd0aFwiKSA6IHN0YWNrMSkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7XCJpbmNsdWRlWmVyb1wiOmZhbHNlfSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMSwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLnByb2dyYW0oMywgZGF0YSwgMCksXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjIzLFwiY29sdW1uXCI6MTJ9LFwiZW5kXCI6e1wibGluZVwiOjMxLFwiY29sdW1uXCI6MTl9fX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcIm1vZGVDaGFuZ2VCdXR0b24gZGl2QnV0dG9uXFxcIj5cXG4gICAgICAgICAgICBFZGl0XFxuICAgICAgICA8L2J1dHRvbj5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XFxuXCJcbiAgICArICgoc3RhY2sxID0gY29udGFpbmVyLmludm9rZVBhcnRpYWwocmVxdWlyZShcIi4uL2ZpbmlzaFJvdy9maW5pc2hSb3cuaGFuZGxlYmFyc1wiKSxkZXB0aDAse1wibmFtZVwiOlwiLi4vZmluaXNoUm93L2ZpbmlzaFJvd1wiLFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSg4LCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhLFwiaGVscGVyc1wiOmhlbHBlcnMsXCJwYXJ0aWFsc1wiOnBhcnRpYWxzLFwiZGVjb3JhdG9yc1wiOmNvbnRhaW5lci5kZWNvcmF0b3JzfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKTtcbn0sXCJ1c2VQYXJ0aWFsXCI6dHJ1ZSxcInVzZURhdGFcIjp0cnVlfSk7IiwiaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vY29tbWFuZF9lZGl0b3IuaGFuZGxlYmFycyc7XG5pbXBvcnQgJy4vY29tbWFuZF9lZGl0b3IuY3NzJztcbmltcG9ydCAnLi4vZGl2QnV0dG9uL2RpdkJ1dHRvbi5jc3MnO1xuaW1wb3J0ICcuLi9maW5pc2hSb3cvZmluaXNoUm93LmNzcyc7XG5cbi8qKiBcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uLy4uL21vZGVsZGF0YScpLkNvbW1hbmR9IENvbW1hbmRcbiAqIFxuICovXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHBhcmVudE1vZGVcbiAqIEBwYXJhbSB7Q29tbWFuZH0gY21kIFxuICogQHBhcmFtIHtudW1iZXJ9IGlkeFxuICogQHJldHVybnMgQ29tbWFuZEVkaXRvclZpZXdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1ha2VFZGl0b3IocGFyZW50TW9kZSwgaWR4LCBjbWQpIHtcbiAgICByZXR1cm4gbmV3IENvbW1hbmRFZGl0b3JWaWV3KHBhcmVudE1vZGUsIGlkeCwgY21kKTtcbn1cblxuLyoqXG4gKiBAY2FsbGJhY2sgRWRpdE1vZGVDYWxsYmFja1xuICogQHBhcmFtIHtzdHJpbmd9IG1vZGVuYW1lXG4gKiBAcGFyYW0ge251bWJlcn0gaWR4IFxuICogQHBhcmFtIHtDb21tYW5kfSBjbWQgXG4gKi9cbi8qKlxuICogQGNhbGxiYWNrIFNhdmVDYWxsYmFjayBcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJlbnRNb2RlIFxuICogQHBhcmFtIHtudW1iZXJ9IGlkeCBcbiAqIEBwYXJhbSB7Q29tbWFuZH0gY21kIFxuICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgQ2FuY2VsQ2FsbGJhY2sgXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyZW50TW9kZSBcbiAqIEBwYXJhbSB7bnVtYmVyfSBpZHggXG4gKiBAcGFyYW0ge0NvbW1hbmR9IGNtZCBcbiAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICovXG5cblxuXG4vKipcbiAqIEBjbGFzcyBDb21tYW5kRWRpdG9yVmlldyBcbiAqIEBwcm9wZXJ0eSBlbG0ge0hUTUxFbGVtZW50fVxuICogQHByb3BlcnR5IHBhcmVudE1vZGUge3N0cmluZ31cbiAqIEBwcm9wZXJ0eSBpZHgge251bWJlcn1cbiAqIEBwcm9wZXJ0eSBjbWQge0NvbW1hbmR9XG4gKi9cbmNsYXNzIENvbW1hbmRFZGl0b3JWaWV3IHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcHJ0TWQgXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZHggXG4gICAgICogQHBhcmFtIHtDb21tYW5kfSBjb21tZCBcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihwcnRNZCwgaW5keCwgY29tbWQpIHtcbiAgICAgICAgdGhpcy5wYXJlbnRNb2RlID0gcHJ0TWQ7XG4gICAgICAgIHRoaXMuaWR4ID0gaW5keDtcbiAgICAgICAgdGhpcy5jbWQgPSBjb21tZDtcbiAgICAgICAgdGhpcy5lbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5lbG0uY2xhc3NMaXN0LmFkZCgnY29tbWFuZEVkaXRvclZpZXcnKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge1NhdmVDYWxsYmFja31cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMub25zYXZlID0gYXN5bmMgZnVuY3Rpb24gKHBhcmVudE1vZGUsIGlkeCwgY21kKSB7XG4gICAgICAgICAgICBjb25zdCBtb2QgPSBhd2FpdCBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJtb2RlbGRhdGEtY29tbWFuZGVkaXRvci0xXCIgKi8gJy4uLy4uL21vZGVsZGF0YScpO1xuICAgICAgICAgICAgYXdhaXQgbW9kLnNldENvbW1hbmQocGFyZW50TW9kZSwgaWR4LCBjbWQpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7Q2FuY2VsQ2FsbGJhY2t9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm9uY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7fSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtFZGl0TW9kZUNhbGxiYWNrIH1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMub25lZGl0bW9kZSA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IG1vZCA9IGF3YWl0IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIm1vZGVsZGF0YS1jb21tYW5kZWRpdG9yLTJcIiAqLyAnLi4vLi4vbW9kZWxkYXRhJyk7XG4gICAgICAgICAgICBsZXQgbW9kZW5hbWVzID0gYXdhaXQgbW9kLmdldE1vZGVOYW1lcygpO1xuICAgICAgICAgICAgbW9kZW5hbWVzLnB1c2goJ1tFTkRdJyk7XG4gICAgICAgICAgICBjb25zdCB2aWV3bW9kID0gYXdhaXQgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwibW9kZXZpZXctY29tbWFuZGVkaXRvci0xXCIgKi8gXCIuLi9tb2RlTGlzdFZpZXcvbW9kZV9saXN0XCIpO1xuICAgICAgICAgICAgbGV0IG52aWV3ID0gdmlld21vZC5tYWtlTGlzdChtb2RlbmFtZXMsIHRydWUpO1xuICAgICAgICAgICAgY29uc3QgcHJldlNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgbnZpZXcub25jbGljayA9IChtb2RlbmFtZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKG1vZGVuYW1lID09PSAnW0VORF0nKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXZTZWxmLmNtZC5tb2RlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcHJldlNlbGYuY21kLm1vZGUgPSBtb2RlbmFtZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJldlNlbGYucmVsb2FkVmlldygpO1xuICAgICAgICAgICAgICAgIG52aWV3LmVsbS5yZXBsYWNlV2l0aChwcmV2U2VsZi5lbG0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG52aWV3Lm9uY2FuY2VsID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIG52aWV3LmVsbS5yZXBsYWNlV2l0aChwcmV2U2VsZi5lbG0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuZWxtLnJlcGxhY2VXaXRoKG52aWV3LmVsbSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5lbG0uYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChldnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldnQua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uc2F2ZSh0aGlzLnBhcmVudE1vZGUsIHRoaXMuaWR4LCB0aGlzLmNtZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJlbG9hZFZpZXcoKTtcbiAgICB9XG5cbiAgICByZWxvYWRWaWV3KCkge1xuICAgICAgICB0aGlzLmVsbS5pbm5lckhUTUwgPSB0ZW1wbGF0ZSh0aGlzLmNtZCk7XG4gICAgICAgIHRoaXMuZWxtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21lc3NhZ2VFZGl0b3InKVswXS5vbmlucHV0ID0gKGV2dCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbWQubWVzc2FnZSA9IGV2dC50YXJnZXQudmFsdWU7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZWxtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2V4ZWNFZGl0b3InKVswXS5vbmlucHV0ID0gKGV2dCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbWQuY29tbWFuZCA9IGV2dC50YXJnZXQudmFsdWU7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZWxtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NhdmVCdXR0b24nKVswXS5vbmNsaWNrID0gKCkgPT4gdGhpcy5vbnNhdmUodGhpcy5wYXJlbnRNb2RlLCB0aGlzLmlkeCwgdGhpcy5jbWQpO1xuICAgICAgICB0aGlzLmVsbS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjYW5jZWxCdXR0b24nKVswXS5vbmNsaWNrID0gKCkgPT4gdGhpcy5vbmNhbmNlbCh0aGlzLnBhcmVudE1vZGUsIHRoaXMuaWR4LCB0aGlzLmNtZCk7XG4gICAgICAgIHRoaXMuZWxtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21vZGVDaGFuZ2VCdXR0b24nKVswXS5vbmNsaWNrID0gKCkgPT4gdGhpcy5vbmVkaXRtb2RlKHRoaXMucGFyZW50TW9kZSwgdGhpcy5pZHgsIHRoaXMuY21kKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==