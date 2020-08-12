(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modeeditor-modelist-1"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/modeEditorView/mode_editor.css":
/*!*********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/modeEditorView/mode_editor.css ***!
  \*********************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, ".modeEditorView {\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  font-size: 16px;\n  height: 100%;\n  color: black;\n  border-radius: 15px;\n  font-family: sans-serif;\n}\n\n.modeEditorView .modeName {\n  min-width: 30%;\n  min-height: calc(1em + 10px);\n  margin-top: 0px;\n  align-self: center;\n  text-align: center;\n  padding: 5px;\n  border-bottom: black solid 2px;\n  border-left: black solid 2px;\n  border-right: black solid 2px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n\n.modeEditorView table {\n  padding-right: 10px;\n  padding-left: 10px;\n  width: 100%;\n}\n\n.modeEditorView tbody {\n  overflow-y: scroll;\n}\n\n.modeEditorView th div {\n  width: max-content;\n  border-bottom: black solid 1px;\n}\n\n.modeEditorView td {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  margin-bottom: 10px;\n}\n\n.modeEditorView .commandCell {\n  max-width: 0px;\n}\n\n.modeEditorView .messageCell {\n  width: 20%;\n}\n\n.modeEditorView .execCell {\n  width: 50%;\n  font-family: Monaco, monospace;\n}\n\n.modeEditorView .modeCell {\n  width: 20%;\n}\n\n.modeEditorView .commandEditCol {\n  white-space: nowrap;\n  overflow: visible;\n  width: 10%;\n}\n\n.modeEditorView .commandEditButton {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n\n.modeEditorView .commandAddButton {\n    width : 100%;\n    display: table-cell;\n}\n\n.modeEditorView .commandAddButton  button{\n  width : 100%;\n}\n.modeEditorView .divButton {\n  font-size: 16px;\n}\n\n/** Save/Cancel buttons **/\n.modeEditorView .finishRow {\n  margin-bottom: 30px;\n\n  flex-grow: 2;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-content: center;\n  width: 100%;\n}\n\n.modeEditorView .finishButton {\n  font-size: 20px;\n  height: fit-content;\n  align-self: flex-end;\n}\n\n.modeEditorView .leaveButton {\n  padding-left: 15px;\n  padding-right: 15px;\n  font-size: 24px;\n}\n", "",{"version":3,"sources":["mode_editor.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,eAAe;EACf,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,cAAc;EACd,4BAA4B;EAC5B,eAAe;EACf,kBAAkB;EAClB,kBAAkB;EAClB,YAAY;EACZ,8BAA8B;EAC9B,4BAA4B;EAC5B,6BAA6B;EAC7B,+BAA+B;EAC/B,gCAAgC;AAClC;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,8BAA8B;AAChC;;AAEA;EACE,mBAAmB;EACnB,uBAAuB;EACvB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,UAAU;EACV,8BAA8B;AAChC;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,mBAAmB;EACnB,iBAAiB;EACjB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;IACI,YAAY;IACZ,mBAAmB;AACvB;;AAEA;EACE,YAAY;AACd;AACA;EACE,eAAe;AACjB;;AAEA,0BAA0B;AAC1B;EACE,mBAAmB;;EAEnB,YAAY;;EAEZ,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,qBAAqB;EACrB,WAAW;AACb;;AAEA;EACE,eAAe;EACf,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;AACjB","file":"mode_editor.css","sourcesContent":[".modeEditorView {\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  font-size: 16px;\n  height: 100%;\n  color: black;\n  border-radius: 15px;\n  font-family: sans-serif;\n}\n\n.modeEditorView .modeName {\n  min-width: 30%;\n  min-height: calc(1em + 10px);\n  margin-top: 0px;\n  align-self: center;\n  text-align: center;\n  padding: 5px;\n  border-bottom: black solid 2px;\n  border-left: black solid 2px;\n  border-right: black solid 2px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n\n.modeEditorView table {\n  padding-right: 10px;\n  padding-left: 10px;\n  width: 100%;\n}\n\n.modeEditorView tbody {\n  overflow-y: scroll;\n}\n\n.modeEditorView th div {\n  width: max-content;\n  border-bottom: black solid 1px;\n}\n\n.modeEditorView td {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  margin-bottom: 10px;\n}\n\n.modeEditorView .commandCell {\n  max-width: 0px;\n}\n\n.modeEditorView .messageCell {\n  width: 20%;\n}\n\n.modeEditorView .execCell {\n  width: 50%;\n  font-family: Monaco, monospace;\n}\n\n.modeEditorView .modeCell {\n  width: 20%;\n}\n\n.modeEditorView .commandEditCol {\n  white-space: nowrap;\n  overflow: visible;\n  width: 10%;\n}\n\n.modeEditorView .commandEditButton {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n\n.modeEditorView .commandAddButton {\n    width : 100%;\n    display: table-cell;\n}\n\n.modeEditorView .commandAddButton  button{\n  width : 100%;\n}\n.modeEditorView .divButton {\n  font-size: 16px;\n}\n\n/** Save/Cancel buttons **/\n.modeEditorView .finishRow {\n  margin-bottom: 30px;\n\n  flex-grow: 2;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-content: center;\n  width: 100%;\n}\n\n.modeEditorView .finishButton {\n  font-size: 20px;\n  height: fit-content;\n  align-self: flex-end;\n}\n\n.modeEditorView .leaveButton {\n  padding-left: 15px;\n  padding-right: 15px;\n  font-size: 24px;\n}\n"]}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/modeEditorView/mode_editor.css":
/*!*******************************************************!*\
  !*** ./src/components/modeEditorView/mode_editor.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./mode_editor.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/modeEditorView/mode_editor.css");

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

/***/ "./src/components/modeEditorView/mode_editor.handlebars":
/*!**************************************************************!*\
  !*** ./src/components/modeEditorView/mode_editor.handlebars ***!
  \**************************************************************/
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

  return "<h2 class=\"modeName\">"
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "</h2>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "<h2 class=\"modeName\"> [DEFAULT] </h2>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <tr>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"message") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":34,"column":12},"end":{"line":38,"column":19}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"command") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(12, data, 0),"data":data,"loc":{"start":{"line":40,"column":12},"end":{"line":44,"column":19}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"mode") : depth0)) != null ? lookupProperty(stack1,"length") : stack1),{"name":"if","hash":{"includeZero":false},"fn":container.program(14, data, 0),"inverse":container.program(16, data, 0),"data":data,"loc":{"start":{"line":46,"column":12},"end":{"line":53,"column":19}}})) != null ? stack1 : "")
    + "\n            <td class=\"commandEditButton\">\n                <button class=\"divButton\">Edit</button>\n            </td>\n        </tr>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <td class=\"commandCell messageCell\">"
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"message") : depth0), depth0))
    + "</td>\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "            <td class=\"commandCell messageCell\">[DEFAULT]</td>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <td align=\"center\" class=\"commandCell execCell\">"
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"command") : depth0), depth0))
    + "</td>\n";
},"12":function(container,depth0,helpers,partials,data) {
    return "            <td align=\"center\" class=\"commandCell execCell emptyCell\"> - </td>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <td align=\"right\" class=\"commandCell modeCell\">"
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"mode") : depth0), depth0))
    + "</td>\n            ";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"mode") : depth0)) != null ? lookupProperty(stack1,"length") : stack1),{"name":"if","hash":{"includeZero":true},"fn":container.program(17, data, 0),"inverse":container.program(19, data, 0),"data":data,"loc":{"start":{"line":48,"column":21},"end":{"line":52,"column":19}}})) != null ? stack1 : "");
},"17":function(container,depth0,helpers,partials,data) {
    return "\n            <td align=\"right\" class=\"commandCell modeCell\">[DEFAULT]</td>\n";
},"19":function(container,depth0,helpers,partials,data) {
    return "            <td align=\"right\" class=\"commandCell modeCell emptyCell\"> - </td>\n";
},"21":function(container,depth0,helpers,partials,data) {
    return "    <button class=\"divButton finishButton renameButton\">Rename</button>\n";
},"23":function(container,depth0,helpers,partials,data) {
    return "    <button disabled=\"true\" class=\"divButton finishButton renameButton\">Rename</button>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"name") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":5,"column":7}}})) != null ? stack1 : "")
    + "<table class=\"commandList\">\n    <colgroup>\n        <col class=\"commandCol messageCol\">\n        <col class=\"commandCol execCol\">\n        <col class=\"commandCol modeCol\">\n        <col class=\"commandEditCol\">\n    </colgroup>\n    <thead>\n        <tr>\n            <th align=\"left\" class=\"messageHeader\">\n                <div> Message</div>\n            </th>\n            <th align=\"center\" class=\"execHeader\">\n                <div>\n                    Command\n                </div>\n            </th>\n            <th align=\"right\" class=\"modeHeader\">\n                <div>\n                    Next Mode\n                </div>\n            </th>\n            <th> </th>\n        </tr>\n    </thead>\n    <tbody>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"command") : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":8},"end":{"line":59,"column":17}}})) != null ? stack1 : "")
    + "        <tr colspan=\"3\" span=\"3\" >\n            <td colspan=\"2\"></td>\n            <td colspan=\"2\" class=\"commandEditButton commandAddButton\">\n                <button class=\"divButton\">Add</button>\n            </td>\n\n        </tr>\n    </tbody>\n</table>\n\n<div class=\"finishRow\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"name") : depth0),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.program(23, data, 0),"data":data,"loc":{"start":{"line":71,"column":4},"end":{"line":75,"column":11}}})) != null ? stack1 : "")
    + "    <button class=\"divButton finishButton cancelButton\">Cancel</button>\n</div>";
},"useData":true});

