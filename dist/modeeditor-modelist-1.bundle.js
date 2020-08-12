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
___CSS_LOADER_EXPORT___.push([module.i, ".modeEditorView {\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  font-size: 16px;\n  height: 100%;\n  color: black;\n  border-radius: 15px;\n  font-family: sans-serif;\n}\n\n.modeEditorView .modeName {\n  min-width: 30%;\n  min-height: calc(1em + 10px);\n  margin-top: 0px;\n  align-self: center;\n  text-align: center;\n  padding: 5px;\n  border-bottom: black solid 2px;\n  border-left: black solid 2px;\n  border-right: black solid 2px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n\n.modeEditorView table {\n  padding-right: 10px;\n  padding-left: 10px;\n  width: 100%;\n}\n\n.modeEditorView tbody {\n  overflow-y: scroll;\n}\n\n.modeEditorView th div {\n  width: max-content;\n  border-bottom: black solid 1px;\n}\n\n.modeEditorView td {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  margin-bottom: 10px;\n}\n\n.modeEditorView .commandCell {\n  max-width: 0px;\n}\n\n.modeEditorView .messageCell {\n  width: 20%;\n}\n\n.modeEditorView .execCell {\n  width: 50%;\n  font-family: Monaco, monospace;\n}\n\n.modeEditorView .modeCell {\n  width: 20%;\n}\n\n.modeEditorView .commandEditCol {\n  white-space: nowrap;\n  overflow: visible;\n  width: 10%;\n}\n\n.modeEditorView .commandEditButtonCell {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n.modeEditorView .commandDeleteButton {\n  margin-right: 5%;\n}\n\n/** Add command button **/\n.modeEditorView .commandAddButton {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n}\n\n.modeEditorView .commandAddButton button {\n  width: calc(\n    3em + 20px + 0.5%\n  ); /* 1 for the + symbol, 2 for ->, 0.5% for the padding, 20px for the bordering */\n}\n.modeEditorView .divButton {\n  font-size: 20px;\n}\n", "",{"version":3,"sources":["mode_editor.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,eAAe;EACf,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,cAAc;EACd,4BAA4B;EAC5B,eAAe;EACf,kBAAkB;EAClB,kBAAkB;EAClB,YAAY;EACZ,8BAA8B;EAC9B,4BAA4B;EAC5B,6BAA6B;EAC7B,+BAA+B;EAC/B,gCAAgC;AAClC;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,8BAA8B;AAChC;;AAEA;EACE,mBAAmB;EACnB,uBAAuB;EACvB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,UAAU;EACV,8BAA8B;AAChC;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,mBAAmB;EACnB,iBAAiB;EACjB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,yBAAyB;AAC3B;AACA;EACE,gBAAgB;AAClB;;AAEA,yBAAyB;AACzB;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE;;GAEC,EAAE,+EAA+E;AACpF;AACA;EACE,eAAe;AACjB","file":"mode_editor.css","sourcesContent":[".modeEditorView {\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  font-size: 16px;\n  height: 100%;\n  color: black;\n  border-radius: 15px;\n  font-family: sans-serif;\n}\n\n.modeEditorView .modeName {\n  min-width: 30%;\n  min-height: calc(1em + 10px);\n  margin-top: 0px;\n  align-self: center;\n  text-align: center;\n  padding: 5px;\n  border-bottom: black solid 2px;\n  border-left: black solid 2px;\n  border-right: black solid 2px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n\n.modeEditorView table {\n  padding-right: 10px;\n  padding-left: 10px;\n  width: 100%;\n}\n\n.modeEditorView tbody {\n  overflow-y: scroll;\n}\n\n.modeEditorView th div {\n  width: max-content;\n  border-bottom: black solid 1px;\n}\n\n.modeEditorView td {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  margin-bottom: 10px;\n}\n\n.modeEditorView .commandCell {\n  max-width: 0px;\n}\n\n.modeEditorView .messageCell {\n  width: 20%;\n}\n\n.modeEditorView .execCell {\n  width: 50%;\n  font-family: Monaco, monospace;\n}\n\n.modeEditorView .modeCell {\n  width: 20%;\n}\n\n.modeEditorView .commandEditCol {\n  white-space: nowrap;\n  overflow: visible;\n  width: 10%;\n}\n\n.modeEditorView .commandEditButtonCell {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n.modeEditorView .commandDeleteButton {\n  margin-right: 5%;\n}\n\n/** Add command button **/\n.modeEditorView .commandAddButton {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n}\n\n.modeEditorView .commandAddButton button {\n  width: calc(\n    3em + 20px + 0.5%\n  ); /* 1 for the + symbol, 2 for ->, 0.5% for the padding, 20px for the bordering */\n}\n.modeEditorView .divButton {\n  font-size: 20px;\n}\n"]}]);
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
    + "\n            <td class=\"commandEditButtonCell\">\n                <button class=\"divButton commandDeleteButton\"> x </button>\n                <button class=\"divButton commandEditButton\"> -> </button>\n            </td>\n        </tr>\n";
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
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"name") : depth0),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.program(24, data, 0),"data":data,"loc":{"start":{"line":74,"column":4},"end":{"line":78,"column":11}}})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(__webpack_require__(/*! ../finishRow/finishButton.handlebars */ "./src/components/finishRow/finishButton.handlebars"),depth0,{"name":"../finishRow/finishButton","hash":{"text":"Cancel","ident":"cancelButton"},"data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"22":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(__webpack_require__(/*! ../finishRow/finishButton.handlebars */ "./src/components/finishRow/finishButton.handlebars"),depth0,{"name":"../finishRow/finishButton","hash":{"text":"Rename","ident":"renameButton"},"data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"24":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(__webpack_require__(/*! ../finishRow/finishButton.handlebars */ "./src/components/finishRow/finishButton.handlebars"),depth0,{"name":"../finishRow/finishButton","hash":{"disabled":"true","text":"Rename","ident":"renameButton"},"data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"name") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":5,"column":7}}})) != null ? stack1 : "")
    + "<table class=\"commandList\">\n    <colgroup>\n        <col class=\"commandCol messageCol\">\n        <col class=\"commandCol execCol\">\n        <col class=\"commandCol modeCol\">\n        <col class=\"commandEditCol\">\n    </colgroup>\n    <thead>\n        <tr>\n            <th align=\"left\" class=\"messageHeader\">\n                <div> Message</div>\n            </th>\n            <th align=\"center\" class=\"execHeader\">\n                <div>\n                    Command\n                </div>\n            </th>\n            <th align=\"right\" class=\"modeHeader\">\n                <div>\n                    Next Mode\n                </div>\n            </th>\n            <th> </th>\n        </tr>\n    </thead>\n    <tbody>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"command") : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":8},"end":{"line":60,"column":17}}})) != null ? stack1 : "")
    + "        <tr>\n            <td colspan=\"4\">\n                <div class=\"commandEditButtonCell commandAddButton\">\n                    <button class=\"divButton\">+</button>\n                </div>\n            </td>\n\n        </tr>\n    </tbody>\n</table>\n\n\n"
    + ((stack1 = container.invokePartial(__webpack_require__(/*! ../finishRow/finishRow.handlebars */ "./src/components/finishRow/finishRow.handlebars"),depth0,{"name":"../finishRow/finishRow","fn":container.program(21, data, 0),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

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
/* harmony import */ var _finishRow_finishRow_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../finishRow/finishRow.css */ "./src/components/finishRow/finishRow.css");
/* harmony import */ var _finishRow_finishRow_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_finishRow_finishRow_css__WEBPACK_IMPORTED_MODULE_3__);





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
* @callback DeleteCommandCallback
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
 * @property ondeletecommand {DeleteCommandCallback}
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

        /** @type {DeleteCommandCallback} */
        this.ondeletecommand = async function (modename, idx, cmd) {
            const modedata = await __webpack_require__.e(/*! import() | modeldata-modeeditor-3 */ "modeldata-index-1").then(__webpack_require__.bind(null, /*! ../../modeldata */ "./src/modeldata.js"));
            if (await modedata.deleteCommand(modename, idx, cmd)) {
                this.mode = await modedata.getMode(this.mode.name);
                this.reloadView();
            }
        };

        this.onaddcommand = async function (modename, idx) {
            await this.oneditcommand(modename, idx, { message: "" });
        };
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
        var deleteButtons = this.elm.getElementsByClassName('commandDeleteButton');
        for (var idx = 0; idx < this.mode.command.length; idx++) {
            let jdx = idx | 0;
            let btn = editButtons[idx];
            let delbtn = deleteButtons[idx];
            let cmd = this.mode.command[idx];
            btn.onclick = () => this.oneditcommand(this.mode.name, jdx, JSON.parse(JSON.stringify(cmd)));
            delbtn.onclick = () => this.ondeletecommand(this.mode.name, jdx, JSON.parse(JSON.stringify(cmd)));

        }
        var addbutton = this.elm.getElementsByClassName('commandAddButton')[0];
        addbutton.onclick = () => this.onaddcommand(this.mode.name, this.mode.command.length);
    }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2RlRWRpdG9yVmlldy9tb2RlX2VkaXRvci5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9kZUVkaXRvclZpZXcvbW9kZV9lZGl0b3IuY3NzP2EwYjUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9kZUVkaXRvclZpZXcvbW9kZV9lZGl0b3IuaGFuZGxlYmFycyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2RlRWRpdG9yVmlldy9tb2RlX2VkaXRvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQytGO0FBQy9GLDhCQUE4QixtRkFBMkI7QUFDekQ7QUFDQSw4QkFBOEIsUUFBUyxvQkFBb0Isa0JBQWtCLDJCQUEyQiw0QkFBNEIsb0JBQW9CLGlCQUFpQixpQkFBaUIsd0JBQXdCLDRCQUE0QixHQUFHLCtCQUErQixtQkFBbUIsaUNBQWlDLG9CQUFvQix1QkFBdUIsdUJBQXVCLGlCQUFpQixtQ0FBbUMsaUNBQWlDLGtDQUFrQyxvQ0FBb0MscUNBQXFDLEdBQUcsMkJBQTJCLHdCQUF3Qix1QkFBdUIsZ0JBQWdCLEdBQUcsMkJBQTJCLHVCQUF1QixHQUFHLDRCQUE0Qix1QkFBdUIsbUNBQW1DLEdBQUcsd0JBQXdCLHdCQUF3Qiw0QkFBNEIscUJBQXFCLHdCQUF3QixHQUFHLGtDQUFrQyxtQkFBbUIsR0FBRyxrQ0FBa0MsZUFBZSxHQUFHLCtCQUErQixlQUFlLG1DQUFtQyxHQUFHLCtCQUErQixlQUFlLEdBQUcscUNBQXFDLHdCQUF3QixzQkFBc0IsZUFBZSxHQUFHLDRDQUE0QyxrQkFBa0Isd0JBQXdCLDhCQUE4QixHQUFHLHdDQUF3QyxxQkFBcUIsR0FBRyxtRUFBbUUsZ0JBQWdCLGtCQUFrQix3QkFBd0IsR0FBRyw4Q0FBOEMsNkNBQTZDLG9GQUFvRiw4QkFBOEIsb0JBQW9CLEdBQUcsU0FBUyxzRUFB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O0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsbUJBQW1CO0FBQ25CLHVCQUF1QjtBQUN2Qix1QkFBdUI7QUFDdkIsNEJBQTRCO0FBQzVCLDhCQUE4QjtBQUM5QjtBQUNBOztBQUVBO0FBQ0EsZUFBZSxLQUFLO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsZUFBZTtBQUNsQyxxQ0FBcUMsMEJBQTBCLEVBQUU7O0FBRWpFLG1CQUFtQixlQUFlO0FBQ2xDLHFDQUFxQywwQkFBMEIsRUFBRTs7QUFFakUsbUJBQW1CLG9CQUFvQjtBQUN2QztBQUNBLGdDQUFnQyx3T0FBaUc7QUFDakk7QUFDQTtBQUNBLG9DQUFvQyxxS0FBMEU7QUFDOUc7QUFDQSxzQ0FBc0MscUtBQTBFO0FBQ2hIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQSxtQ0FBbUMscUtBQTBFO0FBQzdHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQsY0FBYztBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCLDhEQUFRO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixnQ0FBZ0M7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibW9kZWVkaXRvci1tb2RlbGlzdC0xLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5tb2RlRWRpdG9yVmlldyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ubW9kZUVkaXRvclZpZXcgLm1vZGVOYW1lIHtcXG4gIG1pbi13aWR0aDogMzAlO1xcbiAgbWluLWhlaWdodDogY2FsYygxZW0gKyAxMHB4KTtcXG4gIG1hcmdpbi10b3A6IDBweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1ib3R0b206IGJsYWNrIHNvbGlkIDJweDtcXG4gIGJvcmRlci1sZWZ0OiBibGFjayBzb2xpZCAycHg7XFxuICBib3JkZXItcmlnaHQ6IGJsYWNrIHNvbGlkIDJweDtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcXG59XFxuXFxuLm1vZGVFZGl0b3JWaWV3IHRhYmxlIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm1vZGVFZGl0b3JWaWV3IHRib2R5IHtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLm1vZGVFZGl0b3JWaWV3IHRoIGRpdiB7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBib3JkZXItYm90dG9tOiBibGFjayBzb2xpZCAxcHg7XFxufVxcblxcbi5tb2RlRWRpdG9yVmlldyB0ZCB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLm1vZGVFZGl0b3JWaWV3IC5jb21tYW5kQ2VsbCB7XFxuICBtYXgtd2lkdGg6IDBweDtcXG59XFxuXFxuLm1vZGVFZGl0b3JWaWV3IC5tZXNzYWdlQ2VsbCB7XFxuICB3aWR0aDogMjAlO1xcbn1cXG5cXG4ubW9kZUVkaXRvclZpZXcgLmV4ZWNDZWxsIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBmb250LWZhbWlseTogTW9uYWNvLCBtb25vc3BhY2U7XFxufVxcblxcbi5tb2RlRWRpdG9yVmlldyAubW9kZUNlbGwge1xcbiAgd2lkdGg6IDIwJTtcXG59XFxuXFxuLm1vZGVFZGl0b3JWaWV3IC5jb21tYW5kRWRpdENvbCB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICB3aWR0aDogMTAlO1xcbn1cXG5cXG4ubW9kZUVkaXRvclZpZXcgLmNvbW1hbmRFZGl0QnV0dG9uQ2VsbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcbi5tb2RlRWRpdG9yVmlldyAuY29tbWFuZERlbGV0ZUJ1dHRvbiB7XFxuICBtYXJnaW4tcmlnaHQ6IDUlO1xcbn1cXG5cXG4vKiogQWRkIGNvbW1hbmQgYnV0dG9uICoqL1xcbi5tb2RlRWRpdG9yVmlldyAuY29tbWFuZEFkZEJ1dHRvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4ubW9kZUVkaXRvclZpZXcgLmNvbW1hbmRBZGRCdXR0b24gYnV0dG9uIHtcXG4gIHdpZHRoOiBjYWxjKFxcbiAgICAzZW0gKyAyMHB4ICsgMC41JVxcbiAgKTsgLyogMSBmb3IgdGhlICsgc3ltYm9sLCAyIGZvciAtPiwgMC41JSBmb3IgdGhlIHBhZGRpbmcsIDIwcHggZm9yIHRoZSBib3JkZXJpbmcgKi9cXG59XFxuLm1vZGVFZGl0b3JWaWV3IC5kaXZCdXR0b24ge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJtb2RlX2VkaXRvci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLDRCQUE0QjtFQUM1QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osOEJBQThCO0VBQzlCLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IsK0JBQStCO0VBQy9CLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBLHlCQUF5QjtBQUN6QjtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7O0dBRUMsRUFBRSwrRUFBK0U7QUFDcEY7QUFDQTtFQUNFLGVBQWU7QUFDakJcIixcImZpbGVcIjpcIm1vZGVfZWRpdG9yLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubW9kZUVkaXRvclZpZXcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuLm1vZGVFZGl0b3JWaWV3IC5tb2RlTmFtZSB7XFxuICBtaW4td2lkdGg6IDMwJTtcXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMWVtICsgMTBweCk7XFxuICBtYXJnaW4tdG9wOiAwcHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItYm90dG9tOiBibGFjayBzb2xpZCAycHg7XFxuICBib3JkZXItbGVmdDogYmxhY2sgc29saWQgMnB4O1xcbiAgYm9yZGVyLXJpZ2h0OiBibGFjayBzb2xpZCAycHg7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5tb2RlRWRpdG9yVmlldyB0YWJsZSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5tb2RlRWRpdG9yVmlldyB0Ym9keSB7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbi5tb2RlRWRpdG9yVmlldyB0aCBkaXYge1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgYm9yZGVyLWJvdHRvbTogYmxhY2sgc29saWQgMXB4O1xcbn1cXG5cXG4ubW9kZUVkaXRvclZpZXcgdGQge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5tb2RlRWRpdG9yVmlldyAuY29tbWFuZENlbGwge1xcbiAgbWF4LXdpZHRoOiAwcHg7XFxufVxcblxcbi5tb2RlRWRpdG9yVmlldyAubWVzc2FnZUNlbGwge1xcbiAgd2lkdGg6IDIwJTtcXG59XFxuXFxuLm1vZGVFZGl0b3JWaWV3IC5leGVjQ2VsbCB7XFxuICB3aWR0aDogNTAlO1xcbiAgZm9udC1mYW1pbHk6IE1vbmFjbywgbW9ub3NwYWNlO1xcbn1cXG5cXG4ubW9kZUVkaXRvclZpZXcgLm1vZGVDZWxsIHtcXG4gIHdpZHRoOiAyMCU7XFxufVxcblxcbi5tb2RlRWRpdG9yVmlldyAuY29tbWFuZEVkaXRDb2wge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgd2lkdGg6IDEwJTtcXG59XFxuXFxuLm1vZGVFZGl0b3JWaWV3IC5jb21tYW5kRWRpdEJ1dHRvbkNlbGwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG4ubW9kZUVkaXRvclZpZXcgLmNvbW1hbmREZWxldGVCdXR0b24ge1xcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcXG59XFxuXFxuLyoqIEFkZCBjb21tYW5kIGJ1dHRvbiAqKi9cXG4ubW9kZUVkaXRvclZpZXcgLmNvbW1hbmRBZGRCdXR0b24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLm1vZGVFZGl0b3JWaWV3IC5jb21tYW5kQWRkQnV0dG9uIGJ1dHRvbiB7XFxuICB3aWR0aDogY2FsYyhcXG4gICAgM2VtICsgMjBweCArIDAuNSVcXG4gICk7IC8qIDEgZm9yIHRoZSArIHN5bWJvbCwgMiBmb3IgLT4sIDAuNSUgZm9yIHRoZSBwYWRkaW5nLCAyMHB4IGZvciB0aGUgYm9yZGVyaW5nICovXFxufVxcbi5tb2RlRWRpdG9yVmlldyAuZGl2QnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXCJdfV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbW9kZV9lZGl0b3IuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9ydW50aW1lLmpzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCIxXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuIFwiPGgyIGNsYXNzPVxcXCJtb2RlTmFtZVxcXCI+XCJcbiAgICArIGNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uKGNvbnRhaW5lci5sYW1iZGEoKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwibmFtZVwiKSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIjwvaDI+XFxuXCI7XG59LFwiM1wiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgcmV0dXJuIFwiPGgyIGNsYXNzPVxcXCJtb2RlTmFtZVxcXCI+IFtERUZBVUxUXSA8L2gyPlxcblwiO1xufSxcIjVcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazEsIGFsaWFzMT1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gXCIgICAgICAgIDx0cj5cXG5cIlxuICAgICsgKChzdGFjazEgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiaWZcIikuY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwibWVzc2FnZVwiKSA6IGRlcHRoMCkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oNiwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLnByb2dyYW0oOCwgZGF0YSwgMCksXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjM0LFwiY29sdW1uXCI6MTJ9LFwiZW5kXCI6e1wibGluZVwiOjM4LFwiY29sdW1uXCI6MTl9fX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiXFxuXCJcbiAgICArICgoc3RhY2sxID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImlmXCIpLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImNvbW1hbmRcIikgOiBkZXB0aDApLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEwLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIucHJvZ3JhbSgxMiwgZGF0YSwgMCksXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjQwLFwiY29sdW1uXCI6MTJ9LFwiZW5kXCI6e1wibGluZVwiOjQ0LFwiY29sdW1uXCI6MTl9fX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiXFxuXCJcbiAgICArICgoc3RhY2sxID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImlmXCIpLmNhbGwoYWxpYXMxLCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwibW9kZVwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShzdGFjazEsXCJsZW5ndGhcIikgOiBzdGFjazEpLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e1wiaW5jbHVkZVplcm9cIjpmYWxzZX0sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDE0LCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIucHJvZ3JhbSgxNiwgZGF0YSwgMCksXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjQ2LFwiY29sdW1uXCI6MTJ9LFwiZW5kXCI6e1wibGluZVwiOjUzLFwiY29sdW1uXCI6MTl9fX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiXFxuICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJjb21tYW5kRWRpdEJ1dHRvbkNlbGxcXFwiPlxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJkaXZCdXR0b24gY29tbWFuZERlbGV0ZUJ1dHRvblxcXCI+IHggPC9idXR0b24+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImRpdkJ1dHRvbiBjb21tYW5kRWRpdEJ1dHRvblxcXCI+IC0+IDwvYnV0dG9uPlxcbiAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICA8L3RyPlxcblwiO1xufSxcIjZcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gXCIgICAgICAgICAgICA8dGQgY2xhc3M9XFxcImNvbW1hbmRDZWxsIG1lc3NhZ2VDZWxsXFxcIj5cIlxuICAgICsgY29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24oY29udGFpbmVyLmxhbWJkYSgoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJtZXNzYWdlXCIpIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiPC90ZD5cXG5cIjtcbn0sXCI4XCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICByZXR1cm4gXCIgICAgICAgICAgICA8dGQgY2xhc3M9XFxcImNvbW1hbmRDZWxsIG1lc3NhZ2VDZWxsXFxcIj5bREVGQVVMVF08L3RkPlxcblwiO1xufSxcIjEwXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuIFwiICAgICAgICAgICAgPHRkIGFsaWduPVxcXCJjZW50ZXJcXFwiIGNsYXNzPVxcXCJjb21tYW5kQ2VsbCBleGVjQ2VsbFxcXCI+XCJcbiAgICArIGNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uKGNvbnRhaW5lci5sYW1iZGEoKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiY29tbWFuZFwiKSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIjwvdGQ+XFxuXCI7XG59LFwiMTJcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHJldHVybiBcIiAgICAgICAgICAgIDx0ZCBhbGlnbj1cXFwiY2VudGVyXFxcIiBjbGFzcz1cXFwiY29tbWFuZENlbGwgZXhlY0NlbGwgZW1wdHlDZWxsXFxcIj4gLSA8L3RkPlxcblwiO1xufSxcIjE0XCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuIFwiICAgICAgICAgICAgPHRkIGFsaWduPVxcXCJyaWdodFxcXCIgY2xhc3M9XFxcImNvbW1hbmRDZWxsIG1vZGVDZWxsXFxcIj5cIlxuICAgICsgY29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24oY29udGFpbmVyLmxhbWJkYSgoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJtb2RlXCIpIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiPC90ZD5cXG4gICAgICAgICAgICBcIjtcbn0sXCIxNlwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMSwgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuIFwiIFwiXG4gICAgKyAoKHN0YWNrMSA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJpZlwiKS5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJtb2RlXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KHN0YWNrMSxcImxlbmd0aFwiKSA6IHN0YWNrMSkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7XCJpbmNsdWRlWmVyb1wiOnRydWV9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxNywgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLnByb2dyYW0oMTksIGRhdGEsIDApLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjo0OCxcImNvbHVtblwiOjIxfSxcImVuZFwiOntcImxpbmVcIjo1MixcImNvbHVtblwiOjE5fX19KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpO1xufSxcIjE3XCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICByZXR1cm4gXCJcXG4gICAgICAgICAgICA8dGQgYWxpZ249XFxcInJpZ2h0XFxcIiBjbGFzcz1cXFwiY29tbWFuZENlbGwgbW9kZUNlbGxcXFwiPltERUZBVUxUXTwvdGQ+XFxuXCI7XG59LFwiMTlcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHJldHVybiBcIiAgICAgICAgICAgIDx0ZCBhbGlnbj1cXFwicmlnaHRcXFwiIGNsYXNzPVxcXCJjb21tYW5kQ2VsbCBtb2RlQ2VsbCBlbXB0eUNlbGxcXFwiPiAtIDwvdGQ+XFxuXCI7XG59LFwiMjFcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazEsIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiAoKHN0YWNrMSA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJpZlwiKS5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwibmFtZVwiKSA6IGRlcHRoMCkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMjIsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5wcm9ncmFtKDI0LCBkYXRhLCAwKSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6NzQsXCJjb2x1bW5cIjo0fSxcImVuZFwiOntcImxpbmVcIjo3OCxcImNvbHVtblwiOjExfX19KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyAoKHN0YWNrMSA9IGNvbnRhaW5lci5pbnZva2VQYXJ0aWFsKHJlcXVpcmUoXCIuLi9maW5pc2hSb3cvZmluaXNoQnV0dG9uLmhhbmRsZWJhcnNcIiksZGVwdGgwLHtcIm5hbWVcIjpcIi4uL2ZpbmlzaFJvdy9maW5pc2hCdXR0b25cIixcImhhc2hcIjp7XCJ0ZXh0XCI6XCJDYW5jZWxcIixcImlkZW50XCI6XCJjYW5jZWxCdXR0b25cIn0sXCJkYXRhXCI6ZGF0YSxcImluZGVudFwiOlwiICAgIFwiLFwiaGVscGVyc1wiOmhlbHBlcnMsXCJwYXJ0aWFsc1wiOnBhcnRpYWxzLFwiZGVjb3JhdG9yc1wiOmNvbnRhaW5lci5kZWNvcmF0b3JzfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKTtcbn0sXCIyMlwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMTtcblxuICByZXR1cm4gKChzdGFjazEgPSBjb250YWluZXIuaW52b2tlUGFydGlhbChyZXF1aXJlKFwiLi4vZmluaXNoUm93L2ZpbmlzaEJ1dHRvbi5oYW5kbGViYXJzXCIpLGRlcHRoMCx7XCJuYW1lXCI6XCIuLi9maW5pc2hSb3cvZmluaXNoQnV0dG9uXCIsXCJoYXNoXCI6e1widGV4dFwiOlwiUmVuYW1lXCIsXCJpZGVudFwiOlwicmVuYW1lQnV0dG9uXCJ9LFwiZGF0YVwiOmRhdGEsXCJpbmRlbnRcIjpcIiAgICAgICAgXCIsXCJoZWxwZXJzXCI6aGVscGVycyxcInBhcnRpYWxzXCI6cGFydGlhbHMsXCJkZWNvcmF0b3JzXCI6Y29udGFpbmVyLmRlY29yYXRvcnN9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpO1xufSxcIjI0XCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxO1xuXG4gIHJldHVybiAoKHN0YWNrMSA9IGNvbnRhaW5lci5pbnZva2VQYXJ0aWFsKHJlcXVpcmUoXCIuLi9maW5pc2hSb3cvZmluaXNoQnV0dG9uLmhhbmRsZWJhcnNcIiksZGVwdGgwLHtcIm5hbWVcIjpcIi4uL2ZpbmlzaFJvdy9maW5pc2hCdXR0b25cIixcImhhc2hcIjp7XCJkaXNhYmxlZFwiOlwidHJ1ZVwiLFwidGV4dFwiOlwiUmVuYW1lXCIsXCJpZGVudFwiOlwicmVuYW1lQnV0dG9uXCJ9LFwiZGF0YVwiOmRhdGEsXCJpbmRlbnRcIjpcIiAgICAgICAgXCIsXCJoZWxwZXJzXCI6aGVscGVycyxcInBhcnRpYWxzXCI6cGFydGlhbHMsXCJkZWNvcmF0b3JzXCI6Y29udGFpbmVyLmRlY29yYXRvcnN9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpO1xufSxcImNvbXBpbGVyXCI6WzgsXCI+PSA0LjMuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazEsIGFsaWFzMT1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gKChzdGFjazEgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiaWZcIikuY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwibmFtZVwiKSA6IGRlcHRoMCkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMSwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLnByb2dyYW0oMywgZGF0YSwgMCksXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjEsXCJjb2x1bW5cIjowfSxcImVuZFwiOntcImxpbmVcIjo1LFwiY29sdW1uXCI6N319fSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCI8dGFibGUgY2xhc3M9XFxcImNvbW1hbmRMaXN0XFxcIj5cXG4gICAgPGNvbGdyb3VwPlxcbiAgICAgICAgPGNvbCBjbGFzcz1cXFwiY29tbWFuZENvbCBtZXNzYWdlQ29sXFxcIj5cXG4gICAgICAgIDxjb2wgY2xhc3M9XFxcImNvbW1hbmRDb2wgZXhlY0NvbFxcXCI+XFxuICAgICAgICA8Y29sIGNsYXNzPVxcXCJjb21tYW5kQ29sIG1vZGVDb2xcXFwiPlxcbiAgICAgICAgPGNvbCBjbGFzcz1cXFwiY29tbWFuZEVkaXRDb2xcXFwiPlxcbiAgICA8L2NvbGdyb3VwPlxcbiAgICA8dGhlYWQ+XFxuICAgICAgICA8dHI+XFxuICAgICAgICAgICAgPHRoIGFsaWduPVxcXCJsZWZ0XFxcIiBjbGFzcz1cXFwibWVzc2FnZUhlYWRlclxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXY+IE1lc3NhZ2U8L2Rpdj5cXG4gICAgICAgICAgICA8L3RoPlxcbiAgICAgICAgICAgIDx0aCBhbGlnbj1cXFwiY2VudGVyXFxcIiBjbGFzcz1cXFwiZXhlY0hlYWRlclxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgICAgICAgICBDb21tYW5kXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvdGg+XFxuICAgICAgICAgICAgPHRoIGFsaWduPVxcXCJyaWdodFxcXCIgY2xhc3M9XFxcIm1vZGVIZWFkZXJcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgTmV4dCBNb2RlXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvdGg+XFxuICAgICAgICAgICAgPHRoPiA8L3RoPlxcbiAgICAgICAgPC90cj5cXG4gICAgPC90aGVhZD5cXG4gICAgPHRib2R5PlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJlYWNoXCIpLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImNvbW1hbmRcIikgOiBkZXB0aDApLHtcIm5hbWVcIjpcImVhY2hcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oNSwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjMyLFwiY29sdW1uXCI6OH0sXCJlbmRcIjp7XCJsaW5lXCI6NjAsXCJjb2x1bW5cIjoxN319fSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgICAgIDx0cj5cXG4gICAgICAgICAgICA8dGQgY29sc3Bhbj1cXFwiNFxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbW1hbmRFZGl0QnV0dG9uQ2VsbCBjb21tYW5kQWRkQnV0dG9uXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImRpdkJ1dHRvblxcXCI+KzwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L3RkPlxcblxcbiAgICAgICAgPC90cj5cXG4gICAgPC90Ym9keT5cXG48L3RhYmxlPlxcblxcblxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGNvbnRhaW5lci5pbnZva2VQYXJ0aWFsKHJlcXVpcmUoXCIuLi9maW5pc2hSb3cvZmluaXNoUm93LmhhbmRsZWJhcnNcIiksZGVwdGgwLHtcIm5hbWVcIjpcIi4uL2ZpbmlzaFJvdy9maW5pc2hSb3dcIixcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMjEsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGEsXCJoZWxwZXJzXCI6aGVscGVycyxcInBhcnRpYWxzXCI6cGFydGlhbHMsXCJkZWNvcmF0b3JzXCI6Y29udGFpbmVyLmRlY29yYXRvcnN9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpO1xufSxcInVzZVBhcnRpYWxcIjp0cnVlLFwidXNlRGF0YVwiOnRydWV9KTsiLCJpbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9tb2RlX2VkaXRvci5oYW5kbGViYXJzJztcbmltcG9ydCAnLi9tb2RlX2VkaXRvci5jc3MnO1xuaW1wb3J0ICcuLi9kaXZCdXR0b24vZGl2QnV0dG9uLmNzcyc7XG5pbXBvcnQgJy4uL2ZpbmlzaFJvdy9maW5pc2hSb3cuY3NzJztcblxuLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi8uLi9tb2RlbGRhdGEnKS5Db21tYW5kfSBDb21tYW5kXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi8uLi9tb2RlbGRhdGEnKS5Nb2RlfSBNb2RlXG4gKlxuICovXG5cbi8qKlxuICogQHBhcmFtIHtNb2RlfSBtb2RlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBvbnJlbmFtZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gb25jYW5jZWxcbiAqIEBwYXJhbSB7RnVuY3Rpb259IG9uZWRpdG1vZGVcbiAqIEByZXR1cm5zIHtNb2RlRWRpdG9yVmlld31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1ha2VFZGl0b3IobW9kZSkge1xuICAgIHJldHVybiBuZXcgTW9kZUVkaXRvclZpZXcobW9kZSk7XG59XG5cbi8qKlxuICogQGNhbGxiYWNrIEVkaXRDb21tYW5kQ2FsbGJhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBtb2RlbmFtZVxuICogQHBhcmFtIHtudW1iZXJ9IGlkeCBcbiAqIEBwYXJhbSB7Q29tbWFuZH0gY21kIFxuICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gKi9cblxuLyoqXG4qIEBjYWxsYmFjayBEZWxldGVDb21tYW5kQ2FsbGJhY2tcbiogQHBhcmFtIHtzdHJpbmd9IG1vZGVuYW1lXG4qIEBwYXJhbSB7bnVtYmVyfSBpZHggXG4qIEBwYXJhbSB7Q29tbWFuZH0gY21kIFxuKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiovXG5cbi8qKlxuICogQGNhbGxiYWNrIFJlbmFtZUNhbGxiYWNrIFxuICogQHBhcmFtIHtNb2RlfSBtb2RlXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAqL1xuLyoqXG4gKiBAY2FsbGJhY2sgQ2FuY2VsQ2FsbGJhY2sgXG4gKiBAcGFyYW0ge01vZGV9IG1vZGVcbiAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICovXG5cbi8qKlxuICogQGNsYXNzIE1vZGVFZGl0b3JWaWV3IFxuICogQHByb3BlcnR5IGVsbSB7SFRNTEVsZW1lbnR9XG4gKiBAcHJvcGVydHkgbW9kZSB7TW9kZX1cbiAqIEBwcm9wZXJ0eSBvbnJlbmFtZSB7UmVuYW1lQ2FsbGJhY2t9XG4gKiBAcHJvcGVydHkgb25jYW5jZWwge0NhbmNlbENhbGxiYWNrfVxuICogQHByb3BlcnR5IG9uZWRpdGNvbW1hbmQge0VkaXRDb21tYW5kQ2FsbGJhY2t9XG4gKiBAcHJvcGVydHkgb25kZWxldGVjb21tYW5kIHtEZWxldGVDb21tYW5kQ2FsbGJhY2t9XG4gKi9cbmNsYXNzIE1vZGVFZGl0b3JWaWV3IHtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7TW9kZX0gbWQgXG4gICAgICovXG4gICAgY29uc3RydWN0b3IobWQpIHtcbiAgICAgICAgdGhpcy5tb2RlID0gbWQ7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtSZW5hbWVDYWxsYmFja30gKi9cbiAgICAgICAgdGhpcy5vbnJlbmFtZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7fSk7IH07XG5cbiAgICAgICAgLyoqIEB0eXBlIHtDYW5jZWxDYWxsYmFja30gKi9cbiAgICAgICAgdGhpcy5vbmNhbmNlbCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7fSk7IH07XG5cbiAgICAgICAgLyoqIEB0eXBlIHtFZGl0Q29tbWFuZENhbGxiYWNrfSAqL1xuICAgICAgICB0aGlzLm9uZWRpdGNvbW1hbmQgPSBhc3luYyBmdW5jdGlvbiAobW9kZW5hbWUsIGlkeCwgY21kKSB7XG4gICAgICAgICAgICBsZXQgbmV3dmlldyA9IGF3YWl0IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImNvbW1hbmRlZGl0b3ItbW9kZWVkaXRvci0xXCIgKi8nLi4vY29tbWFuZEVkaXRvclZpZXcvY29tbWFuZF9lZGl0b3InKS50aGVuKG1vZCA9PiBtb2QubWFrZUVkaXRvcihtb2RlbmFtZSwgaWR4LCBjbWQpKTtcbiAgICAgICAgICAgIGNvbnN0IHByZXZTZWxmID0gdGhpcztcbiAgICAgICAgICAgIG5ld3ZpZXcub25zYXZlID0gYXN5bmMgKHBhcmVudE1vZGUsIGlkeCwgY21kKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGNoYW5nZWQgPSBhd2FpdCBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJtb2RlbGRhdGEtbW9kZWVkaXRvci0xXCIgKi8gJy4uLy4uL21vZGVsZGF0YScpLnRoZW4obW9kID0+IG1vZC5zZXRDb21tYW5kKHBhcmVudE1vZGUsIGlkeCwgY21kKSk7XG4gICAgICAgICAgICAgICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5tb2RlID0gYXdhaXQgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6ICdtb2RlbGRhdGEtbW9kZWVkaXRvci0yJyAqLyAnLi4vLi4vbW9kZWxkYXRhJykudGhlbihtb2QgPT4gbW9kLmdldE1vZGUocHJldlNlbGYubW9kZS5uYW1lKSk7XG4gICAgICAgICAgICAgICAgICAgIHByZXZTZWxmLm1vZGUgPSBubW9kZTtcbiAgICAgICAgICAgICAgICAgICAgcHJldlNlbGYucmVsb2FkVmlldygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBuZXd2aWV3LmVsbS5yZXBsYWNlV2l0aChwcmV2U2VsZi5lbG0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG5ld3ZpZXcub25jYW5jZWwgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbmV3dmlldy5lbG0ucmVwbGFjZVdpdGgocHJldlNlbGYuZWxtKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmVsbS5yZXBsYWNlV2l0aChuZXd2aWV3LmVsbSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqIEB0eXBlIHtEZWxldGVDb21tYW5kQ2FsbGJhY2t9ICovXG4gICAgICAgIHRoaXMub25kZWxldGVjb21tYW5kID0gYXN5bmMgZnVuY3Rpb24gKG1vZGVuYW1lLCBpZHgsIGNtZCkge1xuICAgICAgICAgICAgY29uc3QgbW9kZWRhdGEgPSBhd2FpdCBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogJ21vZGVsZGF0YS1tb2RlZWRpdG9yLTMnICovICcuLi8uLi9tb2RlbGRhdGEnKTtcbiAgICAgICAgICAgIGlmIChhd2FpdCBtb2RlZGF0YS5kZWxldGVDb21tYW5kKG1vZGVuYW1lLCBpZHgsIGNtZCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGUgPSBhd2FpdCBtb2RlZGF0YS5nZXRNb2RlKHRoaXMubW9kZS5uYW1lKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbG9hZFZpZXcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLm9uYWRkY29tbWFuZCA9IGFzeW5jIGZ1bmN0aW9uIChtb2RlbmFtZSwgaWR4KSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLm9uZWRpdGNvbW1hbmQobW9kZW5hbWUsIGlkeCwgeyBtZXNzYWdlOiBcIlwiIH0pO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmVsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmVsbS5jbGFzc0xpc3QuYWRkKCdtb2RlRWRpdG9yVmlldycpO1xuICAgICAgICB0aGlzLnJlbG9hZFZpZXcoKTtcbiAgICB9XG5cbiAgICByZWxvYWRWaWV3KCkge1xuICAgICAgICB0aGlzLmVsbS5pbm5lckhUTUwgPSB0ZW1wbGF0ZSh0aGlzLm1vZGUpO1xuICAgICAgICBpZiAodGhpcy5tb2RlLm5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuZWxtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3JlbmFtZUJ1dHRvbicpWzBdLm9uY2xpY2sgPSAoKSA9PiB0aGlzLm9ucmVuYW1lKHRoaXMubW9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbG0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2FuY2VsQnV0dG9uJylbMF0ub25jbGljayA9ICgpID0+IHRoaXMub25jYW5jZWwodGhpcy5tb2RlKTtcbiAgICAgICAgdmFyIGVkaXRCdXR0b25zID0gdGhpcy5lbG0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY29tbWFuZEVkaXRCdXR0b24nKTtcbiAgICAgICAgdmFyIGRlbGV0ZUJ1dHRvbnMgPSB0aGlzLmVsbS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb21tYW5kRGVsZXRlQnV0dG9uJyk7XG4gICAgICAgIGZvciAodmFyIGlkeCA9IDA7IGlkeCA8IHRoaXMubW9kZS5jb21tYW5kLmxlbmd0aDsgaWR4KyspIHtcbiAgICAgICAgICAgIGxldCBqZHggPSBpZHggfCAwO1xuICAgICAgICAgICAgbGV0IGJ0biA9IGVkaXRCdXR0b25zW2lkeF07XG4gICAgICAgICAgICBsZXQgZGVsYnRuID0gZGVsZXRlQnV0dG9uc1tpZHhdO1xuICAgICAgICAgICAgbGV0IGNtZCA9IHRoaXMubW9kZS5jb21tYW5kW2lkeF07XG4gICAgICAgICAgICBidG4ub25jbGljayA9ICgpID0+IHRoaXMub25lZGl0Y29tbWFuZCh0aGlzLm1vZGUubmFtZSwgamR4LCBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGNtZCkpKTtcbiAgICAgICAgICAgIGRlbGJ0bi5vbmNsaWNrID0gKCkgPT4gdGhpcy5vbmRlbGV0ZWNvbW1hbmQodGhpcy5tb2RlLm5hbWUsIGpkeCwgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShjbWQpKSk7XG5cbiAgICAgICAgfVxuICAgICAgICB2YXIgYWRkYnV0dG9uID0gdGhpcy5lbG0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY29tbWFuZEFkZEJ1dHRvbicpWzBdO1xuICAgICAgICBhZGRidXR0b24ub25jbGljayA9ICgpID0+IHRoaXMub25hZGRjb21tYW5kKHRoaXMubW9kZS5uYW1lLCB0aGlzLm1vZGUuY29tbWFuZC5sZW5ndGgpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=