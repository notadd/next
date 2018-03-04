var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';
import classnames from 'classnames';

export var ClockPointer = function (_Component) {
  _inherits(ClockPointer, _Component);

  function ClockPointer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ClockPointer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ClockPointer.__proto__ || Object.getPrototypeOf(ClockPointer)).call.apply(_ref, [this].concat(args))), _this), _this.getAngleStyle = function () {
      var _this$props = _this.props,
          value = _this$props.value,
          isInner = _this$props.isInner,
          max = _this$props.max;


      var angle = 360 / max * value;

      return {
        height: isInner ? '26%' : '40%',
        transform: 'rotateZ(' + angle + 'deg)'
      };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ClockPointer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          hasSelected = _props.hasSelected;


      return React.createElement(
        'div',
        {
          className: classes.pointer,
          style: this.getAngleStyle()
        },
        React.createElement('div', { className: classnames(classes.thumb, _defineProperty({}, classes.noPoint, hasSelected)) })
      );
    }
  }]);

  return ClockPointer;
}(Component);

ClockPointer.propTypes = {
  classes: PropTypes.object.isRequired,
  value: PropTypes.number.isRequired,
  hasSelected: PropTypes.bool.isRequired,
  isInner: PropTypes.bool.isRequired,
  max: PropTypes.number.isRequired
};
var styles = function styles(theme) {
  return {
    pointer: {
      width: 2,
      backgroundColor: theme.palette.primary.main,
      position: 'absolute',
      left: 'calc(50% - 1px)',
      bottom: '50%',
      transformOrigin: 'center bottom 0px'
    },
    thumb: {
      width: 4,
      height: 4,
      backgroundColor: theme.palette.common.white,
      borderRadius: '100%',
      position: 'absolute',
      top: -21,
      left: -15,
      border: '14px solid ' + theme.palette.primary.main,
      boxSizing: 'content-box'
    },
    noPoint: {
      backgroundColor: theme.palette.primary.main
    }
  };
};

export default withStyles(styles, { name: 'MuiPickersClockPointer' })(ClockPointer);