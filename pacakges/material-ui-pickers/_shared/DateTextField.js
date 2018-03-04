var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable react/sort-comp */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Icon from 'material-ui/Icon';
import InputAdornment from 'material-ui/Input/InputAdornment';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import withStyles from 'material-ui/styles/withStyles';

import DomainPropTypes from '../constants/prop-types';
import MaskedInput from './MaskedInput';
import withUtils from '../_shared/WithUtils';

export var DateTextField = function (_PureComponent) {
  _inherits(DateTextField, _PureComponent);

  function DateTextField() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DateTextField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DateTextField.__proto__ || Object.getPrototypeOf(DateTextField)).call.apply(_ref, [this].concat(args))), _this), _this.getDisplayDate = function (props) {
      var utils = props.utils,
          value = props.value,
          format = props.format,
          invalidLabel = props.invalidLabel,
          emptyLabel = props.emptyLabel,
          labelFunc = props.labelFunc;


      var isEmpty = value === null;
      var date = utils.date(value);

      if (labelFunc) {
        return labelFunc(isEmpty ? null : date, invalidLabel);
      }

      if (isEmpty) {
        return emptyLabel;
      }

      return utils.isValid(date) ? utils.format(date, format) : invalidLabel;
    }, _this.getError = function (value) {
      var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.props;
      var utils = props.utils,
          maxDate = props.maxDate,
          minDate = props.minDate,
          disablePast = props.disablePast,
          disableFuture = props.disableFuture,
          maxDateMessage = props.maxDateMessage,
          minDateMessage = props.minDateMessage,
          invalidDateMessage = props.invalidDateMessage;


      if (!utils.isValid(value)) {
        // if null - do not show error
        if (utils.isNull(value)) {
          return '';
        }
        return invalidDateMessage;
      }

      if (maxDate && utils.isAfter(value, maxDate) || disableFuture && utils.isAfter(value, utils.endOfDay(utils.date()))) {
        return maxDateMessage;
      }

      if (minDate && utils.isBefore(value, minDate) || disablePast && utils.isBefore(value, utils.startOfDay(utils.date()))) {
        return minDateMessage;
      }

      return '';
    }, _this.updateState = function () {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props;
      return {
        value: props.value,
        displayValue: _this.getDisplayDate(props),
        error: _this.getError(props.utils.date(props.value))
      };
    }, _this.state = _this.updateState(), _this.handleBlur = function (e) {
      e.preventDefault();
      e.stopPropagation();
    }, _this.handleChange = function (e) {
      var _this$props = _this.props,
          clearable = _this$props.clearable,
          onClear = _this$props.onClear,
          utils = _this$props.utils,
          format = _this$props.format;


      if (clearable && e.target.value === '') {
        if (_this.props.value === null) {
          _this.setState(_this.updateState());
        } else if (onClear) {
          onClear();
        }

        return;
      }

      var oldValue = utils.date(_this.state.value);
      var newValue = utils.parse(e.target.value, format);

      var error = _this.getError(newValue);

      _this.setState({
        displayValue: e.target.value,
        value: error ? newValue : oldValue,
        error: error
      }, function () {
        if (!error && utils.format(newValue, 'LLLL') !== utils.format(oldValue, 'LLLL')) {
          _this.props.onChange(newValue);
        }
      });
    }, _this.handleFocus = function (e) {
      e.stopPropagation();
      e.preventDefault();
      var keyboard = _this.props.keyboard;


      if (keyboard) {
        return;
      }

      e.target.blur();
      _this.openPicker(e);
    }, _this.handleKeyPress = function (e) {
      if (e.key === 'Enter') {
        _this.openPicker(e);
      }
    }, _this.openPicker = function (e) {
      var _this$props2 = _this.props,
          disabled = _this$props2.disabled,
          onClick = _this$props2.onClick;


      if (!disabled) {
        onClick(e);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DateTextField, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.value !== this.state.value || nextProps.format !== this.props.format || nextProps.maxDate !== this.props.maxDate || nextProps.minDate !== this.props.minDate) {
        this.setState(this.updateState(nextProps));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          utils = _props.utils,
          format = _props.format,
          classes = _props.classes,
          disabled = _props.disabled,
          onClick = _props.onClick,
          invalidLabel = _props.invalidLabel,
          invalidDateMessage = _props.invalidDateMessage,
          clearable = _props.clearable,
          onClear = _props.onClear,
          emptyLabel = _props.emptyLabel,
          labelFunc = _props.labelFunc,
          keyboard = _props.keyboard,
          value = _props.value,
          mask = _props.mask,
          InputProps = _props.InputProps,
          keyboardIcon = _props.keyboardIcon,
          maxDate = _props.maxDate,
          minDate = _props.minDate,
          disablePast = _props.disablePast,
          disableFuture = _props.disableFuture,
          maxDateMessage = _props.maxDateMessage,
          minDateMessage = _props.minDateMessage,
          TextFieldComponent = _props.TextFieldComponent,
          InputAdornmentProps = _props.InputAdornmentProps,
          adornmentPosition = _props.adornmentPosition,
          other = _objectWithoutProperties(_props, ['utils', 'format', 'classes', 'disabled', 'onClick', 'invalidLabel', 'invalidDateMessage', 'clearable', 'onClear', 'emptyLabel', 'labelFunc', 'keyboard', 'value', 'mask', 'InputProps', 'keyboardIcon', 'maxDate', 'minDate', 'disablePast', 'disableFuture', 'maxDateMessage', 'minDateMessage', 'TextFieldComponent', 'InputAdornmentProps', 'adornmentPosition']);

      var _state = this.state,
          displayValue = _state.displayValue,
          error = _state.error;

      var localInputProps = {
        inputComponent: MaskedInput,
        inputProps: {
          mask: !keyboard ? null : mask,
          readOnly: !keyboard
        },
        className: classes.input
      };

      if (keyboard) {
        localInputProps[adornmentPosition + 'Adornment'] = React.createElement(
          InputAdornment,
          _extends({ position: adornmentPosition }, InputAdornmentProps),
          React.createElement(
            IconButton,
            { onClick: this.openPicker },
            ' ',
            React.createElement(
              Icon,
              null,
              ' ',
              keyboardIcon,
              ' '
            ),
            ' '
          )
        );
      }

      return React.createElement(TextFieldComponent, _extends({
        onClick: this.handleFocus,
        error: !!error,
        helperText: error,
        onKeyPress: this.handleKeyPress,
        onBlur: this.handleBlur,
        disabled: disabled,
        value: displayValue
      }, other, {
        onChange: this.handleChange,
        InputProps: _extends({}, localInputProps, InputProps)
      }));
    }
  }]);

  return DateTextField;
}(PureComponent);

