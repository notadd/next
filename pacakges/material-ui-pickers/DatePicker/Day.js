var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import withStyles from 'material-ui/styles/withStyles';
import IconButton from 'material-ui/IconButton';

var Day = function (_PureComponent) {
  _inherits(Day, _PureComponent);

  function Day() {
    _classCallCheck(this, Day);

    return _possibleConstructorReturn(this, (Day.__proto__ || Object.getPrototypeOf(Day)).apply(this, arguments));
  }

  _createClass(Day, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          children = _props.children,
          classes = _props.classes,
          disabled = _props.disabled,
          hidden = _props.hidden,
          current = _props.current,
          selected = _props.selected,
          other = _objectWithoutProperties(_props, ['children', 'classes', 'disabled', 'hidden', 'current', 'selected']);

      var className = classnames(classes.day, (_classnames = {}, _defineProperty(_classnames, classes.hidden, hidden), _defineProperty(_classnames, classes.current, current), _defineProperty(_classnames, classes.selected, selected), _defineProperty(_classnames, classes.disabled, disabled), _classnames));

      return React.createElement(
        IconButton,
        _extends({
          className: className,
          tabIndex: hidden || disabled ? -1 : 0
        }, other),
        React.createElement(
          'span',
          null,
          ' ',
          children,
          ' '
        )
      );
    }
  }]);

  return Day;
}(PureComponent);

Day.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  current: PropTypes.bool,
  disabled: PropTypes.bool,
  hidden: PropTypes.bool,
  selected: PropTypes.bool
};
Day.defaultProps = {
  disabled: false,
  hidden: false,
  current: false,
  selected: false
};


var styles = function styles(theme) {
  return {
    day: {
      width: 36,
      height: 36,
      fontSize: theme.typography.caption.fontSize,
      margin: '0 2px',
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightMedium
    },
    hidden: {
      opacity: 0,
      pointerEvents: 'none'
    },
    current: {
      color: theme.palette.primary.main,
      fontWeight: 600
    },
    selected: {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.primary.main,
      fontWeight: theme.typography.fontWeightMedium
    },
    disabled: {
      pointerEvents: 'none',
      color: theme.palette.text.hint
    }
  };
};

export default withStyles(styles)(Day);