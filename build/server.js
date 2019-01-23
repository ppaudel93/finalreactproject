/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server-dev.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./API_KEYS.js":
/*!*********************!*\
  !*** ./API_KEYS.js ***!
  \*********************/
/*! exports provided: WordnikKey, giphyKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WordnikKey\", function() { return WordnikKey; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"giphyKey\", function() { return giphyKey; });\nvar WordnikKey = \"c20ca247635126ef6070e0556e90dce11afd830d373e6f0cc\";\nvar giphyKey = \"uQycJdQ55GEWo6iQm2CkpounDRU7j2Ot\";\n\n//# sourceURL=webpack:///./API_KEYS.js?");

/***/ }),

/***/ "./src/client/Components/AppBar/navBar.js":
/*!************************************************!*\
  !*** ./src/client/Components/AppBar/navBar.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"@babel/runtime/helpers/assertThisInitialized\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _static_style_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../static/style/styles */ \"./src/static/style/styles.js\");\n/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ \"@material-ui/icons/AccountCircle\");\n/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Home */ \"@material-ui/icons/Home\");\n/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Settings */ \"@material-ui/icons/Settings\");\n/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_12__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar NavBar =\n/*#__PURE__*/\nfunction (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(NavBar, _Component);\n\n  function NavBar() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, NavBar);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(NavBar)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), \"state\", {\n      settingsOpen: false\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), \"handlesettingsOpen\", function () {\n      _this.setState({\n        settingsOpen: !_this.state.settingsOpen\n      });\n    });\n\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(NavBar, [{\n    key: \"render\",\n    value: function render() {\n      var classes = this.props.classes;\n      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n        className: classes.root\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"AppBar\"], {\n        color: \"primary\",\n        position: \"static\"\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"Toolbar\"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"IconButton\"], {\n        color: \"inherit\",\n        href: \"/\"\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_11___default.a, null)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"Typography\"], {\n        align: \"center\",\n        variant: \"h6\",\n        color: \"inherit\",\n        className: classes.root\n      }, \"Random GIF Generator\"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"IconButton\"], {\n        color: \"inherit\",\n        onClick: this.handlesettingsOpen\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_12___default.a, null)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"IconButton\"], {\n        color: \"inherit\"\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_10___default.a, null))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"Dialog\"], {\n        open: this.state.settingsOpen,\n        onClose: this.handlesettingsOpen\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"DialogTitle\"], null, \"Settings\"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"DialogContentText\"], null, \"Select the settings suitable for you.\")));\n    }\n  }]);\n\n  return NavBar;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"withStyles\"])(_static_style_styles__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(NavBar));\n\n//# sourceURL=webpack:///./src/client/Components/AppBar/navBar.js?");

/***/ }),

/***/ "./src/client/Components/Home/home.js":
/*!********************************************!*\
  !*** ./src/client/Components/Home/home.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"@babel/runtime/helpers/assertThisInitialized\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _static_style_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../static/style/styles */ \"./src/static/style/styles.js\");\n/* harmony import */ var _AppBar_navBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../AppBar/navBar */ \"./src/client/Components/AppBar/navBar.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\n\n\n\n\n\nvar Home =\n/*#__PURE__*/\nfunction (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Home, _Component);\n\n  function Home() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Home);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Home)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), \"state\", {});\n\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Home, [{\n    key: \"render\",\n    value: function render() {\n      var classes = this.props.classes;\n      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n        className: classes.root\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_AppBar_navBar__WEBPACK_IMPORTED_MODULE_9__[\"default\"], null));\n    }\n  }]);\n\n  return Home;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__[\"withStyles\"])(_static_style_styles__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Home));\n\n//# sourceURL=webpack:///./src/client/Components/Home/home.js?");

/***/ }),

/***/ "./src/client/Components/Login/login.js":
/*!**********************************************!*\
  !*** ./src/client/Components/Login/login.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"@babel/runtime/helpers/assertThisInitialized\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ \"@material-ui/icons/AccountCircle\");\n/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _static_style_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../static/style/styles */ \"./src/static/style/styles.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Login =\n/*#__PURE__*/\nfunction (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Login, _Component);\n\n  function Login(props) {\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Login);\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Login).call(this, props));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), \"handleButtonClick\", function () {\n      _this.setState({\n        displayProgressBar: !_this.state.displayProgressBar,\n        buttonDisabled: !_this.state.buttonDisabled\n      });\n\n      setTimeout(function () {\n        _this.setState({\n          displayProgressBar: !_this.state.displayProgressBar,\n          buttonDisabled: !_this.state.buttonDisabled\n        });\n      }, 3000);\n    });\n\n    _this.state = {\n      displayProgressBar: false,\n      buttonDisabled: false\n    };\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Login, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      document.title = \"Login\";\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var newStyles = {\n        progressBar: {\n          display: this.state.displayProgressBar ? \"block\" : \"none\"\n        }\n      };\n      var classes = this.props.classes;\n      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"Grid\"], {\n        container: true,\n        className: classes.root\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"Grid\"], {\n        item: true,\n        xs: 12,\n        sm: 12,\n        md: 12,\n        lg: 12\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"Grid\"], {\n        container: true,\n        justify: \"center\"\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"Paper\"], {\n        className: classes.paper,\n        elevation: 1\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"Grid\"], {\n        item: true,\n        xs: 12,\n        sm: 12\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"Grid\"], {\n        container: true,\n        justify: \"center\"\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_10___default.a, {\n        color: \"primary\",\n        className: classes.accountCircle\n      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"Grid\"], {\n        item: true,\n        xs: 12,\n        sm: 12\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"Grid\"], {\n        container: true,\n        justify: \"center\"\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"TextField\"], {\n        id: \"login-username\",\n        label: \"E-mail\",\n        className: classes.textField,\n        margin: \"normal\",\n        type: \"email\"\n      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"Grid\"], {\n        item: true,\n        xs: 12,\n        sm: 12\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"Grid\"], {\n        container: true,\n        justify: \"center\"\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"TextField\"], {\n        id: \"login-password\",\n        label: \"Password\",\n        className: classes.textField,\n        margin: \"normal\",\n        type: \"password\"\n      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"CircularProgress\"], {\n        style: newStyles.progressBar,\n        className: classes.progressBar\n      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"Grid\"], {\n        item: true,\n        xs: 12,\n        sm: 12\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"Grid\"], {\n        container: true,\n        justify: \"center\"\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"Button\"], {\n        className: classes.button,\n        color: \"primary\",\n        variant: \"contained\",\n        onClick: this.handleButtonClick,\n        disabled: this.state.buttonDisabled\n      }, \"Login\"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"Grid\"], {\n        item: true,\n        cs: 12,\n        sm: 12\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"Grid\"], {\n        container: true,\n        justify: \"center\"\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"Typography\"], {\n        align: \"center\",\n        variant: \"subtitle1\"\n      }, \"Don't have an account?\", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"Link\"], {\n        variant: \"inherit\",\n        href: \"/signup\"\n      }, \"\\xA0Sign Up\"))))))));\n    }\n  }]);\n\n  return Login;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\nLogin.propTypes = {\n  classes: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"withStyles\"])(_static_style_styles__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(Login));\n\n//# sourceURL=webpack:///./src/client/Components/Login/login.js?");

