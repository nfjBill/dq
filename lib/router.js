'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = function (_ref) {
  var redirect = _ref.redirect,
      routes = _ref.routes,
      error = _ref.error;

  return function (_ref2) {
    var history = _ref2.history,
        app = _ref2.app;

    return _react2.default.createElement(
      ConnectedRouter,
      { history: history },
      _react2.default.createElement(
        _router.Switch,
        null,
        redirect ? _react2.default.createElement(_router.Route, { exact: true, path: '/', render: function render() {
            return _react2.default.createElement(_router.Redirect, { to: redirect });
          } }) : null,
        routes.map(function (_ref3, key) {
          var path = _ref3.path,
              dynamics = (0, _objectWithoutProperties3.default)(_ref3, ['path']);
          return _react2.default.createElement(_router.Route, {
            key: key,
            exact: true,
            path: path,
            component: (0, _dynamic2.default)((0, _extends3.default)({
              app: app
            }, dynamics))
          });
        }),
        error ? _react2.default.createElement(_router.Route, { component: error }) : null
      )
    );
  };
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _router = require('dva/router');

var _dynamic = require('dva/dynamic');

var _dynamic2 = _interopRequireDefault(_dynamic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConnectedRouter = _router.routerRedux.ConnectedRouter;
module.exports = exports['default'];