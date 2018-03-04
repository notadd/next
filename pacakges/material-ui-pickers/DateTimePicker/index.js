var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';

import withStyles from 'material-ui/styles/withStyles';

import DomainPropTypes from '../constants/prop-types';
import ModalWrapper from '../wrappers/ModalWrapper';
import DateTimePicker from './DateTimePicker';
import PickerBase from '../_shared/PickerBase';
import withUtils from '../_shared/WithUtils';

export var DateTimePickerWrapper = function (_PickerBase) {
  _inherits(DateTimePickerWrapper, _PickerBase);

  function DateTimePickerWrapper() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DateTimePickerWrapper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DateTimePickerWrapper.__proto__ || Object.getPrototypeOf(DateTimePickerWrapper)).call.apply(_ref, [this].concat(args))), _this), _this.default12hFormat = 'MMMM Do hh:mm a', _this.default24hFormat = 'MMMM Do HH:mm', _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DateTimePickerWrapper, [{
    key: 'render',
    value: function render() {
      var date = this.state.date;

      var _props = this.props,
          value = _props.value,
          format = _props.format,
          autoOk = _props.autoOk,
          openTo = _props.openTo,
          classes = _props.classes,
          minDate = _props.minDate,
          maxDate = _props.maxDate,
          showTabs = _props.showTabs,
          autoSubmit = _props.autoSubmit,
          disablePast = _props.disablePast,
          disableFuture = _props.disableFuture,
          invalidLabel = _props.invalidLabel,
          leftArrowIcon = _props.leftArrowIcon,
          rightArrowIcon = _props.rightArrowIcon,
          dateRangeIcon = _props.dateRangeIcon,
          timeIcon = _props.timeIcon,
          renderDay = _props.renderDay,
          labelFunc = _props.labelFunc,
          utils = _props.utils,
          ampm = _props.ampm,
          shouldDisableDate = _props.shouldDisableDate,
          animateYearScrolling = _props.animateYearScrolling,
          other = _objectWithoutProperties(_props, ['value', 'format', 'autoOk', 'openTo', 'classes', 'minDate', 'maxDate', 'showTabs', 'autoSubmit', 'disablePast', 'disableFuture', 'invalidLabel', 'leftArrowIcon', 'rightArrowIcon', 'dateRangeIcon', 'timeIcon', 'renderDay', 'labelFunc', 'utils', 'ampm', 'shouldDisableDate', 'animateYearScrolling']);

      return React.createElement(
        ModalWrapper,
        _extends({
          ref: this.getRef,
          value: value,
          format: this.getFormat(),
          onAccept: this.handleAccept,
          onChange: this.handleTextFieldChange,
          onDismiss: this.handleDismiss,
          onClear: this.handleClear,
          dialogContentClassName: classes.dialogContent,
          invalidLabel: invalidLabel,
          labelFunc: labelFunc,
          minDate: minDate,
          maxDate: maxDate,
          disablePast: disablePast,
          disableFuture: disableFuture
        }, other),
        React.createElement(DateTimePicker, {
          date: date,
          openTo: openTo,
          autoSubmit: autoSubmit,
          onChange: this.handleChange,
          disablePast: disablePast,
          disableFuture: disableFuture,
          minDate: minDate,
          maxDate: maxDate,
          showTabs: showTabs,
          leftArrowIcon: leftArrowIcon,
          rightArrowIcon: rightArrowIcon,
          dateRangeIcon: dateRangeIcon,
          timeIcon: timeIcon,
          renderDay: renderDay,
          utils: utils,
          ampm: ampm,
          shouldDisableDate: shouldDisableDate,
          animateYearScrolling: animateYearScrolling
        })
      );
    }
  }]);

  return DateTimePickerWrapper;
}(PickerBase);

DateTimePickerWrapper.propTypes = {
  value: DomainPropTypes.date,
  format: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  autoOk: PropTypes.bool,
  classes: PropTypes.object.isRequired,
  autoSubmit: PropTypes.bool,
  disableFuture: PropTypes.bool,
  openTo: PropTypes.string,
  minDate: DomainPropTypes.date,
  maxDate: DomainPropTypes.date,
  showTabs: PropTypes.bool,
  invalidLabel: PropTypes.string,
  leftArrowIcon: PropTypes.node,
  rightArrowIcon: PropTypes.node,
  dateRangeIcon: PropTypes.node,
  timeIcon: PropTypes.node,
  renderDay: PropTypes.func,
  labelFunc: PropTypes.func,
  utils: PropTypes.func.isRequired,
  ampm: PropTypes.bool,
  shouldDisableDate: PropTypes.func,
  animateYearScrolling: PropTypes.bool
};
DateTimePickerWrapper.defaultProps = {
  value: new Date(),
  format: undefined,
  autoOk: false,
  autoSubmit: undefined,
  openTo: undefined,
  disableFuture: undefined,
  minDate: undefined,
  maxDate: undefined,
  showTabs: true,
  invalidLabel: undefined,
  leftArrowIcon: undefined,
  rightArrowIcon: undefined,
  dateRangeIcon: undefined,
  timeIcon: undefined,
  renderDay: undefined,
  labelFunc: undefined,
  ampm: true,
  shouldDisableDate: undefined,
  animateYearScrolling: false
};
var styles = {
  dialogContent: {
    width: 310
  }
};

export default withStyles(styles, { name: 'MuiPickerDTPickerModal' })(withUtils()(DateTimePickerWrapper));