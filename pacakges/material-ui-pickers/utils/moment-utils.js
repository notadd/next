var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

import moment from 'moment';

var MomentUtils = function () {
  function MomentUtils() {
    _classCallCheck(this, MomentUtils);
  }

  _createClass(MomentUtils, null, [{
    key: 'date',
    value: function date(value, formatString) {
      return moment(value, formatString);
    }
  }, {
    key: 'isValid',
    value: function isValid(date) {
      return date.isValid();
    }
  }, {
    key: 'isNull',
    value: function isNull(date) {
      return date.parsingFlags().nullInput;
    }
  }, {
    key: 'isAfter',
    value: function isAfter(date, value) {
      return date.isAfter(value);
    }
  }, {
    key: 'isBefore',
    value: function isBefore(date, value) {
      return date.isBefore(value);
    }
  }, {
    key: 'isAfterDay',
    value: function isAfterDay(date, value) {
      return date.isAfter(value, 'day');
    }
  }, {
    key: 'isBeforeDay',
    value: function isBeforeDay(date, value) {
      return date.isBefore(value, 'day');
    }
  }, {
    key: 'isBeforeYear',
    value: function isBeforeYear(date, value) {
      return date.isBefore(value, 'year');
    }
  }, {
    key: 'isAfterYear',
    value: function isAfterYear(date, value) {
      return date.isAfter(value, 'year');
    }
  }, {
    key: 'startOfDay',
    value: function startOfDay(date) {
      return date.startOf('day');
    }
  }, {
    key: 'endOfDay',
    value: function endOfDay(date) {
      return date.endOf('day');
    }
  }, {
    key: 'format',
    value: function format(date, formatString) {
      return date.format(formatString);
    }
  }, {
    key: 'formatNumber',
    value: function formatNumber(num) {
      return num;
    }
  }, {
    key: 'getHours',
    value: function getHours(date) {
      return date.get('hours');
    }
  }, {
    key: 'addDays',
    value: function addDays(date, count) {
      return count < 0 ? date.clone().subtract(Math.abs(count), 'days') : date.clone().add(count, 'days');
    }
  }, {
    key: 'setHours',
    value: function setHours(date, value) {
      return date.clone().hours(value);
    }
  }, {
    key: 'getMinutes',
    value: function getMinutes(date) {
      return date.get('minutes');
    }
  }, {
    key: 'setMinutes',
    value: function setMinutes(date, value) {
      return date.clone().minutes(value);
    }
  }, {
    key: 'getMonth',
    value: function getMonth(date) {
      return date.get('month');
    }
  }, {
    key: 'isSameDay',
    value: function isSameDay(date, comparing) {
      return date.isSame(comparing, 'day');
    }
  }, {
    key: 'getMeridiemText',
    value: function getMeridiemText(ampm) {
      return ampm === 'am' ? 'AM' : 'PM';
    }
  }, {
    key: 'getStartOfMonth',
    value: function getStartOfMonth(date) {
      return date.clone().startOf('month');
    }
  }, {
    key: 'getNextMonth',
    value: function getNextMonth(date) {
      return date.clone().add(1, 'month');
    }
  }, {
    key: 'getPreviousMonth',
    value: function getPreviousMonth(date) {
      return date.clone().subtract(1, 'month');
    }
  }, {
    key: 'getYear',
    value: function getYear(date) {
      return date.get('year');
    }
  }, {
    key: 'setYear',
    value: function setYear(date, year) {
      return date.clone().set('year', year);
    }
  }, {
    key: 'getWeekdays',
    value: function getWeekdays() {
      return [0, 1, 2, 3, 4, 5, 6].map(function (dayOfWeek) {
        return moment().weekday(dayOfWeek).format('dd')[0];
      });
    }
  }, {
    key: 'isEqual',
    value: function isEqual(value, comparing) {
      return moment(value).isSame(comparing);
    }
  }, {
    key: 'getWeekArray',
    value: function getWeekArray(date) {
      var start = date.clone().startOf('month').startOf('week');
      var end = date.clone().endOf('month').endOf('week');

      var nestedWeeks = [];
      var count = 0;
      var current = start;
      while (current.isBefore(end)) {
        var weekNumber = Math.floor(count / 7);
        nestedWeeks[weekNumber] = nestedWeeks[weekNumber] || [];
        nestedWeeks[weekNumber].push(current);
        current = current.clone().add(1, 'day');
        count += 1;
      }

      return nestedWeeks;
    }
  }, {
    key: 'getYearRange',
    value: function getYearRange(start, end) {
      var startDate = moment(start);
      var endDate = moment(end);
      var years = [];

      var current = startDate;
      while (current.isBefore(endDate)) {
        years.push(current);
        current = current.clone().add(1, 'year');
      }

      return years;
    }

    // displaying methods

  }, {
    key: 'getCalendarHeaderText',
    value: function getCalendarHeaderText(date) {
      return date.format('MMMM YYYY');
    }
  }, {
    key: 'getYearText',
    value: function getYearText(date) {
      return date.format('YYYY');
    }
  }, {
    key: 'getDatePickerHeaderText',
    value: function getDatePickerHeaderText(date) {
      return date.format('ddd, MMM D');
    }
  }, {
    key: 'getDateTimePickerHeaderText',
    value: function getDateTimePickerHeaderText(date) {
      return date.format('MMM D');
    }
  }, {
    key: 'getDayText',
    value: function getDayText(date) {
      return date.format('D');
    }
  }, {
    key: 'getHourText',
    value: function getHourText(date, ampm) {
      return date.format(ampm ? 'hh' : 'HH');
    }
  }, {
    key: 'getMinuteText',
    value: function getMinuteText(date) {
      return date.format('mm');
    }
  }]);

  return MomentUtils;
}();

MomentUtils.parse = moment;
export default MomentUtils;