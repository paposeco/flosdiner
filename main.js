/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  /* background-color: #f5fffa; */\n  /* background-color: red; */\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  box-sizing: border-box;\n  font-family: \"Mate SC\", serif;\n  padding: 0;\n  margin: 0;\n}\n\nnav ul {\n  display: flex;\n  flex-direction: row;\n  align-self: center;\n}\n\nnav ul li {\n  list-style: none;\n  padding-left: none;\n  font-size: 30px;\n  text-decoration: underline dotted lightgray;\n  width: 200px;\n  text-align: center;\n}\n\nnav ul li:hover {\n  text-decoration: underline dotted #00a9a9;\n  cursor: pointer;\n  color: #00a9a9;\n}\n\nnav {\n  display: flex;\n  flex-direction: column;\n}\n\nheader {\n  margin-bottom: 20px;\n}\n\nheader h1:hover {\n  cursor: pointer;\n}\n\n#content {\n  width: 1280px;\n  margin: 0 auto;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\n#articleContacts {\n  flex-grow: 1;\n}\n\n#articleFrontpage {\n  flex-grow: 1;\n}\n\n#sectionContacts {\n  display: flex;\n  flex-direction: row;\n  gap: 20px;\n  width: 1280px;\n}\n\n#sectionContacts ul {\n  padding-left: 5px;\n}\n\n#sectionContacts ul li {\n  list-style: none;\n  font-size: 16px;\n  font-weight: lighter;\n}\n\n.menuitemsDiv {\n  display: flex;\n  flex-direction: row;\n  gap: 15px;\n  max-width: 640px;\n  border-top: solid lightgray 1px;\n  border-bottom: solid lightgray 1px;\n}\n\n.menuitemsDiv:hover {\n  border: solid lightgray 1px;\n  box-shadow: 1px 1px 1px lightgray;\n}\n\n.itemdescriptionDiv {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 640px;\n}\n\n.itemdescriptionDiv p {\n  font-size: 23px;\n  margin-right: 15px;\n}\n\n.menuitemFoto {\n  width: 200px;\n  object-fit: contain;\n}\n\n.menuitemFotoExpand {\n  width: 640px;\n}\n\n.menuitemFoto > img,\n.menuitemFotoExpand > img {\n  width: 100%;\n  height: 100%;\n}\n\n#breakfastdiv,\n#drinksdiv,\n#dessertdiv {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 640px;\n  align-self: center;\n}\n\n#breakfastdiv > h3,\n#drinksdiv > h3,\n#dessertdiv > h3 {\n  align-self: center;\n}\n\n#articleMenu {\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  width: 100%;\n  gap: 10px;\n}\n\n#articleMenu > h2 {\n  width: 640px;\n  align-self: center;\n  text-align: center;\n}\n\n#seating {\n  flex-shrink: 2;\n  object-fit: contain;\n}\n\n#seating > img {\n  width: 100%;\n  height: 100%;\n  border-radius: 25px;\n}\n\n.selected {\n  text-decoration: underline;\n}\n\n#entrance > img {\n  display: block;\n  max-width: 1000px;\n  margin: 0 auto;\n  border-radius: 25px;\n}\n\n#copy {\n  max-width: 1000px;\n  font-size: 23px;\n  margin: 10px auto;\n}\n\n#copy > h3 {\n  text-align: center;\n}\n\nimg {\n  box-shadow: 0px 0px 5px #fff;\n}\n\nfooter {\n  width: 1280px;\n  margin: 10px auto 15px auto;\n}\n\nfooter p {\n  width: 200px;\n  margin: 0 auto;\n  text-align: center;\n}\n\na {\n  color: black;\n  text-decoration: underline dotted lightgray;\n}\n\na:hover {\n  text-decoration: underline dotted #00a9a9;\n  color: #00a9a9;\n}\n\n#frontpagecopy {\n  margin: 20px auto;\n}\n\n#contacts {\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n  font-size: 18px;\n}\n\n@media screen and (max-width: 1279px) {\n  #content {\n    width: 100vw;\n  }\n  #entrance > img {\n    max-width: 90vw;\n  }\n  header h1 {\n    padding-left: 25px;\n  }\n  header h2 {\n    padding-left: 25px;\n    font-size: 16px;\n  }\n  #copy {\n    max-width: 90vw;\n    font-size: 17px;\n  }\n  footer {\n    width: 100vw;\n  }\n  nav {\n    max-width: 100vw;\n  }\n  nav ul {\n    padding-left: 0;\n  }\n  nav ul li {\n    padding-left: 0;\n    font-size: 23px;\n    width: 150px;\n  }\n  .itemdescriptionDiv p {\n    font-size: 18px;\n  }\n  .menuitemsDiv {\n    max-width: 100vw;\n  }\n  .itemdescriptionDiv {\n    max-width: 100vw;\n  }\n  .menuitemFoto {\n    max-width: 20vw;\n  }\n  #breakfastdiv,\n  #drinksdiv,\n  #dessertdiv {\n    max-width: 100vw;\n  }\n  .menuitemFotoExpand {\n    width: 100vw;\n  }\n  .menuitemFotoExpand > img {\n    width: 100%;\n  }\n  #sectionContacts {\n    width: 90vw;\n    flex-direction: column;\n    margin: 0 auto;\n  }\n  #contacts {\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-self: center;\n  }\n  #contacts div {\n    flex-grow: 1;\n  }\n  #sectionContacts p {\n    font-size: 14px;\n  }\n  #sectionContacts h3 {\n    font-size: 17px;\n  }\n  #seating > img {\n    width: 90vw;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,+BAA+B;EAC/B,2BAA2B;EAC3B,UAAU;EACV,SAAS;AACX;;AAEA;EACE,sBAAsB;EACtB,6BAA6B;EAC7B,UAAU;EACV,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,2CAA2C;EAC3C,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,yCAAyC;EACzC,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,cAAc;EACd,iBAAiB;EACjB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,aAAa;AACf;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,gBAAgB;EAChB,+BAA+B;EAC/B,kCAAkC;AACpC;;AAEA;EACE,2BAA2B;EAC3B,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,YAAY;AACd;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;;AAEA;;EAEE,WAAW;EACX,YAAY;AACd;;AAEA;;;EAGE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,YAAY;EACZ,kBAAkB;AACpB;;AAEA;;;EAGE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,qBAAqB;EACrB,WAAW;EACX,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,2BAA2B;AAC7B;;AAEA;EACE,YAAY;EACZ,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,2CAA2C;AAC7C;;AAEA;EACE,yCAAyC;EACzC,cAAc;AAChB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE;IACE,YAAY;EACd;EACA;IACE,eAAe;EACjB;EACA;IACE,kBAAkB;EACpB;EACA;IACE,kBAAkB;IAClB,eAAe;EACjB;EACA;IACE,eAAe;IACf,eAAe;EACjB;EACA;IACE,YAAY;EACd;EACA;IACE,gBAAgB;EAClB;EACA;IACE,eAAe;EACjB;EACA;IACE,eAAe;IACf,eAAe;IACf,YAAY;EACd;EACA;IACE,eAAe;EACjB;EACA;IACE,gBAAgB;EAClB;EACA;IACE,gBAAgB;EAClB;EACA;IACE,eAAe;EACjB;EACA;;;IAGE,gBAAgB;EAClB;EACA;IACE,YAAY;EACd;EACA;IACE,WAAW;EACb;EACA;IACE,WAAW;IACX,sBAAsB;IACtB,cAAc;EAChB;EACA;IACE,mBAAmB;IACnB,eAAe;IACf,kBAAkB;EACpB;EACA;IACE,YAAY;EACd;EACA;IACE,eAAe;EACjB;EACA;IACE,eAAe;EACjB;EACA;IACE,WAAW;EACb;AACF","sourcesContent":["html {\n  /* background-color: #f5fffa; */\n  /* background-color: red; */\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  box-sizing: border-box;\n  font-family: \"Mate SC\", serif;\n  padding: 0;\n  margin: 0;\n}\n\nnav ul {\n  display: flex;\n  flex-direction: row;\n  align-self: center;\n}\n\nnav ul li {\n  list-style: none;\n  padding-left: none;\n  font-size: 30px;\n  text-decoration: underline dotted lightgray;\n  width: 200px;\n  text-align: center;\n}\n\nnav ul li:hover {\n  text-decoration: underline dotted #00a9a9;\n  cursor: pointer;\n  color: #00a9a9;\n}\n\nnav {\n  display: flex;\n  flex-direction: column;\n}\n\nheader {\n  margin-bottom: 20px;\n}\n\nheader h1:hover {\n  cursor: pointer;\n}\n\n#content {\n  width: 1280px;\n  margin: 0 auto;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\n#articleContacts {\n  flex-grow: 1;\n}\n\n#articleFrontpage {\n  flex-grow: 1;\n}\n\n#sectionContacts {\n  display: flex;\n  flex-direction: row;\n  gap: 20px;\n  width: 1280px;\n}\n\n#sectionContacts ul {\n  padding-left: 5px;\n}\n\n#sectionContacts ul li {\n  list-style: none;\n  font-size: 16px;\n  font-weight: lighter;\n}\n\n.menuitemsDiv {\n  display: flex;\n  flex-direction: row;\n  gap: 15px;\n  max-width: 640px;\n  border-top: solid lightgray 1px;\n  border-bottom: solid lightgray 1px;\n}\n\n.menuitemsDiv:hover {\n  border: solid lightgray 1px;\n  box-shadow: 1px 1px 1px lightgray;\n}\n\n.itemdescriptionDiv {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 640px;\n}\n\n.itemdescriptionDiv p {\n  font-size: 23px;\n  margin-right: 15px;\n}\n\n.menuitemFoto {\n  width: 200px;\n  object-fit: contain;\n}\n\n.menuitemFotoExpand {\n  width: 640px;\n}\n\n.menuitemFoto > img,\n.menuitemFotoExpand > img {\n  width: 100%;\n  height: 100%;\n}\n\n#breakfastdiv,\n#drinksdiv,\n#dessertdiv {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 640px;\n  align-self: center;\n}\n\n#breakfastdiv > h3,\n#drinksdiv > h3,\n#dessertdiv > h3 {\n  align-self: center;\n}\n\n#articleMenu {\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  width: 100%;\n  gap: 10px;\n}\n\n#articleMenu > h2 {\n  width: 640px;\n  align-self: center;\n  text-align: center;\n}\n\n#seating {\n  flex-shrink: 2;\n  object-fit: contain;\n}\n\n#seating > img {\n  width: 100%;\n  height: 100%;\n  border-radius: 25px;\n}\n\n.selected {\n  text-decoration: underline;\n}\n\n#entrance > img {\n  display: block;\n  max-width: 1000px;\n  margin: 0 auto;\n  border-radius: 25px;\n}\n\n#copy {\n  max-width: 1000px;\n  font-size: 23px;\n  margin: 10px auto;\n}\n\n#copy > h3 {\n  text-align: center;\n}\n\nimg {\n  box-shadow: 0px 0px 5px #fff;\n}\n\nfooter {\n  width: 1280px;\n  margin: 10px auto 15px auto;\n}\n\nfooter p {\n  width: 200px;\n  margin: 0 auto;\n  text-align: center;\n}\n\na {\n  color: black;\n  text-decoration: underline dotted lightgray;\n}\n\na:hover {\n  text-decoration: underline dotted #00a9a9;\n  color: #00a9a9;\n}\n\n#frontpagecopy {\n  margin: 20px auto;\n}\n\n#contacts {\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n  font-size: 18px;\n}\n\n@media screen and (max-width: 1279px) {\n  #content {\n    width: 100vw;\n  }\n  #entrance > img {\n    max-width: 90vw;\n  }\n  header h1 {\n    padding-left: 25px;\n  }\n  header h2 {\n    padding-left: 25px;\n    font-size: 16px;\n  }\n  #copy {\n    max-width: 90vw;\n    font-size: 17px;\n  }\n  footer {\n    width: 100vw;\n  }\n  nav {\n    max-width: 100vw;\n  }\n  nav ul {\n    padding-left: 0;\n  }\n  nav ul li {\n    padding-left: 0;\n    font-size: 23px;\n    width: 150px;\n  }\n  .itemdescriptionDiv p {\n    font-size: 18px;\n  }\n  .menuitemsDiv {\n    max-width: 100vw;\n  }\n  .itemdescriptionDiv {\n    max-width: 100vw;\n  }\n  .menuitemFoto {\n    max-width: 20vw;\n  }\n  #breakfastdiv,\n  #drinksdiv,\n  #dessertdiv {\n    max-width: 100vw;\n  }\n  .menuitemFotoExpand {\n    width: 100vw;\n  }\n  .menuitemFotoExpand > img {\n    width: 100%;\n  }\n  #sectionContacts {\n    width: 90vw;\n    flex-direction: column;\n    margin: 0 auto;\n  }\n  #contacts {\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-self: center;\n  }\n  #contacts div {\n    flex-grow: 1;\n  }\n  #sectionContacts p {\n    font-size: 14px;\n  }\n  #sectionContacts h3 {\n    font-size: 17px;\n  }\n  #seating > img {\n    width: 90vw;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
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

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



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
    var nonce =  true ? __webpack_require__.nc : 0;

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

  if (sourceMap && typeof btoa !== 'undefined') {
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

/***/ }),

/***/ "./src/applepie.jpg":
/*!**************************!*\
  !*** ./src/applepie.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ca19bfdb37c434d263c3.jpg";

/***/ }),

/***/ "./src/cereal.jpg":
/*!************************!*\
  !*** ./src/cereal.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6c0e79289051bab8c8f1.jpg";

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contact)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _seating_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./seating.jpg */ "./src/seating.jpg");



function contact() {
  const contentDiv = document.getElementById("content");
  const article = document.createElement("article");
  article.setAttribute("id", "articleContacts");
  const section = document.createElement("section");
  section.setAttribute("id", "sectionContacts");

  const div = document.createElement("div");
  div.setAttribute("id", "contacts");
  const address = document.createElement("div");
  address.setAttribute("id", "address");
  const addressTitle = document.createElement("h3");
  addressTitle.textContent = "Address";
  const paraA = document.createElement("p");
  paraA.setAttribute("style", "white-space: pre;");
  paraA.textContent = "Main Road nr 20 \r\n";
  paraA.textContent += "22zz Mars";
  address.appendChild(addressTitle);
  address.appendChild(paraA);

  const tel = document.createElement("div");
  tel.setAttribute("id", "tel");
  const telTitle = document.createElement("h3");
  telTitle.textContent = "Telephone";
  const paraT = document.createElement("p");
  paraT.textContent = "Tel: 999999900";
  tel.appendChild(telTitle);
  tel.appendChild(paraT);

  const emailAddress = document.createElement("div");
  emailAddress.setAttribute("id", "email");
  const emailAddressTitle = document.createElement("h3");
  emailAddressTitle.textContent = "E-mail";
  const paraE = document.createElement("p");
  paraE.textContent = "hello@flosdiner.np";
  emailAddress.appendChild(emailAddressTitle);
  emailAddress.appendChild(paraE);

  const socialmedia = document.createElement("div");
  socialmedia.setAttribute("id", "socialmedia");
  const socialmediaTitle = document.createElement("h3");
  socialmediaTitle.textContent = "Social Media";
  const sociallist = document.createElement("ul");
  const sociallistface = document.createElement("li");
  const sociallistinsta = document.createElement("li");

  socialmediaTitle.appendChild(sociallist);
  sociallist.appendChild(sociallistface);
  sociallist.appendChild(sociallistinsta);

  sociallistface.innerHTML =
    '<i class="fab fa-facebook-f"></i> <a href="https://github.com/paposeco/">Facebook</a>';
  sociallistinsta.innerHTML =
    '<i class="fab fa-instagram"></i> <a href="https://github.com/paposeco/">Instagram</a>';

  socialmedia.appendChild(socialmediaTitle);

  const imgDiv = document.createElement("div");
  imgDiv.setAttribute("id", "seating");
  const seatingImg = new Image();
  seatingImg.src = _seating_jpg__WEBPACK_IMPORTED_MODULE_1__;
  imgDiv.appendChild(seatingImg);

  article.appendChild(section);
  section.appendChild(div);
  div.appendChild(address);
  div.appendChild(tel);
  div.appendChild(emailAddress);
  div.appendChild(socialmedia);
  section.appendChild(imgDiv);
  contentDiv.appendChild(article);
}


/***/ }),

/***/ "./src/donuts.jpg":
/*!************************!*\
  !*** ./src/donuts.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6393eec2bd1e51ed562f.jpg";

/***/ }),

/***/ "./src/eggsandbacon.jpg":
/*!******************************!*\
  !*** ./src/eggsandbacon.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "03506b76f893e5ced0bd.jpg";

/***/ }),

/***/ "./src/entrance.jpg":
/*!**************************!*\
  !*** ./src/entrance.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bc173cbf27a01732affd.jpg";

/***/ }),

