(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "+EN/":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "LboF");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--13-1!../node_modules/postcss-loader/src??embedded!../node_modules/resolve-url-loader??ref--13-3!../node_modules/sass-loader/dist/cjs.js??ref--13-4!./styles.scss */ "/I9Y");

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

/***/ "/I9Y":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--13-1!./node_modules/postcss-loader/src??embedded!./node_modules/resolve-url-loader??ref--13-3!./node_modules/sass-loader/dist/cjs.js??ref--13-4!./src/styles.scss ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "JPst");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":root {\n  --blue-1: #3c429e;\n  --blue-2: #4c52ad;\n  --yellow-1: #fac742;\n  --white: #fff;\n  --grey-1: #ededed;\n  --shadow-dark: rgba(0, 0, 0, 0.3);\n  --shadow-light: rgba(255, 255, 255, 0.1);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-size: 16px;\n  width: 100%;\n  height: 100vh;\n  background-color: var(--blue-1);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.search {\n  margin-bottom: 1em;\n  text-align: center;\n}\n\n.search__input {\n  background-color: var(--shadow-light);\n  outline: none;\n  border-radius: 20px;\n  padding: 1em;\n  color: var(--grey-1);\n  font-size: 0.8em;\n  text-align: center;\n}\n\n.container {\n  width: 400px;\n  height: 80vh;\n  border-radius: 20px;\n  background-color: var(--blue-2);\n  box-shadow: 10px 10px 10px var(--shadow-dark);\n}\n\n.container__upper-data {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 50%;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n}\n\n.container__upper-data__img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.container__upper-data__weather-data {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  background-color: var(--shadow-dark);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.container__upper-data__weather-data__location {\n  color: var(--white);\n  text-align: center;\n  font-size: 1.2em;\n}\n\n.container__upper-data__weather-data__temperature {\n  color: var(--white);\n  text-align: center;\n  font-size: 4em;\n  font-weight: 900;\n}\n\n.container__lower-data {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 50%;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  padding: 1em;\n  display: flex;\n  flex-direction: column;\n}\n\n.container__lower-data__moreInfo-label {\n  color: var(--white);\n}\n\n.container__lower-data__moreInfo-container {\n  flex: 1;\n  background-color: var(--shadow-light);\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  margin-top: 1em;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n.container__lower-data__moreInfo-container__info-block {\n  width: 50%;\n  display: flex;\n  flex-direction: row;\n}\n\n.container__lower-data__moreInfo-container__info-block__label {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.container__lower-data__moreInfo-container__info-block__label__img {\n  width: 1.5em;\n}\n\n.container__lower-data__moreInfo-container__info-block__label__span {\n  color: var(--white);\n  font-size: 0.8em;\n}\n\n.container__lower-data__moreInfo-container__info-block__value {\n  width: 50%;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  color: var(--white);\n}", "",{"version":3,"sources":["webpack://src/styles.scss"],"names":[],"mappings":"AAAA;EACE,iBAAA;EACA,iBAAA;EACA,mBAAA;EACA,aAAA;EACA,iBAAA;EACA,iCAAA;EACA,wCAAA;AACF;;AAEA;EACE,SAAA;EACA,UAAA;EACA,sBAAA;AACF;;AAEA;EACE,gDAAA;EACA,eAAA;EACA,WAAA;EACA,aAAA;EACA,+BAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AACF;;AAEA;EACE,kBAAA;EACA,kBAAA;AACF;;AAAE;EACE,qCAAA;EACA,aAAA;EACA,mBAAA;EACA,YAAA;EACA,oBAAA;EACA,gBAAA;EACA,kBAAA;AAEJ;;AAEA;EACE,YAAA;EACA,YAAA;EACA,mBAAA;EACA,+BAAA;EACA,6CAAA;AACF;;AAAE;EACE,kBAAA;EACA,gBAAA;EACA,WAAA;EACA,WAAA;EACA,4BAAA;EACA,6BAAA;AAEJ;;AADI;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;AAGN;;AADI;EACE,kBAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,oCAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;AAGN;;AAFM;EACE,mBAAA;EACA,kBAAA;EACA,gBAAA;AAIR;;AAFM;EACE,mBAAA;EACA,kBAAA;EACA,cAAA;EACA,gBAAA;AAIR;;AAAE;EACE,kBAAA;EACA,gBAAA;EACA,WAAA;EACA,WAAA;EACA,+BAAA;EACA,gCAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;AAEJ;;AADI;EACE,mBAAA;AAGN;;AADI;EACE,OAAA;EACA,qCAAA;EACA,+BAAA;EACA,gCAAA;EACA,eAAA;EACA,aAAA;EACA,mBAAA;EACA,eAAA;AAGN;;AADM;EACE,UAAA;EACA,aAAA;EACA,mBAAA;AAGR;;AAFQ;EACE,UAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AAIV;;AAHU;EACE,YAAA;AAKZ;;AAHU;EACE,mBAAA;EACA,gBAAA;AAKZ;;AAFQ;EACE,UAAA;EACA,aAAA;EACA,2BAAA;EACA,mBAAA;EACA,mBAAA;AAIV","sourcesContent":[":root {\r\n  --blue-1: #3c429e;\r\n  --blue-2: #4c52ad;\r\n  --yellow-1: #fac742;\r\n  --white: #fff;\r\n  --grey-1: #ededed;\r\n  --shadow-dark: rgba(0, 0, 0, 0.3);\r\n  --shadow-light: rgba(255, 255, 255, 0.1);\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  font-size: 16px;\r\n  width: 100%;\r\n  height: 100vh;\r\n  background-color: var(--blue-1);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.search {\r\n  margin-bottom: 1em;\r\n  text-align: center;\r\n  &__input {\r\n    background-color: var(--shadow-light);\r\n    outline: none;\r\n    border-radius: 20px;\r\n    padding: 1em;\r\n    color: var(--grey-1);\r\n    font-size: 0.8em;\r\n    text-align: center;\r\n  }\r\n}\r\n\r\n.container {\r\n  width: 400px;\r\n  height: 80vh;\r\n  border-radius: 20px;\r\n  background-color: var(--blue-2);\r\n  box-shadow: 10px 10px 10px var(--shadow-dark);\r\n  &__upper-data {\r\n    position: relative;\r\n    overflow: hidden;\r\n    width: 100%;\r\n    height: 50%;\r\n    border-top-left-radius: 20px;\r\n    border-top-right-radius: 20px;\r\n    &__img {\r\n      position: absolute;\r\n      top: 0;\r\n      left: 0;\r\n      width: 100%;\r\n      height: 100%;\r\n    }\r\n    &__weather-data {\r\n      position: relative;\r\n      z-index: 1;\r\n      width: 100%;\r\n      height: 100%;\r\n      background-color: var(--shadow-dark);\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: center;\r\n      justify-content: center;\r\n      &__location {\r\n        color: var(--white);\r\n        text-align: center;\r\n        font-size: 1.2em;\r\n      }\r\n      &__temperature {\r\n        color: var(--white);\r\n        text-align: center;\r\n        font-size: 4em;\r\n        font-weight: 900;\r\n      }\r\n    }\r\n  }\r\n  &__lower-data {\r\n    position: relative;\r\n    overflow: hidden;\r\n    width: 100%;\r\n    height: 50%;\r\n    border-bottom-left-radius: 20px;\r\n    border-bottom-right-radius: 20px;\r\n    padding: 1em;\r\n    display: flex;\r\n    flex-direction: column;\r\n    &__moreInfo-label {\r\n      color: var(--white);\r\n    }\r\n    &__moreInfo-container {\r\n      flex: 1;\r\n      background-color: var(--shadow-light);\r\n      border-bottom-left-radius: 20px;\r\n      border-bottom-right-radius: 20px;\r\n      margin-top: 1em;\r\n      display: flex;\r\n      flex-direction: row;\r\n      flex-wrap: wrap;\r\n\r\n      &__info-block {\r\n        width: 50%;\r\n        display: flex;\r\n        flex-direction: row;\r\n        &__label {\r\n          width: 50%;\r\n          display: flex;\r\n          flex-direction: column;\r\n          justify-content: center;\r\n          align-items: center;\r\n          &__img {\r\n            width: 1.5em;\r\n          }\r\n          &__span {\r\n            color: var(--white);\r\n            font-size: 0.8em;\r\n          }\r\n        }\r\n        &__value {\r\n          width: 50%;\r\n          display: flex;\r\n          justify-content: flex-start;\r\n          align-items: center;\r\n          color: var(--white);\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\code\programacao\front\angular\Angular\WeatherApp\src\styles.scss */"+EN/");


/***/ }),

/***/ "JPst":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "LboF":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map