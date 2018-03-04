var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

var DayWrapper = function (_PureComponent) {
  _inherits(DayWrapper, _PureComponent);

  function DayWrapper() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DayWrapper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DayWrapper.__proto__ || Object.getPrototypeOf(DayWrapper)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function () {
      _this.props.onSelect(_this.props.value);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DayWrapper, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          value = _props.value,
          dayInCurrentMonth = _props.dayInCurrentMonth,
          disabled = _props.disabled,
          onSelect = _props.onSelect,
          other = _objectWithoutProperties(_props, ['children', 'value', 'dayInCurrentMonth', 'disabled', 'onSelect']);

      return React.createElement(
        'div',
        _extends({
          onClick: dayInCurrentMonth && !disabled ? this.handleClick : undefined,
          onKeyPress: dayInCurrentMonth && !disabled ? this.handleClick : undefined,
          role: 'presentation'
        }, other),
        children
      );
    }
  }]);

  return DayWrapper;
}(PureComponent);

DayWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  dayInCurrentMonth: PropTypes.bool,
  disabled: PropTypes.bool,
  onSelect: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired
};
DayWrapper.defaultProps = {
  dayInCurrentMonth: true,
  disabled: false
};


export default DayWrapper;