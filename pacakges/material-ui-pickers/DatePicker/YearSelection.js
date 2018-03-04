var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import withStyles from 'material-ui/styles/withStyles';
import DomainPropTypes from '../constants/prop-types';
import withUtils from '../_shared/WithUtils';
import Year from './Year';

export var YearSelection = function (_PureComponent) {
  _inherits(YearSelection, _PureComponent);

  function YearSelection() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, YearSelection);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = YearSelection.__proto__ || Object.getPrototypeOf(YearSelection)).call.apply(_ref, [this].concat(args))), _this), _this.componentDidMount = function () {
      _this.scrollToCurrentYear();
    }, _this.onYearSelect = function (year) {
      var _this$props = _this.props,
          date = _this$props.date,
          onChange = _this$props.onChange,
          utils = _this$props.utils;


      var newDate = utils.setYear(date, year);
      onChange(newDate);
    }, _this.getSelectedYearRef = function (ref) {
      _this.selectedYearRef = ref;
    }, _this.scrollToCurrentYear = function () {
      var animateYearScrolling = _this.props.animateYearScrolling;

      var currentYearElement = findDOMNode(_this.selectedYearRef);

      if (currentYearElement) {
        currentYearElement.scrollIntoView({
          behavior: animateYearScrolling ? 'smooth' : 'auto'
        });
      }
    }, _this.selectedYearRef = undefined, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(YearSelection, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          minDate = _props.minDate,
          maxDate = _props.maxDate,
          date = _props.date,
          classes = _props.classes,
          disablePast = _props.disablePast,
          disableFuture = _props.disableFuture,
          utils = _props.utils;

      var currentYear = utils.getYear(date);

      return React.createElement(
        'div',
        { className: classes.container },
        utils.getYearRange(minDate, maxDate).map(function (year) {
          var yearNumber = utils.getYear(year);
          var selected = yearNumber === currentYear;

          return React.createElement(
            Year,
            {
              selected: selected,
              disabled: disablePast && utils.isBeforeYear(year, utils.date()) || disableFuture && utils.isAfterYear(year, utils.date()),
              value: yearNumber,
              key: utils.getYearText(year),
              onSelect: _this2.onYearSelect,
              ref: selected ? _this2.getSelectedYearRef : undefined
            },
            utils.getYearText(year)
          );
        })
      );
    }
  }]);

  return YearSelection;
}(PureComponent);

YearSelection.propTypes = {
  date: PropTypes.shape({}).isRequired,
  minDate: DomainPropTypes.date.isRequired,
  maxDate: DomainPropTypes.date.isRequired,
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  disablePast: PropTypes.bool.isRequired,
  disableFuture: PropTypes.bool.isRequired,
  animateYearScrolling: PropTypes.bool,
  utils: PropTypes.func.isRequired
};
YearSelection.defaultProps = {
  animateYearScrolling: false
};
var styles = {
  container: {
    maxHeight: 300,
    overflowY: 'auto',
    justifyContent: 'center'
  }
};

export default withStyles(styles, { name: 'MuiPickersYearSelection' })(withUtils()(YearSelection));