DateTextField.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  value: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)]),
  mask: PropTypes.any,
  minDate: DomainPropTypes.date,
  minDateMessage: PropTypes.string,
  maxDate: DomainPropTypes.date,
  maxDateMessage: PropTypes.string,
  disablePast: PropTypes.bool,
  disableFuture: PropTypes.bool,
  disabled: PropTypes.bool,
  format: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onClear: PropTypes.func,
  onClick: PropTypes.func.isRequired,
  invalidLabel: PropTypes.string,
  emptyLabel: PropTypes.string,
  labelFunc: PropTypes.func,
  keyboard: PropTypes.bool,
  InputProps: PropTypes.shape(),
  keyboardIcon: PropTypes.node,
  invalidDateMessage: PropTypes.string,
  clearable: PropTypes.bool,
  TextFieldComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  utils: PropTypes.func.isRequired,
  InputAdornmentProps: PropTypes.object,
  adornmentPosition: PropTypes.oneOf(['start', 'end'])
};
DateTextField.defaultProps = {
  disabled: false,
  invalidLabel: 'Unknown',
  emptyLabel: '',
  value: new Date(),
  labelFunc: undefined,
  format: undefined,
  InputProps: undefined,
  keyboard: false,
  mask: undefined,
  keyboardIcon: 'event',
  invalidDateMessage: 'Invalid Date Format',
  clearable: false,
  onClear: undefined,
  disablePast: false,
  disableFuture: false,
  minDate: '1900-01-01',
  maxDate: '2100-01-01',
  minDateMessage: 'Date should not be before minimal date',
  maxDateMessage: 'Date should not be after maximal date',
  TextFieldComponent: TextField,
  InputAdornmentProps: {},
  adornmentPosition: 'end'
};
var styles = {
  input: {
    alignItems: 'flex-end'
  }
};

export default withStyles(styles)(withUtils()(DateTextField));