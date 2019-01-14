"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("index.scss");

var HelloWorld = function HelloWorld() {
  return _react.default.createElement("h1", null, "Hello There.");
};

_reactDom.default.render(_react.default.createElement(HelloWorld, null), document.getElementById("root"));