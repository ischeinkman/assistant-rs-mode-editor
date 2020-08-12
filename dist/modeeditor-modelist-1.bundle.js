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
___CSS_LOADER_EXPORT___.push([module.i, ".modeEditorView table {\n  padding-right: 10px;\n  padding-left: 10px;\n  width: 100%;\n}\n\n.modeEditorView tbody {\n  overflow-y: scroll;\n}\n\n.modeEditorView th div {\n  width: max-content;\n  border-bottom: black solid 1px;\n}\n\n.modeEditorView td {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  margin-bottom: 10px;\n}\n\n.modeEditorView .commandCell {\n  max-width: 0px;\n}\n\n.modeEditorView .messageCell {\n  width: 20%;\n}\n\n.modeEditorView .execCell {\n  width: 50%;\n  font-family: Monaco, monospace;\n}\n\n.modeEditorView .modeCell {\n  width: 20%;\n}\n\n.modeEditorView .commandEditCol {\n  white-space: nowrap;\n  overflow: visible;\n  width: 10%;\n}\n\n.modeEditorView .commandEditButtonCell {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n.modeEditorView .commandDeleteButton {\n  margin-right: 5%;\n}\n\n/** Add command button **/\n.modeEditorView .commandAddButton {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n}\n\n.modeEditorView .commandAddButton button {\n  width: calc(\n    3em + 20px + 0.5%\n  ); /* 1 for the + symbol, 2 for ->, 0.5% for the padding, 20px for the bordering */\n}\n.modeEditorView .divButton {\n  font-size: 20px;\n}\n", "",{"version":3,"sources":["mode_editor.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,8BAA8B;AAChC;;AAEA;EACE,mBAAmB;EACnB,uBAAuB;EACvB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,UAAU;EACV,8BAA8B;AAChC;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,mBAAmB;EACnB,iBAAiB;EACjB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,yBAAyB;AAC3B;AACA;EACE,gBAAgB;AAClB;;AAEA,yBAAyB;AACzB;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE;;GAEC,EAAE,+EAA+E;AACpF;AACA;EACE,eAAe;AACjB","file":"mode_editor.css","sourcesContent":[".modeEditorView table {\n  padding-right: 10px;\n  padding-left: 10px;\n  width: 100%;\n}\n\n.modeEditorView tbody {\n  overflow-y: scroll;\n}\n\n.modeEditorView th div {\n  width: max-content;\n  border-bottom: black solid 1px;\n}\n\n.modeEditorView td {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  margin-bottom: 10px;\n}\n\n.modeEditorView .commandCell {\n  max-width: 0px;\n}\n\n.modeEditorView .messageCell {\n  width: 20%;\n}\n\n.modeEditorView .execCell {\n  width: 50%;\n  font-family: Monaco, monospace;\n}\n\n.modeEditorView .modeCell {\n  width: 20%;\n}\n\n.modeEditorView .commandEditCol {\n  white-space: nowrap;\n  overflow: visible;\n  width: 10%;\n}\n\n.modeEditorView .commandEditButtonCell {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n.modeEditorView .commandDeleteButton {\n  margin-right: 5%;\n}\n\n/** Add command button **/\n.modeEditorView .commandAddButton {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n}\n\n.modeEditorView .commandAddButton button {\n  width: calc(\n    3em + 20px + 0.5%\n  ); /* 1 for the + symbol, 2 for ->, 0.5% for the padding, 20px for the bordering */\n}\n.modeEditorView .divButton {\n  font-size: 20px;\n}\n"]}]);
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
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(__webpack_require__(/*! ../viewWrapper/title.handlebars */ "./src/components/viewWrapper/title.handlebars"),depth0,{"name":"../viewWrapper/title","hash":{"title":(depth0 != null ? lookupProperty(depth0,"name") : depth0)},"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(__webpack_require__(/*! ../viewWrapper/title.handlebars */ "./src/components/viewWrapper/title.handlebars"),depth0,{"name":"../viewWrapper/title","hash":{"title":"[DEFAULT]"},"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<table class=\"commandList\">\n    <colgroup>\n        <col class=\"commandCol messageCol\">\n        <col class=\"commandCol execCol\">\n        <col class=\"commandCol modeCol\">\n        <col class=\"commandEditCol\">\n    </colgroup>\n    <thead>\n        <tr>\n            <th align=\"left\" class=\"messageHeader\">\n                <div> Message</div>\n            </th>\n            <th align=\"center\" class=\"execHeader\">\n                <div>\n                    Command\n                </div>\n            </th>\n            <th align=\"right\" class=\"modeHeader\">\n                <div>\n                    Next Mode\n                </div>\n            </th>\n            <th> </th>\n        </tr>\n    </thead>\n    <tbody>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"command") : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":34,"column":8},"end":{"line":62,"column":17}}})) != null ? stack1 : "")
    + "        <tr>\n            <td colspan=\"4\">\n                <div class=\"commandEditButtonCell commandAddButton\">\n                    <button class=\"divButton\">+</button>\n                </div>\n            </td>\n\n        </tr>\n    </tbody>\n</table>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <tr>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"message") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":36,"column":12},"end":{"line":40,"column":19}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"command") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(13, data, 0),"data":data,"loc":{"start":{"line":42,"column":12},"end":{"line":46,"column":19}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"mode") : depth0)) != null ? lookupProperty(stack1,"length") : stack1),{"name":"if","hash":{"includeZero":false},"fn":container.program(15, data, 0),"inverse":container.program(17, data, 0),"data":data,"loc":{"start":{"line":48,"column":12},"end":{"line":55,"column":19}}})) != null ? stack1 : "")
    + "\n            <td class=\"commandEditButtonCell\">\n                <button class=\"divButton commandDeleteButton\"> x </button>\n                <button class=\"divButton commandEditButton\"> -> </button>\n            </td>\n        </tr>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <td class=\"commandCell messageCell\">"
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"message") : depth0), depth0))
    + "</td>\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "            <td class=\"commandCell messageCell\">[DEFAULT]</td>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <td align=\"center\" class=\"commandCell execCell\">"
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"command") : depth0), depth0))
    + "</td>\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "            <td align=\"center\" class=\"commandCell execCell emptyCell\"> - </td>\n";
},"15":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <td align=\"right\" class=\"commandCell modeCell\">"
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"mode") : depth0), depth0))
    + "</td>\n            ";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"mode") : depth0)) != null ? lookupProperty(stack1,"length") : stack1),{"name":"if","hash":{"includeZero":true},"fn":container.program(18, data, 0),"inverse":container.program(20, data, 0),"data":data,"loc":{"start":{"line":50,"column":21},"end":{"line":54,"column":19}}})) != null ? stack1 : "");
},"18":function(container,depth0,helpers,partials,data) {
    return "\n            <td align=\"right\" class=\"commandCell modeCell\">[DEFAULT]</td>\n";
},"20":function(container,depth0,helpers,partials,data) {
    return "            <td align=\"right\" class=\"commandCell modeCell emptyCell\"> - </td>\n";
},"22":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"name") : depth0),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.program(25, data, 0),"data":data,"loc":{"start":{"line":76,"column":0},"end":{"line":80,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(__webpack_require__(/*! ../viewWrapper/finishButton.handlebars */ "./src/components/viewWrapper/finishButton.handlebars"),depth0,{"name":"../viewWrapper/finishButton","hash":{"text":"Cancel","ident":"cancelButton"},"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"23":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(__webpack_require__(/*! ../viewWrapper/finishButton.handlebars */ "./src/components/viewWrapper/finishButton.handlebars"),depth0,{"name":"../viewWrapper/finishButton","hash":{"text":"Rename","ident":"renameButton"},"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"25":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(__webpack_require__(/*! ../viewWrapper/finishButton.handlebars */ "./src/components/viewWrapper/finishButton.handlebars"),depth0,{"name":"../viewWrapper/finishButton","hash":{"disabled":"true","text":"Rename","ident":"renameButton"},"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"name") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":5,"column":7}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(__webpack_require__(/*! ../viewWrapper/content.handlebars */ "./src/components/viewWrapper/content.handlebars"),depth0,{"name":"../viewWrapper/content","fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(__webpack_require__(/*! ../viewWrapper/finishRow.handlebars */ "./src/components/viewWrapper/finishRow.handlebars"),depth0,{"name":"../viewWrapper/finishRow","fn":container.program(22, data, 0),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
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
/* harmony import */ var _viewWrapper_viewWrapper_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../viewWrapper/viewWrapper.css */ "./src/components/viewWrapper/viewWrapper.css");
/* harmony import */ var _viewWrapper_viewWrapper_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_viewWrapper_viewWrapper_css__WEBPACK_IMPORTED_MODULE_3__);





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
        this.elm.classList.add('viewWrapper');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2RlRWRpdG9yVmlldy9tb2RlX2VkaXRvci5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9kZUVkaXRvclZpZXcvbW9kZV9lZGl0b3IuY3NzP2EwYjUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9kZUVkaXRvclZpZXcvbW9kZV9lZGl0b3IuaGFuZGxlYmFycyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2RlRWRpdG9yVmlldy9tb2RlX2VkaXRvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQytGO0FBQy9GLDhCQUE4QixtRkFBMkI7QUFDekQ7QUFDQSw4QkFBOEIsUUFBUywwQkFBMEIsd0JBQXdCLHVCQUF1QixnQkFBZ0IsR0FBRywyQkFBMkIsdUJBQXVCLEdBQUcsNEJBQTRCLHVCQUF1QixtQ0FBbUMsR0FBRyx3QkFBd0Isd0JBQXdCLDRCQUE0QixxQkFBcUIsd0JBQXdCLEdBQUcsa0NBQWtDLG1CQUFtQixHQUFHLGtDQUFrQyxlQUFlLEdBQUcsK0JBQStCLGVBQWUsbUNBQW1DLEdBQUcsK0JBQStCLGVBQWUsR0FBRyxxQ0FBcUMsd0JBQXdCLHNCQUFzQixlQUFlLEdBQUcsNENBQTRDLGtCQUFrQix3QkFBd0IsOEJBQThCLEdBQUcsd0NBQXdDLHFCQUFxQixHQUFHLG1FQUFtRSxnQkFBZ0Isa0JBQWtCLHdCQUF3QixHQUFHLDhDQUE4Qyw2Q0FBNkMsb0ZBQW9GLDhCQUE4QixvQkFBb0IsR0FBRyxTQUFTLHNFQUFzRSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFL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Q2xDLHFDQUFxQywwQkFBMEIsRUFBRTs7QUFFakUsbUJBQW1CLGVBQWU7QUFDbEMscUNBQXFDLDBCQUEwQixFQUFFOztBQUVqRSxtQkFBbUIsb0JBQW9CO0FBQ3ZDO0FBQ0EsZ0NBQWdDLHdPQUFpRztBQUNqSTtBQUNBO0FBQ0Esb0NBQW9DLHFLQUEwRTtBQUM5RztBQUNBLHNDQUFzQyxxS0FBMEU7QUFDaEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBLG1DQUFtQyxxS0FBMEU7QUFDN0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRCxjQUFjO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZCQUE2Qiw4REFBUTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZ0NBQWdDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1vZGVlZGl0b3ItbW9kZWxpc3QtMS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubW9kZUVkaXRvclZpZXcgdGFibGUge1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubW9kZUVkaXRvclZpZXcgdGJvZHkge1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4ubW9kZUVkaXRvclZpZXcgdGggZGl2IHtcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG4gIGJvcmRlci1ib3R0b206IGJsYWNrIHNvbGlkIDFweDtcXG59XFxuXFxuLm1vZGVFZGl0b3JWaWV3IHRkIHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4ubW9kZUVkaXRvclZpZXcgLmNvbW1hbmRDZWxsIHtcXG4gIG1heC13aWR0aDogMHB4O1xcbn1cXG5cXG4ubW9kZUVkaXRvclZpZXcgLm1lc3NhZ2VDZWxsIHtcXG4gIHdpZHRoOiAyMCU7XFxufVxcblxcbi5tb2RlRWRpdG9yVmlldyAuZXhlY0NlbGwge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGZvbnQtZmFtaWx5OiBNb25hY28sIG1vbm9zcGFjZTtcXG59XFxuXFxuLm1vZGVFZGl0b3JWaWV3IC5tb2RlQ2VsbCB7XFxuICB3aWR0aDogMjAlO1xcbn1cXG5cXG4ubW9kZUVkaXRvclZpZXcgLmNvbW1hbmRFZGl0Q29sIHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gIHdpZHRoOiAxMCU7XFxufVxcblxcbi5tb2RlRWRpdG9yVmlldyAuY29tbWFuZEVkaXRCdXR0b25DZWxsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuLm1vZGVFZGl0b3JWaWV3IC5jb21tYW5kRGVsZXRlQnV0dG9uIHtcXG4gIG1hcmdpbi1yaWdodDogNSU7XFxufVxcblxcbi8qKiBBZGQgY29tbWFuZCBidXR0b24gKiovXFxuLm1vZGVFZGl0b3JWaWV3IC5jb21tYW5kQWRkQnV0dG9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5tb2RlRWRpdG9yVmlldyAuY29tbWFuZEFkZEJ1dHRvbiBidXR0b24ge1xcbiAgd2lkdGg6IGNhbGMoXFxuICAgIDNlbSArIDIwcHggKyAwLjUlXFxuICApOyAvKiAxIGZvciB0aGUgKyBzeW1ib2wsIDIgZm9yIC0+LCAwLjUlIGZvciB0aGUgcGFkZGluZywgMjBweCBmb3IgdGhlIGJvcmRlcmluZyAqL1xcbn1cXG4ubW9kZUVkaXRvclZpZXcgLmRpdkJ1dHRvbiB7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIm1vZGVfZWRpdG9yLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBLHlCQUF5QjtBQUN6QjtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7O0dBRUMsRUFBRSwrRUFBK0U7QUFDcEY7QUFDQTtFQUNFLGVBQWU7QUFDakJcIixcImZpbGVcIjpcIm1vZGVfZWRpdG9yLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubW9kZUVkaXRvclZpZXcgdGFibGUge1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubW9kZUVkaXRvclZpZXcgdGJvZHkge1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4ubW9kZUVkaXRvclZpZXcgdGggZGl2IHtcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG4gIGJvcmRlci1ib3R0b206IGJsYWNrIHNvbGlkIDFweDtcXG59XFxuXFxuLm1vZGVFZGl0b3JWaWV3IHRkIHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4ubW9kZUVkaXRvclZpZXcgLmNvbW1hbmRDZWxsIHtcXG4gIG1heC13aWR0aDogMHB4O1xcbn1cXG5cXG4ubW9kZUVkaXRvclZpZXcgLm1lc3NhZ2VDZWxsIHtcXG4gIHdpZHRoOiAyMCU7XFxufVxcblxcbi5tb2RlRWRpdG9yVmlldyAuZXhlY0NlbGwge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGZvbnQtZmFtaWx5OiBNb25hY28sIG1vbm9zcGFjZTtcXG59XFxuXFxuLm1vZGVFZGl0b3JWaWV3IC5tb2RlQ2VsbCB7XFxuICB3aWR0aDogMjAlO1xcbn1cXG5cXG4ubW9kZUVkaXRvclZpZXcgLmNvbW1hbmRFZGl0Q29sIHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gIHdpZHRoOiAxMCU7XFxufVxcblxcbi5tb2RlRWRpdG9yVmlldyAuY29tbWFuZEVkaXRCdXR0b25DZWxsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuLm1vZGVFZGl0b3JWaWV3IC5jb21tYW5kRGVsZXRlQnV0dG9uIHtcXG4gIG1hcmdpbi1yaWdodDogNSU7XFxufVxcblxcbi8qKiBBZGQgY29tbWFuZCBidXR0b24gKiovXFxuLm1vZGVFZGl0b3JWaWV3IC5jb21tYW5kQWRkQnV0dG9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5tb2RlRWRpdG9yVmlldyAuY29tbWFuZEFkZEJ1dHRvbiBidXR0b24ge1xcbiAgd2lkdGg6IGNhbGMoXFxuICAgIDNlbSArIDIwcHggKyAwLjUlXFxuICApOyAvKiAxIGZvciB0aGUgKyBzeW1ib2wsIDIgZm9yIC0+LCAwLjUlIGZvciB0aGUgcGFkZGluZywgMjBweCBmb3IgdGhlIGJvcmRlcmluZyAqL1xcbn1cXG4ubW9kZUVkaXRvclZpZXcgLmRpdkJ1dHRvbiB7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblwiXX1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21vZGVfZWRpdG9yLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvcnVudGltZS5qc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMSwgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuICgoc3RhY2sxID0gY29udGFpbmVyLmludm9rZVBhcnRpYWwocmVxdWlyZShcIi4uL3ZpZXdXcmFwcGVyL3RpdGxlLmhhbmRsZWJhcnNcIiksZGVwdGgwLHtcIm5hbWVcIjpcIi4uL3ZpZXdXcmFwcGVyL3RpdGxlXCIsXCJoYXNoXCI6e1widGl0bGVcIjooZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJuYW1lXCIpIDogZGVwdGgwKX0sXCJkYXRhXCI6ZGF0YSxcImhlbHBlcnNcIjpoZWxwZXJzLFwicGFydGlhbHNcIjpwYXJ0aWFscyxcImRlY29yYXRvcnNcIjpjb250YWluZXIuZGVjb3JhdG9yc30pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIik7XG59LFwiM1wiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMTtcblxuICByZXR1cm4gKChzdGFjazEgPSBjb250YWluZXIuaW52b2tlUGFydGlhbChyZXF1aXJlKFwiLi4vdmlld1dyYXBwZXIvdGl0bGUuaGFuZGxlYmFyc1wiKSxkZXB0aDAse1wibmFtZVwiOlwiLi4vdmlld1dyYXBwZXIvdGl0bGVcIixcImhhc2hcIjp7XCJ0aXRsZVwiOlwiW0RFRkFVTFRdXCJ9LFwiZGF0YVwiOmRhdGEsXCJoZWxwZXJzXCI6aGVscGVycyxcInBhcnRpYWxzXCI6cGFydGlhbHMsXCJkZWNvcmF0b3JzXCI6Y29udGFpbmVyLmRlY29yYXRvcnN9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpO1xufSxcIjVcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazEsIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIjx0YWJsZSBjbGFzcz1cXFwiY29tbWFuZExpc3RcXFwiPlxcbiAgICA8Y29sZ3JvdXA+XFxuICAgICAgICA8Y29sIGNsYXNzPVxcXCJjb21tYW5kQ29sIG1lc3NhZ2VDb2xcXFwiPlxcbiAgICAgICAgPGNvbCBjbGFzcz1cXFwiY29tbWFuZENvbCBleGVjQ29sXFxcIj5cXG4gICAgICAgIDxjb2wgY2xhc3M9XFxcImNvbW1hbmRDb2wgbW9kZUNvbFxcXCI+XFxuICAgICAgICA8Y29sIGNsYXNzPVxcXCJjb21tYW5kRWRpdENvbFxcXCI+XFxuICAgIDwvY29sZ3JvdXA+XFxuICAgIDx0aGVhZD5cXG4gICAgICAgIDx0cj5cXG4gICAgICAgICAgICA8dGggYWxpZ249XFxcImxlZnRcXFwiIGNsYXNzPVxcXCJtZXNzYWdlSGVhZGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdj4gTWVzc2FnZTwvZGl2PlxcbiAgICAgICAgICAgIDwvdGg+XFxuICAgICAgICAgICAgPHRoIGFsaWduPVxcXCJjZW50ZXJcXFwiIGNsYXNzPVxcXCJleGVjSGVhZGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICAgICAgICAgIENvbW1hbmRcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC90aD5cXG4gICAgICAgICAgICA8dGggYWxpZ249XFxcInJpZ2h0XFxcIiBjbGFzcz1cXFwibW9kZUhlYWRlclxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgICAgICAgICBOZXh0IE1vZGVcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC90aD5cXG4gICAgICAgICAgICA8dGg+IDwvdGg+XFxuICAgICAgICA8L3RyPlxcbiAgICA8L3RoZWFkPlxcbiAgICA8dGJvZHk+XFxuXCJcbiAgICArICgoc3RhY2sxID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImVhY2hcIikuY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImNvbW1hbmRcIikgOiBkZXB0aDApLHtcIm5hbWVcIjpcImVhY2hcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oNiwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjM0LFwiY29sdW1uXCI6OH0sXCJlbmRcIjp7XCJsaW5lXCI6NjIsXCJjb2x1bW5cIjoxN319fSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgICAgIDx0cj5cXG4gICAgICAgICAgICA8dGQgY29sc3Bhbj1cXFwiNFxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbW1hbmRFZGl0QnV0dG9uQ2VsbCBjb21tYW5kQWRkQnV0dG9uXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImRpdkJ1dHRvblxcXCI+KzwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L3RkPlxcblxcbiAgICAgICAgPC90cj5cXG4gICAgPC90Ym9keT5cXG48L3RhYmxlPlxcblwiO1xufSxcIjZcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazEsIGFsaWFzMT1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gXCIgICAgICAgIDx0cj5cXG5cIlxuICAgICsgKChzdGFjazEgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiaWZcIikuY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwibWVzc2FnZVwiKSA6IGRlcHRoMCkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oNywgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLnByb2dyYW0oOSwgZGF0YSwgMCksXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjM2LFwiY29sdW1uXCI6MTJ9LFwiZW5kXCI6e1wibGluZVwiOjQwLFwiY29sdW1uXCI6MTl9fX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiXFxuXCJcbiAgICArICgoc3RhY2sxID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImlmXCIpLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImNvbW1hbmRcIikgOiBkZXB0aDApLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDExLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIucHJvZ3JhbSgxMywgZGF0YSwgMCksXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjQyLFwiY29sdW1uXCI6MTJ9LFwiZW5kXCI6e1wibGluZVwiOjQ2LFwiY29sdW1uXCI6MTl9fX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiXFxuXCJcbiAgICArICgoc3RhY2sxID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImlmXCIpLmNhbGwoYWxpYXMxLCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwibW9kZVwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShzdGFjazEsXCJsZW5ndGhcIikgOiBzdGFjazEpLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e1wiaW5jbHVkZVplcm9cIjpmYWxzZX0sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDE1LCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIucHJvZ3JhbSgxNywgZGF0YSwgMCksXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjQ4LFwiY29sdW1uXCI6MTJ9LFwiZW5kXCI6e1wibGluZVwiOjU1LFwiY29sdW1uXCI6MTl9fX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiXFxuICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJjb21tYW5kRWRpdEJ1dHRvbkNlbGxcXFwiPlxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJkaXZCdXR0b24gY29tbWFuZERlbGV0ZUJ1dHRvblxcXCI+IHggPC9idXR0b24+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImRpdkJ1dHRvbiBjb21tYW5kRWRpdEJ1dHRvblxcXCI+IC0+IDwvYnV0dG9uPlxcbiAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICA8L3RyPlxcblwiO1xufSxcIjdcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gXCIgICAgICAgICAgICA8dGQgY2xhc3M9XFxcImNvbW1hbmRDZWxsIG1lc3NhZ2VDZWxsXFxcIj5cIlxuICAgICsgY29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24oY29udGFpbmVyLmxhbWJkYSgoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJtZXNzYWdlXCIpIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiPC90ZD5cXG5cIjtcbn0sXCI5XCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICByZXR1cm4gXCIgICAgICAgICAgICA8dGQgY2xhc3M9XFxcImNvbW1hbmRDZWxsIG1lc3NhZ2VDZWxsXFxcIj5bREVGQVVMVF08L3RkPlxcblwiO1xufSxcIjExXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuIFwiICAgICAgICAgICAgPHRkIGFsaWduPVxcXCJjZW50ZXJcXFwiIGNsYXNzPVxcXCJjb21tYW5kQ2VsbCBleGVjQ2VsbFxcXCI+XCJcbiAgICArIGNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uKGNvbnRhaW5lci5sYW1iZGEoKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiY29tbWFuZFwiKSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIjwvdGQ+XFxuXCI7XG59LFwiMTNcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHJldHVybiBcIiAgICAgICAgICAgIDx0ZCBhbGlnbj1cXFwiY2VudGVyXFxcIiBjbGFzcz1cXFwiY29tbWFuZENlbGwgZXhlY0NlbGwgZW1wdHlDZWxsXFxcIj4gLSA8L3RkPlxcblwiO1xufSxcIjE1XCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuIFwiICAgICAgICAgICAgPHRkIGFsaWduPVxcXCJyaWdodFxcXCIgY2xhc3M9XFxcImNvbW1hbmRDZWxsIG1vZGVDZWxsXFxcIj5cIlxuICAgICsgY29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24oY29udGFpbmVyLmxhbWJkYSgoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJtb2RlXCIpIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiPC90ZD5cXG4gICAgICAgICAgICBcIjtcbn0sXCIxN1wiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMSwgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuIFwiIFwiXG4gICAgKyAoKHN0YWNrMSA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJpZlwiKS5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJtb2RlXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KHN0YWNrMSxcImxlbmd0aFwiKSA6IHN0YWNrMSkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7XCJpbmNsdWRlWmVyb1wiOnRydWV9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxOCwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLnByb2dyYW0oMjAsIGRhdGEsIDApLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjo1MCxcImNvbHVtblwiOjIxfSxcImVuZFwiOntcImxpbmVcIjo1NCxcImNvbHVtblwiOjE5fX19KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpO1xufSxcIjE4XCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICByZXR1cm4gXCJcXG4gICAgICAgICAgICA8dGQgYWxpZ249XFxcInJpZ2h0XFxcIiBjbGFzcz1cXFwiY29tbWFuZENlbGwgbW9kZUNlbGxcXFwiPltERUZBVUxUXTwvdGQ+XFxuXCI7XG59LFwiMjBcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHJldHVybiBcIiAgICAgICAgICAgIDx0ZCBhbGlnbj1cXFwicmlnaHRcXFwiIGNsYXNzPVxcXCJjb21tYW5kQ2VsbCBtb2RlQ2VsbCBlbXB0eUNlbGxcXFwiPiAtIDwvdGQ+XFxuXCI7XG59LFwiMjJcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazEsIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiAoKHN0YWNrMSA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJpZlwiKS5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwibmFtZVwiKSA6IGRlcHRoMCkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMjMsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5wcm9ncmFtKDI1LCBkYXRhLCAwKSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6NzYsXCJjb2x1bW5cIjowfSxcImVuZFwiOntcImxpbmVcIjo4MCxcImNvbHVtblwiOjd9fX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArICgoc3RhY2sxID0gY29udGFpbmVyLmludm9rZVBhcnRpYWwocmVxdWlyZShcIi4uL3ZpZXdXcmFwcGVyL2ZpbmlzaEJ1dHRvbi5oYW5kbGViYXJzXCIpLGRlcHRoMCx7XCJuYW1lXCI6XCIuLi92aWV3V3JhcHBlci9maW5pc2hCdXR0b25cIixcImhhc2hcIjp7XCJ0ZXh0XCI6XCJDYW5jZWxcIixcImlkZW50XCI6XCJjYW5jZWxCdXR0b25cIn0sXCJkYXRhXCI6ZGF0YSxcImhlbHBlcnNcIjpoZWxwZXJzLFwicGFydGlhbHNcIjpwYXJ0aWFscyxcImRlY29yYXRvcnNcIjpjb250YWluZXIuZGVjb3JhdG9yc30pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIik7XG59LFwiMjNcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuICgoc3RhY2sxID0gY29udGFpbmVyLmludm9rZVBhcnRpYWwocmVxdWlyZShcIi4uL3ZpZXdXcmFwcGVyL2ZpbmlzaEJ1dHRvbi5oYW5kbGViYXJzXCIpLGRlcHRoMCx7XCJuYW1lXCI6XCIuLi92aWV3V3JhcHBlci9maW5pc2hCdXR0b25cIixcImhhc2hcIjp7XCJ0ZXh0XCI6XCJSZW5hbWVcIixcImlkZW50XCI6XCJyZW5hbWVCdXR0b25cIn0sXCJkYXRhXCI6ZGF0YSxcImhlbHBlcnNcIjpoZWxwZXJzLFwicGFydGlhbHNcIjpwYXJ0aWFscyxcImRlY29yYXRvcnNcIjpjb250YWluZXIuZGVjb3JhdG9yc30pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIik7XG59LFwiMjVcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuICgoc3RhY2sxID0gY29udGFpbmVyLmludm9rZVBhcnRpYWwocmVxdWlyZShcIi4uL3ZpZXdXcmFwcGVyL2ZpbmlzaEJ1dHRvbi5oYW5kbGViYXJzXCIpLGRlcHRoMCx7XCJuYW1lXCI6XCIuLi92aWV3V3JhcHBlci9maW5pc2hCdXR0b25cIixcImhhc2hcIjp7XCJkaXNhYmxlZFwiOlwidHJ1ZVwiLFwidGV4dFwiOlwiUmVuYW1lXCIsXCJpZGVudFwiOlwicmVuYW1lQnV0dG9uXCJ9LFwiZGF0YVwiOmRhdGEsXCJoZWxwZXJzXCI6aGVscGVycyxcInBhcnRpYWxzXCI6cGFydGlhbHMsXCJkZWNvcmF0b3JzXCI6Y29udGFpbmVyLmRlY29yYXRvcnN9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpO1xufSxcImNvbXBpbGVyXCI6WzgsXCI+PSA0LjMuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazEsIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiAoKHN0YWNrMSA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJpZlwiKS5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwibmFtZVwiKSA6IGRlcHRoMCkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMSwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLnByb2dyYW0oMywgZGF0YSwgMCksXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjEsXCJjb2x1bW5cIjowfSxcImVuZFwiOntcImxpbmVcIjo1LFwiY29sdW1uXCI6N319fSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCJcXG5cIlxuICAgICsgKChzdGFjazEgPSBjb250YWluZXIuaW52b2tlUGFydGlhbChyZXF1aXJlKFwiLi4vdmlld1dyYXBwZXIvY29udGVudC5oYW5kbGViYXJzXCIpLGRlcHRoMCx7XCJuYW1lXCI6XCIuLi92aWV3V3JhcHBlci9jb250ZW50XCIsXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDUsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGEsXCJoZWxwZXJzXCI6aGVscGVycyxcInBhcnRpYWxzXCI6cGFydGlhbHMsXCJkZWNvcmF0b3JzXCI6Y29udGFpbmVyLmRlY29yYXRvcnN9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGNvbnRhaW5lci5pbnZva2VQYXJ0aWFsKHJlcXVpcmUoXCIuLi92aWV3V3JhcHBlci9maW5pc2hSb3cuaGFuZGxlYmFyc1wiKSxkZXB0aDAse1wibmFtZVwiOlwiLi4vdmlld1dyYXBwZXIvZmluaXNoUm93XCIsXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDIyLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhLFwiaGVscGVyc1wiOmhlbHBlcnMsXCJwYXJ0aWFsc1wiOnBhcnRpYWxzLFwiZGVjb3JhdG9yc1wiOmNvbnRhaW5lci5kZWNvcmF0b3JzfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKTtcbn0sXCJ1c2VQYXJ0aWFsXCI6dHJ1ZSxcInVzZURhdGFcIjp0cnVlfSk7IiwiaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vbW9kZV9lZGl0b3IuaGFuZGxlYmFycyc7XG5pbXBvcnQgJy4vbW9kZV9lZGl0b3IuY3NzJztcbmltcG9ydCAnLi4vZGl2QnV0dG9uL2RpdkJ1dHRvbi5jc3MnO1xuaW1wb3J0ICcuLi92aWV3V3JhcHBlci92aWV3V3JhcHBlci5jc3MnO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uLy4uL21vZGVsZGF0YScpLkNvbW1hbmR9IENvbW1hbmRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uLy4uL21vZGVsZGF0YScpLk1vZGV9IE1vZGVcbiAqXG4gKi9cblxuLyoqXG4gKiBAcGFyYW0ge01vZGV9IG1vZGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IG9ucmVuYW1lXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBvbmNhbmNlbFxuICogQHBhcmFtIHtGdW5jdGlvbn0gb25lZGl0bW9kZVxuICogQHJldHVybnMge01vZGVFZGl0b3JWaWV3fVxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFrZUVkaXRvcihtb2RlKSB7XG4gICAgcmV0dXJuIG5ldyBNb2RlRWRpdG9yVmlldyhtb2RlKTtcbn1cblxuLyoqXG4gKiBAY2FsbGJhY2sgRWRpdENvbW1hbmRDYWxsYmFja1xuICogQHBhcmFtIHtzdHJpbmd9IG1vZGVuYW1lXG4gKiBAcGFyYW0ge251bWJlcn0gaWR4IFxuICogQHBhcmFtIHtDb21tYW5kfSBjbWQgXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAqL1xuXG4vKipcbiogQGNhbGxiYWNrIERlbGV0ZUNvbW1hbmRDYWxsYmFja1xuKiBAcGFyYW0ge3N0cmluZ30gbW9kZW5hbWVcbiogQHBhcmFtIHtudW1iZXJ9IGlkeCBcbiogQHBhcmFtIHtDb21tYW5kfSBjbWQgXG4qIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgUmVuYW1lQ2FsbGJhY2sgXG4gKiBAcGFyYW0ge01vZGV9IG1vZGVcbiAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICovXG4vKipcbiAqIEBjYWxsYmFjayBDYW5jZWxDYWxsYmFjayBcbiAqIEBwYXJhbSB7TW9kZX0gbW9kZVxuICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gKi9cblxuLyoqXG4gKiBAY2xhc3MgTW9kZUVkaXRvclZpZXcgXG4gKiBAcHJvcGVydHkgZWxtIHtIVE1MRWxlbWVudH1cbiAqIEBwcm9wZXJ0eSBtb2RlIHtNb2RlfVxuICogQHByb3BlcnR5IG9ucmVuYW1lIHtSZW5hbWVDYWxsYmFja31cbiAqIEBwcm9wZXJ0eSBvbmNhbmNlbCB7Q2FuY2VsQ2FsbGJhY2t9XG4gKiBAcHJvcGVydHkgb25lZGl0Y29tbWFuZCB7RWRpdENvbW1hbmRDYWxsYmFja31cbiAqIEBwcm9wZXJ0eSBvbmRlbGV0ZWNvbW1hbmQge0RlbGV0ZUNvbW1hbmRDYWxsYmFja31cbiAqL1xuY2xhc3MgTW9kZUVkaXRvclZpZXcge1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtNb2RlfSBtZCBcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihtZCkge1xuICAgICAgICB0aGlzLm1vZGUgPSBtZDtcblxuICAgICAgICAvKiogQHR5cGUge1JlbmFtZUNhbGxiYWNrfSAqL1xuICAgICAgICB0aGlzLm9ucmVuYW1lID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHt9KTsgfTtcblxuICAgICAgICAvKiogQHR5cGUge0NhbmNlbENhbGxiYWNrfSAqL1xuICAgICAgICB0aGlzLm9uY2FuY2VsID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHt9KTsgfTtcblxuICAgICAgICAvKiogQHR5cGUge0VkaXRDb21tYW5kQ2FsbGJhY2t9ICovXG4gICAgICAgIHRoaXMub25lZGl0Y29tbWFuZCA9IGFzeW5jIGZ1bmN0aW9uIChtb2RlbmFtZSwgaWR4LCBjbWQpIHtcbiAgICAgICAgICAgIGxldCBuZXd2aWV3ID0gYXdhaXQgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiY29tbWFuZGVkaXRvci1tb2RlZWRpdG9yLTFcIiAqLycuLi9jb21tYW5kRWRpdG9yVmlldy9jb21tYW5kX2VkaXRvcicpLnRoZW4obW9kID0+IG1vZC5tYWtlRWRpdG9yKG1vZGVuYW1lLCBpZHgsIGNtZCkpO1xuICAgICAgICAgICAgY29uc3QgcHJldlNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgbmV3dmlldy5vbnNhdmUgPSBhc3luYyAocGFyZW50TW9kZSwgaWR4LCBjbWQpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgY2hhbmdlZCA9IGF3YWl0IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIm1vZGVsZGF0YS1tb2RlZWRpdG9yLTFcIiAqLyAnLi4vLi4vbW9kZWxkYXRhJykudGhlbihtb2QgPT4gbW9kLnNldENvbW1hbmQocGFyZW50TW9kZSwgaWR4LCBjbWQpKTtcbiAgICAgICAgICAgICAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbm1vZGUgPSBhd2FpdCBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogJ21vZGVsZGF0YS1tb2RlZWRpdG9yLTInICovICcuLi8uLi9tb2RlbGRhdGEnKS50aGVuKG1vZCA9PiBtb2QuZ2V0TW9kZShwcmV2U2VsZi5tb2RlLm5hbWUpKTtcbiAgICAgICAgICAgICAgICAgICAgcHJldlNlbGYubW9kZSA9IG5tb2RlO1xuICAgICAgICAgICAgICAgICAgICBwcmV2U2VsZi5yZWxvYWRWaWV3KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5ld3ZpZXcuZWxtLnJlcGxhY2VXaXRoKHByZXZTZWxmLmVsbSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbmV3dmlldy5vbmNhbmNlbCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBuZXd2aWV3LmVsbS5yZXBsYWNlV2l0aChwcmV2U2VsZi5lbG0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuZWxtLnJlcGxhY2VXaXRoKG5ld3ZpZXcuZWxtKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKiogQHR5cGUge0RlbGV0ZUNvbW1hbmRDYWxsYmFja30gKi9cbiAgICAgICAgdGhpcy5vbmRlbGV0ZWNvbW1hbmQgPSBhc3luYyBmdW5jdGlvbiAobW9kZW5hbWUsIGlkeCwgY21kKSB7XG4gICAgICAgICAgICBjb25zdCBtb2RlZGF0YSA9IGF3YWl0IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnbW9kZWxkYXRhLW1vZGVlZGl0b3ItMycgKi8gJy4uLy4uL21vZGVsZGF0YScpO1xuICAgICAgICAgICAgaWYgKGF3YWl0IG1vZGVkYXRhLmRlbGV0ZUNvbW1hbmQobW9kZW5hbWUsIGlkeCwgY21kKSkge1xuICAgICAgICAgICAgICAgIHRoaXMubW9kZSA9IGF3YWl0IG1vZGVkYXRhLmdldE1vZGUodGhpcy5tb2RlLm5hbWUpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVsb2FkVmlldygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMub25hZGRjb21tYW5kID0gYXN5bmMgZnVuY3Rpb24gKG1vZGVuYW1lLCBpZHgpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMub25lZGl0Y29tbWFuZChtb2RlbmFtZSwgaWR4LCB7IG1lc3NhZ2U6IFwiXCIgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuZWxtLmNsYXNzTGlzdC5hZGQoJ21vZGVFZGl0b3JWaWV3Jyk7XG4gICAgICAgIHRoaXMuZWxtLmNsYXNzTGlzdC5hZGQoJ3ZpZXdXcmFwcGVyJyk7XG4gICAgICAgIHRoaXMucmVsb2FkVmlldygpO1xuICAgIH1cblxuICAgIHJlbG9hZFZpZXcoKSB7XG4gICAgICAgIHRoaXMuZWxtLmlubmVySFRNTCA9IHRlbXBsYXRlKHRoaXMubW9kZSk7XG4gICAgICAgIGlmICh0aGlzLm1vZGUubmFtZSkge1xuICAgICAgICAgICAgdGhpcy5lbG0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncmVuYW1lQnV0dG9uJylbMF0ub25jbGljayA9ICgpID0+IHRoaXMub25yZW5hbWUodGhpcy5tb2RlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsbS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjYW5jZWxCdXR0b24nKVswXS5vbmNsaWNrID0gKCkgPT4gdGhpcy5vbmNhbmNlbCh0aGlzLm1vZGUpO1xuICAgICAgICB2YXIgZWRpdEJ1dHRvbnMgPSB0aGlzLmVsbS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb21tYW5kRWRpdEJ1dHRvbicpO1xuICAgICAgICB2YXIgZGVsZXRlQnV0dG9ucyA9IHRoaXMuZWxtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NvbW1hbmREZWxldGVCdXR0b24nKTtcbiAgICAgICAgZm9yICh2YXIgaWR4ID0gMDsgaWR4IDwgdGhpcy5tb2RlLmNvbW1hbmQubGVuZ3RoOyBpZHgrKykge1xuICAgICAgICAgICAgbGV0IGpkeCA9IGlkeCB8IDA7XG4gICAgICAgICAgICBsZXQgYnRuID0gZWRpdEJ1dHRvbnNbaWR4XTtcbiAgICAgICAgICAgIGxldCBkZWxidG4gPSBkZWxldGVCdXR0b25zW2lkeF07XG4gICAgICAgICAgICBsZXQgY21kID0gdGhpcy5tb2RlLmNvbW1hbmRbaWR4XTtcbiAgICAgICAgICAgIGJ0bi5vbmNsaWNrID0gKCkgPT4gdGhpcy5vbmVkaXRjb21tYW5kKHRoaXMubW9kZS5uYW1lLCBqZHgsIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoY21kKSkpO1xuICAgICAgICAgICAgZGVsYnRuLm9uY2xpY2sgPSAoKSA9PiB0aGlzLm9uZGVsZXRlY29tbWFuZCh0aGlzLm1vZGUubmFtZSwgamR4LCBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGNtZCkpKTtcblxuICAgICAgICB9XG4gICAgICAgIHZhciBhZGRidXR0b24gPSB0aGlzLmVsbS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb21tYW5kQWRkQnV0dG9uJylbMF07XG4gICAgICAgIGFkZGJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gdGhpcy5vbmFkZGNvbW1hbmQodGhpcy5tb2RlLm5hbWUsIHRoaXMubW9kZS5jb21tYW5kLmxlbmd0aCk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==