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
___CSS_LOADER_EXPORT___.push([module.i, "/** Wrapper styling **/\n.commandEditorView {\n  justify-content: space-between;\n}\n\n/** Field table entries **/\n.commandEditorView .fieldRow {\n  margin-left: 10px;\n  margin-right: 10px;\n  margin-bottom: 10px;\n\n  text-align: center;\n  flex-grow: 1;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-content: center;\n}\n\n.commandEditorView .fieldLabel {\n  text-align: center;\n  justify-self: center;\n  align-self: center;\n  height: min-content;\n  font-family: sans-serif;\n  font-weight: bold;\n}\n\n.commandEditorView .fieldEditor {\n  align-self: center;\n  align-items: right;\n  justify-items: center;\n  flex-grow: 1;\n  max-width: 70%;\n  max-height: min-content;\n}\n\n.commandEditorView .fieldEditor input {\n  width: 100%;\n  font-size: 16px;\n}\n\n/** Push down the top row **/\n.commandEditorView .messageRow {\n  margin-top: 10px;\n}\n\n/** Next mode is editting is done via separate list view instead of raw input text;\ntherefore, it needs some extra custom stylings **/\n.commandEditorView .modeEditor {\n  display: flex;\n  flex-direction: row;\n}\n\n.commandEditorView .modeLabel {\n  flex-grow: 1;\n  align-self: center;\n  font-family: sans-serif;\n}\n\n.commandEditorView .modeChangeButton {\n  align-self: center;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-top: 3px;\n  padding-bottom: 3px;\n}\n", "",{"version":3,"sources":["command_editor.css"],"names":[],"mappings":"AAAA,sBAAsB;AACtB;EACE,8BAA8B;AAChC;;AAEA,0BAA0B;AAC1B;EACE,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;;EAEnB,kBAAkB;EAClB,YAAY;;EAEZ,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,oBAAoB;EACpB,kBAAkB;EAClB,mBAAmB;EACnB,uBAAuB;EACvB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,qBAAqB;EACrB,YAAY;EACZ,cAAc;EACd,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,eAAe;AACjB;;AAEA,4BAA4B;AAC5B;EACE,gBAAgB;AAClB;;AAEA;iDACiD;AACjD;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,mBAAmB;EACnB,gBAAgB;EAChB,mBAAmB;AACrB","file":"command_editor.css","sourcesContent":["/** Wrapper styling **/\n.commandEditorView {\n  justify-content: space-between;\n}\n\n/** Field table entries **/\n.commandEditorView .fieldRow {\n  margin-left: 10px;\n  margin-right: 10px;\n  margin-bottom: 10px;\n\n  text-align: center;\n  flex-grow: 1;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-content: center;\n}\n\n.commandEditorView .fieldLabel {\n  text-align: center;\n  justify-self: center;\n  align-self: center;\n  height: min-content;\n  font-family: sans-serif;\n  font-weight: bold;\n}\n\n.commandEditorView .fieldEditor {\n  align-self: center;\n  align-items: right;\n  justify-items: center;\n  flex-grow: 1;\n  max-width: 70%;\n  max-height: min-content;\n}\n\n.commandEditorView .fieldEditor input {\n  width: 100%;\n  font-size: 16px;\n}\n\n/** Push down the top row **/\n.commandEditorView .messageRow {\n  margin-top: 10px;\n}\n\n/** Next mode is editting is done via separate list view instead of raw input text;\ntherefore, it needs some extra custom stylings **/\n.commandEditorView .modeEditor {\n  display: flex;\n  flex-direction: row;\n}\n\n.commandEditorView .modeLabel {\n  flex-grow: 1;\n  align-self: center;\n  font-family: sans-serif;\n}\n\n.commandEditorView .modeChangeButton {\n  align-self: center;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-top: 3px;\n  padding-bottom: 3px;\n}\n"]}]);
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
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"mode") : depth0)) != null ? lookupProperty(stack1,"length") : stack1),{"name":"if","hash":{"includeZero":false},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":25,"column":12},"end":{"line":33,"column":19}}})) != null ? stack1 : "")
    + "        </div>\n        <button class=\"modeChangeButton divButton\">\n            Edit\n        </button>\n    </div>\n</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            "
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"mode") : depth0), depth0))
    + "\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"mode") : depth0)) != null ? lookupProperty(stack1,"length") : stack1),{"name":"if","hash":{"includeZero":true},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":28,"column":12},"end":{"line":32,"column":19}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    return "            [DEFAULT]\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "            [END]\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(__webpack_require__(/*! ../finishRow/finishButton.handlebars */ "./src/components/finishRow/finishButton.handlebars"),depth0,{"name":"../finishRow/finishButton","hash":{"text":"Save","ident":"saveButton"},"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(__webpack_require__(/*! ../finishRow/finishButton.handlebars */ "./src/components/finishRow/finishButton.handlebars"),depth0,{"name":"../finishRow/finishButton","hash":{"text":"Cancel","ident":"cancelButton"},"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(__webpack_require__(/*! ../viewWrapper/title.handlebars */ "./src/components/viewWrapper/title.handlebars"),depth0,{"name":"../viewWrapper/title","hash":{"title":""},"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(__webpack_require__(/*! ../viewWrapper/content.handlebars */ "./src/components/viewWrapper/content.handlebars"),depth0,{"name":"../viewWrapper/content","fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(__webpack_require__(/*! ../finishRow/finishRow.handlebars */ "./src/components/finishRow/finishRow.handlebars"),depth0,{"name":"../finishRow/finishRow","fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
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
/* harmony import */ var _viewWrapper_viewWrapper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../viewWrapper/viewWrapper.css */ "./src/components/viewWrapper/viewWrapper.css");
/* harmony import */ var _viewWrapper_viewWrapper_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_viewWrapper_viewWrapper_css__WEBPACK_IMPORTED_MODULE_4__);






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
        this.elm.classList.add('viewWrapper');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tYW5kRWRpdG9yVmlldy9jb21tYW5kX2VkaXRvci5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbWFuZEVkaXRvclZpZXcvY29tbWFuZF9lZGl0b3IuY3NzPzY1MTciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbWFuZEVkaXRvclZpZXcvY29tbWFuZF9lZGl0b3IuaGFuZGxlYmFycyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tYW5kRWRpdG9yVmlldy9jb21tYW5kX2VkaXRvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQytGO0FBQy9GLDhCQUE4QixtRkFBMkI7QUFDekQ7QUFDQSw4QkFBOEIsUUFBUyxnREFBZ0QsbUNBQW1DLEdBQUcsK0RBQStELHNCQUFzQix1QkFBdUIsd0JBQXdCLHlCQUF5QixpQkFBaUIsb0JBQW9CLHdCQUF3QixtQ0FBbUMsMEJBQTBCLEdBQUcsb0NBQW9DLHVCQUF1Qix5QkFBeUIsdUJBQXVCLHdCQUF3Qiw0QkFBNEIsc0JBQXNCLEdBQUcscUNBQXFDLHVCQUF1Qix1QkFBdUIsMEJBQTBCLGlCQUFpQixtQkFBbUIsNEJBQTRCLEdBQUcsMkNBQTJDLGdCQUFnQixvQkFBb0IsR0FBRyxtRUFBbUUscUJBQXFCLEdBQUcsdUZBQXVGLHNGQUFzRixrQkFBa0Isd0JBQXdCLEdBQUcsbUNBQW1DLGlCQUFpQix1QkFBdUIsNEJBQTRCLEdBQUcsMENBQTBDLHVCQUF1Qix1QkFBdUIsd0JBQXdCLHFCQUFxQix3QkFBd0IsR0FBRyxTQUFTLGdGQUFnRixNQUFNLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLGNBQWMsYUFBYSxZQUFZLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsbUdBQW1HLG1DQUFtQyxHQUFHLCtEQUErRCxzQkFBc0IsdUJBQXVCLHdCQUF3Qix5QkFBeUIsaUJBQWlCLG9CQUFvQix3QkFBd0IsbUNBQW1DLDBCQUEwQixHQUFHLG9DQUFvQyx1QkFBdUIseUJBQXlCLHVCQUF1Qix3QkFBd0IsNEJBQTRCLHNCQUFzQixHQUFHLHFDQUFxQyx1QkFBdUIsdUJBQXVCLDBCQUEwQixpQkFBaUIsbUJBQW1CLDRCQUE0QixHQUFHLDJDQUEyQyxnQkFBZ0Isb0JBQW9CLEdBQUcsbUVBQW1FLHFCQUFxQixHQUFHLHVGQUF1RixzRkFBc0Ysa0JBQWtCLHdCQUF3QixHQUFHLG1DQUFtQyxpQkFBaUIsdUJBQXVCLDRCQUE0QixHQUFHLDBDQUEwQyx1QkFBdUIsdUJBQXVCLHdCQUF3QixxQkFBcUIsd0JBQXdCLEdBQUcsS0FBSztBQUNoOEc7QUFDZSxzRkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7O0FDTnZDLFVBQVUsbUJBQU8sQ0FBQyx5SkFBOEU7QUFDaEcsMEJBQTBCLG1CQUFPLENBQUMsdUtBQXFFOztBQUV2Rzs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQzs7Ozs7Ozs7Ozs7O0FDbEJBLGlCQUFpQixtQkFBTyxDQUFDLHlGQUE2QztBQUN0RSx5QkFBeUIsdURBQXVEO0FBQ2hGLGlFQUFpRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlHQUF5Ryw2SEFBNkgsb0JBQW9CLG9CQUFvQiwrRkFBK0YsU0FBUyxzQkFBc0IsUUFBUSx3QkFBd0I7QUFDNWE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEdBQTRHLDZIQUE2SCxvQkFBb0IsbUJBQW1CLCtGQUErRixTQUFTLHNCQUFzQixRQUFRLHdCQUF3QjtBQUM5YSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7O0FBRUEsNENBQTRDLG1CQUFPLENBQUMsZ0dBQXNDLFVBQVUsMkNBQTJDLG1DQUFtQyxxRkFBcUY7QUFDdlEseUNBQXlDLG1CQUFPLENBQUMsZ0dBQXNDLFVBQVUsMkNBQTJDLHVDQUF1QyxxRkFBcUY7QUFDeFEsQ0FBQztBQUNEOztBQUVBLDRDQUE0QyxtQkFBTyxDQUFDLHNGQUFpQyxVQUFVLHNDQUFzQyxXQUFXLHFGQUFxRjtBQUNyTyx5Q0FBeUMsbUJBQU8sQ0FBQywwRkFBbUMsVUFBVSxnTEFBZ0w7QUFDOVE7QUFDQSx5Q0FBeUMsbUJBQU8sQ0FBQywwRkFBbUMsVUFBVSxnTEFBZ0w7QUFDOVEsQ0FBQyxrQ0FBa0MsRTs7Ozs7Ozs7Ozs7OztBQ3JEbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1EO0FBQ3JCO0FBQ007QUFDQTtBQUNJOztBQUV4QztBQUNBLGFBQWEsa0NBQWtDO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsUUFBUTtBQUNuQixhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxRQUFRO0FBQ25CLGFBQWE7QUFDYjs7OztBQUlBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIseUJBQXlCO0FBQ3pCLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSw4QkFBOEIsd0tBQTZFO0FBQzNHO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLHFDQUFxQztBQUNyQzs7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsOEJBQThCLHdLQUE2RTtBQUMzRztBQUNBO0FBQ0Esa0NBQWtDLG9KQUFzRjtBQUN4SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkIsaUVBQVE7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6ImNvbW1hbmRlZGl0b3ItbW9kZWVkaXRvci0xLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qKiBXcmFwcGVyIHN0eWxpbmcgKiovXFxuLmNvbW1hbmRFZGl0b3JWaWV3IHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLyoqIEZpZWxkIHRhYmxlIGVudHJpZXMgKiovXFxuLmNvbW1hbmRFZGl0b3JWaWV3IC5maWVsZFJvdyB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmbGV4LWdyb3c6IDE7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNvbW1hbmRFZGl0b3JWaWV3IC5maWVsZExhYmVsIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jb21tYW5kRWRpdG9yVmlldyAuZmllbGRFZGl0b3Ige1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IHJpZ2h0O1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgZmxleC1ncm93OiAxO1xcbiAgbWF4LXdpZHRoOiA3MCU7XFxuICBtYXgtaGVpZ2h0OiBtaW4tY29udGVudDtcXG59XFxuXFxuLmNvbW1hbmRFZGl0b3JWaWV3IC5maWVsZEVkaXRvciBpbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLyoqIFB1c2ggZG93biB0aGUgdG9wIHJvdyAqKi9cXG4uY29tbWFuZEVkaXRvclZpZXcgLm1lc3NhZ2VSb3cge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLyoqIE5leHQgbW9kZSBpcyBlZGl0dGluZyBpcyBkb25lIHZpYSBzZXBhcmF0ZSBsaXN0IHZpZXcgaW5zdGVhZCBvZiByYXcgaW5wdXQgdGV4dDtcXG50aGVyZWZvcmUsIGl0IG5lZWRzIHNvbWUgZXh0cmEgY3VzdG9tIHN0eWxpbmdzICoqL1xcbi5jb21tYW5kRWRpdG9yVmlldyAubW9kZUVkaXRvciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLmNvbW1hbmRFZGl0b3JWaWV3IC5tb2RlTGFiZWwge1xcbiAgZmxleC1ncm93OiAxO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbi5jb21tYW5kRWRpdG9yVmlldyAubW9kZUNoYW5nZUJ1dHRvbiB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgcGFkZGluZy10b3A6IDNweDtcXG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcImNvbW1hbmRfZWRpdG9yLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxzQkFBc0I7QUFDdEI7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUEsMEJBQTBCO0FBQzFCO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7O0VBRW5CLGtCQUFrQjtFQUNsQixZQUFZOztFQUVaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGNBQWM7RUFDZCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQSw0QkFBNEI7QUFDNUI7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7aURBQ2lEO0FBQ2pEO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQlwiLFwiZmlsZVwiOlwiY29tbWFuZF9lZGl0b3IuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qKiBXcmFwcGVyIHN0eWxpbmcgKiovXFxuLmNvbW1hbmRFZGl0b3JWaWV3IHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLyoqIEZpZWxkIHRhYmxlIGVudHJpZXMgKiovXFxuLmNvbW1hbmRFZGl0b3JWaWV3IC5maWVsZFJvdyB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmbGV4LWdyb3c6IDE7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNvbW1hbmRFZGl0b3JWaWV3IC5maWVsZExhYmVsIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jb21tYW5kRWRpdG9yVmlldyAuZmllbGRFZGl0b3Ige1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IHJpZ2h0O1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgZmxleC1ncm93OiAxO1xcbiAgbWF4LXdpZHRoOiA3MCU7XFxuICBtYXgtaGVpZ2h0OiBtaW4tY29udGVudDtcXG59XFxuXFxuLmNvbW1hbmRFZGl0b3JWaWV3IC5maWVsZEVkaXRvciBpbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLyoqIFB1c2ggZG93biB0aGUgdG9wIHJvdyAqKi9cXG4uY29tbWFuZEVkaXRvclZpZXcgLm1lc3NhZ2VSb3cge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLyoqIE5leHQgbW9kZSBpcyBlZGl0dGluZyBpcyBkb25lIHZpYSBzZXBhcmF0ZSBsaXN0IHZpZXcgaW5zdGVhZCBvZiByYXcgaW5wdXQgdGV4dDtcXG50aGVyZWZvcmUsIGl0IG5lZWRzIHNvbWUgZXh0cmEgY3VzdG9tIHN0eWxpbmdzICoqL1xcbi5jb21tYW5kRWRpdG9yVmlldyAubW9kZUVkaXRvciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLmNvbW1hbmRFZGl0b3JWaWV3IC5tb2RlTGFiZWwge1xcbiAgZmxleC1ncm93OiAxO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbi5jb21tYW5kRWRpdG9yVmlldyAubW9kZUNoYW5nZUJ1dHRvbiB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgcGFkZGluZy10b3A6IDNweDtcXG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XFxufVxcblwiXX1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbW1hbmRfZWRpdG9yLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvcnVudGltZS5qc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMSwgYWxpYXMxPWNvbnRhaW5lci5sYW1iZGEsIGFsaWFzMj1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbiwgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuIFwiPGRpdiBjbGFzcz1cXFwiZmllbGRSb3cgbWVzc2FnZVJvd1xcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkTGFiZWwgbWVzc2FnZUxhYmVsXFxcIj5cXG4gICAgICAgIE1lc3NhZ2U6XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZEVkaXRvciBtZXNzYWdlRWRpdG9yXFxcIj5cXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiB2YWx1ZT1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwibWVzc2FnZVwiKSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCI+PC9pbnB1dD5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XFxuPGRpdiBjbGFzcz1cXFwiZmllbGRSb3cgZXhlY1Jvd1xcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkTGFiZWwgZXhlY0xhYmVsXFxcIj5cXG4gICAgICAgIENvbW1hbmQ6XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZEVkaXRvciBleGVjRWRpdG9yXFxcIj5cXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiB2YWx1ZT1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiY29tbWFuZFwiKSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCI+PC9pbnB1dD5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XFxuPGRpdiBjbGFzcz1cXFwiZmllbGRSb3cgbW9kZVJvd1xcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkTGFiZWwgbW9kZUxhYmVsXFxcIj5cXG4gICAgICAgIE5leHQgTW9kZTpcXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkRWRpdG9yIG1vZGVFZGl0b3JcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kZUxhYmVsXFxcIj5cXG5cIlxuICAgICsgKChzdGFjazEgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiaWZcIikuY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwibW9kZVwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShzdGFjazEsXCJsZW5ndGhcIikgOiBzdGFjazEpLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e1wiaW5jbHVkZVplcm9cIjpmYWxzZX0sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDIsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5wcm9ncmFtKDQsIGRhdGEsIDApLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoyNSxcImNvbHVtblwiOjEyfSxcImVuZFwiOntcImxpbmVcIjozMyxcImNvbHVtblwiOjE5fX19KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJtb2RlQ2hhbmdlQnV0dG9uIGRpdkJ1dHRvblxcXCI+XFxuICAgICAgICAgICAgRWRpdFxcbiAgICAgICAgPC9idXR0b24+XFxuICAgIDwvZGl2PlxcbjwvZGl2PlxcblwiO1xufSxcIjJcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gXCIgICAgICAgICAgICBcIlxuICAgICsgY29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24oY29udGFpbmVyLmxhbWJkYSgoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJtb2RlXCIpIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxuXCI7XG59LFwiNFwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMSwgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuICgoc3RhY2sxID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImlmXCIpLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcIm1vZGVcIikgOiBkZXB0aDApKSAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoc3RhY2sxLFwibGVuZ3RoXCIpIDogc3RhY2sxKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOntcImluY2x1ZGVaZXJvXCI6dHJ1ZX0sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDUsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5wcm9ncmFtKDcsIGRhdGEsIDApLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoyOCxcImNvbHVtblwiOjEyfSxcImVuZFwiOntcImxpbmVcIjozMixcImNvbHVtblwiOjE5fX19KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpO1xufSxcIjVcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHJldHVybiBcIiAgICAgICAgICAgIFtERUZBVUxUXVxcblwiO1xufSxcIjdcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHJldHVybiBcIiAgICAgICAgICAgIFtFTkRdXFxuXCI7XG59LFwiOVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMTtcblxuICByZXR1cm4gKChzdGFjazEgPSBjb250YWluZXIuaW52b2tlUGFydGlhbChyZXF1aXJlKFwiLi4vZmluaXNoUm93L2ZpbmlzaEJ1dHRvbi5oYW5kbGViYXJzXCIpLGRlcHRoMCx7XCJuYW1lXCI6XCIuLi9maW5pc2hSb3cvZmluaXNoQnV0dG9uXCIsXCJoYXNoXCI6e1widGV4dFwiOlwiU2F2ZVwiLFwiaWRlbnRcIjpcInNhdmVCdXR0b25cIn0sXCJkYXRhXCI6ZGF0YSxcImhlbHBlcnNcIjpoZWxwZXJzLFwicGFydGlhbHNcIjpwYXJ0aWFscyxcImRlY29yYXRvcnNcIjpjb250YWluZXIuZGVjb3JhdG9yc30pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArICgoc3RhY2sxID0gY29udGFpbmVyLmludm9rZVBhcnRpYWwocmVxdWlyZShcIi4uL2ZpbmlzaFJvdy9maW5pc2hCdXR0b24uaGFuZGxlYmFyc1wiKSxkZXB0aDAse1wibmFtZVwiOlwiLi4vZmluaXNoUm93L2ZpbmlzaEJ1dHRvblwiLFwiaGFzaFwiOntcInRleHRcIjpcIkNhbmNlbFwiLFwiaWRlbnRcIjpcImNhbmNlbEJ1dHRvblwifSxcImRhdGFcIjpkYXRhLFwiaGVscGVyc1wiOmhlbHBlcnMsXCJwYXJ0aWFsc1wiOnBhcnRpYWxzLFwiZGVjb3JhdG9yc1wiOmNvbnRhaW5lci5kZWNvcmF0b3JzfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKTtcbn0sXCJjb21waWxlclwiOls4LFwiPj0gNC4zLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxO1xuXG4gIHJldHVybiAoKHN0YWNrMSA9IGNvbnRhaW5lci5pbnZva2VQYXJ0aWFsKHJlcXVpcmUoXCIuLi92aWV3V3JhcHBlci90aXRsZS5oYW5kbGViYXJzXCIpLGRlcHRoMCx7XCJuYW1lXCI6XCIuLi92aWV3V3JhcHBlci90aXRsZVwiLFwiaGFzaFwiOntcInRpdGxlXCI6XCJcIn0sXCJkYXRhXCI6ZGF0YSxcImhlbHBlcnNcIjpoZWxwZXJzLFwicGFydGlhbHNcIjpwYXJ0aWFscyxcImRlY29yYXRvcnNcIjpjb250YWluZXIuZGVjb3JhdG9yc30pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArICgoc3RhY2sxID0gY29udGFpbmVyLmludm9rZVBhcnRpYWwocmVxdWlyZShcIi4uL3ZpZXdXcmFwcGVyL2NvbnRlbnQuaGFuZGxlYmFyc1wiKSxkZXB0aDAse1wibmFtZVwiOlwiLi4vdmlld1dyYXBwZXIvY29udGVudFwiLFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhLFwiaGVscGVyc1wiOmhlbHBlcnMsXCJwYXJ0aWFsc1wiOnBhcnRpYWxzLFwiZGVjb3JhdG9yc1wiOmNvbnRhaW5lci5kZWNvcmF0b3JzfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCJcXG5cIlxuICAgICsgKChzdGFjazEgPSBjb250YWluZXIuaW52b2tlUGFydGlhbChyZXF1aXJlKFwiLi4vZmluaXNoUm93L2ZpbmlzaFJvdy5oYW5kbGViYXJzXCIpLGRlcHRoMCx7XCJuYW1lXCI6XCIuLi9maW5pc2hSb3cvZmluaXNoUm93XCIsXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDksIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGEsXCJoZWxwZXJzXCI6aGVscGVycyxcInBhcnRpYWxzXCI6cGFydGlhbHMsXCJkZWNvcmF0b3JzXCI6Y29udGFpbmVyLmRlY29yYXRvcnN9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpO1xufSxcInVzZVBhcnRpYWxcIjp0cnVlLFwidXNlRGF0YVwiOnRydWV9KTsiLCJpbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9jb21tYW5kX2VkaXRvci5oYW5kbGViYXJzJztcbmltcG9ydCAnLi9jb21tYW5kX2VkaXRvci5jc3MnO1xuaW1wb3J0ICcuLi9kaXZCdXR0b24vZGl2QnV0dG9uLmNzcyc7XG5pbXBvcnQgJy4uL2ZpbmlzaFJvdy9maW5pc2hSb3cuY3NzJztcbmltcG9ydCAnLi4vdmlld1dyYXBwZXIvdmlld1dyYXBwZXIuY3NzJztcblxuLyoqIFxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vLi4vbW9kZWxkYXRhJykuQ29tbWFuZH0gQ29tbWFuZFxuICogXG4gKi9cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyZW50TW9kZVxuICogQHBhcmFtIHtDb21tYW5kfSBjbWQgXG4gKiBAcGFyYW0ge251bWJlcn0gaWR4XG4gKiBAcmV0dXJucyBDb21tYW5kRWRpdG9yVmlld1xuICovXG5leHBvcnQgZnVuY3Rpb24gbWFrZUVkaXRvcihwYXJlbnRNb2RlLCBpZHgsIGNtZCkge1xuICAgIHJldHVybiBuZXcgQ29tbWFuZEVkaXRvclZpZXcocGFyZW50TW9kZSwgaWR4LCBjbWQpO1xufVxuXG4vKipcbiAqIEBjYWxsYmFjayBFZGl0TW9kZUNhbGxiYWNrXG4gKiBAcGFyYW0ge3N0cmluZ30gbW9kZW5hbWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBpZHggXG4gKiBAcGFyYW0ge0NvbW1hbmR9IGNtZCBcbiAqL1xuLyoqXG4gKiBAY2FsbGJhY2sgU2F2ZUNhbGxiYWNrIFxuICogQHBhcmFtIHtzdHJpbmd9IHBhcmVudE1vZGUgXG4gKiBAcGFyYW0ge251bWJlcn0gaWR4IFxuICogQHBhcmFtIHtDb21tYW5kfSBjbWQgXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBDYW5jZWxDYWxsYmFjayBcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJlbnRNb2RlIFxuICogQHBhcmFtIHtudW1iZXJ9IGlkeCBcbiAqIEBwYXJhbSB7Q29tbWFuZH0gY21kIFxuICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gKi9cblxuXG5cbi8qKlxuICogQGNsYXNzIENvbW1hbmRFZGl0b3JWaWV3IFxuICogQHByb3BlcnR5IGVsbSB7SFRNTEVsZW1lbnR9XG4gKiBAcHJvcGVydHkgcGFyZW50TW9kZSB7c3RyaW5nfVxuICogQHByb3BlcnR5IGlkeCB7bnVtYmVyfVxuICogQHByb3BlcnR5IGNtZCB7Q29tbWFuZH1cbiAqL1xuY2xhc3MgQ29tbWFuZEVkaXRvclZpZXcge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwcnRNZCBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5keCBcbiAgICAgKiBAcGFyYW0ge0NvbW1hbmR9IGNvbW1kIFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHBydE1kLCBpbmR4LCBjb21tZCkge1xuICAgICAgICB0aGlzLnBhcmVudE1vZGUgPSBwcnRNZDtcbiAgICAgICAgdGhpcy5pZHggPSBpbmR4O1xuICAgICAgICB0aGlzLmNtZCA9IGNvbW1kO1xuICAgICAgICB0aGlzLmVsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmVsbS5jbGFzc0xpc3QuYWRkKCdjb21tYW5kRWRpdG9yVmlldycpO1xuICAgICAgICB0aGlzLmVsbS5jbGFzc0xpc3QuYWRkKCd2aWV3V3JhcHBlcicpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7U2F2ZUNhbGxiYWNrfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5vbnNhdmUgPSBhc3luYyBmdW5jdGlvbiAocGFyZW50TW9kZSwgaWR4LCBjbWQpIHtcbiAgICAgICAgICAgIGNvbnN0IG1vZCA9IGF3YWl0IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIm1vZGVsZGF0YS1jb21tYW5kZWRpdG9yLTFcIiAqLyAnLi4vLi4vbW9kZWxkYXRhJyk7XG4gICAgICAgICAgICBhd2FpdCBtb2Quc2V0Q29tbWFuZChwYXJlbnRNb2RlLCBpZHgsIGNtZCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtDYW5jZWxDYWxsYmFja31cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMub25jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHt9KTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge0VkaXRNb2RlQ2FsbGJhY2sgfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5vbmVkaXRtb2RlID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgbW9kID0gYXdhaXQgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwibW9kZWxkYXRhLWNvbW1hbmRlZGl0b3ItMlwiICovICcuLi8uLi9tb2RlbGRhdGEnKTtcbiAgICAgICAgICAgIGxldCBtb2RlbmFtZXMgPSBhd2FpdCBtb2QuZ2V0TW9kZU5hbWVzKCk7XG4gICAgICAgICAgICBtb2RlbmFtZXMucHVzaCgnW0VORF0nKTtcbiAgICAgICAgICAgIGNvbnN0IHZpZXdtb2QgPSBhd2FpdCBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJtb2Rldmlldy1jb21tYW5kZWRpdG9yLTFcIiAqLyBcIi4uL21vZGVMaXN0Vmlldy9tb2RlX2xpc3RcIik7XG4gICAgICAgICAgICBsZXQgbnZpZXcgPSB2aWV3bW9kLm1ha2VMaXN0KG1vZGVuYW1lcywgdHJ1ZSk7XG4gICAgICAgICAgICBjb25zdCBwcmV2U2VsZiA9IHRoaXM7XG4gICAgICAgICAgICBudmlldy5vbmNsaWNrID0gKG1vZGVuYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYobW9kZW5hbWUgPT09ICdbRU5EXScpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJldlNlbGYuY21kLm1vZGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwcmV2U2VsZi5jbWQubW9kZSA9IG1vZGVuYW1lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcmV2U2VsZi5yZWxvYWRWaWV3KCk7XG4gICAgICAgICAgICAgICAgbnZpZXcuZWxtLnJlcGxhY2VXaXRoKHByZXZTZWxmLmVsbSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbnZpZXcub25jYW5jZWwgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbnZpZXcuZWxtLnJlcGxhY2VXaXRoKHByZXZTZWxmLmVsbSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5lbG0ucmVwbGFjZVdpdGgobnZpZXcuZWxtKTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmVsbS5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgKGV2dCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2dC5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICAgICAgICAgIHRoaXMub25zYXZlKHRoaXMucGFyZW50TW9kZSwgdGhpcy5pZHgsIHRoaXMuY21kKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucmVsb2FkVmlldygpO1xuICAgIH1cblxuICAgIHJlbG9hZFZpZXcoKSB7XG4gICAgICAgIHRoaXMuZWxtLmlubmVySFRNTCA9IHRlbXBsYXRlKHRoaXMuY21kKTtcbiAgICAgICAgdGhpcy5lbG0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWVzc2FnZUVkaXRvcicpWzBdLm9uaW5wdXQgPSAoZXZ0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNtZC5tZXNzYWdlID0gZXZ0LnRhcmdldC52YWx1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5lbG0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZXhlY0VkaXRvcicpWzBdLm9uaW5wdXQgPSAoZXZ0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNtZC5jb21tYW5kID0gZXZ0LnRhcmdldC52YWx1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5lbG0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2F2ZUJ1dHRvbicpWzBdLm9uY2xpY2sgPSAoKSA9PiB0aGlzLm9uc2F2ZSh0aGlzLnBhcmVudE1vZGUsIHRoaXMuaWR4LCB0aGlzLmNtZCk7XG4gICAgICAgIHRoaXMuZWxtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NhbmNlbEJ1dHRvbicpWzBdLm9uY2xpY2sgPSAoKSA9PiB0aGlzLm9uY2FuY2VsKHRoaXMucGFyZW50TW9kZSwgdGhpcy5pZHgsIHRoaXMuY21kKTtcbiAgICAgICAgdGhpcy5lbG0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbW9kZUNoYW5nZUJ1dHRvbicpWzBdLm9uY2xpY2sgPSAoKSA9PiB0aGlzLm9uZWRpdG1vZGUodGhpcy5wYXJlbnRNb2RlLCB0aGlzLmlkeCwgdGhpcy5jbWQpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9