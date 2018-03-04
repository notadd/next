import PropTypes from 'prop-types';

var date = PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)]);

export default {
  date: date
};