/***/ }),

/***/ "./src/client/Components/SignUp/signup.js":
/*!************************************************!*\
  !*** ./src/client/Components/SignUp/signup.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"@babel/runtime/helpers/assertThisInitialized\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _static_style_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../static/style/styles */ \"./src/static/style/styles.js\");\n/* harmony import */ var _API_KEYS__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../API_KEYS */ \"./API_KEYS.js\");\n/* harmony import */ var _material_ui_icons_AddAPhoto__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/AddAPhoto */ \"@material-ui/icons/AddAPhoto\");\n/* harmony import */ var _material_ui_icons_AddAPhoto__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AddAPhoto__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var material_ui_pickers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! material-ui-pickers */ \"material-ui-pickers\");\n/* harmony import */ var material_ui_pickers__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(material_ui_pickers__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _date_io_date_fns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @date-io/date-fns */ \"@date-io/date-fns\");\n/* harmony import */ var _date_io_date_fns__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_date_io_date_fns__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _static_JS_countryList__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../static/JS/countryList */ \"./src/static/JS/countryList.js\");\n/* harmony import */ var _static_JS_Genders__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../static/JS/Genders */ \"./src/static/JS/Genders.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar wordnikUrl = \"https://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&limit=10&api_key=\".concat(_API_KEYS__WEBPACK_IMPORTED_MODULE_10__[\"WordnikKey\"]);\nvar giphyUrl = \"http://api.giphy.com/v1/gifs/search?api_key=\".concat(_API_KEYS__WEBPACK_IMPORTED_MODULE_10__[\"giphyKey\"], \"&q=hello\");\n\nvar SignUp =\n/*#__PURE__*/\nfunction (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(SignUp, _Component);\n\n  function SignUp() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SignUp);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(SignUp)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), \"state\", {\n      selectedDate: null,\n      country: \"\",\n      gender: \"\",\n      termsAccepted: false\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), \"handleFileButtonClick\", function () {\n      document.getElementById(\"register-file\").click();\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), \"handleDateChange\", function (date) {\n      _this.setState({\n        selectedDate: date\n      });\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), \"handleChange\", function (name) {\n      return function (event) {\n        _this.setState(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()({}, name, event.target.value));\n      };\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), \"invertTerms\", function () {\n      _this.setState({\n        termsAccepted: !_this.state.termsAccepted\n      });\n    });\n\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SignUp, [{\n    key: \"render\",\n    value: function render() {\n      var width = this.props.width;\n      console.log(width);\n      console.log(_static_JS_countryList__WEBPACK_IMPORTED_MODULE_14__[\"countryList\"]);\n      console.log(_static_JS_Genders__WEBPACK_IMPORTED_MODULE_15__[\"Genders\"]);\n      document.title = \"Sign Up\";\n      var classes = this.props.classes;\n      fetch(wordnikUrl).then(function (data) {\n        return data.json();\n      }).then(function (data) {\n        return console.log(data);\n      });\n      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(material_ui_pickers__WEBPACK_IMPORTED_MODULE_12__[\"MuiPickersUtilsProvider\"], {\n        utils: _date_io_date_fns__WEBPACK_IMPORTED_MODULE_13___default.a\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"Grid\"], {\n        container: true,\n        className: classes.root,\n        justify: \"center\"\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"Grid\"], {\n        item: true,\n        xs: 12,\n        sm: 12,\n        md: 8,\n        lg: 8\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"Grid\"], {\n        container: true,\n        justify: \"center\"\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"Paper\"], {\n        className: classes.paperRegister,\n        elevation: 1\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"Grid\"], {\n        container: true,\n        justify: \"center\",\n        spacing: 0\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"Grid\"], {\n        item: true,\n        xs: 12,\n        sm: 12,\n        md: 12,\n        lg: 12\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"Grid\"], {\n        container: true,\n        justify: \"center\"\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"input\", {\n        type: \"file\",\n        id: \"register-file\",\n        style: {\n          display: \"none\"\n        },\n        accept: \"image/*\"\n      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"Tooltip\"], {\n        title: \"Upload Profile Picture\"\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"IconButton\"], {\n        onClick: this.handleFileButtonClick\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_icons_AddAPhoto__WEBPACK_IMPORTED_MODULE_11___default.a, {\n        color: \"primary\",\n        className: classes.addPhoto\n      }))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"Grid\"], {\n        item: true,\n        xs: 12,\n        sm: 12,\n        md: 6,\n        lg: 6\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"Grid\"], {\n        container: true,\n        justify: \"center\"\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"TextField\"], {\n        id: \"register-firstname\",\n        label: \"First Name\",\n        className: classes.textField,\n        margin: \"normal\",\n        type: \"text\"\n      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"Grid\"], {\n        item: true,\n        xs: 12,\n        sm: 12,\n        md: 6,\n        lg: 6\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"Grid\"], {\n        container: true,\n        justify: \"center\"\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"TextField\"], {\n        id: \"register-lastname\",\n        label: \"Last Name\",\n        className: classes.textField,\n        margin: \"normal\",\n        type: \"text\"\n      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"Grid\"], {\n        item: true,\n        xs: 12,\n        sm: 12,\n        md: 6,\n        lg: 6\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"Grid\"], {\n        container: true,\n        justify: \"center\"\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"TextField\"], {\n        id: \"register-email\",\n        label: \"E-mail\",\n        className: classes.textField,\n        margin: \"normal\",\n        type: \"email\"\n      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"Grid\"], {\n        item: true,\n        xs: 12,\n        sm: 12,\n        md: 6,\n        lg: 6\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"Grid\"], {\n        container: true,\n        justify: \"center\"\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"TextField\"], {\n        id: \"register-confirm-email\",\n        label: \"Confirm E-mail\",\n        className: classes.textField,\n        margin: \"normal\",\n        type: \"email\"\n      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"Grid\"], {\n        item: true,\n        xs: 12,\n        sm: 12,\n        md: 6,\n        lg: 6\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"Grid\"], {\n        container: true,\n        justify: \"center\"\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"TextField\"], {\n        id: \"register-password\",\n        label: \"Password\",\n        className: classes.textField,\n        margin: \"normal\",\n        type: \"password\"\n      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"Grid\"], {\n        item: true,\n        xs: 12,\n        sm: 12,\n        md: 6,\n        lg: 6\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"Grid\"], {\n        container: true,\n        justify: \"center\"\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"TextField\"], {\n        id: \"register-confirm-password\",\n        label: \"Confirm Password\",\n        className: classes.textField,\n        margin: \"normal\",\n        type: \"password\"\n      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"Grid\"], {\n        item: true,\n        xs: 12,\n        sm: 12,\n        md: 6,\n        lg: 6\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"Grid\"], {\n        container: true,\n        justify: \"center\"\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"Tooltip\"], {\n        title: \"Birthday\"\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(material_ui_pickers__WEBPACK_IMPORTED_MODULE_12__[\"DatePicker\"], {\n        value: this.state.selectedDate,\n        label: \"Birthday\",\n        onChange: this.handleDateChange,\n        format: \"dd/MM/yyyy\",\n        className: classes.textField,\n        style: {\n          marginTop: 15\n        }\n      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"Grid\"], {\n        item: true,\n        xs: 12,\n        sm: 12,\n        md: 6,\n        lg: 6\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"Grid\"], {\n        container: true,\n        justify: \"center\"\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"TextField\"], {\n        id: \"register-gender\",\n        label: \"Gender\",\n        className: classes.textField,\n        margin: \"normal\",\n        select: true,\n        value: this.state.gender,\n        onChange: this.handleChange(\"gender\"),\n        SelectProps: {\n          MenuProps: {\n            className: classes.textField\n          }\n        }\n      }, _static_JS_Genders__WEBPACK_IMPORTED_MODULE_15__[\"Genders\"].map(function (option) {\n        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"MenuItem\"], {\n          key: option.value,\n          value: option.value\n        }, option.label);\n      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"Grid\"], {\n        item: true,\n        xs: 12,\n        sm: 12,\n        md: 6,\n        lg: 6\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"Grid\"], {\n        container: true,\n        justify: \"center\"\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"TextField\"], {\n        id: \"register-country\",\n        label: \"Country\",\n        className: classes.textField,\n        margin: \"normal\",\n        select: true,\n        value: this.state.country,\n        onChange: this.handleChange(\"country\"),\n        SelectProps: {\n          MenuProps: {\n            className: classes.textField\n          }\n        }\n      }, _static_JS_countryList__WEBPACK_IMPORTED_MODULE_14__[\"countryList\"].map(function (option) {\n        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"MenuItem\"], {\n          key: option.value,\n          value: option.value\n        }, option.label);\n      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"Grid\"], {\n        item: true,\n        xs: 12,\n        sm: 12,\n        md: 6,\n        lg: 6\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"Grid\"], {\n        container: true,\n        justify: \"center\"\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"TextField\"], {\n        id: \"register-address\",\n        label: \"Address\",\n        className: classes.textField,\n        margin: \"normal\",\n        type: \"text\"\n      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"Grid\"], {\n        style: {\n          marginTop: 15\n        },\n        item: true,\n        xs: 12\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"Grid\"], {\n        container: true,\n        justify: \"flex-start\"\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"Checkbox\"], {\n        onChange: this.invertTerms,\n        className: classes.checkBox,\n        color: \"primary\"\n      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"Typography\"], {\n        style: {\n          marginTop: 10\n        },\n        align: \"center\",\n        variant: \"subtitle1\"\n      }, \"I accept the terms and conditions.\"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"Grid\"], {\n        item: true,\n        xs: 12\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"Grid\"], {\n        container: true,\n        justify: \"center\"\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"Button\"], {\n        className: classes.button,\n        color: \"primary\",\n        variant: \"contained\",\n        disabled: !this.state.termsAccepted\n      }, \"Register\")))))))));\n    }\n  }]);\n\n  return SignUp;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"withWidth\"])()(Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"withStyles\"])(_static_style_styles__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(SignUp)));\n\n//# sourceURL=webpack:///./src/client/Components/SignUp/signup.js?");

