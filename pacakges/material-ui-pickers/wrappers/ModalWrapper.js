var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import ModalDialog from '../_shared/ModalDialog';
import DateTextField from '../_shared/DateTextField';
import DomainPropTypes from '../constants/prop-types';

var ModalWrapper = function (_PureComponent) {
  _inherits(ModalWrapper, _PureComponent);

  function ModalWrapper() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ModalWrapper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ModalWrapper.__proto__ || Object.getPrototypeOf(ModalWrapper)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      open: false
    }, _this.open = function () {
      _this.setState({ open: true });
    }, _this.close = function () {
      _this.setState({ open: false });
    }, _this.handleAccept = function () {
      _this.close();
      if (_this.props.onAccept) {
        _this.props.onAccept();
      }
    }, _this.handleDismiss = function () {
      _this.close();
      if (_this.props.onDismiss) {
        _this.props.onDismiss();
      }
    }, _this.handleClear = function () {
      _this.close();
      if (_this.props.onClear) {
        _this.props.onClear();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ModalWrapper, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          value = _props.value,
          format = _props.format,
          children = _props.children,
          dialogContentClassName = _props.dialogContentClassName,
          onAccept = _props.onAccept,
          onDismiss = _props.onDismiss,
          invalidLabel = _props.invalidLabel,
          labelFunc = _props.labelFunc,
          okLabel = _props.okLabel,
          cancelLabel = _props.cancelLabel,
          clearLabel = _props.clearLabel,
          clearable = _props.clearable,
          other = _objectWithoutProperties(_props, ['value', 'format', 'children', 'dialogContentClassName', 'onAccept', 'onDismiss', 'invalidLabel', 'labelFunc', 'okLabel', 'cancelLabel', 'clearLabel', 'clearable']);

      return React.createElement(
        Fragment,
        null,
        React.createElement(DateTextField, _extends({
          value: value,
          format: format,
          onClick: this.open
          // onFocus={this.togglePicker} <- Currently not properly works with .blur() on TextField
          , invalidLabel: invalidLabel,
          labelFunc: labelFunc,
          clearable: clearable
        }, other)),
        React.createElement(
          ModalDialog,
          {
            open: this.state.open,
            onClear: this.handleClear,
            onAccept: this.handleAccept,
            onDismiss: this.handleDismiss,
            dialogContentClassName: dialogContentClassName,
            clearLabel: clearLabel,
            okLabel: okLabel,
            cancelLabel: cancelLabel,
            clearable: clearable
          },
          children
        )
      );
    }
  }]);

  return ModalWrapper;
}(PureComponent);

ModalWrapper.propTypes = {
  value: DomainPropTypes.date,
  children: PropTypes.node.isRequired,
  format: PropTypes.string,
  onAccept: PropTypes.func,
  onDismiss: PropTypes.func,
  onClear: PropTypes.func,
  dialogContentClassName: PropTypes.string,
  invalidLabel: PropTypes.string,
  labelFunc: PropTypes.func,
  okLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  clearLabel: PropTypes.string,
  clearable: PropTypes.bool
};
ModalWrapper.defaultProps = {
  dialogContentClassName: '',
  invalidLabel: undefined,
  value: new Date(),
  labelFunc: undefined,
  okLabel: undefined,
  cancelLabel: undefined,
  clearLabel: undefined,
  format: undefined,
  onAccept: undefined,
  onDismiss: undefined,
  onClear: undefined,
  clearable: false
};
export default ModalWrapper;