'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _router = require('dva/router');

var _dynamic = require('dva/dynamic');

var _dynamic2 = _interopRequireDefault(_dynamic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConnectedRouter = _router.routerRedux.ConnectedRouter;


var Routers = function Routers() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    redirect: '/',
    routes: []
  };

  return function (_ref) {
    var history = _ref.history,
        app = _ref.app;

    return _react2.default.createElement(
      ConnectedRouter,
      { history: history },
      _react2.default.createElement(
        _router.Switch,
        null,
        options.redirect ? _react2.default.createElement(_router.Route, { exact: true, path: '/', render: function render() {
            return _react2.default.createElement(_router.Redirect, { to: options.redirect });
          } }) : null,
        options.routes.map(function (_ref2, key) {
          var path = _ref2.path,
              dynamics = (0, _objectWithoutProperties3.default)(_ref2, ['path']);
          return _react2.default.createElement(_router.Route, {
            key: key,
            exact: true,
            path: path,
            component: (0, _dynamic2.default)((0, _extends3.default)({
              app: app
            }, dynamics))
          });
        })
      )
    );
  };
};

exports.default = Routers;