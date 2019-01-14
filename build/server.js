"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _hapi = _interopRequireDefault(require("hapi"));

//const Hapi = require("hapi");
var server = _hapi.default.server({
  host: "localhost",
  port: 3002
});

server.route({
  method: "GET",
  path: "/",
  handler: function handler(request, reply) {
    return "hello world";
  }
}); // const start = new Promise((resolve, reject) => server.start())
//   .then(() => console.log(`Server is running at: ${server.info.uri}`))
//   .catch(err => {
//     console.log(err);
//     process.exit(1);
//   });

var start =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee() {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return server.start();

          case 3:
            console.log("Server running at: ".concat(server.info.uri));
            _context.next = 10;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            process.exit(1);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 6]]);
  }));

  return function start() {
    return _ref.apply(this, arguments);
  };
}();

start();