/***/ "./src/filtercoffee.jpg":
/*!******************************!*\
  !*** ./src/filtercoffee.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "594500c309009a9a193b.jpg";

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ footer)
/* harmony export */ });
function footer() {
  const content = document.getElementById("content");
  const footerDiv = document.createElement("footer");
  const para = document.createElement("p");
  para.innerHTML =
    "<a href='https://github.com/paposeco/' alt='github'><span><i class='fab fa-github'></i></span>Fabi</a>";
  footerDiv.appendChild(para);
  content.appendChild(footerDiv);
}


/***/ }),

/***/ "./src/frenchtoast.jpg":
/*!*****************************!*\
  !*** ./src/frenchtoast.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e1745da66c512f889b85.jpg";

/***/ }),

/***/ "./src/fullbreakfast.jpg":
/*!*******************************!*\
  !*** ./src/fullbreakfast.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9c459e7453a88e21b634.jpg";

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ header)
/* harmony export */ });
function header() {
  const contentDiv = document.getElementById("content");
  const header = document.createElement("header");
  const pageTitle = document.createElement("h1");
  const pageHeadline = document.createElement("h2");

  pageTitle.textContent = "Flo's Diner";
  pageHeadline.textContent = "~Welcome to the best diner in town~";

  header.appendChild(pageTitle);
  header.appendChild(pageHeadline);
  contentDiv.appendChild(header);
}


/***/ }),

/***/ "./src/latte.jpg":
/*!***********************!*\
  !*** ./src/latte.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d87cc988aa29d492d757.jpg";

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _toast_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toast.jpg */ "./src/toast.jpg");
/* harmony import */ var _frenchtoast_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./frenchtoast.jpg */ "./src/frenchtoast.jpg");
/* harmony import */ var _oatmeal_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./oatmeal.jpg */ "./src/oatmeal.jpg");
/* harmony import */ var _cereal_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cereal.jpg */ "./src/cereal.jpg");
/* harmony import */ var _pancakes_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pancakes.jpg */ "./src/pancakes.jpg");
/* harmony import */ var _fullbreakfast_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fullbreakfast.jpg */ "./src/fullbreakfast.jpg");
/* harmony import */ var _eggsandbacon_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./eggsandbacon.jpg */ "./src/eggsandbacon.jpg");
/* harmony import */ var _filtercoffee_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./filtercoffee.jpg */ "./src/filtercoffee.jpg");
/* harmony import */ var _latte_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./latte.jpg */ "./src/latte.jpg");
/* harmony import */ var _tea_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tea.jpg */ "./src/tea.jpg");
/* harmony import */ var _milk_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./milk.jpg */ "./src/milk.jpg");
/* harmony import */ var _orangejuice_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./orangejuice.jpg */ "./src/orangejuice.jpg");
/* harmony import */ var _muffin_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./muffin.jpg */ "./src/muffin.jpg");
/* harmony import */ var _donuts_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./donuts.jpg */ "./src/donuts.jpg");
/* harmony import */ var _applepie_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./applepie.jpg */ "./src/applepie.jpg");
/* harmony import */ var _pecanpie_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pecanpie.jpg */ "./src/pecanpie.jpg");




















function menu() {
  const content = document.getElementById("content");
  const article = document.createElement("article");
  article.setAttribute("id", "articleMenu");
  //breakfast
  const breakfastDiv = document.createElement("div");
  breakfastDiv.setAttribute("id", "breakfastdiv");
  const breakfastTitle = document.createElement("h3");
  breakfastTitle.textContent = "~ Breakfast ~";
  breakfastDiv.appendChild(breakfastTitle);

  const breakfastDiv1 = document.createElement("div");
  breakfastDiv1.setAttribute("class", "menuitemsDiv");
  const breakfastDiv1FotoDiv = document.createElement("div");
  breakfastDiv1FotoDiv.setAttribute("class", "menuitemFoto");
  const breakfastDiv1NameDiv = document.createElement("div");
  breakfastDiv1NameDiv.setAttribute("class", "itemdescriptionDiv");
  const breakfastDiv1NameDescDiv = document.createElement("div");
  const breakfastDiv1NamePriceDiv = document.createElement("div");
  const breakfastDiv1NameDescPara = document.createElement("p");
  const breakfastDiv1NamePricePara = document.createElement("p");

  const toastImg = new Image();
  toastImg.src = _toast_jpg__WEBPACK_IMPORTED_MODULE_1__;
  breakfastDiv1FotoDiv.appendChild(toastImg);
  breakfastDiv1NameDescPara.textContent = "Toast";
  breakfastDiv1NamePricePara.textContent = "1.5€";
  fotoeventlistener(breakfastDiv1);

  breakfastDiv.appendChild(breakfastDiv1);
  breakfastDiv1.appendChild(breakfastDiv1FotoDiv);
  breakfastDiv1.appendChild(breakfastDiv1NameDiv);
  breakfastDiv1NameDiv.appendChild(breakfastDiv1NameDescDiv);
  breakfastDiv1NameDiv.appendChild(breakfastDiv1NamePriceDiv);
  breakfastDiv1NameDescDiv.appendChild(breakfastDiv1NameDescPara);
  breakfastDiv1NamePriceDiv.appendChild(breakfastDiv1NamePricePara);

  const breakfastDiv2 = document.createElement("div");
  breakfastDiv2.setAttribute("class", "menuitemsDiv");
  const breakfastDiv2FotoDiv = document.createElement("div");
  breakfastDiv2FotoDiv.setAttribute("class", "menuitemFoto");
  const breakfastDiv2NameDiv = document.createElement("div");
  breakfastDiv2NameDiv.setAttribute("class", "itemdescriptionDiv");
  const breakfastDiv2NameDescDiv = document.createElement("div");
  const breakfastDiv2NamePriceDiv = document.createElement("div");
  const breakfastDiv2NameDescPara = document.createElement("p");
  const breakfastDiv2NamePricePara = document.createElement("p");

  const frenchtoastImg = new Image();
  frenchtoastImg.src = _frenchtoast_jpg__WEBPACK_IMPORTED_MODULE_2__;
  breakfastDiv2FotoDiv.appendChild(frenchtoastImg);
  breakfastDiv2NameDescPara.textContent = "French Toast";
  breakfastDiv2NamePricePara.textContent = "5€";
  fotoeventlistener(breakfastDiv2);

  breakfastDiv.appendChild(breakfastDiv2);
  breakfastDiv2.appendChild(breakfastDiv2FotoDiv);
  breakfastDiv2.appendChild(breakfastDiv2NameDiv);
  breakfastDiv2NameDiv.appendChild(breakfastDiv2NameDescDiv);
  breakfastDiv2NameDiv.appendChild(breakfastDiv2NamePriceDiv);
  breakfastDiv2NameDescDiv.appendChild(breakfastDiv2NameDescPara);
  breakfastDiv2NamePriceDiv.appendChild(breakfastDiv2NamePricePara);

  const breakfastDiv3 = document.createElement("div");
  breakfastDiv3.setAttribute("class", "menuitemsDiv");
  const breakfastDiv3FotoDiv = document.createElement("div");
  breakfastDiv3FotoDiv.setAttribute("class", "menuitemFoto");
  const breakfastDiv3NameDiv = document.createElement("div");
  breakfastDiv3NameDiv.setAttribute("class", "itemdescriptionDiv");
  const breakfastDiv3NameDescDiv = document.createElement("div");
  const breakfastDiv3NamePriceDiv = document.createElement("div");
  const breakfastDiv3NameDescPara = document.createElement("p");
  const breakfastDiv3NamePricePara = document.createElement("p");

  const oatmealImg = new Image();
  oatmealImg.src = _oatmeal_jpg__WEBPACK_IMPORTED_MODULE_3__;
  breakfastDiv3FotoDiv.appendChild(oatmealImg);
  breakfastDiv3NameDescPara.textContent = "Oatmeal";
  breakfastDiv3NamePricePara.textContent = "2€";
  fotoeventlistener(breakfastDiv3);

  breakfastDiv.appendChild(breakfastDiv3);
  breakfastDiv3.appendChild(breakfastDiv3FotoDiv);
  breakfastDiv3.appendChild(breakfastDiv3NameDiv);
  breakfastDiv3NameDiv.appendChild(breakfastDiv3NameDescDiv);
  breakfastDiv3NameDiv.appendChild(breakfastDiv3NamePriceDiv);
  breakfastDiv3NameDescDiv.appendChild(breakfastDiv3NameDescPara);
  breakfastDiv3NamePriceDiv.appendChild(breakfastDiv3NamePricePara);

  const breakfastDiv4 = document.createElement("div");
  breakfastDiv4.setAttribute("class", "menuitemsDiv");
  const breakfastDiv4FotoDiv = document.createElement("div");
  breakfastDiv4FotoDiv.setAttribute("class", "menuitemFoto");
  const breakfastDiv4NameDiv = document.createElement("div");
  breakfastDiv4NameDiv.setAttribute("class", "itemdescriptionDiv");
  const breakfastDiv4NameDescDiv = document.createElement("div");
  const breakfastDiv4NamePriceDiv = document.createElement("div");
  const breakfastDiv4NameDescPara = document.createElement("p");
  const breakfastDiv4NamePricePara = document.createElement("p");

  const cerealImg = new Image();
  cerealImg.src = _cereal_jpg__WEBPACK_IMPORTED_MODULE_4__;
  breakfastDiv4FotoDiv.appendChild(cerealImg);
  breakfastDiv4NameDescPara.textContent = "Cereal (various options)";
  breakfastDiv4NamePricePara.textContent = "1€";
  fotoeventlistener(breakfastDiv4);

  breakfastDiv.appendChild(breakfastDiv4);
  breakfastDiv4.appendChild(breakfastDiv4FotoDiv);
  breakfastDiv4.appendChild(breakfastDiv4NameDiv);
  breakfastDiv4NameDiv.appendChild(breakfastDiv4NameDescDiv);
  breakfastDiv4NameDiv.appendChild(breakfastDiv4NamePriceDiv);
  breakfastDiv4NameDescDiv.appendChild(breakfastDiv4NameDescPara);
  breakfastDiv4NamePriceDiv.appendChild(breakfastDiv4NamePricePara);

  const breakfastDiv5 = document.createElement("div");
  breakfastDiv5.setAttribute("class", "menuitemsDiv");
  const breakfastDiv5FotoDiv = document.createElement("div");
  breakfastDiv5FotoDiv.setAttribute("class", "menuitemFoto");
  const breakfastDiv5NameDiv = document.createElement("div");
  breakfastDiv5NameDiv.setAttribute("class", "itemdescriptionDiv");
  const breakfastDiv5NameDescDiv = document.createElement("div");
  const breakfastDiv5NamePriceDiv = document.createElement("div");
  const breakfastDiv5NameDescPara = document.createElement("p");
  const breakfastDiv5NamePricePara = document.createElement("p");

  const pancakeImg = new Image();
  pancakeImg.src = _pancakes_jpg__WEBPACK_IMPORTED_MODULE_5__;
  breakfastDiv5FotoDiv.appendChild(pancakeImg);
  breakfastDiv5NameDescPara.textContent = "Pancakes with maple syrup";
  breakfastDiv5NamePricePara.textContent = "4€";
  fotoeventlistener(breakfastDiv5);

  breakfastDiv.appendChild(breakfastDiv5);
  breakfastDiv5.appendChild(breakfastDiv5FotoDiv);
  breakfastDiv5.appendChild(breakfastDiv5NameDiv);
  breakfastDiv5NameDiv.appendChild(breakfastDiv5NameDescDiv);
  breakfastDiv5NameDiv.appendChild(breakfastDiv5NamePriceDiv);
  breakfastDiv5NameDescDiv.appendChild(breakfastDiv5NameDescPara);
  breakfastDiv5NamePriceDiv.appendChild(breakfastDiv5NamePricePara);

  const breakfastDiv6 = document.createElement("div");
  breakfastDiv6.setAttribute("class", "menuitemsDiv");
  const breakfastDiv6FotoDiv = document.createElement("div");
  breakfastDiv6FotoDiv.setAttribute("class", "menuitemFoto");
  const breakfastDiv6NameDiv = document.createElement("div");
  breakfastDiv6NameDiv.setAttribute("class", "itemdescriptionDiv");
  const breakfastDiv6NameDescDiv = document.createElement("div");
  const breakfastDiv6NamePriceDiv = document.createElement("div");
  const breakfastDiv6NameDescPara = document.createElement("p");
  const breakfastDiv6NamePricePara = document.createElement("p");

  const EggsBaconImg = new Image();
  EggsBaconImg.src = _eggsandbacon_jpg__WEBPACK_IMPORTED_MODULE_7__;
  breakfastDiv6FotoDiv.appendChild(EggsBaconImg);
  breakfastDiv6NameDescPara.textContent =
    "Fried Eggs (sunny side up) and bacon";
  breakfastDiv6NamePricePara.textContent = "3€";
  fotoeventlistener(breakfastDiv6);

  breakfastDiv.appendChild(breakfastDiv6);
  breakfastDiv6.appendChild(breakfastDiv6FotoDiv);
  breakfastDiv6.appendChild(breakfastDiv6NameDiv);
  breakfastDiv6NameDiv.appendChild(breakfastDiv6NameDescDiv);
  breakfastDiv6NameDiv.appendChild(breakfastDiv6NamePriceDiv);
  breakfastDiv6NameDescDiv.appendChild(breakfastDiv6NameDescPara);
  breakfastDiv6NamePriceDiv.appendChild(breakfastDiv6NamePricePara);

  const breakfastDiv7 = document.createElement("div");
  breakfastDiv7.setAttribute("class", "menuitemsDiv");
  const breakfastDiv7FotoDiv = document.createElement("div");
  breakfastDiv7FotoDiv.setAttribute("class", "menuitemFoto");
  const breakfastDiv7NameDiv = document.createElement("div");
  breakfastDiv7NameDiv.setAttribute("class", "itemdescriptionDiv");
  const breakfastDiv7NameDescDiv = document.createElement("div");
  const breakfastDiv7NamePriceDiv = document.createElement("div");
  const breakfastDiv7NameDescPara = document.createElement("p");
  const breakfastDiv7NamePricePara = document.createElement("p");

  const fullbreakfastImg = new Image();
  fullbreakfastImg.src = _fullbreakfast_jpg__WEBPACK_IMPORTED_MODULE_6__;
  breakfastDiv7FotoDiv.appendChild(fullbreakfastImg);
  breakfastDiv7NameDescPara.textContent = "Full English Breakfast";
  breakfastDiv7NamePricePara.textContent = "6€";
  fotoeventlistener(breakfastDiv7);

  breakfastDiv.appendChild(breakfastDiv7);
  breakfastDiv7.appendChild(breakfastDiv7FotoDiv);
  breakfastDiv7.appendChild(breakfastDiv7NameDiv);
  breakfastDiv7NameDiv.appendChild(breakfastDiv7NameDescDiv);
  breakfastDiv7NameDiv.appendChild(breakfastDiv7NamePriceDiv);
  breakfastDiv7NameDescDiv.appendChild(breakfastDiv7NameDescPara);
  breakfastDiv7NamePriceDiv.appendChild(breakfastDiv7NamePricePara);

  //drinks
  const drinksDiv = document.createElement("div");
  drinksDiv.setAttribute("id", "drinksdiv");
  const drinksTitle = document.createElement("h3");
  drinksTitle.textContent = "~ Drinks ~";
  drinksDiv.appendChild(drinksTitle);

  const drinksDiv1 = document.createElement("div");
  drinksDiv1.setAttribute("class", "menuitemsDiv");
  const drinksDiv1FotoDiv = document.createElement("div");
  drinksDiv1FotoDiv.setAttribute("class", "menuitemFoto");
  const drinksDiv1NameDiv = document.createElement("div");
  drinksDiv1NameDiv.setAttribute("class", "itemdescriptionDiv");
  const drinksDiv1NameDescDiv = document.createElement("div");
  const drinksDiv1NamePriceDiv = document.createElement("div");
  const drinksDiv1NameDescPara = document.createElement("p");
  const drinksDiv1NamePricePara = document.createElement("p");

  const coffeeImg = new Image();
  coffeeImg.src = _filtercoffee_jpg__WEBPACK_IMPORTED_MODULE_8__;
  drinksDiv1FotoDiv.appendChild(coffeeImg);
  drinksDiv1NameDescPara.textContent = "Filter coffee";
  drinksDiv1NamePricePara.textContent = "1€";
  fotoeventlistener(drinksDiv1);

  drinksDiv.appendChild(drinksDiv1);
  drinksDiv1.appendChild(drinksDiv1FotoDiv);
  drinksDiv1.appendChild(drinksDiv1NameDiv);
  drinksDiv1NameDiv.appendChild(drinksDiv1NameDescDiv);
  drinksDiv1NameDiv.appendChild(drinksDiv1NamePriceDiv);
  drinksDiv1NameDescDiv.appendChild(drinksDiv1NameDescPara);
  drinksDiv1NamePriceDiv.appendChild(drinksDiv1NamePricePara);

  const drinksDiv2 = document.createElement("div");
  drinksDiv2.setAttribute("class", "menuitemsDiv");
  const drinksDiv2FotoDiv = document.createElement("div");
  drinksDiv2FotoDiv.setAttribute("class", "menuitemFoto");
  const drinksDiv2NameDiv = document.createElement("div");
  drinksDiv2NameDiv.setAttribute("class", "itemdescriptionDiv");
  const drinksDiv2NameDescDiv = document.createElement("div");
  const drinksDiv2NamePriceDiv = document.createElement("div");
  const drinksDiv2NameDescPara = document.createElement("p");
  const drinksDiv2NamePricePara = document.createElement("p");

  const latteImg = new Image();
  latteImg.src = _latte_jpg__WEBPACK_IMPORTED_MODULE_9__;
  drinksDiv2FotoDiv.appendChild(latteImg);
  drinksDiv2NameDescPara.textContent = "Latte";
  drinksDiv2NamePricePara.textContent = "2€";
  fotoeventlistener(drinksDiv2);

  drinksDiv.appendChild(drinksDiv2);
  drinksDiv2.appendChild(drinksDiv2FotoDiv);
  drinksDiv2.appendChild(drinksDiv2NameDiv);
  drinksDiv2NameDiv.appendChild(drinksDiv2NameDescDiv);
  drinksDiv2NameDiv.appendChild(drinksDiv2NamePriceDiv);
  drinksDiv2NameDescDiv.appendChild(drinksDiv2NameDescPara);
  drinksDiv2NamePriceDiv.appendChild(drinksDiv2NamePricePara);

  const drinksDiv3 = document.createElement("div");
  drinksDiv3.setAttribute("class", "menuitemsDiv");
  const drinksDiv3FotoDiv = document.createElement("div");
  drinksDiv3FotoDiv.setAttribute("class", "menuitemFoto");
  const drinksDiv3NameDiv = document.createElement("div");
  drinksDiv3NameDiv.setAttribute("class", "itemdescriptionDiv");
  const drinksDiv3NameDescDiv = document.createElement("div");
  const drinksDiv3NamePriceDiv = document.createElement("div");
  const drinksDiv3NameDescPara = document.createElement("p");
  const drinksDiv3NamePricePara = document.createElement("p");

  const teaImg = new Image();
  teaImg.src = _tea_jpg__WEBPACK_IMPORTED_MODULE_10__;
  drinksDiv3FotoDiv.appendChild(teaImg);
  drinksDiv3NameDescPara.textContent = "Tea";
  drinksDiv3NamePricePara.textContent = "1€";
  fotoeventlistener(drinksDiv3);

  drinksDiv.appendChild(drinksDiv3);
  drinksDiv3.appendChild(drinksDiv3FotoDiv);
  drinksDiv3.appendChild(drinksDiv3NameDiv);
  drinksDiv3NameDiv.appendChild(drinksDiv3NameDescDiv);
  drinksDiv3NameDiv.appendChild(drinksDiv3NamePriceDiv);
  drinksDiv3NameDescDiv.appendChild(drinksDiv3NameDescPara);
  drinksDiv3NamePriceDiv.appendChild(drinksDiv3NamePricePara);

  const drinksDiv4 = document.createElement("div");
  drinksDiv4.setAttribute("class", "menuitemsDiv");
  const drinksDiv4FotoDiv = document.createElement("div");
  drinksDiv4FotoDiv.setAttribute("class", "menuitemFoto");
  const drinksDiv4NameDiv = document.createElement("div");
  drinksDiv4NameDiv.setAttribute("class", "itemdescriptionDiv");
  const drinksDiv4NameDescDiv = document.createElement("div");
  const drinksDiv4NamePriceDiv = document.createElement("div");
  const drinksDiv4NameDescPara = document.createElement("p");
  const drinksDiv4NamePricePara = document.createElement("p");

  const milkImg = new Image();
  milkImg.src = _milk_jpg__WEBPACK_IMPORTED_MODULE_11__;
  drinksDiv4FotoDiv.appendChild(milkImg);
  drinksDiv4NameDescPara.textContent = "Milk (ask for lactose free options)";
  drinksDiv4NamePricePara.textContent = "1€";
  fotoeventlistener(drinksDiv4);

  drinksDiv.appendChild(drinksDiv4);
  drinksDiv4.appendChild(drinksDiv4FotoDiv);
  drinksDiv4.appendChild(drinksDiv4NameDiv);
  drinksDiv4NameDiv.appendChild(drinksDiv4NameDescDiv);
  drinksDiv4NameDiv.appendChild(drinksDiv4NamePriceDiv);
  drinksDiv4NameDescDiv.appendChild(drinksDiv4NameDescPara);
  drinksDiv4NamePriceDiv.appendChild(drinksDiv4NamePricePara);

  const drinksDiv5 = document.createElement("div");
  drinksDiv5.setAttribute("class", "menuitemsDiv");
  const drinksDiv5FotoDiv = document.createElement("div");
  drinksDiv5FotoDiv.setAttribute("class", "menuitemFoto");
  const drinksDiv5NameDiv = document.createElement("div");
  drinksDiv5NameDiv.setAttribute("class", "itemdescriptionDiv");
  const drinksDiv5NameDescDiv = document.createElement("div");
  const drinksDiv5NamePriceDiv = document.createElement("div");
  const drinksDiv5NameDescPara = document.createElement("p");
  const drinksDiv5NamePricePara = document.createElement("p");

  const juiceImg = new Image();
  juiceImg.src = _orangejuice_jpg__WEBPACK_IMPORTED_MODULE_12__;
  drinksDiv5FotoDiv.appendChild(juiceImg);
  drinksDiv5NameDescPara.textContent = "Fresh squeezed orange juice";
  drinksDiv5NamePricePara.textContent = "2.5€";
  fotoeventlistener(drinksDiv5);

  drinksDiv.appendChild(drinksDiv5);
  drinksDiv5.appendChild(drinksDiv5FotoDiv);
  drinksDiv5.appendChild(drinksDiv5NameDiv);
  drinksDiv5NameDiv.appendChild(drinksDiv5NameDescDiv);
  drinksDiv5NameDiv.appendChild(drinksDiv5NamePriceDiv);
  drinksDiv5NameDescDiv.appendChild(drinksDiv5NameDescPara);
  drinksDiv5NamePriceDiv.appendChild(drinksDiv5NamePricePara);

  //desserts
  const dessertDiv = document.createElement("div");
  dessertDiv.setAttribute("id", "dessertdiv");
  const dessertTitle = document.createElement("h3");
  dessertTitle.textContent = "~ Desserts ~";
  dessertDiv.appendChild(dessertTitle);

  const dessertDiv1 = document.createElement("div");
  dessertDiv1.setAttribute("class", "menuitemsDiv");
  const dessertDiv1FotoDiv = document.createElement("div");
  dessertDiv1FotoDiv.setAttribute("class", "menuitemFoto");
  const dessertDiv1NameDiv = document.createElement("div");
  dessertDiv1NameDiv.setAttribute("class", "itemdescriptionDiv");
  const dessertDiv1NameDescDiv = document.createElement("div");
  const dessertDiv1NamePriceDiv = document.createElement("div");
  const dessertDiv1NameDescPara = document.createElement("p");
  const dessertDiv1NamePricePara = document.createElement("p");

  const muffinImg = new Image();
  muffinImg.src = _muffin_jpg__WEBPACK_IMPORTED_MODULE_13__;
  dessertDiv1FotoDiv.appendChild(muffinImg);
  dessertDiv1NameDescPara.textContent = "Muffin of the day";
  dessertDiv1NamePricePara.textContent = "2€";
  fotoeventlistener(dessertDiv1);

  dessertDiv.appendChild(dessertDiv1);
  dessertDiv1.appendChild(dessertDiv1FotoDiv);
  dessertDiv1.appendChild(dessertDiv1NameDiv);
  dessertDiv1NameDiv.appendChild(dessertDiv1NameDescDiv);
  dessertDiv1NameDiv.appendChild(dessertDiv1NamePriceDiv);
  dessertDiv1NameDescDiv.appendChild(dessertDiv1NameDescPara);
  dessertDiv1NamePriceDiv.appendChild(dessertDiv1NamePricePara);

  const dessertDiv2 = document.createElement("div");
  dessertDiv2.setAttribute("class", "menuitemsDiv");
  const dessertDiv2FotoDiv = document.createElement("div");
  dessertDiv2FotoDiv.setAttribute("class", "menuitemFoto");
  const dessertDiv2NameDiv = document.createElement("div");
  dessertDiv2NameDiv.setAttribute("class", "itemdescriptionDiv");
  const dessertDiv2NameDescDiv = document.createElement("div");
  const dessertDiv2NamePriceDiv = document.createElement("div");
  const dessertDiv2NameDescPara = document.createElement("p");
  const dessertDiv2NamePricePara = document.createElement("p");

  const donutImg = new Image();
  donutImg.src = _donuts_jpg__WEBPACK_IMPORTED_MODULE_14__;
  dessertDiv2FotoDiv.appendChild(donutImg);
  dessertDiv2NameDescPara.textContent = "Donut (various options)";
  dessertDiv2NamePricePara.textContent = "1€";
  fotoeventlistener(dessertDiv2);

  dessertDiv.appendChild(dessertDiv2);
  dessertDiv2.appendChild(dessertDiv2FotoDiv);
  dessertDiv2.appendChild(dessertDiv2NameDiv);
  dessertDiv2NameDiv.appendChild(dessertDiv2NameDescDiv);
  dessertDiv2NameDiv.appendChild(dessertDiv2NamePriceDiv);
  dessertDiv2NameDescDiv.appendChild(dessertDiv2NameDescPara);
  dessertDiv2NamePriceDiv.appendChild(dessertDiv2NamePricePara);

  const dessertDiv3 = document.createElement("div");
  dessertDiv3.setAttribute("class", "menuitemsDiv");
  const dessertDiv3FotoDiv = document.createElement("div");
  dessertDiv3FotoDiv.setAttribute("class", "menuitemFoto");
  const dessertDiv3NameDiv = document.createElement("div");
  dessertDiv3NameDiv.setAttribute("class", "itemdescriptionDiv");
  const dessertDiv3NameDescDiv = document.createElement("div");
  const dessertDiv3NamePriceDiv = document.createElement("div");
  const dessertDiv3NameDescPara = document.createElement("p");
  const dessertDiv3NamePricePara = document.createElement("p");

  const applepieImg = new Image();
  applepieImg.src = _applepie_jpg__WEBPACK_IMPORTED_MODULE_15__;
  dessertDiv3FotoDiv.appendChild(applepieImg);
  dessertDiv3NameDescPara.textContent = "Slice of Apple Pie";
  dessertDiv3NamePricePara.textContent = "2€";
  fotoeventlistener(dessertDiv3);

  dessertDiv.appendChild(dessertDiv3);
  dessertDiv3.appendChild(dessertDiv3FotoDiv);
  dessertDiv3.appendChild(dessertDiv3NameDiv);
  dessertDiv3NameDiv.appendChild(dessertDiv3NameDescDiv);
  dessertDiv3NameDiv.appendChild(dessertDiv3NamePriceDiv);
  dessertDiv3NameDescDiv.appendChild(dessertDiv3NameDescPara);
  dessertDiv3NamePriceDiv.appendChild(dessertDiv3NamePricePara);

  const dessertDiv4 = document.createElement("div");
  dessertDiv4.setAttribute("class", "menuitemsDiv");
  const dessertDiv4FotoDiv = document.createElement("div");
  dessertDiv4FotoDiv.setAttribute("class", "menuitemFoto");
  const dessertDiv4NameDiv = document.createElement("div");
  dessertDiv4NameDiv.setAttribute("class", "itemdescriptionDiv");
  const dessertDiv4NameDescDiv = document.createElement("div");
  const dessertDiv4NamePriceDiv = document.createElement("div");
  const dessertDiv4NameDescPara = document.createElement("p");
  const dessertDiv4NamePricePara = document.createElement("p");

  const pecanpieImg = new Image();
  pecanpieImg.src = _pecanpie_jpg__WEBPACK_IMPORTED_MODULE_16__;
  dessertDiv4FotoDiv.appendChild(pecanpieImg);
  dessertDiv4NameDescPara.textContent = "Slice of Pecan Pie";
  dessertDiv4NamePricePara.textContent = "2.5€";
  fotoeventlistener(dessertDiv4);

  dessertDiv.appendChild(dessertDiv4);
  dessertDiv4.appendChild(dessertDiv4FotoDiv);
  dessertDiv4.appendChild(dessertDiv4NameDiv);
  dessertDiv4NameDiv.appendChild(dessertDiv4NameDescDiv);
  dessertDiv4NameDiv.appendChild(dessertDiv4NamePriceDiv);
  dessertDiv4NameDescDiv.appendChild(dessertDiv4NameDescPara);
  dessertDiv4NamePriceDiv.appendChild(dessertDiv4NamePricePara);

  article.appendChild(breakfastDiv);
  article.appendChild(drinksDiv);
  article.appendChild(dessertDiv);
  content.appendChild(article);
}

