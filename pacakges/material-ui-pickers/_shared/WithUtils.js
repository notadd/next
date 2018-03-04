var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import PropTypes from 'prop-types';

var withUtils = function withUtils() {
  return function (Component) {
    var WithUtils = function WithUtils(props, context) {
      if (!context.muiPickersDateUtils) {
        // eslint-disable-next-line no-console
        console.error('Utils should be provided');
      }

      return React.createElement(Component, _extends({ utils: context.muiPickersDateUtils }, props));
    };

    WithUtils.contextTypes = {
      muiPickersDateUtils: PropTypes.func
    };

    WithUtils.displayName = 'withUtils' + (Component.displayName || Component.name);

    return WithUtils;
  };
};

export default withUtils;