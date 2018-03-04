var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import withStyles from 'material-ui/styles/withStyles';
import Typography from 'material-ui/Typography';

var positions = {
  0: [0, 40],
  1: [55, 19.6],
  2: [94.4, 59.5],
  3: [109, 114],
  4: [94.4, 168.5],
  5: [54.5, 208.4],
  6: [0, 223],
  7: [-54.5, 208.4],
  8: [-94.4, 168.5],
  9: [-109, 114],
  10: [-94.4, 59.5],
  11: [-54.5, 19.6],
  12: [0, 5],
  13: [36.9, 49.9],
  14: [64, 77],
  15: [74, 114],
  16: [64, 151],
  17: [37, 178],
  18: [0, 188],
  19: [-37, 178],
  20: [-64, 151],
  21: [-74, 114],
  22: [-64, 77],
  23: [-37, 50]
};

export var ClockNumber = function (_Component) {
  _inherits(ClockNumber, _Component);

  function ClockNumber() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ClockNumber);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ClockNumber.__proto__ || Object.getPrototypeOf(ClockNumber)).call.apply(_ref, [this].concat(args))), _this), _this.getTransformStyle = function (index) {
      var position = positions[index];

      return {
        transform: 'translate(' + position[0] + 'px, ' + position[1] + 'px'
      };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ClockNumber, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          selected = _props.selected,
          label = _props.label,
          index = _props.index,
          classes = _props.classes,
          isInner = _props.isInner;


      var className = classnames(classes.clockNumber, _defineProperty({}, classes.selected, selected));

      return React.createElement(
        Typography,
        {
          variant: isInner ? 'body1' : 'subheading',
          component: 'span',
          className: className,
          style: this.getTransformStyle(index, isInner)
        },
        label
      );
    }
  }]);

  return ClockNumber;
}(Component);

ClockNumber.propTypes = {
  index: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
  isInner: PropTypes.bool
};
ClockNumber.defaultProps = {
  isInner: false
};
var styles = function styles(theme) {
  var size = theme.spacing.unit * 4;
  return {
    clockNumber: {
      width: size,
      height: size,
      position: 'absolute',
      left: 'calc(50% - ' + size / 2 + 'px)',
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50%',
      color: theme.palette.type === 'light' ? theme.palette.text.primary : theme.palette.text.hint
    },
    selected: {
      color: theme.palette.common.white
    }
  };
};

export default withStyles(styles, { name: 'MuiPickersClockNumber' })(ClockNumber);