'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _dva = require('dva');

var _dva2 = _interopRequireDefault(_dva);

var _dvaLoading = require('dva-loading');

var _dvaLoading2 = _interopRequireDefault(_dvaLoading);

var _createHashHistory = require('history/createHashHistory');

var _createHashHistory2 = _interopRequireDefault(_createHashHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(_ref) {
  var history = _ref.history,
      _onError = _ref.onError,
      router = _ref.router,
      root = _ref.root,
      registerServiceWorker = _ref.registerServiceWorker;

  // 1. Initialize
  var app = (0, _dva2.default)((0, _extends3.default)({}, (0, _dvaLoading2.default)({
    effects: true
  }), {
    history: history ? history : (0, _createHashHistory2.default)(),
    onError: function onError(error) {
      if (_onError) {
        _onError(error);
      }
    }
  }));

  // 2. Model
  // app.model(require('./models/app'))

  // 3. Router
  app.router(router);

  // 4. Start
  app.start(root ? root : '#root');

  if (registerServiceWorker) {
    registerServiceWorker();
  }
}
exports.default = _default;
module.exports = exports['default'];