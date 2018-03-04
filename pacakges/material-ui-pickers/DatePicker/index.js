var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';

import ModalWrapper from '../wrappers/ModalWrapper';
import DatePicker from './DatePicker';
import DomainPropTypes from '../constants/prop-types';
import PickerBase from '../_shared/PickerBase';
import withUtils from '../_shared/WithUtils';

export var DatePickerWrapper = function (_PickerBase) {
  _inherits(DatePickerWrapper, _PickerBase);

  function DatePickerWrapper() {
    _classCallCheck(this, DatePickerWrapper);

    return _possibleConstructorReturn(this, (DatePickerWrapper.__proto__ || Object.getPrototypeOf(DatePickerWrapper)).apply(this, arguments));
  }

  _createClass(DatePickerWrapper, [{
    key: 'render',
    value: function render() {
      var date = this.state.date;

      var _props = this.props,
          value = _props.value,
          format = _props.format,
          autoOk = _props.autoOk,
          onChange = _props.onChange,
          animateYearScrolling = _props.animateYearScrolling,
          openToYearSelection = _props.openToYearSelection,
          invalidLabel = _props.invalidLabel,
          leftArrowIcon = _props.leftArrowIcon,
          rightArrowIcon = _props.rightArrowIcon,
          renderDay = _props.renderDay,
          labelFunc = _props.labelFunc,
          utils = _props.utils,
          shouldDisableDate = _props.shouldDisableDate,
          minDateMessage = _props.minDateMessage,
          maxDateMessage = _props.maxDateMessage,
          minDate = _props.minDate,
          maxDate = _props.maxDate,
          disablePast = _props.disablePast,
          disableFuture = _props.disableFuture,
          other = _objectWithoutProperties(_props, ['value', 'format', 'autoOk', 'onChange', 'animateYearScrolling', 'openToYearSelection', 'invalidLabel', 'leftArrowIcon', 'rightArrowIcon', 'renderDay', 'labelFunc', 'utils', 'shouldDisableDate', 'minDateMessage', 'maxDateMessage', 'minDate', 'maxDate', 'disablePast', 'disableFuture']);

      return React.createElement(
        ModalWrapper,
        _extends({
          ref: this.getRef,
          value: value,
          format: format,
          onClear: this.handleClear,
          onAccept: this.handleAccept,
          onChange: this.handleTextFieldChange,
          onDismiss: this.handleDismiss,
          invalidLabel: invalidLabel,
          labelFunc: labelFunc,
          minDate: minDate,
          maxDate: maxDate,
          disablePast: disablePast,
          disableFuture: disableFuture,
          minDateMessage: minDateMessage,
          maxDateMessage: maxDateMessage
        }, other),
        React.createElement(DatePicker, {
          date: date,
          onChange: this.handleChange,
          animateYearScrolling: animateYearScrolling,
          openToYearSelection: openToYearSelection,
          leftArrowIcon: leftArrowIcon,
          rightArrowIcon: rightArrowIcon,
          renderDay: renderDay,
          utils: utils,
          minDate: minDate,
          maxDate: maxDate,
          disablePast: disablePast,
          disableFuture: disableFuture,
          shouldDisableDate: shouldDisableDate
        })
      );
    }
  }]);

  return DatePickerWrapper;
}(PickerBase);

DatePickerWrapper.propTypes = {
  /* Datepicker value */
  value: DomainPropTypes.date,
  /* Min selectable date */
  minDate: DomainPropTypes.date,
  /* Max selectable date */
  maxDate: DomainPropTypes.date,
  /* Moment format string for input */
  format: PropTypes.string,
  /* Callback firing when date accepted */
  onChange: PropTypes.func.isRequired,
  /* Auto accept date on selection */
  autoOk: PropTypes.bool,
  /* Disable past dates */
  disablePast: PropTypes.bool,
  /* Disable future dates */
  disableFuture: PropTypes.bool,
  /* To animate scrolling to current year (with scrollIntoView) */
  animateYearScrolling: PropTypes.bool,
  /* Open datepicker from year selection */
  openToYearSelection: PropTypes.bool,
  /* Displayed string if date can`t be parsed (or null) */
  invalidLabel: PropTypes.string,
  /* Allow to specify dynamic label for text field labelFunc(date, invalidLabel) */
  labelFunc: PropTypes.func,
  /* Left arrow icon */
  leftArrowIcon: PropTypes.node,
  /* Right arrow icon */
  rightArrowIcon: PropTypes.node,
  /* Custom renderer for day renderDay(date, selectedDate, dayInCurrentMonth) */
  renderDay: PropTypes.func,
  /* Date displaying utils */
  utils: PropTypes.func.isRequired,
  /* Disable specific date hook */
  shouldDisableDate: PropTypes.func
};
DatePickerWrapper.defaultProps = {
  value: new Date(),
  format: 'MMMM Do',
  autoOk: false,
  minDate: undefined,
  maxDate: undefined,
  disablePast: undefined,
  disableFuture: undefined,
  animateYearScrolling: undefined,
  openToYearSelection: undefined,
  invalidLabel: undefined,
  leftArrowIcon: undefined,
  rightArrowIcon: undefined,
  renderDay: undefined,
  labelFunc: undefined,
  shouldDisableDate: undefined
};
export default withUtils()(DatePickerWrapper);