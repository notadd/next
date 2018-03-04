var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import View from './DateTimePickerView';
import YearSelection from '../DatePicker/YearSelection';
import Calendar from '../DatePicker/Calendar';
import HourView from '../TimePicker/HourView';
import MinutesView from '../TimePicker/MinutesView';
import DateTimePickerTabs from './DateTimePickerTabs';
import DatetimePickerHeader from './DateTimePickerHeader';
import { convertToMeridiem } from '../_helpers/time-utils';

import DomainPropTypes from '../constants/prop-types';
import * as viewType from '../constants/date-picker-view';
import withUtils from '../_shared/WithUtils';

export var DateTimePicker = function (_Component) {
  _inherits(DateTimePicker, _Component);

  function DateTimePicker() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DateTimePicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DateTimePicker.__proto__ || Object.getPrototypeOf(DateTimePicker)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      openView: _this.props.openTo,
      meridiemMode: _this.props.utils.getHours(_this.props.date) >= 12 ? 'pm' : 'am'
    }, _this.onChange = function (time) {
      var isFinish = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var nextView = arguments[2];

      _this.handleChange(time);

      if (isFinish && _this.props.autoSubmit) {
        _this.handleViewChange(nextView);
      }
    }, _this.setMeridiemMode = function (mode) {
      return function () {
        _this.setState({ meridiemMode: mode }, function () {
          return _this.handleChange(_this.props.date, false);
        });
      };
    }, _this.handleViewChange = function (view) {
      _this.setState({ openView: view });
    }, _this.handleChange = function (time) {
      var isFinish = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var withMeridiem = convertToMeridiem(time, _this.state.meridiemMode, _this.props.ampm, _this.props.utils);
      _this.props.onChange(withMeridiem, isFinish);
    }, _this.handleYearChange = function (date, isFinish) {
      _this.onChange(date, isFinish, viewType.DATE);
    }, _this.handleDayChange = function (date, isFinish) {
      _this.onChange(date, isFinish, viewType.HOUR);
    }, _this.handleHourChange = function (time, isFinish) {
      _this.onChange(time, isFinish, viewType.MINUTES);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DateTimePicker, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          openView = _state.openView,
          meridiemMode = _state.meridiemMode;
      var _props = this.props,
          date = _props.date,
          minDate = _props.minDate,
          maxDate = _props.maxDate,
          showTabs = _props.showTabs,
          disablePast = _props.disablePast,
          disableFuture = _props.disableFuture,
          leftArrowIcon = _props.leftArrowIcon,
          rightArrowIcon = _props.rightArrowIcon,
          dateRangeIcon = _props.dateRangeIcon,
          timeIcon = _props.timeIcon,
          renderDay = _props.renderDay,
          utils = _props.utils,
          ampm = _props.ampm,
          shouldDisableDate = _props.shouldDisableDate,
          animateYearScrolling = _props.animateYearScrolling;


      return React.createElement(
        Fragment,
        null,
        React.createElement(DatetimePickerHeader, {
          date: date,
          openView: openView,
          meridiemMode: meridiemMode,
          setMeridiemMode: this.setMeridiemMode,
          onOpenViewChange: this.handleViewChange,
          utils: utils,
          ampm: ampm
        }),
        showTabs && React.createElement(DateTimePickerTabs, {
          view: openView,
          onChange: this.handleViewChange,
          dateRangeIcon: dateRangeIcon,
          timeIcon: timeIcon
        }),
        React.createElement(
          View,
          { view: viewType.YEAR, selected: openView },
          React.createElement(YearSelection, {
            date: date,
            minDate: minDate,
            maxDate: maxDate,
            onChange: this.handleYearChange,
            disablePast: disablePast,
            disableFuture: disableFuture,
            utils: utils,
            animateYearScrolling: animateYearScrolling
          })
        ),
        React.createElement(
          View,
          { view: viewType.DATE, selected: openView },
          React.createElement(Calendar, {
            date: date,
            minDate: minDate,
            maxDate: maxDate,
            onChange: this.handleDayChange,
            disablePast: disablePast,
            disableFuture: disableFuture,
            leftArrowIcon: leftArrowIcon,
            rightArrowIcon: rightArrowIcon,
            renderDay: renderDay,
            utils: utils,
            shouldDisableDate: shouldDisableDate
          })
        ),
        React.createElement(
          View,
          { view: viewType.HOUR, selected: openView },
          React.createElement(HourView, {
            date: date,
            meridiemMode: meridiemMode,
            onChange: this.handleHourChange,
            utils: utils,
            ampm: ampm
          })
        ),
        React.createElement(
          View,
          { view: viewType.MINUTES, selected: openView },
          React.createElement(MinutesView, {
            date: date,
            onChange: this.handleChange,
            utils: utils
          })
        )
      );
    }
  }]);

  return DateTimePicker;
}(Component);

DateTimePicker.propTypes = {
  date: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  autoSubmit: PropTypes.bool,
  openTo: PropTypes.oneOf(Object.keys(viewType).map(function (key) {
    return viewType[key];
  })),
  disablePast: PropTypes.bool,
  disableFuture: PropTypes.bool,
  minDate: DomainPropTypes.date,
  maxDate: DomainPropTypes.date,
  showTabs: PropTypes.bool,
  leftArrowIcon: PropTypes.node,
  rightArrowIcon: PropTypes.node,
  dateRangeIcon: PropTypes.node,
  timeIcon: PropTypes.node,
  renderDay: PropTypes.func,
  utils: PropTypes.func.isRequired,
  ampm: PropTypes.bool,
  shouldDisableDate: PropTypes.func,
  animateYearScrolling: PropTypes.bool
};
DateTimePicker.defaultProps = {
  minDate: '1900-01-01',
  maxDate: '2100-01-01',
  autoSubmit: true,
  openTo: viewType.DATE,
  disablePast: false,
  disableFuture: false,
  showTabs: true,
  leftArrowIcon: undefined,
  rightArrowIcon: undefined,
  dateRangeIcon: undefined,
  timeIcon: undefined,
  renderDay: undefined,
  ampm: true,
  shouldDisableDate: undefined,
  animateYearScrolling: false
};
export default withUtils()(DateTimePicker);