/***/ }),

/***/ "./src/client/Routes/routes.js":
/*!*************************************!*\
  !*** ./src/client/Routes/routes.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _static_themes_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../static/themes/theme */ \"./src/static/themes/theme.js\");\n/* harmony import */ var _Components_Login_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/Login/login */ \"./src/client/Components/Login/login.js\");\n/* harmony import */ var _Components_SignUp_signup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/SignUp/signup */ \"./src/client/Components/SignUp/signup.js\");\n/* harmony import */ var _Components_Home_home__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/Home/home */ \"./src/client/Components/Home/home.js\");\n\n\n\n\n\n\n\n\n\nvar about = function about() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"This is path about\"));\n};\n\nvar home = function home() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n    color: \"secondary\",\n    variant: \"contained\"\n  }, \"Hello World\"));\n};\n\nvar noPage = function noPage() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"This page doesn't exist.\"));\n};\n\nvar Routes = function Routes() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__[\"MuiThemeProvider\"], {\n    theme: _static_themes_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/\",\n    exact: true,\n    component: _Components_Home_home__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/about\",\n    component: about\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/home\",\n    component: home\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/login\",\n    component: _Components_Login_login__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/signup\",\n    component: _Components_SignUp_signup__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"*\",\n    component: noPage\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Routes);\n\n//# sourceURL=webpack:///./src/client/Routes/routes.js?");

