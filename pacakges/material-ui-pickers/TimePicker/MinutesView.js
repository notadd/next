var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Clock from './Clock';
import { MINUTES } from '../constants/clock-types';
import ClockNumber from './ClockNumber';
import withUtils from '../_shared/WithUtils';

export var MinutesView = function (_Component) {
  _inherits(MinutesView, _Component);

  function MinutesView() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MinutesView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MinutesView.__proto__ || Object.getPrototypeOf(MinutesView)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (minutes, isFinish) {
      var _this$props = _this.props,
          date = _this$props.date,
          utils = _this$props.utils;

      var updatedDate = utils.setMinutes(date, minutes);
      _this.props.onChange(updatedDate, isFinish);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MinutesView, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          date = _props.date,
          utils = _props.utils;


      var f = utils.formatNumber;
      var value = utils.getMinutes(date);

      return React.createElement(
        Clock,
        {
          type: MINUTES,
          onChange: this.handleChange,
          value: value
        },
        React.createElement(ClockNumber, { label: f('00'), selected: value === 0, index: 12 }),
        React.createElement(ClockNumber, { label: f('05'), selected: value === 5, index: 1 }),
        React.createElement(ClockNumber, { label: f('10'), selected: value === 10, index: 2 }),
        React.createElement(ClockNumber, { label: f('15'), selected: value === 15, index: 3 }),
        React.createElement(ClockNumber, { label: f('20'), selected: value === 20, index: 4 }),
        React.createElement(ClockNumber, { label: f('25'), selected: value === 25, index: 5 }),
        React.createElement(ClockNumber, { label: f('30'), selected: value === 30, index: 6 }),
        React.createElement(ClockNumber, { label: f('35'), selected: value === 35, index: 7 }),
        React.createElement(ClockNumber, { label: f('40'), selected: value === 40, index: 8 }),
        React.createElement(ClockNumber, { label: f('45'), selected: value === 45, index: 9 }),
        React.createElement(ClockNumber, { label: f('50'), selected: value === 50, index: 10 }),
        React.createElement(ClockNumber, { label: f('55'), selected: value === 55, index: 11 })
      );
    }
  }]);

  return MinutesView;
}(Component);

MinutesView.propTypes = {
  date: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  utils: PropTypes.func.isRequired
};
MinutesView.defaultProps = {};
export default withUtils()(MinutesView);