/***/ }),

/***/ "./src/components/modeEditorView/mode_editor.js":
/*!******************************************************!*\
  !*** ./src/components/modeEditorView/mode_editor.js ***!
  \******************************************************/
/*! exports provided: makeEditor */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeEditor", function() { return makeEditor; });
/* harmony import */ var _mode_editor_handlebars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mode_editor.handlebars */ "./src/components/modeEditorView/mode_editor.handlebars");
/* harmony import */ var _mode_editor_handlebars__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mode_editor_handlebars__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mode_editor_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mode_editor.css */ "./src/components/modeEditorView/mode_editor.css");
/* harmony import */ var _mode_editor_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mode_editor_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _divButton_divButton_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../divButton/divButton.css */ "./src/components/divButton/divButton.css");
/* harmony import */ var _divButton_divButton_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_divButton_divButton_css__WEBPACK_IMPORTED_MODULE_2__);




/**
 * @typedef {import('../../modeldata').Command} Command
 * @typedef {import('../../modeldata').Mode} Mode
 *
 */

/**
 * @param {Mode} mode
 * @param {Function} onrename
 * @param {Function} oncancel
 * @param {Function} oneditmode
 * @returns {ModeEditorView}
 */
function makeEditor(mode) {
    return new ModeEditorView(mode);
}