/***/ }),

/***/ "./src/server/server-dev.js":
/*!**********************************!*\
  !*** ./src/server/server-dev.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _webpack_config_dev__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../webpack.config.dev */ \"./webpack.config.dev.js\");\n/* harmony import */ var _webpack_config_dev__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_webpack_config_dev__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _client_Routes_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../client/Routes/routes */ \"./src/client/Routes/routes.js\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_1___default()(),\n    DIST_DIR = __dirname,\n    HTML_FILE = path__WEBPACK_IMPORTED_MODULE_0___default.a.join(DIST_DIR, \"index.html\"),\n    compiler = webpack__WEBPACK_IMPORTED_MODULE_2___default()(_webpack_config_dev__WEBPACK_IMPORTED_MODULE_5___default.a);\napp.use(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_3___default()(compiler, {\n  publicPath: _webpack_config_dev__WEBPACK_IMPORTED_MODULE_5___default.a.output.publicPath\n}));\napp.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_4___default()(compiler));\napp.get(\"/*\", function (req, res) {\n  var context = {};\n  var app = react_dom_server__WEBPACK_IMPORTED_MODULE_7___default.a.renderToString(react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__[\"StaticRouter\"], {\n    location: req.url,\n    context: context\n  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_client_Routes_routes__WEBPACK_IMPORTED_MODULE_9__[\"default\"], null)));\n  fs__WEBPACK_IMPORTED_MODULE_10___default.a.readFile(HTML_FILE, \"utf8\", function (err, data) {\n    if (err) {\n      console.log(\"Something went wrong: \", err);\n      return res.status(500).send(\"Oops, better luck next time.\");\n    }\n\n    return res.send(data.replace('<div id=\"root\"></div>', \"<div id=\\\"root\\\">\".concat(app, \"</div>\")));\n  });\n});\nvar PORT = process.env.PORT || 3002;\napp.listen(PORT, function () {\n  console.log(\"Listening on \".concat(PORT));\n  console.log(\"Press Ctrl+C to quit.\");\n  console.log(\"Server created at http://localhost:\".concat(PORT));\n});\n\n//# sourceURL=webpack:///./src/server/server-dev.js?");

/***/ }),

/***/ "./src/static/JS/Genders.js":
/*!**********************************!*\
  !*** ./src/static/JS/Genders.js ***!
  \**********************************/
/*! exports provided: Genders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Genders\", function() { return Genders; });\nvar Genders = [{\n  value: \"M\",\n  label: \"Male\"\n}, {\n  value: \"F\",\n  label: \"Female\"\n}, {\n  value: \"O\",\n  label: \"Other\"\n}];\n\n//# sourceURL=webpack:///./src/static/JS/Genders.js?");

/***/ }),

/***/ "./src/static/JS/countryList.js":
/*!**************************************!*\
  !*** ./src/static/JS/countryList.js ***!
  \**************************************/