function fotoeventlistener(somediv) {
  somediv.addEventListener("click", function (event) {
    const firstchild = event.currentTarget.firstElementChild;
    const lastchild = event.currentTarget.lastElementChild;
    const lastchildgrandchild = lastchild.firstElementChild;
    if (firstchild.classList.contains("menuitemFoto")) {
      firstchild.classList.replace("menuitemFoto", "menuitemFotoExpand");
      event.currentTarget.style.flexDirection = "column";
      lastchildgrandchild.style.marginLeft = "15px";
    } else {
      firstchild.classList.replace("menuitemFotoExpand", "menuitemFoto");
      event.currentTarget.style.flexDirection = "row";
      lastchildgrandchild.style.marginLeft = "0px";
    }
  });
}


/***/ }),

/***/ "./src/milk.jpg":
/*!**********************!*\
  !*** ./src/milk.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "458362797dda9430e978.jpg";

/***/ }),

/***/ "./src/muffin.jpg":
/*!************************!*\
  !*** ./src/muffin.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ea9b3034837be2b028f6.jpg";

/***/ }),

/***/ "./src/navigation.js":
/*!***************************!*\
  !*** ./src/navigation.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ navigation)
/* harmony export */ });
function navigation() {
  const header = document.querySelector("header");
  const nav = document.createElement("nav");
  nav.setAttribute("id", "navigation");
  header.appendChild(nav);

  const navList = document.createElement("ul");
  const contact = document.createElement("li");
  contact.setAttribute("id", "contact");
  const menu = document.createElement("li");
  menu.setAttribute("id", "menu");

  contact.textContent = "Contacts";
  menu.textContent = "Menu";

  nav.appendChild(navList);
  navList.appendChild(menu);
  navList.appendChild(contact);
}


/***/ }),

/***/ "./src/oatmeal.jpg":
/*!*************************!*\
  !*** ./src/oatmeal.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "99f83b698943c89640cf.jpg";

/***/ }),

/***/ "./src/orangejuice.jpg":
/*!*****************************!*\
  !*** ./src/orangejuice.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a45d6090b3019ebbcd79.jpg";

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ frontpage)
/* harmony export */ });
/* harmony import */ var _entrance_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entrance.jpg */ "./src/entrance.jpg");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");



function frontpage() {
  const content = document.getElementById("content");
  const article = document.createElement("article");
  article.setAttribute("id", "articleFrontpage");
  const imgDiv = document.createElement("div");
  imgDiv.setAttribute("id", "entrance");
  const entranceImg = new Image();
  entranceImg.src = _entrance_jpg__WEBPACK_IMPORTED_MODULE_0__;

  const section = document.createElement("section");
  section.setAttribute("id", "copy");
  const frontpageCopyT = document.createElement("h3");
  frontpageCopyT.setAttribute("id", "frontpagecopy");
  frontpageCopyT.textContent = "~";
  const para1 = document.createElement("p");
  const para3 = document.createElement("p");
  para1.textContent =
    "Located on a quirky street, Flo's Diner offers the best breakfast in town at a reasonable price. We are very proud of our menu; from pancakes, to oatmeal, there is something for everyone.";

  para3.innerHTML =
    "Breakfast is served every day from 6-22. You can find us on Main Road 20. Contact us for more.";

  section.appendChild(para1);
  section.appendChild(imgDiv);
  section.appendChild(frontpageCopyT);

  imgDiv.appendChild(entranceImg);
  section.appendChild(para3);

  article.appendChild(section);

  content.appendChild(article);
}


/***/ }),

/***/ "./src/pancakes.jpg":
/*!**************************!*\
  !*** ./src/pancakes.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8c325dc6662f64753333.jpg";

/***/ }),

/***/ "./src/pecanpie.jpg":
/*!**************************!*\
  !*** ./src/pecanpie.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f39e8fb4be6d0f9b567e.jpg";

/***/ }),

/***/ "./src/seating.jpg":
/*!*************************!*\
  !*** ./src/seating.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7f9abeafeb83b8d62990.jpg";

/***/ }),

