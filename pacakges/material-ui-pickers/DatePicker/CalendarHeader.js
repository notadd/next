import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import withUtils from '../_shared/WithUtils';

export var CalendarHeader = function CalendarHeader(props) {
  var classes = props.classes,
      theme = props.theme,
      currentMonth = props.currentMonth,
      onMonthChange = props.onMonthChange,
      leftArrowIcon = props.leftArrowIcon,
      rightArrowIcon = props.rightArrowIcon,
      utils = props.utils;


  var rtl = theme.direction === 'rtl';

  var selectNextMonth = function selectNextMonth() {
    return onMonthChange(utils.getNextMonth(currentMonth));
  };
  var selectPreviousMonth = function selectPreviousMonth() {
    return onMonthChange(utils.getPreviousMonth(currentMonth));
  };

  return React.createElement(
    'div',
    null,
    React.createElement(
      'div',
      { className: classes.switchHeader },
      React.createElement(
        IconButton,
        { onClick: selectPreviousMonth },
        React.createElement(
          Icon,
          null,
          rtl ? rightArrowIcon : leftArrowIcon
        )
      ),
      React.createElement(
        Typography,
        { variant: 'body1' },
        utils.getCalendarHeaderText(currentMonth)
      ),
      React.createElement(
        IconButton,
        { onClick: selectNextMonth },
        React.createElement(
          Icon,
          null,
          rtl ? leftArrowIcon : rightArrowIcon
        )
      )
    ),
    React.createElement(
      'div',
      { className: classes.daysHeader },
      utils.getWeekdays().map(function (day, index) {
        return React.createElement(
          Typography
          // eslint-disable-next-line react/no-array-index-key
          ,
          { key: index,
            variant: 'caption',
            className: classes.dayLabel
          },
          day
        );
      })
    )
  );
};

CalendarHeader.propTypes = {
  currentMonth: PropTypes.object.isRequired,
  onMonthChange: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  leftArrowIcon: PropTypes.node,
  rightArrowIcon: PropTypes.node,
  utils: PropTypes.func.isRequired
};

CalendarHeader.defaultProps = {
  leftArrowIcon: 'keyboard_arrow_left',
  rightArrowIcon: 'keyboard_arrow_right'
};

var styles = function styles(theme) {
  return {
    switchHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: theme.spacing.unit
    },
    daysHeader: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    dayLabel: {
      width: 36,
      margin: '0 2px',
      textAlign: 'center',
      color: theme.palette.text.hint
    }
  };
};

export default withStyles(styles, { withTheme: true, name: 'MuiPickersCalendarHeader' })(withUtils()(CalendarHeader));