/*! exports provided: countryList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"countryList\", function() { return countryList; });\nvar countryList = [{\n  value: \"AF\",\n  label: \"Afghanistan\"\n}, {\n  value: \"AX\",\n  label: \"Åland Islands\"\n}, {\n  value: \"AL\",\n  label: \"Albania\"\n}, {\n  value: \"DZ\",\n  label: \"Algeria\"\n}, {\n  value: \"AS\",\n  label: \"American Samoa\"\n}, {\n  value: \"AD\",\n  label: \"Andorra\"\n}, {\n  value: \"AO\",\n  label: \"Angola\"\n}, {\n  value: \"AI\",\n  label: \"Anguilla\"\n}, {\n  value: \"AQ\",\n  label: \"Antarctica\"\n}, {\n  value: \"AG\",\n  label: \"Antigua and Barbuda\"\n}, {\n  value: \"AR\",\n  label: \"Argentina\"\n}, {\n  value: \"AM\",\n  label: \"Armenia\"\n}, {\n  value: \"AW\",\n  label: \"Aruba\"\n}, {\n  value: \"AU\",\n  label: \"Australia\"\n}, {\n  value: \"AT\",\n  label: \"Austria\"\n}, {\n  value: \"AZ\",\n  label: \"Azerbaijan\"\n}, {\n  value: \"BS\",\n  label: \"Bahamas\"\n}, {\n  value: \"BH\",\n  label: \"Bahrain\"\n}, {\n  value: \"BD\",\n  label: \"Bangladesh\"\n}, {\n  value: \"BB\",\n  label: \"Barbados\"\n}, {\n  value: \"BY\",\n  label: \"Belarus\"\n}, {\n  value: \"BE\",\n  label: \"Belgium\"\n}, {\n  value: \"BZ\",\n  label: \"Belize\"\n}, {\n  value: \"BJ\",\n  label: \"Benin\"\n}, {\n  value: \"BM\",\n  label: \"Bermuda\"\n}, {\n  value: \"BT\",\n  label: \"Bhutan\"\n}, {\n  value: \"BO\",\n  label: \"Bolivia, Plurinational State of\"\n}, {\n  value: \"BQ\",\n  label: \"Bonaire, Sint Eustatius and Saba\"\n}, {\n  value: \"BA\",\n  label: \"Bosnia and Herzegovina\"\n}, {\n  value: \"BW\",\n  label: \"Botswana\"\n}, {\n  value: \"BW\",\n  label: \"Botswana\"\n}, {\n  value: \"BV\",\n  label: \"Bouvet Island\"\n}, {\n  value: \"BR\",\n  label: \"Brazil\"\n}, {\n  value: \"IO\",\n  label: \"British Indian Ocean Territory\"\n}, {\n  value: \"BN\",\n  label: \"Brunei Darussalam\"\n}, {\n  value: \"BG\",\n  label: \"Bulgaria\"\n}, {\n  value: \"BF\",\n  label: \"Burkina\"\n}, {\n  value: \"BI\",\n  label: \"Burundi\"\n}, {\n  value: \"KH\",\n  label: \"Cambodia\"\n}, {\n  value: \"CM\",\n  label: \"Cameroon\"\n}, {\n  value: \"CA\",\n  label: \"Canada\"\n}, {\n  value: \"CV\",\n  label: \"Cape Verde\"\n}, {\n  value: \"KY\",\n  label: \"Cayman Islands\"\n}, {\n  value: \"CF\",\n  label: \"Central African Republic\"\n}, {\n  value: \"TD\",\n  label: \"Chad\"\n}, {\n  value: \"CL\",\n  label: \"Chile\"\n}, {\n  value: \"CN\",\n  label: \"China\"\n}, {\n  value: \"CX\",\n  label: \"Christmas Island\"\n}, {\n  value: \"CC\",\n  label: \"Cocos (Keeling) Islands\"\n}, {\n  value: \"CO\",\n  label: \"Colombia\"\n}, {\n  value: \"KM\",\n  label: \"Comoros\"\n}, {\n  value: \"CG\",\n  label: \"Congo\"\n}, {\n  value: \"CD\",\n  label: \"Congo, the Democratic Republic of the\"\n}, {\n  value: \"CK\",\n  label: \"Cook Islands\"\n}, {\n  value: \"CR\",\n  label: \"Costa Rica\"\n}, {\n  value: \"CI\",\n  label: \"Côte d'Ivoire\"\n}, {\n  value: \"HR\",\n  label: \"Croatia\"\n}, {\n  value: \"CU\",\n  label: \"Cuba\"\n}, {\n  value: \"CW\",\n  label: \"Curaçao\"\n}, {\n  value: \"CY\",\n  label: \"Cyprus\"\n}, {\n  value: \"CZ\",\n  label: \"Czech Republic\"\n}, {\n  value: \"DK\",\n  label: \"Denmark\"\n}, {\n  value: \"DJ\",\n  label: \"Djibouti\"\n}, {\n  value: \"DM\",\n  label: \"Dominica\"\n}, {\n  value: \"DO\",\n  label: \"Dominican Republic\"\n}, {\n  value: \"EC\",\n  label: \"Ecuador\"\n}, {\n  value: \"EG\",\n  label: \"Egypt\"\n}, {\n  value: \"SV\",\n  label: \"El Salvador\"\n}, {\n  value: \"GQ\",\n  label: \"Equatorial Guinea\"\n}, {\n  value: \"ER\",\n  label: \"Eritrea\"\n}, {\n  value: \"EE\",\n  label: \"Estonia\"\n}, {\n  value: \"ET\",\n  label: \"Ethiopia\"\n}, {\n  value: \"FK\",\n  label: \"Falkland Islands (Malvinas)\"\n}, {\n  value: \"FO\",\n  label: \"Faroe Islands\"\n}, {\n  value: \"FJ\",\n  label: \"Fiji\"\n}, {\n  value: \"FI\",\n  label: \"Finland\"\n}, {\n  value: \"FR\",\n  label: \"France\"\n}, {\n  value: \"GF\",\n  label: \"French Guiana\"\n}, {\n  value: \"PF\",\n  label: \"French Polynesia\"\n}, {\n  value: \"TF\",\n  label: \"French Southern Territories\"\n}, {\n  value: \"GA\",\n  label: \"Gabon\"\n}, {\n  value: \"GM\",\n  label: \"Gambia\"\n}, {\n  value: \"GE\",\n  label: \"Georgia\"\n}, {\n  value: \"DE\",\n  label: \"Germany\"\n}, {\n  value: \"GH\",\n  label: \"Ghana\"\n}, {\n  value: \"GI\",\n  label: \"Gibraltar\"\n}, {\n  value: \"GR\",\n  label: \"Greece\"\n}, {\n  value: \"GL\",\n  label: \"Greenland\"\n}, {\n  value: \"GD\",\n  label: \"Grenada\"\n}, {\n  value: \"GP\",\n  label: \"Guadeloupe\"\n}, {\n  value: \"GU\",\n  label: \"Guam\"\n}, {\n  value: \"GT\",\n  label: \"Guatemala\"\n}, {\n  value: \"GG\",\n  label: \"Guernsey\"\n}, {\n  value: \"GN\",\n  label: \"Guinea\"\n}, {\n  value: \"GW\",\n  label: \"Guinea-Bissau\"\n}, {\n  value: \"GY\",\n  label: \"Guyana\"\n}, {\n  value: \"HT\",\n  label: \"Haiti\"\n}, {\n  value: \"HM\",\n  label: \"Heard Island and McDonald Islands\"\n}, {\n  value: \"VA\",\n  label: \"Holy See (Vatican City State)\"\n}, {\n  value: \"HN\",\n  label: \"Honduras\"\n}, {\n  value: \"HK\",\n  label: \"Hong Kong\"\n}, {\n  value: \"HU\",\n  label: \"Hungary\"\n}, {\n  value: \"IS\",\n  label: \"Iceland\"\n}, {\n  value: \"IN\",\n  label: \"India\"\n}, {\n  value: \"ID\",\n  label: \"Indonesia\"\n}, {\n  value: \"IR\",\n  label: \"Iran, Islamic Republic of\"\n}, {\n  value: \"IQ\",\n  label: \"Iraq\"\n}, {\n  value: \"IE\",\n  label: \"Ireland\"\n}, {\n  value: \"IM\",\n  label: \"Isle of Man\"\n}, {\n  value: \"IL\",\n  label: \"Israel\"\n}, {\n  value: \"IT\",\n  label: \"Italy\"\n}, {\n  value: \"JM\",\n  label: \"Jamaica\"\n}, {\n  value: \"JP\",\n  label: \"Japan\"\n}, {\n  value: \"JE\",\n  label: \"Jersey\"\n}, {\n  value: \"JO\",\n  label: \"Jordan\"\n}, {\n  value: \"KZ\",\n  label: \"Kazakhstan\"\n}, {\n  value: \"KE\",\n  label: \"Kenya\"\n}, {\n  value: \"KI\",\n  label: \"Kiribati\"\n}, {\n  value: \"KP\",\n  label: \"Korea, Democratic People's Republic of\"\n}, {\n  value: \"KR\",\n  label: \"Korea, Republic of\"\n}, {\n  value: \"KW\",\n  label: \"Kuwait\"\n}, {\n  value: \"KG\",\n  label: \"Kyrgyzstan\"\n}, {\n  value: \"LA\",\n  label: \"Lao People's Democratic Republic\"\n},, {\n  value: \"LV\",\n  label: \"Latvia\"\n}, {\n  value: \"LB\",\n  label: \"Lebanon\"\n}, {\n  value: \"LS\",\n  label: \"Lesotho\"\n}, {\n  value: \"LR\",\n  label: \"Liberia\"\n}, {\n  value: \"LY\",\n  label: \"Libya\"\n}, {\n  value: \"LI\",\n  label: \"Liechtenstein\"\n}, {\n  value: \"LT\",\n  label: \"Lithuania\"\n}, {\n  value: \"LU\",\n  label: \"Luxembourg\"\n}, {\n  value: \"MO\",\n  label: \"Macao\"\n}, {\n  value: \"MK\",\n  label: \"Macedonia, the former Yugoslav Republic of\"\n}, {\n  value: \"MG\",\n  label: \"Madagascar\"\n}, {\n  value: \"MW\",\n  label: \"Malawi\"\n}, {\n  value: \"MY\",\n  label: \"Malaysia\"\n}, {\n  value: \"MV\",\n  label: \"Maldives\"\n}, {\n  value: \"ML\",\n  label: \"Mali\"\n}, {\n  value: \"MT\",\n  label: \"Malta\"\n}, {\n  value: \"MH\",\n  label: \"Marshall Islands\"\n}, {\n  value: \"MQ\",\n  label: \"Martinique\"\n}, {\n  value: \"MR\",\n  label: \"Mauritania\"\n}, {\n  value: \"MU\",\n  label: \"Mauritius\"\n}, {\n  value: \"YT\",\n  label: \"Mayotte\"\n}, {\n  value: \"MX\",\n  label: \"Mexico\"\n}, {\n  value: \"FM\",\n  label: \"Micronesia, Federated States of\"\n}, {\n  value: \"MD\",\n  label: \"Moldova, Republic of\"\n}, {\n  value: \"MC\",\n  label: \"Monaco\"\n}, {\n  value: \"MN\",\n  label: \"Mongolia\"\n}, {\n  value: \"ME\",\n  label: \"Montenegro\"\n}, {\n  value: \"MS\",\n  label: \"Montserrat\"\n}, {\n  value: \"MA\",\n  label: \"Morocco\"\n}, {\n  value: \"MZ\",\n  label: \"Mozambique\"\n}, {\n  value: \"MM\",\n  label: \"Myanmar\"\n}, {\n  value: \"NA\",\n  label: \"Namibia\"\n}, {\n  value: \"NR\",\n  label: \"Nauru\"\n}, {\n  value: \"NP\",\n  label: \"Nepal\"\n}, {\n  value: \"NL\",\n  label: \"Netherlands\"\n}, {\n  value: \"NC\",\n  label: \"New Caledonia\"\n}, {\n  value: \"NZ\",\n  label: \"New Zealand\"\n}, {\n  value: \"NI\",\n  label: \"Nicaragua\"\n}, {\n  value: \"NE\",\n  label: \"Niger\"\n}, {\n  value: \"NG\",\n  label: \"Nigeria\"\n}, {\n  value: \"NU\",\n  label: \"Niue\"\n}, {\n  value: \"NF\",\n  label: \"Norfolk Island\"\n}, {\n  value: \"MP\",\n  label: \"Northern Mariana Islands\"\n}, {\n  value: \"NO\",\n  label: \"Norway\"\n}, {\n  value: \"OM\",\n  label: \"Oman\"\n}, {\n  value: \"PK\",\n  label: \"Pakistan\"\n}, {\n  value: \"PW\",\n  label: \"Palau\"\n}, {\n  value: \"PS\",\n  label: \"Palestinian Territory, Occupied\"\n}, {\n  value: \"PA\",\n  label: \"Panama\"\n}, {\n  value: \"PG\",\n  label: \"Papua New Guinea\"\n}, {\n  value: \"PY\",\n  label: \"Paraguay\"\n}, {\n  value: \"PE\",\n  label: \"Peru\"\n}, {\n  value: \"PH\",\n  label: \"Philippines\"\n}, {\n  value: \"PN\",\n  label: \"Pitcairn\"\n}, {\n  value: \"PL\",\n  label: \"Poland\"\n}, {\n  value: \"PT\",\n  label: \"Portugal\"\n}, {\n  value: \"PR\",\n  label: \"Puerto Rico\"\n}, {\n  value: \"QA\",\n  label: \"Qatar\"\n}, {\n  value: \"RE\",\n  label: \"Réunion\"\n}, {\n  value: \"RO\",\n  label: \"Romania\"\n}, {\n  value: \"RU\",\n  label: \"Russian Federation\"\n}, {\n  value: \"RW\",\n  label: \"Rwanda\"\n}, {\n  value: \"BL\",\n  label: \"Saint Barthélemy\"\n}, {\n  value: \"SH\",\n  label: \"Saint Helena, Ascension and Tristan da Cunha\"\n}, {\n  value: \"KN\",\n  label: \"Saint Kitts and Nevis\"\n}, {\n  value: \"LC\",\n  label: \"Saint Lucia\"\n}, {\n  value: \"MF\",\n  label: \"Saint Martin (French part)\"\n}, {\n  value: \"PM\",\n  label: \"Saint Pierre and Miquelon\"\n}, {\n  value: \"VC\",\n  label: \"Saint Vincent and the Grenadines\"\n}, {\n  value: \"WS\",\n  label: \"Samoa\"\n}, {\n  value: \"SM\",\n  label: \"San Marino\"\n}, {\n  value: \"ST\",\n  label: \"Sao Tome and Principe\"\n}, {\n  value: \"SA\",\n  label: \"Saudi Arabia\"\n}, {\n  value: \"SN\",\n  label: \"Senegal\"\n}, {\n  value: \"RS\",\n  label: \"Serbia\"\n}, {\n  value: \"SC\",\n  label: \"Seychelles\"\n}, {\n  value: \"SL\",\n  label: \"Sierra Leone\"\n}, {\n  value: \"SG\",\n  label: \"Singapore\"\n}, {\n  value: \"SX\",\n  label: \"Sint Maarten (Dutch part)\"\n}, {\n  value: \"SK\",\n  label: \"Slovakia\"\n}, {\n  value: \"SI\",\n  label: \"Slovenia\"\n}, {\n  value: \"SB\",\n  label: \"Solomon Islands\"\n}, {\n  value: \"SO\",\n  label: \"Somalia\"\n}, {\n  value: \"ZA\",\n  label: \"South Africa\"\n}, {\n  value: \"GS\",\n  label: \"South Georgia and the South Sandwich Islands\"\n}, {\n  value: \"SS\",\n  label: \"South Sudan\"\n}, {\n  value: \"ES\",\n  label: \"Spain\"\n}, {\n  value: \"LK\",\n  label: \"Sri Lanka\"\n}, {\n  value: \"SD\",\n  label: \"Sudan\"\n}, {\n  value: \"SR\",\n  label: \"Suriname\"\n}, {\n  value: \"SJ\",\n  label: \"Svalbard and Jan Mayen\"\n}, {\n  value: \"SZ\",\n  label: \"Swaziland\"\n}, {\n  value: \"SE\",\n  label: \"Sweden\"\n}, {\n  value: \"CH\",\n  label: \"Switzerland\"\n}, {\n  value: \"SY\",\n  label: \"Syrian Arab Republic\"\n}, {\n  value: \"TW\",\n  label: \"Taiwan, Province of China\"\n}, {\n  value: \"TJ\",\n  label: \"Tajikistan\"\n}, {\n  value: \"TZ\",\n  label: \"Tanzania, United Republic of\"\n}, {\n  value: \"TH\",\n  label: \"Thailand\"\n}, {\n  value: \"TL\",\n  label: \"Timor-Leste\"\n}, {\n  value: \"TG\",\n  label: \"Togo\"\n}, {\n  value: \"TK\",\n  label: \"Tokelau\"\n}, {\n  value: \"TO\",\n  label: \"Tonga\"\n}, {\n  value: \"TT\",\n  label: \"Trinidad and Tobago\"\n}, {\n  value: \"TN\",\n  label: \"Tunisia\"\n}, {\n  value: \"TR\",\n  label: \"Turkey\"\n}, {\n  value: \"TM\",\n  label: \"Turkmenistan\"\n}, {\n  value: \"TC\",\n  label: \"Turks and Caicos Islands\"\n}, {\n  value: \"TV\",\n  label: \"Tuvalu\"\n}, {\n  value: \"UG\",\n  label: \"Uganda\"\n}, {\n  value: \"UA\",\n  label: \"Ukraine\"\n}, {\n  value: \"AE\",\n  label: \"United Arab Emirates\"\n}, {\n  value: \"GB\",\n  label: \"United Kingdom\"\n}, {\n  value: \"US\",\n  label: \"United States\"\n}, {\n  value: \"UM\",\n  label: \"United States Minor Outlying Islands\"\n}, {\n  value: \"UY\",\n  label: \"Uruguay\"\n}, {\n  value: \"UZ\",\n  label: \"Uzbekistan\"\n}, {\n  value: \"VU\",\n  label: \"Vanuatu\"\n}, {\n  value: \"VE\",\n  label: \"Venezuela, Bolivarian Republic of\"\n}, {\n  value: \"VN\",\n  label: \"Viet Nam\"\n}, {\n  value: \"VG\",\n  label: \"Virgin Islands, British\"\n}, {\n  value: \"VI\",\n  label: \"Virgin Islands, U.S.\"\n}, {\n  value: \"WF\",\n  label: \"Wallis and Futuna\"\n}, {\n  value: \"EH\",\n  label: \"Western Sahara\"\n}, {\n  value: \"YE\",\n  label: \"Yemen\"\n}, {\n  value: \"ZM\",\n  label: \"Zambia\"\n}, {\n  value: \"ZW\",\n  label: \"Zimbabwe\"\n}];\n\n//# sourceURL=webpack:///./src/static/JS/countryList.js?");

/***/ }),

