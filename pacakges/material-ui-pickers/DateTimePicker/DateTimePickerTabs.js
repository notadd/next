import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';
import withTheme from 'material-ui/styles/withTheme';
import Paper from 'material-ui/Paper';
import Tabs from 'material-ui/Tabs';
import Tab from 'material-ui/Tabs/Tab';
import Icon from 'material-ui/Icon';
import * as viewType from '../constants/date-picker-view';

var viewToTabIndex = function viewToTabIndex(openView) {
  if (openView === viewType.DATE || openView === viewType.YEAR) {
    return 'date';
  }

  return 'time';
};

var tabIndexToView = function tabIndexToView(tab) {
  if (tab === 'date') {
    return viewType.DATE;
  }

  return viewType.HOUR;
};

export var DateTimePickerTabs = function DateTimePickerTabs(props) {
  var view = props.view,
      onChange = props.onChange,
      classes = props.classes,
      theme = props.theme,
      dateRangeIcon = props.dateRangeIcon,
      timeIcon = props.timeIcon;


  var indicatorColor = theme.palette.type === 'light' ? 'secondary' : 'primary';
  var handleChange = function handleChange(e, value) {
    if (value !== viewToTabIndex(view)) {
      onChange(tabIndexToView(value));
    }
  };

  return React.createElement(
    Paper,
    null,
    React.createElement(
      Tabs,
      {
        fullWidth: true,
        value: viewToTabIndex(view),
        onChange: handleChange,
        className: classes.tabs,
        indicatorColor: indicatorColor
      },
      React.createElement(Tab, { value: 'date', icon: React.createElement(
          Icon,
          null,
          dateRangeIcon
        ) }),
      React.createElement(Tab, { value: 'time', icon: React.createElement(
          Icon,
          null,
          timeIcon
        ) })
    )
  );
};

DateTimePickerTabs.propTypes = {
  view: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  dateRangeIcon: PropTypes.node,
  timeIcon: PropTypes.node
};

DateTimePickerTabs.defaultProps = {
  dateRangeIcon: 'date_range',
  timeIcon: 'access_time'
};

var styles = function styles(theme) {
  return {
    tabs: {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.type === 'light' ? theme.palette.primary.main : theme.palette.background.default
    }
  };
};

export default withTheme()(withStyles(styles, { name: 'MuiPickerDTTabs' })(DateTimePickerTabs));