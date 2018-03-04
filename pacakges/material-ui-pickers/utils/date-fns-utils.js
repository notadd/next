var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

import parse from 'date-fns/parse';
import addDays from 'date-fns/addDays';
import addMonths from 'date-fns/addMonths';
import addYears from 'date-fns/addYears';
import endOfDay from 'date-fns/endOfDay';
import endOfMonth from 'date-fns/endOfMonth';
import endOfWeek from 'date-fns/endOfWeek';
import endOfYear from 'date-fns/endOfYear';
import format from 'date-fns/format';
import isAfter from 'date-fns/isAfter';
import isBefore from 'date-fns/isBefore';
import isSameDay from 'date-fns/isSameDay';
import isValid from 'date-fns/isValid';
import setDay from 'date-fns/setDay';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';
import setYear from 'date-fns/setYear';
import startOfDay from 'date-fns/startOfDay';
import startOfMonth from 'date-fns/startOfMonth';
import startOfWeek from 'date-fns/startOfWeek';
import startOfYear from 'date-fns/startOfYear';
import getHours from 'date-fns/getHours';
import getYear from 'date-fns/getYear';
import isEqual from 'date-fns/isEqual';

var DateFnsUtils = function () {
  function DateFnsUtils() {
    _classCallCheck(this, DateFnsUtils);
  }

  _createClass(DateFnsUtils, null, [{
    key: 'isNull',
    value: function isNull(date) {
      return date == null;
    }
  }, {
    key: 'isAfterDay',
    value: function isAfterDay(date, value) {
      return isAfter(endOfDay(date), value);
    }
  }, {
    key: 'isBeforeDay',
    value: function isBeforeDay(date, value) {
      return isBefore(date, startOfDay(value));
    }
  }, {
    key: 'isBeforeYear',
    value: function isBeforeYear(date, value) {
      return isBefore(date, startOfYear(value));
    }
  }, {
    key: 'isAfterYear',
    value: function isAfterYear(date, value) {
      return isAfter(endOfYear(date), value);
    }
  }, {
    key: 'formatNumber',
    value: function formatNumber(num) {
      return num;
    }
  }, {
    key: 'getMinutes',
    value: function getMinutes(date) {
      return date.getMinutes();
    }
  }, {
    key: 'getMonth',
    value: function getMonth(date) {
      return date.getMonth();
    }
  }, {
    key: 'getMeridiemText',
    value: function getMeridiemText(ampm) {
      return ampm === 'am' ? 'AM' : 'PM';
    }
  }, {
    key: 'getNextMonth',
    value: function getNextMonth(date) {
      return addMonths(date, 1);
    }
  }, {
    key: 'getPreviousMonth',
    value: function getPreviousMonth(date) {
      return addMonths(date, -1);
    }
  }, {
    key: 'getWeekdays',
    value: function getWeekdays() {
      return [0, 1, 2, 3, 4, 5, 6].map(function (dayOfWeek) {
        return format(setDay(new Date(), dayOfWeek), 'dd');
      });
    }
  }, {
    key: 'getWeekArray',
    value: function getWeekArray(date) {
      var start = startOfWeek(startOfMonth(date));
      var end = endOfWeek(endOfMonth(date));

      var nestedWeeks = [];
      var count = 0;
      var current = start;
      while (isBefore(current, end)) {
        var weekNumber = Math.floor(count / 7);
        nestedWeeks[weekNumber] = nestedWeeks[weekNumber] || [];
        nestedWeeks[weekNumber].push(current);
        current = addDays(current, 1);
        count += 1;
      }

      return nestedWeeks;
    }
  }, {
    key: 'getYearRange',
    value: function getYearRange(start, end) {
      var startDate = new Date(start);
      var endDate = new Date(end);
      var years = [];
      var current = startDate;
      while (isBefore(current, endDate)) {
        years.push(current);
        current = addYears(current, 1);
      }
      return years;
    }

    // displaying methpds

  }, {
    key: 'getCalendarHeaderText',
    value: function getCalendarHeaderText(date) {
      return format(date, 'MMMM YYYY');
    }
  }, {
    key: 'getYearText',
    value: function getYearText(date) {
      return format(date, 'YYYY');
    }
  }, {
    key: 'getDatePickerHeaderText',
    value: function getDatePickerHeaderText(date) {
      return format(date, 'ddd, MMM D');
    }
  }, {
    key: 'getDateTimePickerHeaderText',
    value: function getDateTimePickerHeaderText(date) {
      return format(date, 'MMM D');
    }
  }, {
    key: 'getDayText',
    value: function getDayText(date) {
      return format(date, 'D');
    }
  }, {
    key: 'getHourText',
    value: function getHourText(date, ampm) {
      return format(date, ampm ? 'hh' : 'HH');
    }
  }, {
    key: 'getMinuteText',
    value: function getMinuteText(date) {
      return format(date, 'mm');
    }
  }]);

  return DateFnsUtils;
}();

DateFnsUtils.date = function (value) {
  return new Date(value);
};

DateFnsUtils.parse = function (value, formatString) {
  return parse(value, formatString, new Date());
};

DateFnsUtils.addDays = addDays;
DateFnsUtils.isValid = isValid;
DateFnsUtils.isEqual = isEqual;
DateFnsUtils.isAfter = isAfter;
DateFnsUtils.isBefore = isBefore;
DateFnsUtils.startOfDay = startOfDay;
DateFnsUtils.endOfDay = endOfDay;
DateFnsUtils.format = format;
DateFnsUtils.getHours = getHours;
DateFnsUtils.setHours = setHours;
DateFnsUtils.setMinutes = setMinutes;
DateFnsUtils.isSameDay = isSameDay;
DateFnsUtils.getStartOfMonth = startOfMonth;
DateFnsUtils.getYear = getYear;
DateFnsUtils.setYear = setYear;
export default DateFnsUtils;