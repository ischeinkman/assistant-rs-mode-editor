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
___CSS_LOADER_EXPORT___.push([module.i, ".modeEditorView table {\n  padding-right: 10px;\n  padding-left: 10px;\n  width: 100%;\n}\n\n.modeEditorView tbody {\n  overflow-y: scroll;\n}\n\n.modeEditorView th div {\n  width: max-content;\n  border-bottom: black solid 1px;\n}\n\n.modeEditorView td {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  margin-bottom: 10px;\n}\n\n.modeEditorView .commandCell {\n  max-width: 0px;\n}\n\n.modeEditorView .messageCell {\n  width: 20%;\n}\n\n.modeEditorView .execCell {\n  width: 50%;\n  font-family: Monaco, monospace;\n}\n\n.modeEditorView .modeCell {\n  width: 20%;\n}\n\n.modeEditorView .commandEditCol {\n  white-space: nowrap;\n  overflow: visible;\n  width: 10%;\n}\n\n.modeEditorView .commandEditButtonCell {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n.modeEditorView .commandDeleteButton {\n  margin-right: 5%;\n}\n\n/** Add command button **/\n.modeEditorView .commandAddButton {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n}\n\n.modeEditorView .commandAddButton button {\n  width: calc(\n    3em + 20px + 0.5%\n  ); /* 1 for the + symbol, 2 for ->, 0.5% for the padding, 20px for the bordering */\n}\n.modeEditorView .divButton {\n  font-size: 1.3em;\n}\n", "",{"version":3,"sources":["mode_editor.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,8BAA8B;AAChC;;AAEA;EACE,mBAAmB;EACnB,uBAAuB;EACvB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,UAAU;EACV,8BAA8B;AAChC;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,mBAAmB;EACnB,iBAAiB;EACjB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,yBAAyB;AAC3B;AACA;EACE,gBAAgB;AAClB;;AAEA,yBAAyB;AACzB;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE;;GAEC,EAAE,+EAA+E;AACpF;AACA;EACE,gBAAgB;AAClB","file":"mode_editor.css","sourcesContent":[".modeEditorView table {\n  padding-right: 10px;\n  padding-left: 10px;\n  width: 100%;\n}\n\n.modeEditorView tbody {\n  overflow-y: scroll;\n}\n\n.modeEditorView th div {\n  width: max-content;\n  border-bottom: black solid 1px;\n}\n\n.modeEditorView td {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  margin-bottom: 10px;\n}\n\n.modeEditorView .commandCell {\n  max-width: 0px;\n}\n\n.modeEditorView .messageCell {\n  width: 20%;\n}\n\n.modeEditorView .execCell {\n  width: 50%;\n  font-family: Monaco, monospace;\n}\n\n.modeEditorView .modeCell {\n  width: 20%;\n}\n\n.modeEditorView .commandEditCol {\n  white-space: nowrap;\n  overflow: visible;\n  width: 10%;\n}\n\n.modeEditorView .commandEditButtonCell {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n.modeEditorView .commandDeleteButton {\n  margin-right: 5%;\n}\n\n/** Add command button **/\n.modeEditorView .commandAddButton {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n}\n\n.modeEditorView .commandAddButton button {\n  width: calc(\n    3em + 20px + 0.5%\n  ); /* 1 for the + symbol, 2 for ->, 0.5% for the padding, 20px for the bordering */\n}\n.modeEditorView .divButton {\n  font-size: 1.3em;\n}\n"]}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2RlRWRpdG9yVmlldy9tb2RlX2VkaXRvci5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9kZUVkaXRvclZpZXcvbW9kZV9lZGl0b3IuY3NzP2EwYjUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9kZUVkaXRvclZpZXcvbW9kZV9lZGl0b3IuaGFuZGxlYmFycyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2RlRWRpdG9yVmlldy9tb2RlX2VkaXRvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQytGO0FBQy9GLDhCQUE4QixtRkFBMkI7QUFDekQ7QUFDQSw4QkFBOEIsUUFBUywwQkFBMEIsd0JBQXdCLHVCQUF1QixnQkFBZ0IsR0FBRywyQkFBMkIsdUJBQXVCLEdBQUcsNEJBQTRCLHVCQUF1QixtQ0FBbUMsR0FBRyx3QkFBd0Isd0JBQXdCLDRCQUE0QixxQkFBcUIsd0JBQXdCLEdBQUcsa0NBQWtDLG1CQUFtQixHQUFHLGtDQUFrQyxlQUFlLEdBQUcsK0JBQStCLGVBQWUsbUNBQW1DLEdBQUcsK0JBQStCLGVBQWUsR0FBRyxxQ0FBcUMsd0JBQXdCLHNCQUFzQixlQUFlLEdBQUcsNENBQTRDLGtCQUFrQix3QkFBd0IsOEJBQThCLEdBQUcsd0NBQXdDLHFCQUFxQixHQUFHLG1FQUFtRSxnQkFBZ0Isa0JBQWtCLHdCQUF3QixHQUFHLDhDQUE4Qyw2Q0FBNkMsb0ZBQW9GLDhCQUE4QixxQkFBcUIsR0FBRyxTQUFTLHNFQUFzRSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFL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Q2xDLHFDQUFxQywwQkFBMEIsRUFBRTs7QUFFakUsbUJBQW1CLGVBQWU7QUFDbEMscUNBQXFDLDBCQUEwQixFQUFFOztBQUVqRSxtQkFBbUIsb0JBQW9CO0FBQ3ZDO0FBQ0EsZ0NBQWdDLHdPQUFpRztBQUNqSTtBQUNBO0FBQ0Esb0NBQW9DLHFLQUEwRTtBQUM5RztBQUNBLHNDQUFzQyxxS0FBMEU7QUFDaEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBLG1DQUFtQyxxS0FBMEU7QUFDN0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRCxjQUFjO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZCQUE2Qiw4REFBUTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZ0NBQWdDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1vZGVlZGl0b3ItbW9kZWxpc3QtMS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubW9kZUVkaXRvclZpZXcgdGFibGUge1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubW9kZUVkaXRvclZpZXcgdGJvZHkge1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4ubW9kZUVkaXRvclZpZXcgdGggZGl2IHtcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG4gIGJvcmRlci1ib3R0b206IGJsYWNrIHNvbGlkIDFweDtcXG59XFxuXFxuLm1vZGVFZGl0b3JWaWV3IHRkIHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4ubW9kZUVkaXRvclZpZXcgLmNvbW1hbmRDZWxsIHtcXG4gIG1heC13aWR0aDogMHB4O1xcbn1cXG5cXG4ubW9kZUVkaXRvclZpZXcgLm1lc3NhZ2VDZWxsIHtcXG4gIHdpZHRoOiAyMCU7XFxufVxcblxcbi5tb2RlRWRpdG9yVmlldyAuZXhlY0NlbGwge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGZvbnQtZmFtaWx5OiBNb25hY28sIG1vbm9zcGFjZTtcXG59XFxuXFxuLm1vZGVFZGl0b3JWaWV3IC5tb2RlQ2VsbCB7XFxuICB3aWR0aDogMjAlO1xcbn1cXG5cXG4ubW9kZUVkaXRvclZpZXcgLmNvbW1hbmRFZGl0Q29sIHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gIHdpZHRoOiAxMCU7XFxufVxcblxcbi5tb2RlRWRpdG9yVmlldyAuY29tbWFuZEVkaXRCdXR0b25DZWxsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuLm1vZGVFZGl0b3JWaWV3IC5jb21tYW5kRGVsZXRlQnV0dG9uIHtcXG4gIG1hcmdpbi1yaWdodDogNSU7XFxufVxcblxcbi8qKiBBZGQgY29tbWFuZCBidXR0b24gKiovXFxuLm1vZGVFZGl0b3JWaWV3IC5jb21tYW5kQWRkQnV0dG9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5tb2RlRWRpdG9yVmlldyAuY29tbWFuZEFkZEJ1dHRvbiBidXR0b24ge1xcbiAgd2lkdGg6IGNhbGMoXFxuICAgIDNlbSArIDIwcHggKyAwLjUlXFxuICApOyAvKiAxIGZvciB0aGUgKyBzeW1ib2wsIDIgZm9yIC0+LCAwLjUlIGZvciB0aGUgcGFkZGluZywgMjBweCBmb3IgdGhlIGJvcmRlcmluZyAqL1xcbn1cXG4ubW9kZUVkaXRvclZpZXcgLmRpdkJ1dHRvbiB7XFxuICBmb250LXNpemU6IDEuM2VtO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJtb2RlX2VkaXRvci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtFQUNWLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQSx5QkFBeUI7QUFDekI7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFOztHQUVDLEVBQUUsK0VBQStFO0FBQ3BGO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEJcIixcImZpbGVcIjpcIm1vZGVfZWRpdG9yLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubW9kZUVkaXRvclZpZXcgdGFibGUge1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubW9kZUVkaXRvclZpZXcgdGJvZHkge1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4ubW9kZUVkaXRvclZpZXcgdGggZGl2IHtcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG4gIGJvcmRlci1ib3R0b206IGJsYWNrIHNvbGlkIDFweDtcXG59XFxuXFxuLm1vZGVFZGl0b3JWaWV3IHRkIHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4ubW9kZUVkaXRvclZpZXcgLmNvbW1hbmRDZWxsIHtcXG4gIG1heC13aWR0aDogMHB4O1xcbn1cXG5cXG4ubW9kZUVkaXRvclZpZXcgLm1lc3NhZ2VDZWxsIHtcXG4gIHdpZHRoOiAyMCU7XFxufVxcblxcbi5tb2RlRWRpdG9yVmlldyAuZXhlY0NlbGwge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGZvbnQtZmFtaWx5OiBNb25hY28sIG1vbm9zcGFjZTtcXG59XFxuXFxuLm1vZGVFZGl0b3JWaWV3IC5tb2RlQ2VsbCB7XFxuICB3aWR0aDogMjAlO1xcbn1cXG5cXG4ubW9kZUVkaXRvclZpZXcgLmNvbW1hbmRFZGl0Q29sIHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gIHdpZHRoOiAxMCU7XFxufVxcblxcbi5tb2RlRWRpdG9yVmlldyAuY29tbWFuZEVkaXRCdXR0b25DZWxsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuLm1vZGVFZGl0b3JWaWV3IC5jb21tYW5kRGVsZXRlQnV0dG9uIHtcXG4gIG1hcmdpbi1yaWdodDogNSU7XFxufVxcblxcbi8qKiBBZGQgY29tbWFuZCBidXR0b24gKiovXFxuLm1vZGVFZGl0b3JWaWV3IC5jb21tYW5kQWRkQnV0dG9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5tb2RlRWRpdG9yVmlldyAuY29tbWFuZEFkZEJ1dHRvbiBidXR0b24ge1xcbiAgd2lkdGg6IGNhbGMoXFxuICAgIDNlbSArIDIwcHggKyAwLjUlXFxuICApOyAvKiAxIGZvciB0aGUgKyBzeW1ib2wsIDIgZm9yIC0+LCAwLjUlIGZvciB0aGUgcGFkZGluZywgMjBweCBmb3IgdGhlIGJvcmRlcmluZyAqL1xcbn1cXG4ubW9kZUVkaXRvclZpZXcgLmRpdkJ1dHRvbiB7XFxuICBmb250LXNpemU6IDEuM2VtO1xcbn1cXG5cIl19XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tb2RlX2VkaXRvci5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL3J1bnRpbWUuanNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcIjFcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazEsIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiAoKHN0YWNrMSA9IGNvbnRhaW5lci5pbnZva2VQYXJ0aWFsKHJlcXVpcmUoXCIuLi92aWV3V3JhcHBlci90aXRsZS5oYW5kbGViYXJzXCIpLGRlcHRoMCx7XCJuYW1lXCI6XCIuLi92aWV3V3JhcHBlci90aXRsZVwiLFwiaGFzaFwiOntcInRpdGxlXCI6KGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwibmFtZVwiKSA6IGRlcHRoMCl9LFwiZGF0YVwiOmRhdGEsXCJoZWxwZXJzXCI6aGVscGVycyxcInBhcnRpYWxzXCI6cGFydGlhbHMsXCJkZWNvcmF0b3JzXCI6Y29udGFpbmVyLmRlY29yYXRvcnN9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpO1xufSxcIjNcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuICgoc3RhY2sxID0gY29udGFpbmVyLmludm9rZVBhcnRpYWwocmVxdWlyZShcIi4uL3ZpZXdXcmFwcGVyL3RpdGxlLmhhbmRsZWJhcnNcIiksZGVwdGgwLHtcIm5hbWVcIjpcIi4uL3ZpZXdXcmFwcGVyL3RpdGxlXCIsXCJoYXNoXCI6e1widGl0bGVcIjpcIltERUZBVUxUXVwifSxcImRhdGFcIjpkYXRhLFwiaGVscGVyc1wiOmhlbHBlcnMsXCJwYXJ0aWFsc1wiOnBhcnRpYWxzLFwiZGVjb3JhdG9yc1wiOmNvbnRhaW5lci5kZWNvcmF0b3JzfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKTtcbn0sXCI1XCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gXCI8dGFibGUgY2xhc3M9XFxcImNvbW1hbmRMaXN0XFxcIj5cXG4gICAgPGNvbGdyb3VwPlxcbiAgICAgICAgPGNvbCBjbGFzcz1cXFwiY29tbWFuZENvbCBtZXNzYWdlQ29sXFxcIj5cXG4gICAgICAgIDxjb2wgY2xhc3M9XFxcImNvbW1hbmRDb2wgZXhlY0NvbFxcXCI+XFxuICAgICAgICA8Y29sIGNsYXNzPVxcXCJjb21tYW5kQ29sIG1vZGVDb2xcXFwiPlxcbiAgICAgICAgPGNvbCBjbGFzcz1cXFwiY29tbWFuZEVkaXRDb2xcXFwiPlxcbiAgICA8L2NvbGdyb3VwPlxcbiAgICA8dGhlYWQ+XFxuICAgICAgICA8dHI+XFxuICAgICAgICAgICAgPHRoIGFsaWduPVxcXCJsZWZ0XFxcIiBjbGFzcz1cXFwibWVzc2FnZUhlYWRlclxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXY+IE1lc3NhZ2U8L2Rpdj5cXG4gICAgICAgICAgICA8L3RoPlxcbiAgICAgICAgICAgIDx0aCBhbGlnbj1cXFwiY2VudGVyXFxcIiBjbGFzcz1cXFwiZXhlY0hlYWRlclxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgICAgICAgICBDb21tYW5kXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvdGg+XFxuICAgICAgICAgICAgPHRoIGFsaWduPVxcXCJyaWdodFxcXCIgY2xhc3M9XFxcIm1vZGVIZWFkZXJcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgTmV4dCBNb2RlXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvdGg+XFxuICAgICAgICAgICAgPHRoPiA8L3RoPlxcbiAgICAgICAgPC90cj5cXG4gICAgPC90aGVhZD5cXG4gICAgPHRib2R5PlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJlYWNoXCIpLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJjb21tYW5kXCIpIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDYsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjozNCxcImNvbHVtblwiOjh9LFwiZW5kXCI6e1wibGluZVwiOjYyLFwiY29sdW1uXCI6MTd9fX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiICAgICAgICA8dHI+XFxuICAgICAgICAgICAgPHRkIGNvbHNwYW49XFxcIjRcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb21tYW5kRWRpdEJ1dHRvbkNlbGwgY29tbWFuZEFkZEJ1dHRvblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJkaXZCdXR0b25cXFwiPis8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC90ZD5cXG5cXG4gICAgICAgIDwvdHI+XFxuICAgIDwvdGJvZHk+XFxuPC90YWJsZT5cXG5cIjtcbn0sXCI2XCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBhbGlhczE9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuIFwiICAgICAgICA8dHI+XFxuXCJcbiAgICArICgoc3RhY2sxID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImlmXCIpLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcIm1lc3NhZ2VcIikgOiBkZXB0aDApLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDcsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5wcm9ncmFtKDksIGRhdGEsIDApLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjozNixcImNvbHVtblwiOjEyfSxcImVuZFwiOntcImxpbmVcIjo0MCxcImNvbHVtblwiOjE5fX19KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJpZlwiKS5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJjb21tYW5kXCIpIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxMSwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLnByb2dyYW0oMTMsIGRhdGEsIDApLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjo0MixcImNvbHVtblwiOjEyfSxcImVuZFwiOntcImxpbmVcIjo0NixcImNvbHVtblwiOjE5fX19KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJpZlwiKS5jYWxsKGFsaWFzMSwoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcIm1vZGVcIikgOiBkZXB0aDApKSAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoc3RhY2sxLFwibGVuZ3RoXCIpIDogc3RhY2sxKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOntcImluY2x1ZGVaZXJvXCI6ZmFsc2V9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxNSwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLnByb2dyYW0oMTcsIGRhdGEsIDApLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjo0OCxcImNvbHVtblwiOjEyfSxcImVuZFwiOntcImxpbmVcIjo1NSxcImNvbHVtblwiOjE5fX19KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIlxcbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwiY29tbWFuZEVkaXRCdXR0b25DZWxsXFxcIj5cXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiZGl2QnV0dG9uIGNvbW1hbmREZWxldGVCdXR0b25cXFwiPiB4IDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJkaXZCdXR0b24gY29tbWFuZEVkaXRCdXR0b25cXFwiPiAtPiA8L2J1dHRvbj5cXG4gICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgPC90cj5cXG5cIjtcbn0sXCI3XCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuIFwiICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJjb21tYW5kQ2VsbCBtZXNzYWdlQ2VsbFxcXCI+XCJcbiAgICArIGNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uKGNvbnRhaW5lci5sYW1iZGEoKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwibWVzc2FnZVwiKSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIjwvdGQ+XFxuXCI7XG59LFwiOVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgcmV0dXJuIFwiICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJjb21tYW5kQ2VsbCBtZXNzYWdlQ2VsbFxcXCI+W0RFRkFVTFRdPC90ZD5cXG5cIjtcbn0sXCIxMVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIiAgICAgICAgICAgIDx0ZCBhbGlnbj1cXFwiY2VudGVyXFxcIiBjbGFzcz1cXFwiY29tbWFuZENlbGwgZXhlY0NlbGxcXFwiPlwiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbihjb250YWluZXIubGFtYmRhKChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImNvbW1hbmRcIikgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCI8L3RkPlxcblwiO1xufSxcIjEzXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICByZXR1cm4gXCIgICAgICAgICAgICA8dGQgYWxpZ249XFxcImNlbnRlclxcXCIgY2xhc3M9XFxcImNvbW1hbmRDZWxsIGV4ZWNDZWxsIGVtcHR5Q2VsbFxcXCI+IC0gPC90ZD5cXG5cIjtcbn0sXCIxNVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIiAgICAgICAgICAgIDx0ZCBhbGlnbj1cXFwicmlnaHRcXFwiIGNsYXNzPVxcXCJjb21tYW5kQ2VsbCBtb2RlQ2VsbFxcXCI+XCJcbiAgICArIGNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uKGNvbnRhaW5lci5sYW1iZGEoKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwibW9kZVwiKSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIjwvdGQ+XFxuICAgICAgICAgICAgXCI7XG59LFwiMTdcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazEsIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIiBcIlxuICAgICsgKChzdGFjazEgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiaWZcIikuY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwibW9kZVwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShzdGFjazEsXCJsZW5ndGhcIikgOiBzdGFjazEpLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e1wiaW5jbHVkZVplcm9cIjp0cnVlfSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMTgsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5wcm9ncmFtKDIwLCBkYXRhLCAwKSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6NTAsXCJjb2x1bW5cIjoyMX0sXCJlbmRcIjp7XCJsaW5lXCI6NTQsXCJjb2x1bW5cIjoxOX19fSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKTtcbn0sXCIxOFwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgcmV0dXJuIFwiXFxuICAgICAgICAgICAgPHRkIGFsaWduPVxcXCJyaWdodFxcXCIgY2xhc3M9XFxcImNvbW1hbmRDZWxsIG1vZGVDZWxsXFxcIj5bREVGQVVMVF08L3RkPlxcblwiO1xufSxcIjIwXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICByZXR1cm4gXCIgICAgICAgICAgICA8dGQgYWxpZ249XFxcInJpZ2h0XFxcIiBjbGFzcz1cXFwiY29tbWFuZENlbGwgbW9kZUNlbGwgZW1wdHlDZWxsXFxcIj4gLSA8L3RkPlxcblwiO1xufSxcIjIyXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gKChzdGFjazEgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiaWZcIikuY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcIm5hbWVcIikgOiBkZXB0aDApLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDIzLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIucHJvZ3JhbSgyNSwgZGF0YSwgMCksXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjc2LFwiY29sdW1uXCI6MH0sXCJlbmRcIjp7XCJsaW5lXCI6ODAsXCJjb2x1bW5cIjo3fX19KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyAoKHN0YWNrMSA9IGNvbnRhaW5lci5pbnZva2VQYXJ0aWFsKHJlcXVpcmUoXCIuLi92aWV3V3JhcHBlci9maW5pc2hCdXR0b24uaGFuZGxlYmFyc1wiKSxkZXB0aDAse1wibmFtZVwiOlwiLi4vdmlld1dyYXBwZXIvZmluaXNoQnV0dG9uXCIsXCJoYXNoXCI6e1widGV4dFwiOlwiQ2FuY2VsXCIsXCJpZGVudFwiOlwiY2FuY2VsQnV0dG9uXCJ9LFwiZGF0YVwiOmRhdGEsXCJoZWxwZXJzXCI6aGVscGVycyxcInBhcnRpYWxzXCI6cGFydGlhbHMsXCJkZWNvcmF0b3JzXCI6Y29udGFpbmVyLmRlY29yYXRvcnN9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpO1xufSxcIjIzXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxO1xuXG4gIHJldHVybiAoKHN0YWNrMSA9IGNvbnRhaW5lci5pbnZva2VQYXJ0aWFsKHJlcXVpcmUoXCIuLi92aWV3V3JhcHBlci9maW5pc2hCdXR0b24uaGFuZGxlYmFyc1wiKSxkZXB0aDAse1wibmFtZVwiOlwiLi4vdmlld1dyYXBwZXIvZmluaXNoQnV0dG9uXCIsXCJoYXNoXCI6e1widGV4dFwiOlwiUmVuYW1lXCIsXCJpZGVudFwiOlwicmVuYW1lQnV0dG9uXCJ9LFwiZGF0YVwiOmRhdGEsXCJoZWxwZXJzXCI6aGVscGVycyxcInBhcnRpYWxzXCI6cGFydGlhbHMsXCJkZWNvcmF0b3JzXCI6Y29udGFpbmVyLmRlY29yYXRvcnN9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpO1xufSxcIjI1XCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxO1xuXG4gIHJldHVybiAoKHN0YWNrMSA9IGNvbnRhaW5lci5pbnZva2VQYXJ0aWFsKHJlcXVpcmUoXCIuLi92aWV3V3JhcHBlci9maW5pc2hCdXR0b24uaGFuZGxlYmFyc1wiKSxkZXB0aDAse1wibmFtZVwiOlwiLi4vdmlld1dyYXBwZXIvZmluaXNoQnV0dG9uXCIsXCJoYXNoXCI6e1wiZGlzYWJsZWRcIjpcInRydWVcIixcInRleHRcIjpcIlJlbmFtZVwiLFwiaWRlbnRcIjpcInJlbmFtZUJ1dHRvblwifSxcImRhdGFcIjpkYXRhLFwiaGVscGVyc1wiOmhlbHBlcnMsXCJwYXJ0aWFsc1wiOnBhcnRpYWxzLFwiZGVjb3JhdG9yc1wiOmNvbnRhaW5lci5kZWNvcmF0b3JzfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKTtcbn0sXCJjb21waWxlclwiOls4LFwiPj0gNC4zLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gKChzdGFjazEgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiaWZcIikuY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcIm5hbWVcIikgOiBkZXB0aDApLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5wcm9ncmFtKDMsIGRhdGEsIDApLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxLFwiY29sdW1uXCI6MH0sXCJlbmRcIjp7XCJsaW5lXCI6NSxcImNvbHVtblwiOjd9fX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiXFxuXCJcbiAgICArICgoc3RhY2sxID0gY29udGFpbmVyLmludm9rZVBhcnRpYWwocmVxdWlyZShcIi4uL3ZpZXdXcmFwcGVyL2NvbnRlbnQuaGFuZGxlYmFyc1wiKSxkZXB0aDAse1wibmFtZVwiOlwiLi4vdmlld1dyYXBwZXIvY29udGVudFwiLFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSg1LCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhLFwiaGVscGVyc1wiOmhlbHBlcnMsXCJwYXJ0aWFsc1wiOnBhcnRpYWxzLFwiZGVjb3JhdG9yc1wiOmNvbnRhaW5lci5kZWNvcmF0b3JzfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCJcXG5cIlxuICAgICsgKChzdGFjazEgPSBjb250YWluZXIuaW52b2tlUGFydGlhbChyZXF1aXJlKFwiLi4vdmlld1dyYXBwZXIvZmluaXNoUm93LmhhbmRsZWJhcnNcIiksZGVwdGgwLHtcIm5hbWVcIjpcIi4uL3ZpZXdXcmFwcGVyL2ZpbmlzaFJvd1wiLFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgyMiwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YSxcImhlbHBlcnNcIjpoZWxwZXJzLFwicGFydGlhbHNcIjpwYXJ0aWFscyxcImRlY29yYXRvcnNcIjpjb250YWluZXIuZGVjb3JhdG9yc30pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIik7XG59LFwidXNlUGFydGlhbFwiOnRydWUsXCJ1c2VEYXRhXCI6dHJ1ZX0pOyIsImltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL21vZGVfZWRpdG9yLmhhbmRsZWJhcnMnO1xuaW1wb3J0ICcuL21vZGVfZWRpdG9yLmNzcyc7XG5pbXBvcnQgJy4uL2RpdkJ1dHRvbi9kaXZCdXR0b24uY3NzJztcbmltcG9ydCAnLi4vdmlld1dyYXBwZXIvdmlld1dyYXBwZXIuY3NzJztcblxuLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi8uLi9tb2RlbGRhdGEnKS5Db21tYW5kfSBDb21tYW5kXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi8uLi9tb2RlbGRhdGEnKS5Nb2RlfSBNb2RlXG4gKlxuICovXG5cbi8qKlxuICogQHBhcmFtIHtNb2RlfSBtb2RlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBvbnJlbmFtZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gb25jYW5jZWxcbiAqIEBwYXJhbSB7RnVuY3Rpb259IG9uZWRpdG1vZGVcbiAqIEByZXR1cm5zIHtNb2RlRWRpdG9yVmlld31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1ha2VFZGl0b3IobW9kZSkge1xuICAgIHJldHVybiBuZXcgTW9kZUVkaXRvclZpZXcobW9kZSk7XG59XG5cbi8qKlxuICogQGNhbGxiYWNrIEVkaXRDb21tYW5kQ2FsbGJhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBtb2RlbmFtZVxuICogQHBhcmFtIHtudW1iZXJ9IGlkeCBcbiAqIEBwYXJhbSB7Q29tbWFuZH0gY21kIFxuICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gKi9cblxuLyoqXG4qIEBjYWxsYmFjayBEZWxldGVDb21tYW5kQ2FsbGJhY2tcbiogQHBhcmFtIHtzdHJpbmd9IG1vZGVuYW1lXG4qIEBwYXJhbSB7bnVtYmVyfSBpZHggXG4qIEBwYXJhbSB7Q29tbWFuZH0gY21kIFxuKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiovXG5cbi8qKlxuICogQGNhbGxiYWNrIFJlbmFtZUNhbGxiYWNrIFxuICogQHBhcmFtIHtNb2RlfSBtb2RlXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAqL1xuLyoqXG4gKiBAY2FsbGJhY2sgQ2FuY2VsQ2FsbGJhY2sgXG4gKiBAcGFyYW0ge01vZGV9IG1vZGVcbiAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICovXG5cbi8qKlxuICogQGNsYXNzIE1vZGVFZGl0b3JWaWV3IFxuICogQHByb3BlcnR5IGVsbSB7SFRNTEVsZW1lbnR9XG4gKiBAcHJvcGVydHkgbW9kZSB7TW9kZX1cbiAqIEBwcm9wZXJ0eSBvbnJlbmFtZSB7UmVuYW1lQ2FsbGJhY2t9XG4gKiBAcHJvcGVydHkgb25jYW5jZWwge0NhbmNlbENhbGxiYWNrfVxuICogQHByb3BlcnR5IG9uZWRpdGNvbW1hbmQge0VkaXRDb21tYW5kQ2FsbGJhY2t9XG4gKiBAcHJvcGVydHkgb25kZWxldGVjb21tYW5kIHtEZWxldGVDb21tYW5kQ2FsbGJhY2t9XG4gKi9cbmNsYXNzIE1vZGVFZGl0b3JWaWV3IHtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7TW9kZX0gbWQgXG4gICAgICovXG4gICAgY29uc3RydWN0b3IobWQpIHtcbiAgICAgICAgdGhpcy5tb2RlID0gbWQ7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtSZW5hbWVDYWxsYmFja30gKi9cbiAgICAgICAgdGhpcy5vbnJlbmFtZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7fSk7IH07XG5cbiAgICAgICAgLyoqIEB0eXBlIHtDYW5jZWxDYWxsYmFja30gKi9cbiAgICAgICAgdGhpcy5vbmNhbmNlbCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7fSk7IH07XG5cbiAgICAgICAgLyoqIEB0eXBlIHtFZGl0Q29tbWFuZENhbGxiYWNrfSAqL1xuICAgICAgICB0aGlzLm9uZWRpdGNvbW1hbmQgPSBhc3luYyBmdW5jdGlvbiAobW9kZW5hbWUsIGlkeCwgY21kKSB7XG4gICAgICAgICAgICBsZXQgbmV3dmlldyA9IGF3YWl0IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImNvbW1hbmRlZGl0b3ItbW9kZWVkaXRvci0xXCIgKi8nLi4vY29tbWFuZEVkaXRvclZpZXcvY29tbWFuZF9lZGl0b3InKS50aGVuKG1vZCA9PiBtb2QubWFrZUVkaXRvcihtb2RlbmFtZSwgaWR4LCBjbWQpKTtcbiAgICAgICAgICAgIGNvbnN0IHByZXZTZWxmID0gdGhpcztcbiAgICAgICAgICAgIG5ld3ZpZXcub25zYXZlID0gYXN5bmMgKHBhcmVudE1vZGUsIGlkeCwgY21kKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGNoYW5nZWQgPSBhd2FpdCBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJtb2RlbGRhdGEtbW9kZWVkaXRvci0xXCIgKi8gJy4uLy4uL21vZGVsZGF0YScpLnRoZW4obW9kID0+IG1vZC5zZXRDb21tYW5kKHBhcmVudE1vZGUsIGlkeCwgY21kKSk7XG4gICAgICAgICAgICAgICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5tb2RlID0gYXdhaXQgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6ICdtb2RlbGRhdGEtbW9kZWVkaXRvci0yJyAqLyAnLi4vLi4vbW9kZWxkYXRhJykudGhlbihtb2QgPT4gbW9kLmdldE1vZGUocHJldlNlbGYubW9kZS5uYW1lKSk7XG4gICAgICAgICAgICAgICAgICAgIHByZXZTZWxmLm1vZGUgPSBubW9kZTtcbiAgICAgICAgICAgICAgICAgICAgcHJldlNlbGYucmVsb2FkVmlldygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBuZXd2aWV3LmVsbS5yZXBsYWNlV2l0aChwcmV2U2VsZi5lbG0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG5ld3ZpZXcub25jYW5jZWwgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbmV3dmlldy5lbG0ucmVwbGFjZVdpdGgocHJldlNlbGYuZWxtKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmVsbS5yZXBsYWNlV2l0aChuZXd2aWV3LmVsbSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqIEB0eXBlIHtEZWxldGVDb21tYW5kQ2FsbGJhY2t9ICovXG4gICAgICAgIHRoaXMub25kZWxldGVjb21tYW5kID0gYXN5bmMgZnVuY3Rpb24gKG1vZGVuYW1lLCBpZHgsIGNtZCkge1xuICAgICAgICAgICAgY29uc3QgbW9kZWRhdGEgPSBhd2FpdCBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogJ21vZGVsZGF0YS1tb2RlZWRpdG9yLTMnICovICcuLi8uLi9tb2RlbGRhdGEnKTtcbiAgICAgICAgICAgIGlmIChhd2FpdCBtb2RlZGF0YS5kZWxldGVDb21tYW5kKG1vZGVuYW1lLCBpZHgsIGNtZCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGUgPSBhd2FpdCBtb2RlZGF0YS5nZXRNb2RlKHRoaXMubW9kZS5uYW1lKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbG9hZFZpZXcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLm9uYWRkY29tbWFuZCA9IGFzeW5jIGZ1bmN0aW9uIChtb2RlbmFtZSwgaWR4KSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLm9uZWRpdGNvbW1hbmQobW9kZW5hbWUsIGlkeCwgeyBtZXNzYWdlOiBcIlwiIH0pO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmVsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmVsbS5jbGFzc0xpc3QuYWRkKCdtb2RlRWRpdG9yVmlldycpO1xuICAgICAgICB0aGlzLmVsbS5jbGFzc0xpc3QuYWRkKCd2aWV3V3JhcHBlcicpO1xuICAgICAgICB0aGlzLnJlbG9hZFZpZXcoKTtcbiAgICB9XG5cbiAgICByZWxvYWRWaWV3KCkge1xuICAgICAgICB0aGlzLmVsbS5pbm5lckhUTUwgPSB0ZW1wbGF0ZSh0aGlzLm1vZGUpO1xuICAgICAgICBpZiAodGhpcy5tb2RlLm5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuZWxtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3JlbmFtZUJ1dHRvbicpWzBdLm9uY2xpY2sgPSAoKSA9PiB0aGlzLm9ucmVuYW1lKHRoaXMubW9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbG0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2FuY2VsQnV0dG9uJylbMF0ub25jbGljayA9ICgpID0+IHRoaXMub25jYW5jZWwodGhpcy5tb2RlKTtcbiAgICAgICAgdmFyIGVkaXRCdXR0b25zID0gdGhpcy5lbG0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY29tbWFuZEVkaXRCdXR0b24nKTtcbiAgICAgICAgdmFyIGRlbGV0ZUJ1dHRvbnMgPSB0aGlzLmVsbS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb21tYW5kRGVsZXRlQnV0dG9uJyk7XG4gICAgICAgIGZvciAodmFyIGlkeCA9IDA7IGlkeCA8IHRoaXMubW9kZS5jb21tYW5kLmxlbmd0aDsgaWR4KyspIHtcbiAgICAgICAgICAgIGxldCBqZHggPSBpZHggfCAwO1xuICAgICAgICAgICAgbGV0IGJ0biA9IGVkaXRCdXR0b25zW2lkeF07XG4gICAgICAgICAgICBsZXQgZGVsYnRuID0gZGVsZXRlQnV0dG9uc1tpZHhdO1xuICAgICAgICAgICAgbGV0IGNtZCA9IHRoaXMubW9kZS5jb21tYW5kW2lkeF07XG4gICAgICAgICAgICBidG4ub25jbGljayA9ICgpID0+IHRoaXMub25lZGl0Y29tbWFuZCh0aGlzLm1vZGUubmFtZSwgamR4LCBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGNtZCkpKTtcbiAgICAgICAgICAgIGRlbGJ0bi5vbmNsaWNrID0gKCkgPT4gdGhpcy5vbmRlbGV0ZWNvbW1hbmQodGhpcy5tb2RlLm5hbWUsIGpkeCwgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShjbWQpKSk7XG5cbiAgICAgICAgfVxuICAgICAgICB2YXIgYWRkYnV0dG9uID0gdGhpcy5lbG0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY29tbWFuZEFkZEJ1dHRvbicpWzBdO1xuICAgICAgICBhZGRidXR0b24ub25jbGljayA9ICgpID0+IHRoaXMub25hZGRjb21tYW5kKHRoaXMubW9kZS5uYW1lLCB0aGlzLm1vZGUuY29tbWFuZC5sZW5ndGgpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=