/***/ "./src/static/style/styles.js":
/*!************************************!*\
  !*** ./src/static/style/styles.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar styles = function styles(theme) {\n  var _paper, _paperRegister;\n\n  return {\n    root: {\n      flexGrow: 1\n    },\n    paper: (_paper = {\n      marginTop: theme.spacing.unit * 15,\n      padding: theme.spacing.unit * 3,\n      paddingLeft: theme.spacing.unit * 8,\n      paddingRight: theme.spacing.unit * 8,\n      minWidth: 400\n    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_paper, theme.breakpoints.down(\"sm\"), {\n      height: \"100vh\",\n      padding: 0,\n      marginTop: 0\n    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_paper, theme.breakpoints.only(\"md\"), {\n      marginTop: theme.spacing.unit * 25\n    }), _paper),\n    paperRegister: (_paperRegister = {\n      marginTop: theme.spacing.unit * 15,\n      padding: theme.spacing.unit * 3,\n      minWidth: 400\n    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_paperRegister, theme.breakpoints.down(\"sm\"), {\n      height: \"auto\",\n      padding: 0,\n      marginTop: 0\n    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_paperRegister, theme.breakpoints.only(\"md\"), {\n      marginTop: theme.spacing.unit * 25\n    }), _paperRegister),\n    textField: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({\n      width: 250\n    }, theme.breakpoints.only(\"md\"), {\n      width: 350\n    }),\n    accountCircle: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({\n      width: 150,\n      height: 150\n    }, theme.breakpoints.down(\"sm\"), {\n      marginTop: 150\n    }),\n    addPhoto: {\n      width: 150,\n      height: 150\n    },\n    button: {\n      margin: theme.spacing.unit * 2\n    },\n    image: {\n      height: 300,\n      width: 300\n    },\n    progressBar: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({\n      position: \"absolute\",\n      left: 650,\n      top: 350\n    }, theme.breakpoints.down(\"sm\"), {\n      left: \"45vw\",\n      top: \"45vh\"\n    }),\n    checkBox: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({\n      marginLeft: 65\n    }, theme.breakpoints.only(\"md\"), {\n      marginLeft: 0\n    })\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (styles);\n\n//# sourceURL=webpack:///./src/static/style/styles.js?");

/***/ }),

