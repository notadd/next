function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import withStyles from 'material-ui/styles/withStyles';

export var DateTimePickerView = function DateTimePickerView(props) {
  var view = props.view,
      selected = props.selected,
      children = props.children,
      classes = props.classes;


  if (view !== selected) {
    return null;
  }

  return React.createElement(
    'div',
    { className: classnames(_defineProperty({}, classes.hidden, view !== selected)) },
    children
  );
};

DateTimePickerView.propTypes = {
  view: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired
};

var styles = {};

export default withStyles(styles, { name: 'MuiPickerDTPickerView ' })(DateTimePickerView);