/***/ "./src/tea.jpg":
/*!*********************!*\
  !*** ./src/tea.jpg ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "95f241d95017738b6046.jpg";

/***/ }),

/***/ "./src/toast.jpg":
/*!***********************!*\
  !*** ./src/toast.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "12963c1acca9db75c69e.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ "./src/header.js");
/* harmony import */ var _page_load_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-load.js */ "./src/page-load.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer.js */ "./src/footer.js");
/* harmony import */ var _navigation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navigation.js */ "./src/navigation.js");







function clearDom(event) {
  let contentDiv = document.getElementById("content");
  while (contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.firstChild);
  }
  const thistarget = event.target.id;
  if (thistarget === "contact") {
    tabbedbrowsing();
    (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.default)();
    (0,_footer_js__WEBPACK_IMPORTED_MODULE_4__.default)();
    const contactLi = document.getElementById("contact");
    contactLi.classList.toggle("selected");
  } else if (thistarget === "menu") {
    tabbedbrowsing();
    (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.default)();
    (0,_footer_js__WEBPACK_IMPORTED_MODULE_4__.default)();
    const menuLi = document.getElementById("menu");
    menuLi.classList.toggle("selected");
  } else {
    tabbedbrowsing();
    (0,_page_load_js__WEBPACK_IMPORTED_MODULE_1__.default)();
    (0,_footer_js__WEBPACK_IMPORTED_MODULE_4__.default)();
  }
}