/***/ "./src/static/themes/theme.js":
/*!************************************!*\
  !*** ./src/static/themes/theme.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/colors */ \"@material-ui/core/colors\");\n/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__[\"createMuiTheme\"])({\n  palette: {\n    primary: {\n      main: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__[\"blue\"][500]\n    },\n    secondary: {\n      main: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__[\"green\"][500]\n    },\n    error: {\n      main: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__[\"red\"][500]\n    }\n  },\n  typography: {\n    useNextVariants: true\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);\n\n//# sourceURL=webpack:///./src/static/themes/theme.js?");

/***/ }),

/***/ "./webpack.config.dev.js":
/*!*******************************!*\
  !*** ./webpack.config.dev.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var path = __webpack_require__(/*! path */ \"path\");\n\nvar HtmlWebpackPlugin = __webpack_require__(/*! html-webpack-plugin */ \"html-webpack-plugin\");\n\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nvar NodemonPlugin = __webpack_require__(/*! nodemon-webpack-plugin */ \"nodemon-webpack-plugin\"); //import path from \"path\";\n//import HtmlWebpackPlugin from \"html-webpack-plugin\";\n\n\nmodule.exports = {\n  entry: {\n    main: [\"webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000\", \"./src/index.js\"]\n  },\n  output: {\n    path: path.join(__dirname, \"build\"),\n    publicPath: \"/\",\n    filename: \"[name].js\"\n  },\n  mode: \"development\",\n  target: \"web\",\n  devtool: \"source-map\",\n  resolve: {\n    modules: [path.resolve(\"./\", \"src\"), \"node_modules\"]\n  },\n  module: {\n    rules: [{\n      test: /\\.(js|jsx)$/,\n      exclude: /node_modules/,\n      use: [\"babel-loader\"]\n    }, {\n      test: /\\.(css|scss)$/,\n      use: [\"style-loader\", \"css-loader\", \"sass-loader\"]\n    }, {\n      test: /\\.(jpg|jpeg|png|svg|gif|img|mp3)$/,\n      loaders: [\"file-loader\"]\n    }, {\n      test: /\\.html$/,\n      use: [{\n        loader: \"html-loader\"\n      }]\n    }, {\n      test: /\\.(woff|woff2)(\\?v=\\d+\\.\\d+\\.\\d+)?$/,\n      use: {\n        loader: \"url-loader\",\n        options: {\n          limit: 50000,\n          mimetype: \"application/font-woff\",\n          name: \"./fonts/[name].[ext]\"\n        }\n      }\n    }]\n  },\n  plugins: [new HtmlWebpackPlugin({\n    template: path.join(\"./\", \"src\", \"index.html\"),\n    filename: \"./index.html\",\n    excludeChunks: [\"server\"]\n  }), new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()]\n};\n\n//# sourceURL=webpack:///./webpack.config.dev.js?");

