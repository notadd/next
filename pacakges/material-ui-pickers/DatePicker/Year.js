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
import Typography from 'material-ui/Typography';

export var Year = function (_PureComponent) {
  _inherits(Year, _PureComponent);

  function Year() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Year);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Year.__proto__ || Object.getPrototypeOf(Year)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function () {
      _this.props.onSelect(_this.props.value);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Year, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          classes = _props.classes,
          selected = _props.selected,
          disabled = _props.disabled,
          value = _props.value,
          children = _props.children,
          other = _objectWithoutProperties(_props, ['classes', 'selected', 'disabled', 'value', 'children']);

      return React.createElement(
        Typography,
        _extends({
          role: 'button',
          component: 'div',
          className: classnames(classes.root, (_classnames = {}, _defineProperty(_classnames, classes.selected, selected), _defineProperty(_classnames, classes.disabled, disabled), _classnames)),
          tabIndex: disabled ? -1 : 0,
          onClick: this.handleClick,
          onKeyPress: this.handleClick,
          color: selected ? 'primary' : 'default',
          variant: selected ? 'headline' : 'subheading'
        }, other),
        children
      );
    }
  }]);

  return Year;
}(PureComponent);

Year.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.bool,
  value: PropTypes.any.isRequired
};
Year.defaultProps = {
  selected: false,
  disabled: false
};
var styles = function styles(theme) {
  return {
    root: {
      height: theme.spacing.unit * 5,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      outline: 'none',
      '&:focus': {
        color: theme.palette.primary.main,
        fontWeight: theme.typography.fontWeightMedium
      }
    },
    selected: {
      margin: '10px 0',
      fontWeight: theme.typography.fontWeightMedium
    },
    disabled: {
      pointerEvents: 'none',
      color: theme.palette.text.hint
    }
  };
};

export default withStyles(styles)(Year);