/**
 * @callback EditCommandCallback
 * @param {string} modename
 * @param {number} idx 
 * @param {Command} cmd 
 * @returns {Promise<void>}
 */
/**
 * @callback RenameCallback 
 * @param {Mode} mode
 * @returns {Promise<void>}
 */
/**
 * @callback CancelCallback 
 * @param {Mode} mode
 * @returns {Promise<void>}
 */

/**
 * @class ModeEditorView 
 * @property elm {HTMLElement}
 * @property mode {Mode}
 * @property onrename {RenameCallback}
 * @property oncancel {CancelCallback}
 * @property oneditcommand {EditCommandCallback}
 */
class ModeEditorView {

    /**
     * @param {Mode} md 
     */
    constructor(md) {
        this.mode = md;

        /** @type {RenameCallback} */
        this.onrename = function () { return Promise.resolve({}); };

        /** @type {CancelCallback} */
        this.oncancel = function () { return Promise.resolve({}); };

        /** @type {EditCommandCallback} */
        this.oneditcommand = async function (modename, idx, cmd) {
            let newview = await __webpack_require__.e(/*! import() | commandeditor-modeeditor-1 */ "commandeditor-modeeditor-1").then(__webpack_require__.bind(null, /*! ../commandEditorView/command_editor */ "./src/components/commandEditorView/command_editor.js")).then(mod => mod.makeEditor(modename, idx, cmd));
            const prevSelf = this;
            newview.onsave = async (parentMode, idx, cmd) => {
                let changed = await __webpack_require__.e(/*! import() | modeldata-modeeditor-1 */ "modeldata-index-1").then(__webpack_require__.bind(null, /*! ../../modeldata */ "./src/modeldata.js")).then(mod => mod.setCommand(parentMode, idx, cmd));
                if (changed) {
                    let nmode = await __webpack_require__.e(/*! import() | modeldata-modeeditor-2 */ "modeldata-index-1").then(__webpack_require__.bind(null, /*! ../../modeldata */ "./src/modeldata.js")).then(mod => mod.getMode(prevSelf.mode.name));
                    prevSelf.mode = nmode;
                    prevSelf.reloadView();
                }
                newview.elm.replaceWith(prevSelf.elm);
            };
            newview.oncancel = () => {
                newview.elm.replaceWith(prevSelf.elm);
            };
            this.elm.replaceWith(newview.elm);
        };

        this.onaddcommand = async function (modename, idx) {
            await this.oneditcommand(modename, idx, {message : ""})
        }
        this.elm = document.createElement('div');
        this.elm.classList.add('modeEditorView');
        this.reloadView();
    }