/***/ }),

/***/ "@babel/runtime/helpers/assertThisInitialized":
/*!***************************************************************!*\
  !*** external "@babel/runtime/helpers/assertThisInitialized" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/assertThisInitialized\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/assertThisInitialized%22?");

/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/classCallCheck\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/classCallCheck%22?");

/***/ }),

/***/ "@babel/runtime/helpers/createClass":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/createClass\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/createClass%22?");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/defineProperty\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/defineProperty%22?");

/***/ }),

/***/ "@babel/runtime/helpers/getPrototypeOf":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/getPrototypeOf" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/getPrototypeOf\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/getPrototypeOf%22?");

/***/ }),

/***/ "@babel/runtime/helpers/inherits":
/*!**************************************************!*\
  !*** external "@babel/runtime/helpers/inherits" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/inherits\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/inherits%22?");

/***/ }),

/***/ "@babel/runtime/helpers/possibleConstructorReturn":
/*!*******************************************************************!*\
  !*** external "@babel/runtime/helpers/possibleConstructorReturn" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/possibleConstructorReturn\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/possibleConstructorReturn%22?");

/***/ }),

/***/ "@date-io/date-fns":
/*!************************************!*\
  !*** external "@date-io/date-fns" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@date-io/date-fns\");\n\n//# sourceURL=webpack:///external_%22@date-io/date-fns%22?");

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core%22?");

/***/ }),

/***/ "@material-ui/core/colors":
/*!*******************************************!*\
  !*** external "@material-ui/core/colors" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/colors\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/colors%22?");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/styles\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/styles%22?");

/***/ }),

/***/ "@material-ui/icons/AccountCircle":
/*!***************************************************!*\
  !*** external "@material-ui/icons/AccountCircle" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/AccountCircle\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/AccountCircle%22?");

/***/ }),

/***/ "@material-ui/icons/AddAPhoto":
/*!***********************************************!*\
  !*** external "@material-ui/icons/AddAPhoto" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/AddAPhoto\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/AddAPhoto%22?");

/***/ }),

/***/ "@material-ui/icons/Home":
/*!******************************************!*\
  !*** external "@material-ui/icons/Home" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Home\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Home%22?");

/***/ }),

/***/ "@material-ui/icons/Settings":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Settings" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Settings\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Settings%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "html-webpack-plugin":
/*!**************************************!*\
  !*** external "html-webpack-plugin" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"html-webpack-plugin\");\n\n//# sourceURL=webpack:///external_%22html-webpack-plugin%22?");

/***/ }),

/***/ "material-ui-pickers":
/*!**************************************!*\
  !*** external "material-ui-pickers" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui-pickers\");\n\n//# sourceURL=webpack:///external_%22material-ui-pickers%22?");

/***/ }),

/***/ "nodemon-webpack-plugin":
/*!*****************************************!*\
  !*** external "nodemon-webpack-plugin" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"nodemon-webpack-plugin\");\n\n//# sourceURL=webpack:///external_%22nodemon-webpack-plugin%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ })

/******/ });