function tabbedbrowsing() {
  (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.default)();
  (0,_navigation_js__WEBPACK_IMPORTED_MODULE_5__.default)();
  const contactLi = document.getElementById("contact");
  const menuLi = document.getElementById("menu");
  const pagetitle = document.querySelector("h1");
  const wasSelectedCont = contactLi.classList.contains("selected");
  const wasSelectedMenu = menuLi.classList.contains("selected");
  contactLi.classList.toggle("selected", wasSelectedCont);
  menuLi.classList.toggle("selected", wasSelectedMenu);
  contactLi.addEventListener("click", clearDom);
  menuLi.addEventListener("click", clearDom);
  pagetitle.addEventListener("click", clearDom);
}
tabbedbrowsing();
(0,_page_load_js__WEBPACK_IMPORTED_MODULE_1__.default)();
(0,_footer_js__WEBPACK_IMPORTED_MODULE_4__.default)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvbmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9wYWdlLWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NIO0FBQzdCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSxnREFBZ0QsaUNBQWlDLGdDQUFnQyxrQkFBa0IsY0FBYyxHQUFHLFVBQVUsMkJBQTJCLG9DQUFvQyxlQUFlLGNBQWMsR0FBRyxZQUFZLGtCQUFrQix3QkFBd0IsdUJBQXVCLEdBQUcsZUFBZSxxQkFBcUIsdUJBQXVCLG9CQUFvQixnREFBZ0QsaUJBQWlCLHVCQUF1QixHQUFHLHFCQUFxQiw4Q0FBOEMsb0JBQW9CLG1CQUFtQixHQUFHLFNBQVMsa0JBQWtCLDJCQUEyQixHQUFHLFlBQVksd0JBQXdCLEdBQUcscUJBQXFCLG9CQUFvQixHQUFHLGNBQWMsa0JBQWtCLG1CQUFtQixzQkFBc0Isa0JBQWtCLDJCQUEyQixHQUFHLHNCQUFzQixpQkFBaUIsR0FBRyx1QkFBdUIsaUJBQWlCLEdBQUcsc0JBQXNCLGtCQUFrQix3QkFBd0IsY0FBYyxrQkFBa0IsR0FBRyx5QkFBeUIsc0JBQXNCLEdBQUcsNEJBQTRCLHFCQUFxQixvQkFBb0IseUJBQXlCLEdBQUcsbUJBQW1CLGtCQUFrQix3QkFBd0IsY0FBYyxxQkFBcUIsb0NBQW9DLHVDQUF1QyxHQUFHLHlCQUF5QixnQ0FBZ0Msc0NBQXNDLEdBQUcseUJBQXlCLGtCQUFrQix3QkFBd0IsbUNBQW1DLGlCQUFpQixHQUFHLDJCQUEyQixvQkFBb0IsdUJBQXVCLEdBQUcsbUJBQW1CLGlCQUFpQix3QkFBd0IsR0FBRyx5QkFBeUIs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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIseUNBQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0Isd0NBQU07QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsMENBQVE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsOENBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QiwrQ0FBYTtBQUN0QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsOENBQU07QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsdUNBQUs7QUFDdEI7QUFDQTtBQUNB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O1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGtDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZpQztBQUNNO0FBQ0o7QUFDTjtBQUNJO0FBQ1E7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9EQUFPO0FBQ1gsSUFBSSxtREFBTTtBQUNWO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxJQUFJLGlEQUFJO0FBQ1IsSUFBSSxtREFBTTtBQUNWO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxJQUFJLHNEQUFTO0FBQ2IsSUFBSSxtREFBTTtBQUNWO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLG1EQUFNO0FBQ1IsRUFBRSx1REFBVTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFTO0FBQ1QsbURBQU0iLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmZmZhOyAqL1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYm9keSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNYXRlIFNDXFxcIiwgc2VyaWY7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5uYXYgdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbm5hdiB1bCBsaSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZy1sZWZ0OiBub25lO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkIGxpZ2h0Z3JheTtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxubmF2IHVsIGxpOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZCAjMDBhOWE5O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6ICMwMGE5YTk7XFxufVxcblxcbm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbmhlYWRlciBoMTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIHdpZHRoOiAxMjgwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNhcnRpY2xlQ29udGFjdHMge1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4jYXJ0aWNsZUZyb250cGFnZSB7XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbiNzZWN0aW9uQ29udGFjdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDIwcHg7XFxuICB3aWR0aDogMTI4MHB4O1xcbn1cXG5cXG4jc2VjdGlvbkNvbnRhY3RzIHVsIHtcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcbn1cXG5cXG4jc2VjdGlvbkNvbnRhY3RzIHVsIGxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogbGlnaHRlcjtcXG59XFxuXFxuLm1lbnVpdGVtc0RpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGdhcDogMTVweDtcXG4gIG1heC13aWR0aDogNjQwcHg7XFxuICBib3JkZXItdG9wOiBzb2xpZCBsaWdodGdyYXkgMXB4O1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgbGlnaHRncmF5IDFweDtcXG59XFxuXFxuLm1lbnVpdGVtc0Rpdjpob3ZlciB7XFxuICBib3JkZXI6IHNvbGlkIGxpZ2h0Z3JheSAxcHg7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCBsaWdodGdyYXk7XFxufVxcblxcbi5pdGVtZGVzY3JpcHRpb25EaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogNjQwcHg7XFxufVxcblxcbi5pdGVtZGVzY3JpcHRpb25EaXYgcCB7XFxuICBmb250LXNpemU6IDIzcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxufVxcblxcbi5tZW51aXRlbUZvdG8ge1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcXG59XFxuXFxuLm1lbnVpdGVtRm90b0V4cGFuZCB7XFxuICB3aWR0aDogNjQwcHg7XFxufVxcblxcbi5tZW51aXRlbUZvdG8gPiBpbWcsXFxuLm1lbnVpdGVtRm90b0V4cGFuZCA+IGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI2JyZWFrZmFzdGRpdixcXG4jZHJpbmtzZGl2LFxcbiNkZXNzZXJ0ZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgd2lkdGg6IDY0MHB4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jYnJlYWtmYXN0ZGl2ID4gaDMsXFxuI2RyaW5rc2RpdiA+IGgzLFxcbiNkZXNzZXJ0ZGl2ID4gaDMge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jYXJ0aWNsZU1lbnUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuI2FydGljbGVNZW51ID4gaDIge1xcbiAgd2lkdGg6IDY0MHB4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jc2VhdGluZyB7XFxuICBmbGV4LXNocmluazogMjtcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcblxcbiNzZWF0aW5nID4gaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG59XFxuXFxuLnNlbGVjdGVkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4jZW50cmFuY2UgPiBpbWcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXgtd2lkdGg6IDEwMDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG59XFxuXFxuI2NvcHkge1xcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XFxuICBmb250LXNpemU6IDIzcHg7XFxuICBtYXJnaW46IDEwcHggYXV0bztcXG59XFxuXFxuI2NvcHkgPiBoMyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmltZyB7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAjZmZmO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgd2lkdGg6IDEyODBweDtcXG4gIG1hcmdpbjogMTBweCBhdXRvIDE1cHggYXV0bztcXG59XFxuXFxuZm9vdGVyIHAge1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmEge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkIGxpZ2h0Z3JheTtcXG59XFxuXFxuYTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQgIzAwYTlhOTtcXG4gIGNvbG9yOiAjMDBhOWE5O1xcbn1cXG5cXG4jZnJvbnRwYWdlY29weSB7XFxuICBtYXJnaW46IDIwcHggYXV0bztcXG59XFxuXFxuI2NvbnRhY3RzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHtcXG4gICNjb250ZW50IHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgfVxcbiAgI2VudHJhbmNlID4gaW1nIHtcXG4gICAgbWF4LXdpZHRoOiA5MHZ3O1xcbiAgfVxcbiAgaGVhZGVyIGgxIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcbiAgfVxcbiAgaGVhZGVyIGgyIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICB9XFxuICAjY29weSB7XFxuICAgIG1heC13aWR0aDogOTB2dztcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcbiAgfVxcbiAgZm9vdGVyIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgfVxcbiAgbmF2IHtcXG4gICAgbWF4LXdpZHRoOiAxMDB2dztcXG4gIH1cXG4gIG5hdiB1bCB7XFxuICAgIHBhZGRpbmctbGVmdDogMDtcXG4gIH1cXG4gIG5hdiB1bCBsaSB7XFxuICAgIHBhZGRpbmctbGVmdDogMDtcXG4gICAgZm9udC1zaXplOiAyM3B4O1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICB9XFxuICAuaXRlbWRlc2NyaXB0aW9uRGl2IHAge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICB9XFxuICAubWVudWl0ZW1zRGl2IHtcXG4gICAgbWF4LXdpZHRoOiAxMDB2dztcXG4gIH1cXG4gIC5pdGVtZGVzY3JpcHRpb25EaXYge1xcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xcbiAgfVxcbiAgLm1lbnVpdGVtRm90byB7XFxuICAgIG1heC13aWR0aDogMjB2dztcXG4gIH1cXG4gICNicmVha2Zhc3RkaXYsXFxuICAjZHJpbmtzZGl2LFxcbiAgI2Rlc3NlcnRkaXYge1xcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xcbiAgfVxcbiAgLm1lbnVpdGVtRm90b0V4cGFuZCB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gIH1cXG4gIC5tZW51aXRlbUZvdG9FeHBhbmQgPiBpbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gICNzZWN0aW9uQ29udGFjdHMge1xcbiAgICB3aWR0aDogOTB2dztcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICB9XFxuICAjY29udGFjdHMge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIH1cXG4gICNjb250YWN0cyBkaXYge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICB9XFxuICAjc2VjdGlvbkNvbnRhY3RzIHAge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICB9XFxuICAjc2VjdGlvbkNvbnRhY3RzIGgzIHtcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcbiAgfVxcbiAgI3NlYXRpbmcgPiBpbWcge1xcbiAgICB3aWR0aDogOTB2dztcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLCtCQUErQjtFQUMvQiwyQkFBMkI7RUFDM0IsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsMkNBQTJDO0VBQzNDLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGdCQUFnQjtFQUNoQiwrQkFBK0I7RUFDL0Isa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBOztFQUVFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7OztFQUdFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7OztFQUdFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLHlDQUF5QztFQUN6QyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7SUFDZixlQUFlO0lBQ2YsWUFBWTtFQUNkO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBOzs7SUFHRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGNBQWM7RUFDaEI7RUFDQTtJQUNFLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLFdBQVc7RUFDYjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwge1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2Y1ZmZmYTsgKi9cXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJlZDsgKi9cXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWF0ZSBTQ1xcXCIsIHNlcmlmO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxubmF2IHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG5uYXYgdWwgbGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmctbGVmdDogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZCBsaWdodGdyYXk7XFxuICB3aWR0aDogMjAwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbm5hdiB1bCBsaTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQgIzAwYTlhOTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjMDBhOWE5O1xcbn1cXG5cXG5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmhlYWRlciB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG5oZWFkZXIgaDE6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICB3aWR0aDogMTI4MHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jYXJ0aWNsZUNvbnRhY3RzIHtcXG4gIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuI2FydGljbGVGcm9udHBhZ2Uge1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4jc2VjdGlvbkNvbnRhY3RzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZ2FwOiAyMHB4O1xcbiAgd2lkdGg6IDEyODBweDtcXG59XFxuXFxuI3NlY3Rpb25Db250YWN0cyB1bCB7XFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXG59XFxuXFxuI3NlY3Rpb25Db250YWN0cyB1bCBsaSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxufVxcblxcbi5tZW51aXRlbXNEaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDE1cHg7XFxuICBtYXgtd2lkdGg6IDY0MHB4O1xcbiAgYm9yZGVyLXRvcDogc29saWQgbGlnaHRncmF5IDFweDtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIGxpZ2h0Z3JheSAxcHg7XFxufVxcblxcbi5tZW51aXRlbXNEaXY6aG92ZXIge1xcbiAgYm9yZGVyOiBzb2xpZCBsaWdodGdyYXkgMXB4O1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggbGlnaHRncmF5O1xcbn1cXG5cXG4uaXRlbWRlc2NyaXB0aW9uRGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDY0MHB4O1xcbn1cXG5cXG4uaXRlbWRlc2NyaXB0aW9uRGl2IHAge1xcbiAgZm9udC1zaXplOiAyM3B4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbn1cXG5cXG4ubWVudWl0ZW1Gb3RvIHtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcblxcbi5tZW51aXRlbUZvdG9FeHBhbmQge1xcbiAgd2lkdGg6IDY0MHB4O1xcbn1cXG5cXG4ubWVudWl0ZW1Gb3RvID4gaW1nLFxcbi5tZW51aXRlbUZvdG9FeHBhbmQgPiBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNicmVha2Zhc3RkaXYsXFxuI2RyaW5rc2RpdixcXG4jZGVzc2VydGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIHdpZHRoOiA2NDBweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuI2JyZWFrZmFzdGRpdiA+IGgzLFxcbiNkcmlua3NkaXYgPiBoMyxcXG4jZGVzc2VydGRpdiA+IGgzIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuI2FydGljbGVNZW51IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbiNhcnRpY2xlTWVudSA+IGgyIHtcXG4gIHdpZHRoOiA2NDBweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3NlYXRpbmcge1xcbiAgZmxleC1zaHJpbms6IDI7XFxuICBvYmplY3QtZml0OiBjb250YWluO1xcbn1cXG5cXG4jc2VhdGluZyA+IGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxufVxcblxcbi5zZWxlY3RlZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuI2VudHJhbmNlID4gaW1nIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxufVxcblxcbiNjb3B5IHtcXG4gIG1heC13aWR0aDogMTAwMHB4O1xcbiAgZm9udC1zaXplOiAyM3B4O1xcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxufVxcblxcbiNjb3B5ID4gaDMge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5pbWcge1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggI2ZmZjtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHdpZHRoOiAxMjgwcHg7XFxuICBtYXJnaW46IDEwcHggYXV0byAxNXB4IGF1dG87XFxufVxcblxcbmZvb3RlciBwIHtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZCBsaWdodGdyYXk7XFxufVxcblxcbmE6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkICMwMGE5YTk7XFxuICBjb2xvcjogIzAwYTlhOTtcXG59XFxuXFxuI2Zyb250cGFnZWNvcHkge1xcbiAgbWFyZ2luOiAyMHB4IGF1dG87XFxufVxcblxcbiNjb250YWN0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI3OXB4KSB7XFxuICAjY29udGVudCB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gIH1cXG4gICNlbnRyYW5jZSA+IGltZyB7XFxuICAgIG1heC13aWR0aDogOTB2dztcXG4gIH1cXG4gIGhlYWRlciBoMSB7XFxuICAgIHBhZGRpbmctbGVmdDogMjVweDtcXG4gIH1cXG4gIGhlYWRlciBoMiB7XFxuICAgIHBhZGRpbmctbGVmdDogMjVweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgfVxcbiAgI2NvcHkge1xcbiAgICBtYXgtd2lkdGg6IDkwdnc7XFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXG4gIH1cXG4gIGZvb3RlciB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gIH1cXG4gIG5hdiB7XFxuICAgIG1heC13aWR0aDogMTAwdnc7XFxuICB9XFxuICBuYXYgdWwge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XFxuICB9XFxuICBuYXYgdWwgbGkge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XFxuICAgIGZvbnQtc2l6ZTogMjNweDtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgfVxcbiAgLml0ZW1kZXNjcmlwdGlvbkRpdiBwIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgfVxcbiAgLm1lbnVpdGVtc0RpdiB7XFxuICAgIG1heC13aWR0aDogMTAwdnc7XFxuICB9XFxuICAuaXRlbWRlc2NyaXB0aW9uRGl2IHtcXG4gICAgbWF4LXdpZHRoOiAxMDB2dztcXG4gIH1cXG4gIC5tZW51aXRlbUZvdG8ge1xcbiAgICBtYXgtd2lkdGg6IDIwdnc7XFxuICB9XFxuICAjYnJlYWtmYXN0ZGl2LFxcbiAgI2RyaW5rc2RpdixcXG4gICNkZXNzZXJ0ZGl2IHtcXG4gICAgbWF4LXdpZHRoOiAxMDB2dztcXG4gIH1cXG4gIC5tZW51aXRlbUZvdG9FeHBhbmQge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICB9XFxuICAubWVudWl0ZW1Gb3RvRXhwYW5kID4gaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICAjc2VjdGlvbkNvbnRhY3RzIHtcXG4gICAgd2lkdGg6IDkwdnc7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgfVxcbiAgI2NvbnRhY3RzIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB9XFxuICAjY29udGFjdHMgZGl2IHtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgfVxcbiAgI3NlY3Rpb25Db250YWN0cyBwIHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgfVxcbiAgI3NlY3Rpb25Db250YWN0cyBoMyB7XFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXG4gIH1cXG4gICNzZWF0aW5nID4gaW1nIHtcXG4gICAgd2lkdGg6IDkwdnc7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgc3R5bGUgZnJvbSBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgU2VhdGluZyBmcm9tIFwiLi9zZWF0aW5nLmpwZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250YWN0KCkge1xuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICBjb25zdCBhcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIik7XG4gIGFydGljbGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhcnRpY2xlQ29udGFjdHNcIik7XG4gIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgc2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNlY3Rpb25Db250YWN0c1wiKTtcblxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWN0c1wiKTtcbiAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFkZHJlc3Muc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGRyZXNzXCIpO1xuICBjb25zdCBhZGRyZXNzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGFkZHJlc3NUaXRsZS50ZXh0Q29udGVudCA9IFwiQWRkcmVzc1wiO1xuICBjb25zdCBwYXJhQSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwYXJhQS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIndoaXRlLXNwYWNlOiBwcmU7XCIpO1xuICBwYXJhQS50ZXh0Q29udGVudCA9IFwiTWFpbiBSb2FkIG5yIDIwIFxcclxcblwiO1xuICBwYXJhQS50ZXh0Q29udGVudCArPSBcIjIyenogTWFyc1wiO1xuICBhZGRyZXNzLmFwcGVuZENoaWxkKGFkZHJlc3NUaXRsZSk7XG4gIGFkZHJlc3MuYXBwZW5kQ2hpbGQocGFyYUEpO1xuXG4gIGNvbnN0IHRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRlbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRlbFwiKTtcbiAgY29uc3QgdGVsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIHRlbFRpdGxlLnRleHRDb250ZW50ID0gXCJUZWxlcGhvbmVcIjtcbiAgY29uc3QgcGFyYVQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcGFyYVQudGV4dENvbnRlbnQgPSBcIlRlbDogOTk5OTk5OTAwXCI7XG4gIHRlbC5hcHBlbmRDaGlsZCh0ZWxUaXRsZSk7XG4gIHRlbC5hcHBlbmRDaGlsZChwYXJhVCk7XG5cbiAgY29uc3QgZW1haWxBZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZW1haWxBZGRyZXNzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZW1haWxcIik7XG4gIGNvbnN0IGVtYWlsQWRkcmVzc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBlbWFpbEFkZHJlc3NUaXRsZS50ZXh0Q29udGVudCA9IFwiRS1tYWlsXCI7XG4gIGNvbnN0IHBhcmFFID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHBhcmFFLnRleHRDb250ZW50ID0gXCJoZWxsb0BmbG9zZGluZXIubnBcIjtcbiAgZW1haWxBZGRyZXNzLmFwcGVuZENoaWxkKGVtYWlsQWRkcmVzc1RpdGxlKTtcbiAgZW1haWxBZGRyZXNzLmFwcGVuZENoaWxkKHBhcmFFKTtcblxuICBjb25zdCBzb2NpYWxtZWRpYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNvY2lhbG1lZGlhLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic29jaWFsbWVkaWFcIik7XG4gIGNvbnN0IHNvY2lhbG1lZGlhVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIHNvY2lhbG1lZGlhVGl0bGUudGV4dENvbnRlbnQgPSBcIlNvY2lhbCBNZWRpYVwiO1xuICBjb25zdCBzb2NpYWxsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBjb25zdCBzb2NpYWxsaXN0ZmFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3Qgc29jaWFsbGlzdGluc3RhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXG4gIHNvY2lhbG1lZGlhVGl0bGUuYXBwZW5kQ2hpbGQoc29jaWFsbGlzdCk7XG4gIHNvY2lhbGxpc3QuYXBwZW5kQ2hpbGQoc29jaWFsbGlzdGZhY2UpO1xuICBzb2NpYWxsaXN0LmFwcGVuZENoaWxkKHNvY2lhbGxpc3RpbnN0YSk7XG5cbiAgc29jaWFsbGlzdGZhY2UuaW5uZXJIVE1MID1cbiAgICAnPGkgY2xhc3M9XCJmYWIgZmEtZmFjZWJvb2stZlwiPjwvaT4gPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9wYXBvc2Vjby9cIj5GYWNlYm9vazwvYT4nO1xuICBzb2NpYWxsaXN0aW5zdGEuaW5uZXJIVE1MID1cbiAgICAnPGkgY2xhc3M9XCJmYWIgZmEtaW5zdGFncmFtXCI+PC9pPiA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3BhcG9zZWNvL1wiPkluc3RhZ3JhbTwvYT4nO1xuXG4gIHNvY2lhbG1lZGlhLmFwcGVuZENoaWxkKHNvY2lhbG1lZGlhVGl0bGUpO1xuXG4gIGNvbnN0IGltZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGltZ0Rpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNlYXRpbmdcIik7XG4gIGNvbnN0IHNlYXRpbmdJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgc2VhdGluZ0ltZy5zcmMgPSBTZWF0aW5nO1xuICBpbWdEaXYuYXBwZW5kQ2hpbGQoc2VhdGluZ0ltZyk7XG5cbiAgYXJ0aWNsZS5hcHBlbmRDaGlsZChzZWN0aW9uKTtcbiAgc2VjdGlvbi5hcHBlbmRDaGlsZChkaXYpO1xuICBkaXYuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG4gIGRpdi5hcHBlbmRDaGlsZCh0ZWwpO1xuICBkaXYuYXBwZW5kQ2hpbGQoZW1haWxBZGRyZXNzKTtcbiAgZGl2LmFwcGVuZENoaWxkKHNvY2lhbG1lZGlhKTtcbiAgc2VjdGlvbi5hcHBlbmRDaGlsZChpbWdEaXYpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGFydGljbGUpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9vdGVyKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICBjb25zdCBmb290ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHBhcmEuaW5uZXJIVE1MID1cbiAgICBcIjxhIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS9wYXBvc2Vjby8nIGFsdD0nZ2l0aHViJz48c3Bhbj48aSBjbGFzcz0nZmFiIGZhLWdpdGh1Yic+PC9pPjwvc3Bhbj5GYWJpPC9hPlwiO1xuICBmb290ZXJEaXYuYXBwZW5kQ2hpbGQocGFyYSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyRGl2KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhlYWRlcigpIHtcbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgY29uc3QgcGFnZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBjb25zdCBwYWdlSGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG5cbiAgcGFnZVRpdGxlLnRleHRDb250ZW50ID0gXCJGbG8ncyBEaW5lclwiO1xuICBwYWdlSGVhZGxpbmUudGV4dENvbnRlbnQgPSBcIn5XZWxjb21lIHRvIHRoZSBiZXN0IGRpbmVyIGluIHRvd25+XCI7XG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKHBhZ2VUaXRsZSk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChwYWdlSGVhZGxpbmUpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGhlYWRlcik7XG59XG4iLCJpbXBvcnQgc3R5bGUgZnJvbSBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgVG9hc3QgZnJvbSBcIi4vdG9hc3QuanBnXCI7XG5pbXBvcnQgRnJlbmNoVG9hc3QgZnJvbSBcIi4vZnJlbmNodG9hc3QuanBnXCI7XG5pbXBvcnQgT2F0bWVhbCBmcm9tIFwiLi9vYXRtZWFsLmpwZ1wiO1xuaW1wb3J0IENlcmVhbCBmcm9tIFwiLi9jZXJlYWwuanBnXCI7XG5pbXBvcnQgUGFuY2FrZXMgZnJvbSBcIi4vcGFuY2FrZXMuanBnXCI7XG5pbXBvcnQgRnVsbEJyZWFrZmFzdCBmcm9tIFwiLi9mdWxsYnJlYWtmYXN0LmpwZ1wiO1xuaW1wb3J0IEVnZ3NCYWNvbiBmcm9tIFwiLi9lZ2dzYW5kYmFjb24uanBnXCI7XG5cbmltcG9ydCBDb2ZmZWUgZnJvbSBcIi4vZmlsdGVyY29mZmVlLmpwZ1wiO1xuaW1wb3J0IExhdHRlIGZyb20gXCIuL2xhdHRlLmpwZ1wiO1xuaW1wb3J0IFRlYSBmcm9tIFwiLi90ZWEuanBnXCI7XG5pbXBvcnQgTWlsayBmcm9tIFwiLi9taWxrLmpwZ1wiO1xuaW1wb3J0IE9yYW5nZUp1aWNlIGZyb20gXCIuL29yYW5nZWp1aWNlLmpwZ1wiO1xuXG5pbXBvcnQgTXVmZmluIGZyb20gXCIuL211ZmZpbi5qcGdcIjtcbmltcG9ydCBEb251dHMgZnJvbSBcIi4vZG9udXRzLmpwZ1wiO1xuaW1wb3J0IEFwcGxlUGllIGZyb20gXCIuL2FwcGxlcGllLmpwZ1wiO1xuaW1wb3J0IFBlY2FuUGllIGZyb20gXCIuL3BlY2FucGllLmpwZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51KCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICBjb25zdCBhcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIik7XG4gIGFydGljbGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhcnRpY2xlTWVudVwiKTtcbiAgLy9icmVha2Zhc3RcbiAgY29uc3QgYnJlYWtmYXN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYnJlYWtmYXN0RGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYnJlYWtmYXN0ZGl2XCIpO1xuICBjb25zdCBicmVha2Zhc3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgYnJlYWtmYXN0VGl0bGUudGV4dENvbnRlbnQgPSBcIn4gQnJlYWtmYXN0IH5cIjtcbiAgYnJlYWtmYXN0RGl2LmFwcGVuZENoaWxkKGJyZWFrZmFzdFRpdGxlKTtcblxuICBjb25zdCBicmVha2Zhc3REaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYnJlYWtmYXN0RGl2MS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1lbnVpdGVtc0RpdlwiKTtcbiAgY29uc3QgYnJlYWtmYXN0RGl2MUZvdG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBicmVha2Zhc3REaXYxRm90b0Rpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1lbnVpdGVtRm90b1wiKTtcbiAgY29uc3QgYnJlYWtmYXN0RGl2MU5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBicmVha2Zhc3REaXYxTmFtZURpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIml0ZW1kZXNjcmlwdGlvbkRpdlwiKTtcbiAgY29uc3QgYnJlYWtmYXN0RGl2MU5hbWVEZXNjRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYnJlYWtmYXN0RGl2MU5hbWVQcmljZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJyZWFrZmFzdERpdjFOYW1lRGVzY1BhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgYnJlYWtmYXN0RGl2MU5hbWVQcmljZVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICBjb25zdCB0b2FzdEltZyA9IG5ldyBJbWFnZSgpO1xuICB0b2FzdEltZy5zcmMgPSBUb2FzdDtcbiAgYnJlYWtmYXN0RGl2MUZvdG9EaXYuYXBwZW5kQ2hpbGQodG9hc3RJbWcpO1xuICBicmVha2Zhc3REaXYxTmFtZURlc2NQYXJhLnRleHRDb250ZW50ID0gXCJUb2FzdFwiO1xuICBicmVha2Zhc3REaXYxTmFtZVByaWNlUGFyYS50ZXh0Q29udGVudCA9IFwiMS414oKsXCI7XG4gIGZvdG9ldmVudGxpc3RlbmVyKGJyZWFrZmFzdERpdjEpO1xuXG4gIGJyZWFrZmFzdERpdi5hcHBlbmRDaGlsZChicmVha2Zhc3REaXYxKTtcbiAgYnJlYWtmYXN0RGl2MS5hcHBlbmRDaGlsZChicmVha2Zhc3REaXYxRm90b0Rpdik7XG4gIGJyZWFrZmFzdERpdjEuYXBwZW5kQ2hpbGQoYnJlYWtmYXN0RGl2MU5hbWVEaXYpO1xuICBicmVha2Zhc3REaXYxTmFtZURpdi5hcHBlbmRDaGlsZChicmVha2Zhc3REaXYxTmFtZURlc2NEaXYpO1xuICBicmVha2Zhc3REaXYxTmFtZURpdi5hcHBlbmRDaGlsZChicmVha2Zhc3REaXYxTmFtZVByaWNlRGl2KTtcbiAgYnJlYWtmYXN0RGl2MU5hbWVEZXNjRGl2LmFwcGVuZENoaWxkKGJyZWFrZmFzdERpdjFOYW1lRGVzY1BhcmEpO1xuICBicmVha2Zhc3REaXYxTmFtZVByaWNlRGl2LmFwcGVuZENoaWxkKGJyZWFrZmFzdERpdjFOYW1lUHJpY2VQYXJhKTtcblxuICBjb25zdCBicmVha2Zhc3REaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYnJlYWtmYXN0RGl2Mi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1lbnVpdGVtc0RpdlwiKTtcbiAgY29uc3QgYnJlYWtmYXN0RGl2MkZvdG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBicmVha2Zhc3REaXYyRm90b0Rpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1lbnVpdGVtRm90b1wiKTtcbiAgY29uc3QgYnJlYWtmYXN0RGl2Mk5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBicmVha2Zhc3REaXYyTmFtZURpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIml0ZW1kZXNjcmlwdGlvbkRpdlwiKTtcbiAgY29uc3QgYnJlYWtmYXN0RGl2Mk5hbWVEZXNjRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYnJlYWtmYXN0RGl2Mk5hbWVQcmljZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJyZWFrZmFzdERpdjJOYW1lRGVzY1BhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgYnJlYWtmYXN0RGl2Mk5hbWVQcmljZVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICBjb25zdCBmcmVuY2h0b2FzdEltZyA9IG5ldyBJbWFnZSgpO1xuICBmcmVuY2h0b2FzdEltZy5zcmMgPSBGcmVuY2hUb2FzdDtcbiAgYnJlYWtmYXN0RGl2MkZvdG9EaXYuYXBwZW5kQ2hpbGQoZnJlbmNodG9hc3RJbWcpO1xuICBicmVha2Zhc3REaXYyTmFtZURlc2NQYXJhLnRleHRDb250ZW50ID0gXCJGcmVuY2ggVG9hc3RcIjtcbiAgYnJlYWtmYXN0RGl2Mk5hbWVQcmljZVBhcmEudGV4dENvbnRlbnQgPSBcIjXigqxcIjtcbiAgZm90b2V2ZW50bGlzdGVuZXIoYnJlYWtmYXN0RGl2Mik7XG5cbiAgYnJlYWtmYXN0RGl2LmFwcGVuZENoaWxkKGJyZWFrZmFzdERpdjIpO1xuICBicmVha2Zhc3REaXYyLmFwcGVuZENoaWxkKGJyZWFrZmFzdERpdjJGb3RvRGl2KTtcbiAgYnJlYWtmYXN0RGl2Mi5hcHBlbmRDaGlsZChicmVha2Zhc3REaXYyTmFtZURpdik7XG4gIGJyZWFrZmFzdERpdjJOYW1lRGl2LmFwcGVuZENoaWxkKGJyZWFrZmFzdERpdjJOYW1lRGVzY0Rpdik7XG4gIGJyZWFrZmFzdERpdjJOYW1lRGl2LmFwcGVuZENoaWxkKGJyZWFrZmFzdERpdjJOYW1lUHJpY2VEaXYpO1xuICBicmVha2Zhc3REaXYyTmFtZURlc2NEaXYuYXBwZW5kQ2hpbGQoYnJlYWtmYXN0RGl2Mk5hbWVEZXNjUGFyYSk7XG4gIGJyZWFrZmFzdERpdjJOYW1lUHJpY2VEaXYuYXBwZW5kQ2hpbGQoYnJlYWtmYXN0RGl2Mk5hbWVQcmljZVBhcmEpO1xuXG4gIGNvbnN0IGJyZWFrZmFzdERpdjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBicmVha2Zhc3REaXYzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWVudWl0ZW1zRGl2XCIpO1xuICBjb25zdCBicmVha2Zhc3REaXYzRm90b0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJyZWFrZmFzdERpdjNGb3RvRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWVudWl0ZW1Gb3RvXCIpO1xuICBjb25zdCBicmVha2Zhc3REaXYzTmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJyZWFrZmFzdERpdjNOYW1lRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaXRlbWRlc2NyaXB0aW9uRGl2XCIpO1xuICBjb25zdCBicmVha2Zhc3REaXYzTmFtZURlc2NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBicmVha2Zhc3REaXYzTmFtZVByaWNlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYnJlYWtmYXN0RGl2M05hbWVEZXNjUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBicmVha2Zhc3REaXYzTmFtZVByaWNlUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gIGNvbnN0IG9hdG1lYWxJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgb2F0bWVhbEltZy5zcmMgPSBPYXRtZWFsO1xuICBicmVha2Zhc3REaXYzRm90b0Rpdi5hcHBlbmRDaGlsZChvYXRtZWFsSW1nKTtcbiAgYnJlYWtmYXN0RGl2M05hbWVEZXNjUGFyYS50ZXh0Q29udGVudCA9IFwiT2F0bWVhbFwiO1xuICBicmVha2Zhc3REaXYzTmFtZVByaWNlUGFyYS50ZXh0Q29udGVudCA9IFwiMuKCrFwiO1xuICBmb3RvZXZlbnRsaXN0ZW5lcihicmVha2Zhc3REaXYzKTtcblxuICBicmVha2Zhc3REaXYuYXBwZW5kQ2hpbGQoYnJlYWtmYXN0RGl2Myk7XG4gIGJyZWFrZmFzdERpdjMuYXBwZW5kQ2hpbGQoYnJlYWtmYXN0RGl2M0ZvdG9EaXYpO1xuICBicmVha2Zhc3REaXYzLmFwcGVuZENoaWxkKGJyZWFrZmFzdERpdjNOYW1lRGl2KTtcbiAgYnJlYWtmYXN0RGl2M05hbWVEaXYuYXBwZW5kQ2hpbGQoYnJlYWtmYXN0RGl2M05hbWVEZXNjRGl2KTtcbiAgYnJlYWtmYXN0RGl2M05hbWVEaXYuYXBwZW5kQ2hpbGQoYnJlYWtmYXN0RGl2M05hbWVQcmljZURpdik7XG4gIGJyZWFrZmFzdERpdjNOYW1lRGVzY0Rpdi5hcHBlbmRDaGlsZChicmVha2Zhc3REaXYzTmFtZURlc2NQYXJhKTtcbiAgYnJlYWtmYXN0RGl2M05hbWVQcmljZURpdi5hcHBlbmRDaGlsZChicmVha2Zhc3REaXYzTmFtZVByaWNlUGFyYSk7XG5cbiAgY29uc3QgYnJlYWtmYXN0RGl2NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJyZWFrZmFzdERpdjQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtZW51aXRlbXNEaXZcIik7XG4gIGNvbnN0IGJyZWFrZmFzdERpdjRGb3RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYnJlYWtmYXN0RGl2NEZvdG9EaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtZW51aXRlbUZvdG9cIik7XG4gIGNvbnN0IGJyZWFrZmFzdERpdjROYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYnJlYWtmYXN0RGl2NE5hbWVEaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpdGVtZGVzY3JpcHRpb25EaXZcIik7XG4gIGNvbnN0IGJyZWFrZmFzdERpdjROYW1lRGVzY0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJyZWFrZmFzdERpdjROYW1lUHJpY2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBicmVha2Zhc3REaXY0TmFtZURlc2NQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGJyZWFrZmFzdERpdjROYW1lUHJpY2VQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgY29uc3QgY2VyZWFsSW1nID0gbmV3IEltYWdlKCk7XG4gIGNlcmVhbEltZy5zcmMgPSBDZXJlYWw7XG4gIGJyZWFrZmFzdERpdjRGb3RvRGl2LmFwcGVuZENoaWxkKGNlcmVhbEltZyk7XG4gIGJyZWFrZmFzdERpdjROYW1lRGVzY1BhcmEudGV4dENvbnRlbnQgPSBcIkNlcmVhbCAodmFyaW91cyBvcHRpb25zKVwiO1xuICBicmVha2Zhc3REaXY0TmFtZVByaWNlUGFyYS50ZXh0Q29udGVudCA9IFwiMeKCrFwiO1xuICBmb3RvZXZlbnRsaXN0ZW5lcihicmVha2Zhc3REaXY0KTtcblxuICBicmVha2Zhc3REaXYuYXBwZW5kQ2hpbGQoYnJlYWtmYXN0RGl2NCk7XG4gIGJyZWFrZmFzdERpdjQuYXBwZW5kQ2hpbGQoYnJlYWtmYXN0RGl2NEZvdG9EaXYpO1xuICBicmVha2Zhc3REaXY0LmFwcGVuZENoaWxkKGJyZWFrZmFzdERpdjROYW1lRGl2KTtcbiAgYnJlYWtmYXN0RGl2NE5hbWVEaXYuYXBwZW5kQ2hpbGQoYnJlYWtmYXN0RGl2NE5hbWVEZXNjRGl2KTtcbiAgYnJlYWtmYXN0RGl2NE5hbWVEaXYuYXBwZW5kQ2hpbGQoYnJlYWtmYXN0RGl2NE5hbWVQcmljZURpdik7XG4gIGJyZWFrZmFzdERpdjROYW1lRGVzY0Rpdi5hcHBlbmRDaGlsZChicmVha2Zhc3REaXY0TmFtZURlc2NQYXJhKTtcbiAgYnJlYWtmYXN0RGl2NE5hbWVQcmljZURpdi5hcHBlbmRDaGlsZChicmVha2Zhc3REaXY0TmFtZVByaWNlUGFyYSk7XG5cbiAgY29uc3QgYnJlYWtmYXN0RGl2NSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJyZWFrZmFzdERpdjUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtZW51aXRlbXNEaXZcIik7XG4gIGNvbnN0IGJyZWFrZmFzdERpdjVGb3RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYnJlYWtmYXN0RGl2NUZvdG9EaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtZW51aXRlbUZvdG9cIik7XG4gIGNvbnN0IGJyZWFrZmFzdERpdjVOYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYnJlYWtmYXN0RGl2NU5hbWVEaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpdGVtZGVzY3JpcHRpb25EaXZcIik7XG4gIGNvbnN0IGJyZWFrZmFzdERpdjVOYW1lRGVzY0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJyZWFrZmFzdERpdjVOYW1lUHJpY2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBicmVha2Zhc3REaXY1TmFtZURlc2NQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGJyZWFrZmFzdERpdjVOYW1lUHJpY2VQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgY29uc3QgcGFuY2FrZUltZyA9IG5ldyBJbWFnZSgpO1xuICBwYW5jYWtlSW1nLnNyYyA9IFBhbmNha2VzO1xuICBicmVha2Zhc3REaXY1Rm90b0Rpdi5hcHBlbmRDaGlsZChwYW5jYWtlSW1nKTtcbiAgYnJlYWtmYXN0RGl2NU5hbWVEZXNjUGFyYS50ZXh0Q29udGVudCA9IFwiUGFuY2FrZXMgd2l0aCBtYXBsZSBzeXJ1cFwiO1xuICBicmVha2Zhc3REaXY1TmFtZVByaWNlUGFyYS50ZXh0Q29udGVudCA9IFwiNOKCrFwiO1xuICBmb3RvZXZlbnRsaXN0ZW5lcihicmVha2Zhc3REaXY1KTtcblxuICBicmVha2Zhc3REaXYuYXBwZW5kQ2hpbGQoYnJlYWtmYXN0RGl2NSk7XG4gIGJyZWFrZmFzdERpdjUuYXBwZW5kQ2hpbGQoYnJlYWtmYXN0RGl2NUZvdG9EaXYpO1xuICBicmVha2Zhc3REaXY1LmFwcGVuZENoaWxkKGJyZWFrZmFzdERpdjVOYW1lRGl2KTtcbiAgYnJlYWtmYXN0RGl2NU5hbWVEaXYuYXBwZW5kQ2hpbGQoYnJlYWtmYXN0RGl2NU5hbWVEZXNjRGl2KTtcbiAgYnJlYWtmYXN0RGl2NU5hbWVEaXYuYXBwZW5kQ2hpbGQoYnJlYWtmYXN0RGl2NU5hbWVQcmljZURpdik7XG4gIGJyZWFrZmFzdERpdjVOYW1lRGVzY0Rpdi5hcHBlbmRDaGlsZChicmVha2Zhc3REaXY1TmFtZURlc2NQYXJhKTtcbiAgYnJlYWtmYXN0RGl2NU5hbWVQcmljZURpdi5hcHBlbmRDaGlsZChicmVha2Zhc3REaXY1TmFtZVByaWNlUGFyYSk7XG5cbiAgY29uc3QgYnJlYWtmYXN0RGl2NiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJyZWFrZmFzdERpdjYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtZW51aXRlbXNEaXZcIik7XG4gIGNvbnN0IGJyZWFrZmFzdERpdjZGb3RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYnJlYWtmYXN0RGl2NkZvdG9EaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtZW51aXRlbUZvdG9cIik7XG4gIGNvbnN0IGJyZWFrZmFzdERpdjZOYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYnJlYWtmYXN0RGl2Nk5hbWVEaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpdGVtZGVzY3JpcHRpb25EaXZcIik7XG4gIGNvbnN0IGJyZWFrZmFzdERpdjZOYW1lRGVzY0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJyZWFrZmFzdERpdjZOYW1lUHJpY2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBicmVha2Zhc3REaXY2TmFtZURlc2NQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGJyZWFrZmFzdERpdjZOYW1lUHJpY2VQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgY29uc3QgRWdnc0JhY29uSW1nID0gbmV3IEltYWdlKCk7XG4gIEVnZ3NCYWNvbkltZy5zcmMgPSBFZ2dzQmFjb247XG4gIGJyZWFrZmFzdERpdjZGb3RvRGl2LmFwcGVuZENoaWxkKEVnZ3NCYWNvbkltZyk7XG4gIGJyZWFrZmFzdERpdjZOYW1lRGVzY1BhcmEudGV4dENvbnRlbnQgPVxuICAgIFwiRnJpZWQgRWdncyAoc3Vubnkgc2lkZSB1cCkgYW5kIGJhY29uXCI7XG4gIGJyZWFrZmFzdERpdjZOYW1lUHJpY2VQYXJhLnRleHRDb250ZW50ID0gXCIz4oKsXCI7XG4gIGZvdG9ldmVudGxpc3RlbmVyKGJyZWFrZmFzdERpdjYpO1xuXG4gIGJyZWFrZmFzdERpdi5hcHBlbmRDaGlsZChicmVha2Zhc3REaXY2KTtcbiAgYnJlYWtmYXN0RGl2Ni5hcHBlbmRDaGlsZChicmVha2Zhc3REaXY2Rm90b0Rpdik7XG4gIGJyZWFrZmFzdERpdjYuYXBwZW5kQ2hpbGQoYnJlYWtmYXN0RGl2Nk5hbWVEaXYpO1xuICBicmVha2Zhc3REaXY2TmFtZURpdi5hcHBlbmRDaGlsZChicmVha2Zhc3REaXY2TmFtZURlc2NEaXYpO1xuICBicmVha2Zhc3REaXY2TmFtZURpdi5hcHBlbmRDaGlsZChicmVha2Zhc3REaXY2TmFtZVByaWNlRGl2KTtcbiAgYnJlYWtmYXN0RGl2Nk5hbWVEZXNjRGl2LmFwcGVuZENoaWxkKGJyZWFrZmFzdERpdjZOYW1lRGVzY1BhcmEpO1xuICBicmVha2Zhc3REaXY2TmFtZVByaWNlRGl2LmFwcGVuZENoaWxkKGJyZWFrZmFzdERpdjZOYW1lUHJpY2VQYXJhKTtcblxuICBjb25zdCBicmVha2Zhc3REaXY3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYnJlYWtmYXN0RGl2Ny5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1lbnVpdGVtc0RpdlwiKTtcbiAgY29uc3QgYnJlYWtmYXN0RGl2N0ZvdG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBicmVha2Zhc3REaXY3Rm90b0Rpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1lbnVpdGVtRm90b1wiKTtcbiAgY29uc3QgYnJlYWtmYXN0RGl2N05hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBicmVha2Zhc3REaXY3TmFtZURpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIml0ZW1kZXNjcmlwdGlvbkRpdlwiKTtcbiAgY29uc3QgYnJlYWtmYXN0RGl2N05hbWVEZXNjRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYnJlYWtmYXN0RGl2N05hbWVQcmljZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJyZWFrZmFzdERpdjdOYW1lRGVzY1BhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgYnJlYWtmYXN0RGl2N05hbWVQcmljZVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICBjb25zdCBmdWxsYnJlYWtmYXN0SW1nID0gbmV3IEltYWdlKCk7XG4gIGZ1bGxicmVha2Zhc3RJbWcuc3JjID0gRnVsbEJyZWFrZmFzdDtcbiAgYnJlYWtmYXN0RGl2N0ZvdG9EaXYuYXBwZW5kQ2hpbGQoZnVsbGJyZWFrZmFzdEltZyk7XG4gIGJyZWFrZmFzdERpdjdOYW1lRGVzY1BhcmEudGV4dENvbnRlbnQgPSBcIkZ1bGwgRW5nbGlzaCBCcmVha2Zhc3RcIjtcbiAgYnJlYWtmYXN0RGl2N05hbWVQcmljZVBhcmEudGV4dENvbnRlbnQgPSBcIjbigqxcIjtcbiAgZm90b2V2ZW50bGlzdGVuZXIoYnJlYWtmYXN0RGl2Nyk7XG5cbiAgYnJlYWtmYXN0RGl2LmFwcGVuZENoaWxkKGJyZWFrZmFzdERpdjcpO1xuICBicmVha2Zhc3REaXY3LmFwcGVuZENoaWxkKGJyZWFrZmFzdERpdjdGb3RvRGl2KTtcbiAgYnJlYWtmYXN0RGl2Ny5hcHBlbmRDaGlsZChicmVha2Zhc3REaXY3TmFtZURpdik7XG4gIGJyZWFrZmFzdERpdjdOYW1lRGl2LmFwcGVuZENoaWxkKGJyZWFrZmFzdERpdjdOYW1lRGVzY0Rpdik7XG4gIGJyZWFrZmFzdERpdjdOYW1lRGl2LmFwcGVuZENoaWxkKGJyZWFrZmFzdERpdjdOYW1lUHJpY2VEaXYpO1xuICBicmVha2Zhc3REaXY3TmFtZURlc2NEaXYuYXBwZW5kQ2hpbGQoYnJlYWtmYXN0RGl2N05hbWVEZXNjUGFyYSk7XG4gIGJyZWFrZmFzdERpdjdOYW1lUHJpY2VEaXYuYXBwZW5kQ2hpbGQoYnJlYWtmYXN0RGl2N05hbWVQcmljZVBhcmEpO1xuXG4gIC8vZHJpbmtzXG4gIGNvbnN0IGRyaW5rc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRyaW5rc0Rpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRyaW5rc2RpdlwiKTtcbiAgY29uc3QgZHJpbmtzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGRyaW5rc1RpdGxlLnRleHRDb250ZW50ID0gXCJ+IERyaW5rcyB+XCI7XG4gIGRyaW5rc0Rpdi5hcHBlbmRDaGlsZChkcmlua3NUaXRsZSk7XG5cbiAgY29uc3QgZHJpbmtzRGl2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRyaW5rc0RpdjEuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtZW51aXRlbXNEaXZcIik7XG4gIGNvbnN0IGRyaW5rc0RpdjFGb3RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZHJpbmtzRGl2MUZvdG9EaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtZW51aXRlbUZvdG9cIik7XG4gIGNvbnN0IGRyaW5rc0RpdjFOYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZHJpbmtzRGl2MU5hbWVEaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpdGVtZGVzY3JpcHRpb25EaXZcIik7XG4gIGNvbnN0IGRyaW5rc0RpdjFOYW1lRGVzY0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGRyaW5rc0RpdjFOYW1lUHJpY2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBkcmlua3NEaXYxTmFtZURlc2NQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGRyaW5rc0RpdjFOYW1lUHJpY2VQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgY29uc3QgY29mZmVlSW1nID0gbmV3IEltYWdlKCk7XG4gIGNvZmZlZUltZy5zcmMgPSBDb2ZmZWU7XG4gIGRyaW5rc0RpdjFGb3RvRGl2LmFwcGVuZENoaWxkKGNvZmZlZUltZyk7XG4gIGRyaW5rc0RpdjFOYW1lRGVzY1BhcmEudGV4dENvbnRlbnQgPSBcIkZpbHRlciBjb2ZmZWVcIjtcbiAgZHJpbmtzRGl2MU5hbWVQcmljZVBhcmEudGV4dENvbnRlbnQgPSBcIjHigqxcIjtcbiAgZm90b2V2ZW50bGlzdGVuZXIoZHJpbmtzRGl2MSk7XG5cbiAgZHJpbmtzRGl2LmFwcGVuZENoaWxkKGRyaW5rc0RpdjEpO1xuICBkcmlua3NEaXYxLmFwcGVuZENoaWxkKGRyaW5rc0RpdjFGb3RvRGl2KTtcbiAgZHJpbmtzRGl2MS5hcHBlbmRDaGlsZChkcmlua3NEaXYxTmFtZURpdik7XG4gIGRyaW5rc0RpdjFOYW1lRGl2LmFwcGVuZENoaWxkKGRyaW5rc0RpdjFOYW1lRGVzY0Rpdik7XG4gIGRyaW5rc0RpdjFOYW1lRGl2LmFwcGVuZENoaWxkKGRyaW5rc0RpdjFOYW1lUHJpY2VEaXYpO1xuICBkcmlua3NEaXYxTmFtZURlc2NEaXYuYXBwZW5kQ2hpbGQoZHJpbmtzRGl2MU5hbWVEZXNjUGFyYSk7XG4gIGRyaW5rc0RpdjFOYW1lUHJpY2VEaXYuYXBwZW5kQ2hpbGQoZHJpbmtzRGl2MU5hbWVQcmljZVBhcmEpO1xuXG4gIGNvbnN0IGRyaW5rc0RpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkcmlua3NEaXYyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWVudWl0ZW1zRGl2XCIpO1xuICBjb25zdCBkcmlua3NEaXYyRm90b0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRyaW5rc0RpdjJGb3RvRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWVudWl0ZW1Gb3RvXCIpO1xuICBjb25zdCBkcmlua3NEaXYyTmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRyaW5rc0RpdjJOYW1lRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaXRlbWRlc2NyaXB0aW9uRGl2XCIpO1xuICBjb25zdCBkcmlua3NEaXYyTmFtZURlc2NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBkcmlua3NEaXYyTmFtZVByaWNlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZHJpbmtzRGl2Mk5hbWVEZXNjUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBkcmlua3NEaXYyTmFtZVByaWNlUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gIGNvbnN0IGxhdHRlSW1nID0gbmV3IEltYWdlKCk7XG4gIGxhdHRlSW1nLnNyYyA9IExhdHRlO1xuICBkcmlua3NEaXYyRm90b0Rpdi5hcHBlbmRDaGlsZChsYXR0ZUltZyk7XG4gIGRyaW5rc0RpdjJOYW1lRGVzY1BhcmEudGV4dENvbnRlbnQgPSBcIkxhdHRlXCI7XG4gIGRyaW5rc0RpdjJOYW1lUHJpY2VQYXJhLnRleHRDb250ZW50ID0gXCIy4oKsXCI7XG4gIGZvdG9ldmVudGxpc3RlbmVyKGRyaW5rc0RpdjIpO1xuXG4gIGRyaW5rc0Rpdi5hcHBlbmRDaGlsZChkcmlua3NEaXYyKTtcbiAgZHJpbmtzRGl2Mi5hcHBlbmRDaGlsZChkcmlua3NEaXYyRm90b0Rpdik7XG4gIGRyaW5rc0RpdjIuYXBwZW5kQ2hpbGQoZHJpbmtzRGl2Mk5hbWVEaXYpO1xuICBkcmlua3NEaXYyTmFtZURpdi5hcHBlbmRDaGlsZChkcmlua3NEaXYyTmFtZURlc2NEaXYpO1xuICBkcmlua3NEaXYyTmFtZURpdi5hcHBlbmRDaGlsZChkcmlua3NEaXYyTmFtZVByaWNlRGl2KTtcbiAgZHJpbmtzRGl2Mk5hbWVEZXNjRGl2LmFwcGVuZENoaWxkKGRyaW5rc0RpdjJOYW1lRGVzY1BhcmEpO1xuICBkcmlua3NEaXYyTmFtZVByaWNlRGl2LmFwcGVuZENoaWxkKGRyaW5rc0RpdjJOYW1lUHJpY2VQYXJhKTtcblxuICBjb25zdCBkcmlua3NEaXYzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZHJpbmtzRGl2My5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1lbnVpdGVtc0RpdlwiKTtcbiAgY29uc3QgZHJpbmtzRGl2M0ZvdG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkcmlua3NEaXYzRm90b0Rpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1lbnVpdGVtRm90b1wiKTtcbiAgY29uc3QgZHJpbmtzRGl2M05hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkcmlua3NEaXYzTmFtZURpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIml0ZW1kZXNjcmlwdGlvbkRpdlwiKTtcbiAgY29uc3QgZHJpbmtzRGl2M05hbWVEZXNjRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZHJpbmtzRGl2M05hbWVQcmljZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGRyaW5rc0RpdjNOYW1lRGVzY1BhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgZHJpbmtzRGl2M05hbWVQcmljZVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICBjb25zdCB0ZWFJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgdGVhSW1nLnNyYyA9IFRlYTtcbiAgZHJpbmtzRGl2M0ZvdG9EaXYuYXBwZW5kQ2hpbGQodGVhSW1nKTtcbiAgZHJpbmtzRGl2M05hbWVEZXNjUGFyYS50ZXh0Q29udGVudCA9IFwiVGVhXCI7XG4gIGRyaW5rc0RpdjNOYW1lUHJpY2VQYXJhLnRleHRDb250ZW50ID0gXCIx4oKsXCI7XG4gIGZvdG9ldmVudGxpc3RlbmVyKGRyaW5rc0RpdjMpO1xuXG4gIGRyaW5rc0Rpdi5hcHBlbmRDaGlsZChkcmlua3NEaXYzKTtcbiAgZHJpbmtzRGl2My5hcHBlbmRDaGlsZChkcmlua3NEaXYzRm90b0Rpdik7XG4gIGRyaW5rc0RpdjMuYXBwZW5kQ2hpbGQoZHJpbmtzRGl2M05hbWVEaXYpO1xuICBkcmlua3NEaXYzTmFtZURpdi5hcHBlbmRDaGlsZChkcmlua3NEaXYzTmFtZURlc2NEaXYpO1xuICBkcmlua3NEaXYzTmFtZURpdi5hcHBlbmRDaGlsZChkcmlua3NEaXYzTmFtZVByaWNlRGl2KTtcbiAgZHJpbmtzRGl2M05hbWVEZXNjRGl2LmFwcGVuZENoaWxkKGRyaW5rc0RpdjNOYW1lRGVzY1BhcmEpO1xuICBkcmlua3NEaXYzTmFtZVByaWNlRGl2LmFwcGVuZENoaWxkKGRyaW5rc0RpdjNOYW1lUHJpY2VQYXJhKTtcblxuICBjb25zdCBkcmlua3NEaXY0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZHJpbmtzRGl2NC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1lbnVpdGVtc0RpdlwiKTtcbiAgY29uc3QgZHJpbmtzRGl2NEZvdG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkcmlua3NEaXY0Rm90b0Rpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1lbnVpdGVtRm90b1wiKTtcbiAgY29uc3QgZHJpbmtzRGl2NE5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkcmlua3NEaXY0TmFtZURpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIml0ZW1kZXNjcmlwdGlvbkRpdlwiKTtcbiAgY29uc3QgZHJpbmtzRGl2NE5hbWVEZXNjRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZHJpbmtzRGl2NE5hbWVQcmljZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGRyaW5rc0RpdjROYW1lRGVzY1BhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgZHJpbmtzRGl2NE5hbWVQcmljZVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICBjb25zdCBtaWxrSW1nID0gbmV3IEltYWdlKCk7XG4gIG1pbGtJbWcuc3JjID0gTWlsaztcbiAgZHJpbmtzRGl2NEZvdG9EaXYuYXBwZW5kQ2hpbGQobWlsa0ltZyk7XG4gIGRyaW5rc0RpdjROYW1lRGVzY1BhcmEudGV4dENvbnRlbnQgPSBcIk1pbGsgKGFzayBmb3IgbGFjdG9zZSBmcmVlIG9wdGlvbnMpXCI7XG4gIGRyaW5rc0RpdjROYW1lUHJpY2VQYXJhLnRleHRDb250ZW50ID0gXCIx4oKsXCI7XG4gIGZvdG9ldmVudGxpc3RlbmVyKGRyaW5rc0RpdjQpO1xuXG4gIGRyaW5rc0Rpdi5hcHBlbmRDaGlsZChkcmlua3NEaXY0KTtcbiAgZHJpbmtzRGl2NC5hcHBlbmRDaGlsZChkcmlua3NEaXY0Rm90b0Rpdik7XG4gIGRyaW5rc0RpdjQuYXBwZW5kQ2hpbGQoZHJpbmtzRGl2NE5hbWVEaXYpO1xuICBkcmlua3NEaXY0TmFtZURpdi5hcHBlbmRDaGlsZChkcmlua3NEaXY0TmFtZURlc2NEaXYpO1xuICBkcmlua3NEaXY0TmFtZURpdi5hcHBlbmRDaGlsZChkcmlua3NEaXY0TmFtZVByaWNlRGl2KTtcbiAgZHJpbmtzRGl2NE5hbWVEZXNjRGl2LmFwcGVuZENoaWxkKGRyaW5rc0RpdjROYW1lRGVzY1BhcmEpO1xuICBkcmlua3NEaXY0TmFtZVByaWNlRGl2LmFwcGVuZENoaWxkKGRyaW5rc0RpdjROYW1lUHJpY2VQYXJhKTtcblxuICBjb25zdCBkcmlua3NEaXY1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZHJpbmtzRGl2NS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1lbnVpdGVtc0RpdlwiKTtcbiAgY29uc3QgZHJpbmtzRGl2NUZvdG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkcmlua3NEaXY1Rm90b0Rpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1lbnVpdGVtRm90b1wiKTtcbiAgY29uc3QgZHJpbmtzRGl2NU5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkcmlua3NEaXY1TmFtZURpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIml0ZW1kZXNjcmlwdGlvbkRpdlwiKTtcbiAgY29uc3QgZHJpbmtzRGl2NU5hbWVEZXNjRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZHJpbmtzRGl2NU5hbWVQcmljZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGRyaW5rc0RpdjVOYW1lRGVzY1BhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgZHJpbmtzRGl2NU5hbWVQcmljZVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICBjb25zdCBqdWljZUltZyA9IG5ldyBJbWFnZSgpO1xuICBqdWljZUltZy5zcmMgPSBPcmFuZ2VKdWljZTtcbiAgZHJpbmtzRGl2NUZvdG9EaXYuYXBwZW5kQ2hpbGQoanVpY2VJbWcpO1xuICBkcmlua3NEaXY1TmFtZURlc2NQYXJhLnRleHRDb250ZW50ID0gXCJGcmVzaCBzcXVlZXplZCBvcmFuZ2UganVpY2VcIjtcbiAgZHJpbmtzRGl2NU5hbWVQcmljZVBhcmEudGV4dENvbnRlbnQgPSBcIjIuNeKCrFwiO1xuICBmb3RvZXZlbnRsaXN0ZW5lcihkcmlua3NEaXY1KTtcblxuICBkcmlua3NEaXYuYXBwZW5kQ2hpbGQoZHJpbmtzRGl2NSk7XG4gIGRyaW5rc0RpdjUuYXBwZW5kQ2hpbGQoZHJpbmtzRGl2NUZvdG9EaXYpO1xuICBkcmlua3NEaXY1LmFwcGVuZENoaWxkKGRyaW5rc0RpdjVOYW1lRGl2KTtcbiAgZHJpbmtzRGl2NU5hbWVEaXYuYXBwZW5kQ2hpbGQoZHJpbmtzRGl2NU5hbWVEZXNjRGl2KTtcbiAgZHJpbmtzRGl2NU5hbWVEaXYuYXBwZW5kQ2hpbGQoZHJpbmtzRGl2NU5hbWVQcmljZURpdik7XG4gIGRyaW5rc0RpdjVOYW1lRGVzY0Rpdi5hcHBlbmRDaGlsZChkcmlua3NEaXY1TmFtZURlc2NQYXJhKTtcbiAgZHJpbmtzRGl2NU5hbWVQcmljZURpdi5hcHBlbmRDaGlsZChkcmlua3NEaXY1TmFtZVByaWNlUGFyYSk7XG5cbiAgLy9kZXNzZXJ0c1xuICBjb25zdCBkZXNzZXJ0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGVzc2VydERpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlc3NlcnRkaXZcIik7XG4gIGNvbnN0IGRlc3NlcnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgZGVzc2VydFRpdGxlLnRleHRDb250ZW50ID0gXCJ+IERlc3NlcnRzIH5cIjtcbiAgZGVzc2VydERpdi5hcHBlbmRDaGlsZChkZXNzZXJ0VGl0bGUpO1xuXG4gIGNvbnN0IGRlc3NlcnREaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGVzc2VydERpdjEuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtZW51aXRlbXNEaXZcIik7XG4gIGNvbnN0IGRlc3NlcnREaXYxRm90b0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRlc3NlcnREaXYxRm90b0Rpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1lbnVpdGVtRm90b1wiKTtcbiAgY29uc3QgZGVzc2VydERpdjFOYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGVzc2VydERpdjFOYW1lRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaXRlbWRlc2NyaXB0aW9uRGl2XCIpO1xuICBjb25zdCBkZXNzZXJ0RGl2MU5hbWVEZXNjRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZGVzc2VydERpdjFOYW1lUHJpY2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBkZXNzZXJ0RGl2MU5hbWVEZXNjUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBkZXNzZXJ0RGl2MU5hbWVQcmljZVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICBjb25zdCBtdWZmaW5JbWcgPSBuZXcgSW1hZ2UoKTtcbiAgbXVmZmluSW1nLnNyYyA9IE11ZmZpbjtcbiAgZGVzc2VydERpdjFGb3RvRGl2LmFwcGVuZENoaWxkKG11ZmZpbkltZyk7XG4gIGRlc3NlcnREaXYxTmFtZURlc2NQYXJhLnRleHRDb250ZW50ID0gXCJNdWZmaW4gb2YgdGhlIGRheVwiO1xuICBkZXNzZXJ0RGl2MU5hbWVQcmljZVBhcmEudGV4dENvbnRlbnQgPSBcIjLigqxcIjtcbiAgZm90b2V2ZW50bGlzdGVuZXIoZGVzc2VydERpdjEpO1xuXG4gIGRlc3NlcnREaXYuYXBwZW5kQ2hpbGQoZGVzc2VydERpdjEpO1xuICBkZXNzZXJ0RGl2MS5hcHBlbmRDaGlsZChkZXNzZXJ0RGl2MUZvdG9EaXYpO1xuICBkZXNzZXJ0RGl2MS5hcHBlbmRDaGlsZChkZXNzZXJ0RGl2MU5hbWVEaXYpO1xuICBkZXNzZXJ0RGl2MU5hbWVEaXYuYXBwZW5kQ2hpbGQoZGVzc2VydERpdjFOYW1lRGVzY0Rpdik7XG4gIGRlc3NlcnREaXYxTmFtZURpdi5hcHBlbmRDaGlsZChkZXNzZXJ0RGl2MU5hbWVQcmljZURpdik7XG4gIGRlc3NlcnREaXYxTmFtZURlc2NEaXYuYXBwZW5kQ2hpbGQoZGVzc2VydERpdjFOYW1lRGVzY1BhcmEpO1xuICBkZXNzZXJ0RGl2MU5hbWVQcmljZURpdi5hcHBlbmRDaGlsZChkZXNzZXJ0RGl2MU5hbWVQcmljZVBhcmEpO1xuXG4gIGNvbnN0IGRlc3NlcnREaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGVzc2VydERpdjIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtZW51aXRlbXNEaXZcIik7XG4gIGNvbnN0IGRlc3NlcnREaXYyRm90b0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRlc3NlcnREaXYyRm90b0Rpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1lbnVpdGVtRm90b1wiKTtcbiAgY29uc3QgZGVzc2VydERpdjJOYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGVzc2VydERpdjJOYW1lRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaXRlbWRlc2NyaXB0aW9uRGl2XCIpO1xuICBjb25zdCBkZXNzZXJ0RGl2Mk5hbWVEZXNjRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZGVzc2VydERpdjJOYW1lUHJpY2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBkZXNzZXJ0RGl2Mk5hbWVEZXNjUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBkZXNzZXJ0RGl2Mk5hbWVQcmljZVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICBjb25zdCBkb251dEltZyA9IG5ldyBJbWFnZSgpO1xuICBkb251dEltZy5zcmMgPSBEb251dHM7XG4gIGRlc3NlcnREaXYyRm90b0Rpdi5hcHBlbmRDaGlsZChkb251dEltZyk7XG4gIGRlc3NlcnREaXYyTmFtZURlc2NQYXJhLnRleHRDb250ZW50ID0gXCJEb251dCAodmFyaW91cyBvcHRpb25zKVwiO1xuICBkZXNzZXJ0RGl2Mk5hbWVQcmljZVBhcmEudGV4dENvbnRlbnQgPSBcIjHigqxcIjtcbiAgZm90b2V2ZW50bGlzdGVuZXIoZGVzc2VydERpdjIpO1xuXG4gIGRlc3NlcnREaXYuYXBwZW5kQ2hpbGQoZGVzc2VydERpdjIpO1xuICBkZXNzZXJ0RGl2Mi5hcHBlbmRDaGlsZChkZXNzZXJ0RGl2MkZvdG9EaXYpO1xuICBkZXNzZXJ0RGl2Mi5hcHBlbmRDaGlsZChkZXNzZXJ0RGl2Mk5hbWVEaXYpO1xuICBkZXNzZXJ0RGl2Mk5hbWVEaXYuYXBwZW5kQ2hpbGQoZGVzc2VydERpdjJOYW1lRGVzY0Rpdik7XG4gIGRlc3NlcnREaXYyTmFtZURpdi5hcHBlbmRDaGlsZChkZXNzZXJ0RGl2Mk5hbWVQcmljZURpdik7XG4gIGRlc3NlcnREaXYyTmFtZURlc2NEaXYuYXBwZW5kQ2hpbGQoZGVzc2VydERpdjJOYW1lRGVzY1BhcmEpO1xuICBkZXNzZXJ0RGl2Mk5hbWVQcmljZURpdi5hcHBlbmRDaGlsZChkZXNzZXJ0RGl2Mk5hbWVQcmljZVBhcmEpO1xuXG4gIGNvbnN0IGRlc3NlcnREaXYzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGVzc2VydERpdjMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtZW51aXRlbXNEaXZcIik7XG4gIGNvbnN0IGRlc3NlcnREaXYzRm90b0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRlc3NlcnREaXYzRm90b0Rpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1lbnVpdGVtRm90b1wiKTtcbiAgY29uc3QgZGVzc2VydERpdjNOYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGVzc2VydERpdjNOYW1lRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaXRlbWRlc2NyaXB0aW9uRGl2XCIpO1xuICBjb25zdCBkZXNzZXJ0RGl2M05hbWVEZXNjRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZGVzc2VydERpdjNOYW1lUHJpY2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBkZXNzZXJ0RGl2M05hbWVEZXNjUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBkZXNzZXJ0RGl2M05hbWVQcmljZVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICBjb25zdCBhcHBsZXBpZUltZyA9IG5ldyBJbWFnZSgpO1xuICBhcHBsZXBpZUltZy5zcmMgPSBBcHBsZVBpZTtcbiAgZGVzc2VydERpdjNGb3RvRGl2LmFwcGVuZENoaWxkKGFwcGxlcGllSW1nKTtcbiAgZGVzc2VydERpdjNOYW1lRGVzY1BhcmEudGV4dENvbnRlbnQgPSBcIlNsaWNlIG9mIEFwcGxlIFBpZVwiO1xuICBkZXNzZXJ0RGl2M05hbWVQcmljZVBhcmEudGV4dENvbnRlbnQgPSBcIjLigqxcIjtcbiAgZm90b2V2ZW50bGlzdGVuZXIoZGVzc2VydERpdjMpO1xuXG4gIGRlc3NlcnREaXYuYXBwZW5kQ2hpbGQoZGVzc2VydERpdjMpO1xuICBkZXNzZXJ0RGl2My5hcHBlbmRDaGlsZChkZXNzZXJ0RGl2M0ZvdG9EaXYpO1xuICBkZXNzZXJ0RGl2My5hcHBlbmRDaGlsZChkZXNzZXJ0RGl2M05hbWVEaXYpO1xuICBkZXNzZXJ0RGl2M05hbWVEaXYuYXBwZW5kQ2hpbGQoZGVzc2VydERpdjNOYW1lRGVzY0Rpdik7XG4gIGRlc3NlcnREaXYzTmFtZURpdi5hcHBlbmRDaGlsZChkZXNzZXJ0RGl2M05hbWVQcmljZURpdik7XG4gIGRlc3NlcnREaXYzTmFtZURlc2NEaXYuYXBwZW5kQ2hpbGQoZGVzc2VydERpdjNOYW1lRGVzY1BhcmEpO1xuICBkZXNzZXJ0RGl2M05hbWVQcmljZURpdi5hcHBlbmRDaGlsZChkZXNzZXJ0RGl2M05hbWVQcmljZVBhcmEpO1xuXG4gIGNvbnN0IGRlc3NlcnREaXY0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGVzc2VydERpdjQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtZW51aXRlbXNEaXZcIik7XG4gIGNvbnN0IGRlc3NlcnREaXY0Rm90b0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRlc3NlcnREaXY0Rm90b0Rpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1lbnVpdGVtRm90b1wiKTtcbiAgY29uc3QgZGVzc2VydERpdjROYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGVzc2VydERpdjROYW1lRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaXRlbWRlc2NyaXB0aW9uRGl2XCIpO1xuICBjb25zdCBkZXNzZXJ0RGl2NE5hbWVEZXNjRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZGVzc2VydERpdjROYW1lUHJpY2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBkZXNzZXJ0RGl2NE5hbWVEZXNjUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBkZXNzZXJ0RGl2NE5hbWVQcmljZVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICBjb25zdCBwZWNhbnBpZUltZyA9IG5ldyBJbWFnZSgpO1xuICBwZWNhbnBpZUltZy5zcmMgPSBQZWNhblBpZTtcbiAgZGVzc2VydERpdjRGb3RvRGl2LmFwcGVuZENoaWxkKHBlY2FucGllSW1nKTtcbiAgZGVzc2VydERpdjROYW1lRGVzY1BhcmEudGV4dENvbnRlbnQgPSBcIlNsaWNlIG9mIFBlY2FuIFBpZVwiO1xuICBkZXNzZXJ0RGl2NE5hbWVQcmljZVBhcmEudGV4dENvbnRlbnQgPSBcIjIuNeKCrFwiO1xuICBmb3RvZXZlbnRsaXN0ZW5lcihkZXNzZXJ0RGl2NCk7XG5cbiAgZGVzc2VydERpdi5hcHBlbmRDaGlsZChkZXNzZXJ0RGl2NCk7XG4gIGRlc3NlcnREaXY0LmFwcGVuZENoaWxkKGRlc3NlcnREaXY0Rm90b0Rpdik7XG4gIGRlc3NlcnREaXY0LmFwcGVuZENoaWxkKGRlc3NlcnREaXY0TmFtZURpdik7XG4gIGRlc3NlcnREaXY0TmFtZURpdi5hcHBlbmRDaGlsZChkZXNzZXJ0RGl2NE5hbWVEZXNjRGl2KTtcbiAgZGVzc2VydERpdjROYW1lRGl2LmFwcGVuZENoaWxkKGRlc3NlcnREaXY0TmFtZVByaWNlRGl2KTtcbiAgZGVzc2VydERpdjROYW1lRGVzY0Rpdi5hcHBlbmRDaGlsZChkZXNzZXJ0RGl2NE5hbWVEZXNjUGFyYSk7XG4gIGRlc3NlcnREaXY0TmFtZVByaWNlRGl2LmFwcGVuZENoaWxkKGRlc3NlcnREaXY0TmFtZVByaWNlUGFyYSk7XG5cbiAgYXJ0aWNsZS5hcHBlbmRDaGlsZChicmVha2Zhc3REaXYpO1xuICBhcnRpY2xlLmFwcGVuZENoaWxkKGRyaW5rc0Rpdik7XG4gIGFydGljbGUuYXBwZW5kQ2hpbGQoZGVzc2VydERpdik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYXJ0aWNsZSk7XG59XG5cbmZ1bmN0aW9uIGZvdG9ldmVudGxpc3RlbmVyKHNvbWVkaXYpIHtcbiAgc29tZWRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgY29uc3QgZmlyc3RjaGlsZCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgY29uc3QgbGFzdGNoaWxkID0gZXZlbnQuY3VycmVudFRhcmdldC5sYXN0RWxlbWVudENoaWxkO1xuICAgIGNvbnN0IGxhc3RjaGlsZGdyYW5kY2hpbGQgPSBsYXN0Y2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgaWYgKGZpcnN0Y2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWVudWl0ZW1Gb3RvXCIpKSB7XG4gICAgICBmaXJzdGNoaWxkLmNsYXNzTGlzdC5yZXBsYWNlKFwibWVudWl0ZW1Gb3RvXCIsIFwibWVudWl0ZW1Gb3RvRXhwYW5kXCIpO1xuICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW5cIjtcbiAgICAgIGxhc3RjaGlsZGdyYW5kY2hpbGQuc3R5bGUubWFyZ2luTGVmdCA9IFwiMTVweFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaXJzdGNoaWxkLmNsYXNzTGlzdC5yZXBsYWNlKFwibWVudWl0ZW1Gb3RvRXhwYW5kXCIsIFwibWVudWl0ZW1Gb3RvXCIpO1xuICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJyb3dcIjtcbiAgICAgIGxhc3RjaGlsZGdyYW5kY2hpbGQuc3R5bGUubWFyZ2luTGVmdCA9IFwiMHB4XCI7XG4gICAgfVxuICB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5hdmlnYXRpb24oKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIik7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gIG5hdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5hdmlnYXRpb25cIik7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChuYXYpO1xuXG4gIGNvbnN0IG5hdkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnRhY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWN0XCIpO1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBtZW51LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVudVwiKTtcblxuICBjb250YWN0LnRleHRDb250ZW50ID0gXCJDb250YWN0c1wiO1xuICBtZW51LnRleHRDb250ZW50ID0gXCJNZW51XCI7XG5cbiAgbmF2LmFwcGVuZENoaWxkKG5hdkxpc3QpO1xuICBuYXZMaXN0LmFwcGVuZENoaWxkKG1lbnUpO1xuICBuYXZMaXN0LmFwcGVuZENoaWxkKGNvbnRhY3QpO1xufVxuIiwiaW1wb3J0IEVudHJhbmNlIGZyb20gXCIuL2VudHJhbmNlLmpwZ1wiO1xuaW1wb3J0IGNvbnRhY3QgZnJvbSBcIi4vY29udGFjdC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmcm9udHBhZ2UoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gIGNvbnN0IGFydGljbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKTtcbiAgYXJ0aWNsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFydGljbGVGcm9udHBhZ2VcIik7XG4gIGNvbnN0IGltZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGltZ0Rpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVudHJhbmNlXCIpO1xuICBjb25zdCBlbnRyYW5jZUltZyA9IG5ldyBJbWFnZSgpO1xuICBlbnRyYW5jZUltZy5zcmMgPSBFbnRyYW5jZTtcblxuICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIHNlY3Rpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb3B5XCIpO1xuICBjb25zdCBmcm9udHBhZ2VDb3B5VCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgZnJvbnRwYWdlQ29weVQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmcm9udHBhZ2Vjb3B5XCIpO1xuICBmcm9udHBhZ2VDb3B5VC50ZXh0Q29udGVudCA9IFwiflwiO1xuICBjb25zdCBwYXJhMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBwYXJhMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwYXJhMS50ZXh0Q29udGVudCA9XG4gICAgXCJMb2NhdGVkIG9uIGEgcXVpcmt5IHN0cmVldCwgRmxvJ3MgRGluZXIgb2ZmZXJzIHRoZSBiZXN0IGJyZWFrZmFzdCBpbiB0b3duIGF0IGEgcmVhc29uYWJsZSBwcmljZS4gV2UgYXJlIHZlcnkgcHJvdWQgb2Ygb3VyIG1lbnU7IGZyb20gcGFuY2FrZXMsIHRvIG9hdG1lYWwsIHRoZXJlIGlzIHNvbWV0aGluZyBmb3IgZXZlcnlvbmUuXCI7XG5cbiAgcGFyYTMuaW5uZXJIVE1MID1cbiAgICBcIkJyZWFrZmFzdCBpcyBzZXJ2ZWQgZXZlcnkgZGF5IGZyb20gNi0yMi4gWW91IGNhbiBmaW5kIHVzIG9uIE1haW4gUm9hZCAyMC4gQ29udGFjdCB1cyBmb3IgbW9yZS5cIjtcblxuICBzZWN0aW9uLmFwcGVuZENoaWxkKHBhcmExKTtcbiAgc2VjdGlvbi5hcHBlbmRDaGlsZChpbWdEaXYpO1xuICBzZWN0aW9uLmFwcGVuZENoaWxkKGZyb250cGFnZUNvcHlUKTtcblxuICBpbWdEaXYuYXBwZW5kQ2hpbGQoZW50cmFuY2VJbWcpO1xuICBzZWN0aW9uLmFwcGVuZENoaWxkKHBhcmEzKTtcblxuICBhcnRpY2xlLmFwcGVuZENoaWxkKHNlY3Rpb24pO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYXJ0aWNsZSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBoZWFkZXIgZnJvbSBcIi4vaGVhZGVyLmpzXCI7XG5pbXBvcnQgZnJvbnRwYWdlIGZyb20gXCIuL3BhZ2UtbG9hZC5qc1wiO1xuaW1wb3J0IGNvbnRhY3QgZnJvbSBcIi4vY29udGFjdC5qc1wiO1xuaW1wb3J0IG1lbnUgZnJvbSBcIi4vbWVudS5qc1wiO1xuaW1wb3J0IGZvb3RlciBmcm9tIFwiLi9mb290ZXIuanNcIjtcbmltcG9ydCBuYXZpZ2F0aW9uIGZyb20gXCIuL25hdmlnYXRpb24uanNcIjtcblxuZnVuY3Rpb24gY2xlYXJEb20oZXZlbnQpIHtcbiAgbGV0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gIHdoaWxlIChjb250ZW50RGl2LmZpcnN0Q2hpbGQpIHtcbiAgICBjb250ZW50RGl2LnJlbW92ZUNoaWxkKGNvbnRlbnREaXYuZmlyc3RDaGlsZCk7XG4gIH1cbiAgY29uc3QgdGhpc3RhcmdldCA9IGV2ZW50LnRhcmdldC5pZDtcbiAgaWYgKHRoaXN0YXJnZXQgPT09IFwiY29udGFjdFwiKSB7XG4gICAgdGFiYmVkYnJvd3NpbmcoKTtcbiAgICBjb250YWN0KCk7XG4gICAgZm9vdGVyKCk7XG4gICAgY29uc3QgY29udGFjdExpID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0XCIpO1xuICAgIGNvbnRhY3RMaS5jbGFzc0xpc3QudG9nZ2xlKFwic2VsZWN0ZWRcIik7XG4gIH0gZWxzZSBpZiAodGhpc3RhcmdldCA9PT0gXCJtZW51XCIpIHtcbiAgICB0YWJiZWRicm93c2luZygpO1xuICAgIG1lbnUoKTtcbiAgICBmb290ZXIoKTtcbiAgICBjb25zdCBtZW51TGkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVcIik7XG4gICAgbWVudUxpLmNsYXNzTGlzdC50b2dnbGUoXCJzZWxlY3RlZFwiKTtcbiAgfSBlbHNlIHtcbiAgICB0YWJiZWRicm93c2luZygpO1xuICAgIGZyb250cGFnZSgpO1xuICAgIGZvb3RlcigpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRhYmJlZGJyb3dzaW5nKCkge1xuICBoZWFkZXIoKTtcbiAgbmF2aWdhdGlvbigpO1xuICBjb25zdCBjb250YWN0TGkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhY3RcIik7XG4gIGNvbnN0IG1lbnVMaSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudVwiKTtcbiAgY29uc3QgcGFnZXRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgxXCIpO1xuICBjb25zdCB3YXNTZWxlY3RlZENvbnQgPSBjb250YWN0TGkuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VsZWN0ZWRcIik7XG4gIGNvbnN0IHdhc1NlbGVjdGVkTWVudSA9IG1lbnVMaS5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3RlZFwiKTtcbiAgY29udGFjdExpLmNsYXNzTGlzdC50b2dnbGUoXCJzZWxlY3RlZFwiLCB3YXNTZWxlY3RlZENvbnQpO1xuICBtZW51TGkuY2xhc3NMaXN0LnRvZ2dsZShcInNlbGVjdGVkXCIsIHdhc1NlbGVjdGVkTWVudSk7XG4gIGNvbnRhY3RMaS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xlYXJEb20pO1xuICBtZW51TGkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsZWFyRG9tKTtcbiAgcGFnZXRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGVhckRvbSk7XG59XG50YWJiZWRicm93c2luZygpO1xuZnJvbnRwYWdlKCk7XG5mb290ZXIoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=