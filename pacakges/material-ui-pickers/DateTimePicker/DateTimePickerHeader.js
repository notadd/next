import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';
import PickerToolbar from '../_shared/PickerToolbar';
import ToolbarButton from '../_shared/ToolbarButton';
import withUtils from '../_shared/WithUtils';
import * as viewType from '../constants/date-picker-view';

export var DateTimePickerHeader = function DateTimePickerHeader(props) {
  var date = props.date,
      classes = props.classes,
      openView = props.openView,
      meridiemMode = props.meridiemMode,
      onOpenViewChange = props.onOpenViewChange,
      setMeridiemMode = props.setMeridiemMode,
      theme = props.theme,
      utils = props.utils,
      ampm = props.ampm;


  var changeOpenView = function changeOpenView(view) {
    return function () {
      return onOpenViewChange(view);
    };
  };

  var rtl = theme.direction === 'rtl';
  var hourMinuteClassName = rtl ? classes.hourMinuteLabelReverse : classes.hourMinuteLabel;

  return React.createElement(
    PickerToolbar,
    { className: classes.toolbar },
    React.createElement(
      'div',
      { className: classes.dateHeader },
      React.createElement(ToolbarButton, {
        variant: 'subheading',
        onClick: changeOpenView(viewType.YEAR),
        selected: openView === viewType.YEAR,
        label: utils.getYearText(date)
      }),
      React.createElement(ToolbarButton, {
        variant: 'display1',
        onClick: changeOpenView(viewType.DATE),
        selected: openView === viewType.DATE,
        label: utils.getDateTimePickerHeaderText(date)
      })
    ),
    React.createElement(
      'div',
      { className: classes.timeHeader },
      React.createElement(
        'div',
        { className: hourMinuteClassName },
        React.createElement(ToolbarButton, {
          variant: 'display2',
          onClick: changeOpenView(viewType.HOUR),
          selected: openView === viewType.HOUR,
          label: utils.getHourText(date, ampm)
        }),
        React.createElement(ToolbarButton, {
          variant: 'display2',
          label: ':',
          selected: false,
          className: classes.separator
        }),
        React.createElement(ToolbarButton, {
          variant: 'display2',
          onClick: changeOpenView(viewType.MINUTES),
          selected: openView === viewType.MINUTES,
          label: utils.getMinuteText(date)
        })
      ),
      ampm && React.createElement(
        'div',
        { className: classes.ampmSelection },
        React.createElement(ToolbarButton, {
          className: classes.ampmLabel,
          selected: meridiemMode === 'am',
          type: 'subheading',
          label: utils.getMeridiemText('am'),
          onClick: setMeridiemMode('am')
        }),
        React.createElement(ToolbarButton, {
          className: classes.ampmLabel,
          selected: meridiemMode === 'pm',
          type: 'subheading',
          label: utils.getMeridiemText('pm'),
          onClick: setMeridiemMode('pm')
        })
      )
    )
  );
};

DateTimePickerHeader.propTypes = {
  date: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  meridiemMode: PropTypes.string.isRequired,
  openView: PropTypes.string.isRequired,
  onOpenViewChange: PropTypes.func.isRequired,
  setMeridiemMode: PropTypes.func.isRequired,
  utils: PropTypes.func.isRequired,
  ampm: PropTypes.bool
};

DateTimePickerHeader.defaultProps = {
  ampm: true
};

var styles = function styles() {
  return {
    toolbar: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 16,
      paddingRight: 16,
      justifyContent: 'space-around'
    },
    separator: {
      margin: '0 4px 0 2px',
      cursor: 'default'
    },
    ampmSelection: {
      marginLeft: 10,
      marginRight: -10
    },
    ampmLabel: {
      fontSize: 18
    },
    hourMinuteLabel: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'flex-end'
    },
    hourMinuteLabelReverse: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      flexDirection: 'row-reverse'
    },
    dateHeader: {
      height: 65
    },
    timeHeader: {
      height: 65,
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'flex-end'
    }
  };
};

export default withStyles(styles, { withTheme: true })(withUtils()(DateTimePickerHeader));