    reloadView() {
        this.elm.innerHTML = _mode_editor_handlebars__WEBPACK_IMPORTED_MODULE_0___default()(this.mode);
        if (this.mode.name) {
            this.elm.getElementsByClassName('renameButton')[0].onclick = () => this.onrename(this.mode);
        }
        this.elm.getElementsByClassName('cancelButton')[0].onclick = () => this.oncancel(this.mode);
        var editButtons = this.elm.getElementsByClassName('commandEditButton');
        for (var idx = 0; idx < this.mode.command.length; idx++) {
            let jdx = idx | 0;
            let btn = editButtons[idx];
            let cmd = this.mode.command[idx];
            btn.onclick = () => this.oneditcommand(this.mode.name, jdx, JSON.parse(JSON.stringify(cmd)));
        }
        var addbutton = this.elm.getElementsByClassName('commandAddButton')[0];
        addbutton.onclick = () => this.onaddcommand(this.mode.name, this.mode.command.length);
    }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2RlRWRpdG9yVmlldy9tb2RlX2VkaXRvci5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9kZUVkaXRvclZpZXcvbW9kZV9lZGl0b3IuY3NzP2EwYjUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9kZUVkaXRvclZpZXcvbW9kZV9lZGl0b3IuaGFuZGxlYmFycyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2RlRWRpdG9yVmlldy9tb2RlX2VkaXRvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQytGO0FBQy9GLDhCQUE4QixtRkFBMkI7QUFDekQ7QUFDQSw4QkFBOEIsUUFBUyxvQkFBb0Isa0JBQWtCLDJCQUEyQiw0QkFBNEIsb0JBQW9CLGlCQUFpQixpQkFBaUIsd0JBQXdCLDRCQUE0QixHQUFHLCtCQUErQixtQkFBbUIsaUNBQWlDLG9CQUFvQix1QkFBdUIsdUJBQXVCLGlCQUFpQixtQ0FBbUMsaUNBQWlDLGtDQUFrQyxvQ0FBb0MscUNBQXFDLEdBQUcsMkJBQTJCLHdCQUF3Qix1QkFBdUIsZ0JBQWdCLEdBQUcsMkJBQTJCLHVCQUF1QixHQUFHLDRCQUE0Qix1QkFBdUIsbUNBQW1DLEdBQUcsd0JBQXdCLHdCQUF3Qiw0QkFBNEIscUJBQXFCLHdCQUF3QixHQUFHLGtDQUFrQyxtQkFBbUIsR0FBRyxrQ0FBa0MsZUFBZSxHQUFHLCtCQUErQixlQUFlLG1DQUFtQyxHQUFHLCtCQUErQixlQUFlLEdBQUcscUNBQXFDLHdCQUF3QixzQkFBc0IsZUFBZSxHQUFHLHdDQUF3QyxrQkFBa0Isd0JBQXdCLDhCQUE4QixHQUFHLHVDQUF1QyxtQkFBbUIsMEJBQTBCLEdBQUcsOENBQThDLGlCQUFpQixHQUFHLDhCQUE4QixvQkFBb0IsR0FBRyw2REFBNkQsd0JBQXdCLG1CQUFtQixvQkFBb0Isd0JBQXdCLGtD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O0FBQ0Esa0JBQWtCO0FBQ2xCLG1CQUFtQjtBQUNuQix1QkFBdUI7QUFDdkIsdUJBQXVCO0FBQ3ZCLDRCQUE0QjtBQUM1QjtBQUNBOztBQUVBO0FBQ0EsZUFBZSxLQUFLO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsZUFBZTtBQUNsQyxxQ0FBcUMsMEJBQTBCLEVBQUU7O0FBRWpFLG1CQUFtQixlQUFlO0FBQ2xDLHFDQUFxQywwQkFBMEIsRUFBRTs7QUFFakUsbUJBQW1CLG9CQUFvQjtBQUN2QztBQUNBLGdDQUFnQyx3T0FBaUc7QUFDakk7QUFDQTtBQUNBLG9DQUFvQyxxS0FBMEU7QUFDOUc7QUFDQSxzQ0FBc0MscUtBQTBFO0FBQ2hIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFELGFBQWE7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZCQUE2Qiw4REFBUTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdDQUFnQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibW9kZWVkaXRvci1tb2RlbGlzdC0xLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5tb2RlRWRpdG9yVmlldyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ubW9kZUVkaXRvclZpZXcgLm1vZGVOYW1lIHtcXG4gIG1pbi13aWR0aDogMzAlO1xcbiAgbWluLWhlaWdodDogY2FsYygxZW0gKyAxMHB4KTtcXG4gIG1hcmdpbi10b3A6IDBweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1ib3R0b206IGJsYWNrIHNvbGlkIDJweDtcXG4gIGJvcmRlci1sZWZ0OiBibGFjayBzb2xpZCAycHg7XFxuICBib3JkZXItcmlnaHQ6IGJsYWNrIHNvbGlkIDJweDtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcXG59XFxuXFxuLm1vZGVFZGl0b3JWaWV3IHRhYmxlIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm1vZGVFZGl0b3JWaWV3IHRib2R5IHtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLm1vZGVFZGl0b3JWaWV3IHRoIGRpdiB7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBib3JkZXItYm90dG9tOiBibGFjayBzb2xpZCAxcHg7XFxufVxcblxcbi5tb2RlRWRpdG9yVmlldyB0ZCB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLm1vZGVFZGl0b3JWaWV3IC5jb21tYW5kQ2VsbCB7XFxuICBtYXgtd2lkdGg6IDBweDtcXG59XFxuXFxuLm1vZGVFZGl0b3JWaWV3IC5tZXNzYWdlQ2VsbCB7XFxuICB3aWR0aDogMjAlO1xcbn1cXG5cXG4ubW9kZUVkaXRvclZpZXcgLmV4ZWNDZWxsIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBmb250LWZhbWlseTogTW9uYWNvLCBtb25vc3BhY2U7XFxufVxcblxcbi5tb2RlRWRpdG9yVmlldyAubW9kZUNlbGwge1xcbiAgd2lkdGg6IDIwJTtcXG59XFxuXFxuLm1vZGVFZGl0b3JWaWV3IC5jb21tYW5kRWRpdENvbCB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICB3aWR0aDogMTAlO1xcbn1cXG5cXG4ubW9kZUVkaXRvclZpZXcgLmNvbW1hbmRFZGl0QnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLm1vZGVFZGl0b3JWaWV3IC5jb21tYW5kQWRkQnV0dG9uIHtcXG4gICAgd2lkdGggOiAxMDAlO1xcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xcbn1cXG5cXG4ubW9kZUVkaXRvclZpZXcgLmNvbW1hbmRBZGRCdXR0b24gIGJ1dHRvbntcXG4gIHdpZHRoIDogMTAwJTtcXG59XFxuLm1vZGVFZGl0b3JWaWV3IC5kaXZCdXR0b24ge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4vKiogU2F2ZS9DYW5jZWwgYnV0dG9ucyAqKi9cXG4ubW9kZUVkaXRvclZpZXcgLmZpbmlzaFJvdyB7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcblxcbiAgZmxleC1ncm93OiAyO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubW9kZUVkaXRvclZpZXcgLmZpbmlzaEJ1dHRvbiB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbi5tb2RlRWRpdG9yVmlldyAubGVhdmVCdXR0b24ge1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgcGFkZGluZy1yaWdodDogMTVweDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wibW9kZV9lZGl0b3IuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCw0QkFBNEI7RUFDNUIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDhCQUE4QjtFQUM5Qiw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLCtCQUErQjtFQUMvQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtFQUNWLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUVBLDBCQUEwQjtBQUMxQjtFQUNFLG1CQUFtQjs7RUFFbkIsWUFBWTs7RUFFWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixxQkFBcUI7RUFDckIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakJcIixcImZpbGVcIjpcIm1vZGVfZWRpdG9yLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubW9kZUVkaXRvclZpZXcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuLm1vZGVFZGl0b3JWaWV3IC5tb2RlTmFtZSB7XFxuICBtaW4td2lkdGg6IDMwJTtcXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMWVtICsgMTBweCk7XFxuICBtYXJnaW4tdG9wOiAwcHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItYm90dG9tOiBibGFjayBzb2xpZCAycHg7XFxuICBib3JkZXItbGVmdDogYmxhY2sgc29saWQgMnB4O1xcbiAgYm9yZGVyLXJpZ2h0OiBibGFjayBzb2xpZCAycHg7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5tb2RlRWRpdG9yVmlldyB0YWJsZSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5tb2RlRWRpdG9yVmlldyB0Ym9keSB7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbi5tb2RlRWRpdG9yVmlldyB0aCBkaXYge1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgYm9yZGVyLWJvdHRvbTogYmxhY2sgc29saWQgMXB4O1xcbn1cXG5cXG4ubW9kZUVkaXRvclZpZXcgdGQge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5tb2RlRWRpdG9yVmlldyAuY29tbWFuZENlbGwge1xcbiAgbWF4LXdpZHRoOiAwcHg7XFxufVxcblxcbi5tb2RlRWRpdG9yVmlldyAubWVzc2FnZUNlbGwge1xcbiAgd2lkdGg6IDIwJTtcXG59XFxuXFxuLm1vZGVFZGl0b3JWaWV3IC5leGVjQ2VsbCB7XFxuICB3aWR0aDogNTAlO1xcbiAgZm9udC1mYW1pbHk6IE1vbmFjbywgbW9ub3NwYWNlO1xcbn1cXG5cXG4ubW9kZUVkaXRvclZpZXcgLm1vZGVDZWxsIHtcXG4gIHdpZHRoOiAyMCU7XFxufVxcblxcbi5tb2RlRWRpdG9yVmlldyAuY29tbWFuZEVkaXRDb2wge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgd2lkdGg6IDEwJTtcXG59XFxuXFxuLm1vZGVFZGl0b3JWaWV3IC5jb21tYW5kRWRpdEJ1dHRvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5tb2RlRWRpdG9yVmlldyAuY29tbWFuZEFkZEJ1dHRvbiB7XFxuICAgIHdpZHRoIDogMTAwJTtcXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcXG59XFxuXFxuLm1vZGVFZGl0b3JWaWV3IC5jb21tYW5kQWRkQnV0dG9uICBidXR0b257XFxuICB3aWR0aCA6IDEwMCU7XFxufVxcbi5tb2RlRWRpdG9yVmlldyAuZGl2QnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLyoqIFNhdmUvQ2FuY2VsIGJ1dHRvbnMgKiovXFxuLm1vZGVFZGl0b3JWaWV3IC5maW5pc2hSb3cge1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG5cXG4gIGZsZXgtZ3JvdzogMjtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm1vZGVFZGl0b3JWaWV3IC5maW5pc2hCdXR0b24ge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4ubW9kZUVkaXRvclZpZXcgLmxlYXZlQnV0dG9uIHtcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcblwiXX1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21vZGVfZWRpdG9yLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvcnVudGltZS5qc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIjxoMiBjbGFzcz1cXFwibW9kZU5hbWVcXFwiPlwiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbihjb250YWluZXIubGFtYmRhKChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcIm5hbWVcIikgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCI8L2gyPlxcblwiO1xufSxcIjNcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHJldHVybiBcIjxoMiBjbGFzcz1cXFwibW9kZU5hbWVcXFwiPiBbREVGQVVMVF0gPC9oMj5cXG5cIjtcbn0sXCI1XCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBhbGlhczE9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuIFwiICAgICAgICA8dHI+XFxuXCJcbiAgICArICgoc3RhY2sxID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImlmXCIpLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcIm1lc3NhZ2VcIikgOiBkZXB0aDApLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDYsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5wcm9ncmFtKDgsIGRhdGEsIDApLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjozNCxcImNvbHVtblwiOjEyfSxcImVuZFwiOntcImxpbmVcIjozOCxcImNvbHVtblwiOjE5fX19KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJpZlwiKS5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJjb21tYW5kXCIpIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxMCwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLnByb2dyYW0oMTIsIGRhdGEsIDApLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjo0MCxcImNvbHVtblwiOjEyfSxcImVuZFwiOntcImxpbmVcIjo0NCxcImNvbHVtblwiOjE5fX19KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJpZlwiKS5jYWxsKGFsaWFzMSwoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcIm1vZGVcIikgOiBkZXB0aDApKSAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoc3RhY2sxLFwibGVuZ3RoXCIpIDogc3RhY2sxKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOntcImluY2x1ZGVaZXJvXCI6ZmFsc2V9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxNCwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLnByb2dyYW0oMTYsIGRhdGEsIDApLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjo0NixcImNvbHVtblwiOjEyfSxcImVuZFwiOntcImxpbmVcIjo1MyxcImNvbHVtblwiOjE5fX19KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIlxcbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwiY29tbWFuZEVkaXRCdXR0b25cXFwiPlxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJkaXZCdXR0b25cXFwiPkVkaXQ8L2J1dHRvbj5cXG4gICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgPC90cj5cXG5cIjtcbn0sXCI2XCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuIFwiICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJjb21tYW5kQ2VsbCBtZXNzYWdlQ2VsbFxcXCI+XCJcbiAgICArIGNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uKGNvbnRhaW5lci5sYW1iZGEoKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwibWVzc2FnZVwiKSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIjwvdGQ+XFxuXCI7XG59LFwiOFwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgcmV0dXJuIFwiICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJjb21tYW5kQ2VsbCBtZXNzYWdlQ2VsbFxcXCI+W0RFRkFVTFRdPC90ZD5cXG5cIjtcbn0sXCIxMFwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIiAgICAgICAgICAgIDx0ZCBhbGlnbj1cXFwiY2VudGVyXFxcIiBjbGFzcz1cXFwiY29tbWFuZENlbGwgZXhlY0NlbGxcXFwiPlwiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbihjb250YWluZXIubGFtYmRhKChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImNvbW1hbmRcIikgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCI8L3RkPlxcblwiO1xufSxcIjEyXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICByZXR1cm4gXCIgICAgICAgICAgICA8dGQgYWxpZ249XFxcImNlbnRlclxcXCIgY2xhc3M9XFxcImNvbW1hbmRDZWxsIGV4ZWNDZWxsIGVtcHR5Q2VsbFxcXCI+IC0gPC90ZD5cXG5cIjtcbn0sXCIxNFwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIiAgICAgICAgICAgIDx0ZCBhbGlnbj1cXFwicmlnaHRcXFwiIGNsYXNzPVxcXCJjb21tYW5kQ2VsbCBtb2RlQ2VsbFxcXCI+XCJcbiAgICArIGNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uKGNvbnRhaW5lci5sYW1iZGEoKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwibW9kZVwiKSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIjwvdGQ+XFxuICAgICAgICAgICAgXCI7XG59LFwiMTZcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazEsIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIiBcIlxuICAgICsgKChzdGFjazEgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiaWZcIikuY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwibW9kZVwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShzdGFjazEsXCJsZW5ndGhcIikgOiBzdGFjazEpLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e1wiaW5jbHVkZVplcm9cIjp0cnVlfSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMTcsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5wcm9ncmFtKDE5LCBkYXRhLCAwKSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6NDgsXCJjb2x1bW5cIjoyMX0sXCJlbmRcIjp7XCJsaW5lXCI6NTIsXCJjb2x1bW5cIjoxOX19fSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKTtcbn0sXCIxN1wiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgcmV0dXJuIFwiXFxuICAgICAgICAgICAgPHRkIGFsaWduPVxcXCJyaWdodFxcXCIgY2xhc3M9XFxcImNvbW1hbmRDZWxsIG1vZGVDZWxsXFxcIj5bREVGQVVMVF08L3RkPlxcblwiO1xufSxcIjE5XCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICByZXR1cm4gXCIgICAgICAgICAgICA8dGQgYWxpZ249XFxcInJpZ2h0XFxcIiBjbGFzcz1cXFwiY29tbWFuZENlbGwgbW9kZUNlbGwgZW1wdHlDZWxsXFxcIj4gLSA8L3RkPlxcblwiO1xufSxcIjIxXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICByZXR1cm4gXCIgICAgPGJ1dHRvbiBjbGFzcz1cXFwiZGl2QnV0dG9uIGZpbmlzaEJ1dHRvbiByZW5hbWVCdXR0b25cXFwiPlJlbmFtZTwvYnV0dG9uPlxcblwiO1xufSxcIjIzXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICByZXR1cm4gXCIgICAgPGJ1dHRvbiBkaXNhYmxlZD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcImRpdkJ1dHRvbiBmaW5pc2hCdXR0b24gcmVuYW1lQnV0dG9uXFxcIj5SZW5hbWU8L2J1dHRvbj5cXG5cIjtcbn0sXCJjb21waWxlclwiOls4LFwiPj0gNC4zLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBhbGlhczE9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuICgoc3RhY2sxID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImlmXCIpLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcIm5hbWVcIikgOiBkZXB0aDApLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5wcm9ncmFtKDMsIGRhdGEsIDApLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxLFwiY29sdW1uXCI6MH0sXCJlbmRcIjp7XCJsaW5lXCI6NSxcImNvbHVtblwiOjd9fX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiPHRhYmxlIGNsYXNzPVxcXCJjb21tYW5kTGlzdFxcXCI+XFxuICAgIDxjb2xncm91cD5cXG4gICAgICAgIDxjb2wgY2xhc3M9XFxcImNvbW1hbmRDb2wgbWVzc2FnZUNvbFxcXCI+XFxuICAgICAgICA8Y29sIGNsYXNzPVxcXCJjb21tYW5kQ29sIGV4ZWNDb2xcXFwiPlxcbiAgICAgICAgPGNvbCBjbGFzcz1cXFwiY29tbWFuZENvbCBtb2RlQ29sXFxcIj5cXG4gICAgICAgIDxjb2wgY2xhc3M9XFxcImNvbW1hbmRFZGl0Q29sXFxcIj5cXG4gICAgPC9jb2xncm91cD5cXG4gICAgPHRoZWFkPlxcbiAgICAgICAgPHRyPlxcbiAgICAgICAgICAgIDx0aCBhbGlnbj1cXFwibGVmdFxcXCIgY2xhc3M9XFxcIm1lc3NhZ2VIZWFkZXJcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2PiBNZXNzYWdlPC9kaXY+XFxuICAgICAgICAgICAgPC90aD5cXG4gICAgICAgICAgICA8dGggYWxpZ249XFxcImNlbnRlclxcXCIgY2xhc3M9XFxcImV4ZWNIZWFkZXJcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgQ29tbWFuZFxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L3RoPlxcbiAgICAgICAgICAgIDx0aCBhbGlnbj1cXFwicmlnaHRcXFwiIGNsYXNzPVxcXCJtb2RlSGVhZGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICAgICAgICAgIE5leHQgTW9kZVxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L3RoPlxcbiAgICAgICAgICAgIDx0aD4gPC90aD5cXG4gICAgICAgIDwvdHI+XFxuICAgIDwvdGhlYWQ+XFxuICAgIDx0Ym9keT5cXG5cIlxuICAgICsgKChzdGFjazEgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiZWFjaFwiKS5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJjb21tYW5kXCIpIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDUsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjozMixcImNvbHVtblwiOjh9LFwiZW5kXCI6e1wibGluZVwiOjU5LFwiY29sdW1uXCI6MTd9fX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiICAgICAgICA8dHIgY29sc3Bhbj1cXFwiM1xcXCIgc3Bhbj1cXFwiM1xcXCIgPlxcbiAgICAgICAgICAgIDx0ZCBjb2xzcGFuPVxcXCIyXFxcIj48L3RkPlxcbiAgICAgICAgICAgIDx0ZCBjb2xzcGFuPVxcXCIyXFxcIiBjbGFzcz1cXFwiY29tbWFuZEVkaXRCdXR0b24gY29tbWFuZEFkZEJ1dHRvblxcXCI+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImRpdkJ1dHRvblxcXCI+QWRkPC9idXR0b24+XFxuICAgICAgICAgICAgPC90ZD5cXG5cXG4gICAgICAgIDwvdHI+XFxuICAgIDwvdGJvZHk+XFxuPC90YWJsZT5cXG5cXG48ZGl2IGNsYXNzPVxcXCJmaW5pc2hSb3dcXFwiPlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJpZlwiKS5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJuYW1lXCIpIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgyMSwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLnByb2dyYW0oMjMsIGRhdGEsIDApLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjo3MSxcImNvbHVtblwiOjR9LFwiZW5kXCI6e1wibGluZVwiOjc1LFwiY29sdW1uXCI6MTF9fX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiICAgIDxidXR0b24gY2xhc3M9XFxcImRpdkJ1dHRvbiBmaW5pc2hCdXR0b24gY2FuY2VsQnV0dG9uXFxcIj5DYW5jZWw8L2J1dHRvbj5cXG48L2Rpdj5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pOyIsImltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL21vZGVfZWRpdG9yLmhhbmRsZWJhcnMnO1xuaW1wb3J0ICcuL21vZGVfZWRpdG9yLmNzcyc7XG5pbXBvcnQgJy4uL2RpdkJ1dHRvbi9kaXZCdXR0b24uY3NzJ1xuXG4vKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uLy4uL21vZGVsZGF0YScpLkNvbW1hbmR9IENvbW1hbmRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uLy4uL21vZGVsZGF0YScpLk1vZGV9IE1vZGVcbiAqXG4gKi9cblxuLyoqXG4gKiBAcGFyYW0ge01vZGV9IG1vZGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IG9ucmVuYW1lXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBvbmNhbmNlbFxuICogQHBhcmFtIHtGdW5jdGlvbn0gb25lZGl0bW9kZVxuICogQHJldHVybnMge01vZGVFZGl0b3JWaWV3fVxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFrZUVkaXRvcihtb2RlKSB7XG4gICAgcmV0dXJuIG5ldyBNb2RlRWRpdG9yVmlldyhtb2RlKTtcbn1cblxuLyoqXG4gKiBAY2FsbGJhY2sgRWRpdENvbW1hbmRDYWxsYmFja1xuICogQHBhcmFtIHtzdHJpbmd9IG1vZGVuYW1lXG4gKiBAcGFyYW0ge251bWJlcn0gaWR4IFxuICogQHBhcmFtIHtDb21tYW5kfSBjbWQgXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAqL1xuLyoqXG4gKiBAY2FsbGJhY2sgUmVuYW1lQ2FsbGJhY2sgXG4gKiBAcGFyYW0ge01vZGV9IG1vZGVcbiAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICovXG4vKipcbiAqIEBjYWxsYmFjayBDYW5jZWxDYWxsYmFjayBcbiAqIEBwYXJhbSB7TW9kZX0gbW9kZVxuICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gKi9cblxuLyoqXG4gKiBAY2xhc3MgTW9kZUVkaXRvclZpZXcgXG4gKiBAcHJvcGVydHkgZWxtIHtIVE1MRWxlbWVudH1cbiAqIEBwcm9wZXJ0eSBtb2RlIHtNb2RlfVxuICogQHByb3BlcnR5IG9ucmVuYW1lIHtSZW5hbWVDYWxsYmFja31cbiAqIEBwcm9wZXJ0eSBvbmNhbmNlbCB7Q2FuY2VsQ2FsbGJhY2t9XG4gKiBAcHJvcGVydHkgb25lZGl0Y29tbWFuZCB7RWRpdENvbW1hbmRDYWxsYmFja31cbiAqL1xuY2xhc3MgTW9kZUVkaXRvclZpZXcge1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtNb2RlfSBtZCBcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihtZCkge1xuICAgICAgICB0aGlzLm1vZGUgPSBtZDtcblxuICAgICAgICAvKiogQHR5cGUge1JlbmFtZUNhbGxiYWNrfSAqL1xuICAgICAgICB0aGlzLm9ucmVuYW1lID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHt9KTsgfTtcblxuICAgICAgICAvKiogQHR5cGUge0NhbmNlbENhbGxiYWNrfSAqL1xuICAgICAgICB0aGlzLm9uY2FuY2VsID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHt9KTsgfTtcblxuICAgICAgICAvKiogQHR5cGUge0VkaXRDb21tYW5kQ2FsbGJhY2t9ICovXG4gICAgICAgIHRoaXMub25lZGl0Y29tbWFuZCA9IGFzeW5jIGZ1bmN0aW9uIChtb2RlbmFtZSwgaWR4LCBjbWQpIHtcbiAgICAgICAgICAgIGxldCBuZXd2aWV3ID0gYXdhaXQgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiY29tbWFuZGVkaXRvci1tb2RlZWRpdG9yLTFcIiAqLycuLi9jb21tYW5kRWRpdG9yVmlldy9jb21tYW5kX2VkaXRvcicpLnRoZW4obW9kID0+IG1vZC5tYWtlRWRpdG9yKG1vZGVuYW1lLCBpZHgsIGNtZCkpO1xuICAgICAgICAgICAgY29uc3QgcHJldlNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgbmV3dmlldy5vbnNhdmUgPSBhc3luYyAocGFyZW50TW9kZSwgaWR4LCBjbWQpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgY2hhbmdlZCA9IGF3YWl0IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIm1vZGVsZGF0YS1tb2RlZWRpdG9yLTFcIiAqLyAnLi4vLi4vbW9kZWxkYXRhJykudGhlbihtb2QgPT4gbW9kLnNldENvbW1hbmQocGFyZW50TW9kZSwgaWR4LCBjbWQpKTtcbiAgICAgICAgICAgICAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbm1vZGUgPSBhd2FpdCBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogJ21vZGVsZGF0YS1tb2RlZWRpdG9yLTInICovICcuLi8uLi9tb2RlbGRhdGEnKS50aGVuKG1vZCA9PiBtb2QuZ2V0TW9kZShwcmV2U2VsZi5tb2RlLm5hbWUpKTtcbiAgICAgICAgICAgICAgICAgICAgcHJldlNlbGYubW9kZSA9IG5tb2RlO1xuICAgICAgICAgICAgICAgICAgICBwcmV2U2VsZi5yZWxvYWRWaWV3KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5ld3ZpZXcuZWxtLnJlcGxhY2VXaXRoKHByZXZTZWxmLmVsbSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbmV3dmlldy5vbmNhbmNlbCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBuZXd2aWV3LmVsbS5yZXBsYWNlV2l0aChwcmV2U2VsZi5lbG0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuZWxtLnJlcGxhY2VXaXRoKG5ld3ZpZXcuZWxtKTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLm9uYWRkY29tbWFuZCA9IGFzeW5jIGZ1bmN0aW9uIChtb2RlbmFtZSwgaWR4KSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLm9uZWRpdGNvbW1hbmQobW9kZW5hbWUsIGlkeCwge21lc3NhZ2UgOiBcIlwifSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmVsbS5jbGFzc0xpc3QuYWRkKCdtb2RlRWRpdG9yVmlldycpO1xuICAgICAgICB0aGlzLnJlbG9hZFZpZXcoKTtcbiAgICB9XG5cbiAgICByZWxvYWRWaWV3KCkge1xuICAgICAgICB0aGlzLmVsbS5pbm5lckhUTUwgPSB0ZW1wbGF0ZSh0aGlzLm1vZGUpO1xuICAgICAgICBpZiAodGhpcy5tb2RlLm5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuZWxtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3JlbmFtZUJ1dHRvbicpWzBdLm9uY2xpY2sgPSAoKSA9PiB0aGlzLm9ucmVuYW1lKHRoaXMubW9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbG0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2FuY2VsQnV0dG9uJylbMF0ub25jbGljayA9ICgpID0+IHRoaXMub25jYW5jZWwodGhpcy5tb2RlKTtcbiAgICAgICAgdmFyIGVkaXRCdXR0b25zID0gdGhpcy5lbG0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY29tbWFuZEVkaXRCdXR0b24nKTtcbiAgICAgICAgZm9yICh2YXIgaWR4ID0gMDsgaWR4IDwgdGhpcy5tb2RlLmNvbW1hbmQubGVuZ3RoOyBpZHgrKykge1xuICAgICAgICAgICAgbGV0IGpkeCA9IGlkeCB8IDA7XG4gICAgICAgICAgICBsZXQgYnRuID0gZWRpdEJ1dHRvbnNbaWR4XTtcbiAgICAgICAgICAgIGxldCBjbWQgPSB0aGlzLm1vZGUuY29tbWFuZFtpZHhdO1xuICAgICAgICAgICAgYnRuLm9uY2xpY2sgPSAoKSA9PiB0aGlzLm9uZWRpdGNvbW1hbmQodGhpcy5tb2RlLm5hbWUsIGpkeCwgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShjbWQpKSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGFkZGJ1dHRvbiA9IHRoaXMuZWxtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NvbW1hbmRBZGRCdXR0b24nKVswXTtcbiAgICAgICAgYWRkYnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB0aGlzLm9uYWRkY29tbWFuZCh0aGlzLm1vZGUubmFtZSwgdGhpcy5tb2RlLmNvbW1hbmQubGVuZ3RoKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9