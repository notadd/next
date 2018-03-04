import React, { Component, Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import withStyles from 'material-ui/styles/withStyles';
import Button from 'material-ui/Button';
import Dialog from 'material-ui/Dialog/Dialog';
import DialogActions from 'material-ui/Dialog/DialogActions';
import DialogContent from 'material-ui/Dialog/DialogContent';
import Icon from 'material-ui/Icon';
import InputAdornment from 'material-ui/Input/InputAdornment';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import { findDOMNode } from 'react-dom';
import Toolbar from 'material-ui/Toolbar';
import withTheme from 'material-ui/styles/withTheme';
import Paper from 'material-ui/Paper';
import Tabs from 'material-ui/Tabs';
import Tab from 'material-ui/Tabs/Tab';
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
import moment from 'moment';

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var dialogWidth = 310;
var styles = {
  dialogRoot: {
    minWidth: dialogWidth
  },
  dialog: {
    width: dialogWidth,

    '&:first-child': {
      padding: 0
    }
  },
  dialogActions: {
    '&:first-child': {
      marginRight: 'auto'
    }
  }
};

var ModalDialog = function ModalDialog(_ref) {
  var children = _ref.children,
      classes = _ref.classes,
      onAccept = _ref.onAccept,
      onDismiss = _ref.onDismiss,
      onClear = _ref.onClear,
      okLabel = _ref.okLabel,
      cancelLabel = _ref.cancelLabel,
      clearLabel = _ref.clearLabel,
      dialogContentClassName = _ref.dialogContentClassName,
      clearable = _ref.clearable,
      other = objectWithoutProperties(_ref, ['children', 'classes', 'onAccept', 'onDismiss', 'onClear', 'okLabel', 'cancelLabel', 'clearLabel', 'dialogContentClassName', 'clearable']);
  return React.createElement(
    Dialog,
    _extends({ onClose: onDismiss, classes: { paper: classes.dialogRoot } }, other),
    React.createElement(
      DialogContent,
      { className: classnames(classes.dialog, dialogContentClassName) },
      children
    ),
    React.createElement(
      DialogActions,
      {
        classes: {
          action: clearable && classes.dialogActions
        }
      },
      clearable && React.createElement(
        Button,
        {
          color: 'primary',
          onClick: onClear,
          'aria-label': clearLabel
        },
        clearLabel
      ),
      React.createElement(
        Button,
        {
          color: 'primary',
          onClick: onDismiss,
          'aria-label': cancelLabel
        },
        cancelLabel
      ),
      React.createElement(
        Button,
        {
          color: 'primary',
          onClick: onAccept,
          'aria-label': okLabel
        },
        okLabel
      )
    )
  );
};

ModalDialog.propTypes = {
  children: PropTypes.node.isRequired,
  onAccept: PropTypes.func.isRequired,
  onDismiss: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  dialogContentClassName: PropTypes.string,
  okLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  clearLabel: PropTypes.string,
  clearable: PropTypes.bool.isRequired
};

ModalDialog.defaultProps = {
  dialogContentClassName: '',
  okLabel: 'OK',
  cancelLabel: 'Cancel',
  clearLabel: 'Clear'
};

var ModalDialog$1 = withStyles(styles, { name: 'MuiPickersModal' })(ModalDialog);

var date = PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)]);

var DomainPropTypes = {
  date: date
};

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};



function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var reactTextMask = createCommonjsModule(function (module, exports) {
!function(e,t){module.exports=t(React);}(commonjsGlobal,function(e){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t), o.loaded=!0, o.exports}var r={};return t.m=e, t.c=r, t.p="", t(0)}([function(e,t,r){function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}), t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t);}Object.defineProperty(t,"__esModule",{value:!0}), t.conformToMask=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);}return e},l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1, n.configurable=!0, "value"in n&&(n.writable=!0), Object.defineProperty(e,n.key,n);}}return function(t,r,n){return r&&e(t.prototype,r), n&&e(t,n), t}}(),s=r(2);Object.defineProperty(t,"conformToMask",{enumerable:!0,get:function(){return n(s).default}});var f=r(11),c=n(f),d=r(9),p=n(d),h=r(5),v=n(h),y=function(e){function t(){var e;o(this,t);for(var r=arguments.length,n=Array(r),a=0;a<r;a++)n[a]=arguments[a];var u=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(n)));return u.onChange=u.onChange.bind(u), u}return a(t,e), l(t,[{key:"initTextMask",value:function(){var e=this.props,t=this.props.value;this.textMaskInputElement=(0, v.default)(u({inputElement:this.inputElement},e)), this.textMaskInputElement.update(t);}},{key:"componentDidMount",value:function(){this.initTextMask();}},{key:"componentDidUpdate",value:function(){this.initTextMask();}},{key:"render",value:function(){var e=this,t=u({},this.props);return delete t.mask, delete t.guide, delete t.pipe, delete t.placeholderChar, delete t.keepCharPositions, delete t.value, delete t.onChange, delete t.showMask, c.default.createElement("input",u({},t,{onChange:this.onChange,defaultValue:this.props.value,ref:function(t){return e.inputElement=t}}))}},{key:"onChange",value:function(e){this.textMaskInputElement.update(), "function"==typeof this.props.onChange&&this.props.onChange(e);}}]), t}(c.default.Component);t.default=y, y.propTypes={mask:p.default.oneOfType([p.default.array,p.default.func,p.default.bool,p.default.shape({mask:p.default.oneOfType([p.default.array,p.default.func]),pipe:p.default.func})]).isRequired,guide:p.default.bool,value:p.default.oneOfType([p.default.string,p.default.number]),pipe:p.default.func,placeholderChar:p.default.string,keepCharPositions:p.default.bool,showMask:p.default.bool};},function(e,t){Object.defineProperty(t,"__esModule",{value:!0}), t.placeholderChar="_";},function(e,t,r){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.guide,u=void 0===n||n,l=r.previousConformedValue,s=void 0===l?a:l,f=r.placeholderChar,c=void 0===f?i.placeholderChar:f,d=r.placeholder,p=void 0===d?(0, o.convertMaskToPlaceholder)(t,c):d,h=r.currentCaretPosition,v=r.keepCharPositions,y=u===!1&&void 0!==s,m=e.length,g=s.length,b=p.length,C=t.length,k=m-g,O=k>0,P=h+(O?-k:0),x=P+Math.abs(k);if(v===!0&&!O){for(var T=a,_=P;_<x;_++)p[_]===c&&(T+=c);e=e.slice(0,P)+T+e.slice(P,m);}for(var w=e.split(a).map(function(e,t){return{char:e,isNew:t>=P&&t<x}}),M=m-1;M>=0;M--){var j=w[M].char;if(j!==c){var S=M>=P&&g===C;j===p[S?M-k:M]&&w.splice(M,1);}}var E=a,R=!1;e:for(var V=0;V<b;V++){var N=p[V];if(N===c){if(w.length>0)for(;w.length>0;){var I=w.shift(),A=I.char,q=I.isNew;if(A===c&&y!==!0){E+=c;continue e}if(t[V].test(A)){if(v===!0&&q!==!1&&s!==a&&u!==!1&&O){for(var D=w.length,F=null,L=0;L<D;L++){var J=w[L];if(J.char!==c&&J.isNew===!1)break;if(J.char===c){F=L;break}}null!==F?(E+=A, w.splice(F,1)):V--;}else E+=A;continue e}R=!0;}y===!1&&(E+=p.substr(V,b));break}E+=N;}if(y&&O===!1){for(var U=null,W=0;W<E.length;W++)p[W]===c&&(U=W);E=null!==U?E.substr(0,U+1):a;}return{conformedValue:E,meta:{someCharsRejected:R}}}Object.defineProperty(t,"__esModule",{value:!0}), t.default=n;var o=r(3),i=r(1),a="";},function(e,t,r){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u.placeholderChar;if(e.indexOf(t)!==-1)throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n"+("The placeholder character that was received is: "+JSON.stringify(t)+"\n\n")+("The mask that was received is: "+JSON.stringify(e)));return e.map(function(e){return e instanceof RegExp?t:e}).join("")}function o(e){return"string"==typeof e||e instanceof String}function i(e){return"number"==typeof e&&void 0===e.length&&!isNaN(e)}function a(e){for(var t=[],r=void 0;r=e.indexOf(s), r!==-1;)t.push(r), e.splice(r,1);return{maskWithoutCaretTraps:e,indexes:t}}Object.defineProperty(t,"__esModule",{value:!0}), t.convertMaskToPlaceholder=n, t.isString=o, t.isNumber=i, t.processCaretTraps=a;var u=r(1),l=[],s="[]";},function(e,t){function r(e){var t=e.previousConformedValue,r=void 0===t?o:t,i=e.previousPlaceholder,a=void 0===i?o:i,u=e.currentCaretPosition,l=void 0===u?0:u,s=e.conformedValue,f=e.rawValue,c=e.placeholderChar,d=e.placeholder,p=e.indexesOfPipedChars,h=void 0===p?n:p,v=e.caretTrapIndexes,y=void 0===v?n:v;if(0===l)return 0;var m=f.length,g=r.length,b=d.length,C=s.length,k=m-g,O=k>0,P=0===g,x=k>1&&!O&&!P;if(x)return l;var T=O&&(r===s||s===d),_=0,w=void 0,M=void 0;if(T)_=l-k;else{var j=s.toLowerCase(),S=f.toLowerCase(),E=S.substr(0,l).split(o),R=E.filter(function(e){return j.indexOf(e)!==-1});M=R[R.length-1];var V=a.substr(0,R.length).split(o).filter(function(e){return e!==c}).length,N=d.substr(0,R.length).split(o).filter(function(e){return e!==c}).length,I=N!==V,A=void 0!==a[R.length-1]&&void 0!==d[R.length-2]&&a[R.length-1]!==c&&a[R.length-1]!==d[R.length-1]&&a[R.length-1]===d[R.length-2];!O&&(I||A)&&V>0&&d.indexOf(M)>-1&&void 0!==f[l]&&(w=!0, M=f[l]);for(var q=h.map(function(e){return j[e]}),D=q.filter(function(e){return e===M}).length,F=R.filter(function(e){return e===M}).length,L=d.substr(0,d.indexOf(c)).split(o).filter(function(e,t){return e===M&&f[t]!==e}).length,J=L+F+D+(w?1:0),U=0,W=0;W<C;W++){var B=j[W];if(_=W+1, B===M&&U++, U>=J)break}}if(O){for(var H=_,Y=_;Y<=b;Y++)if(d[Y]===c&&(H=Y), d[Y]===c||y.indexOf(Y)!==-1||Y===b)return H}else if(w){for(var z=_-1;z>=0;z--)if(s[z]===M||y.indexOf(z)!==-1||0===z)return z}else for(var G=_;G>=0;G--)if(d[G-1]===c||y.indexOf(G)!==-1||0===G)return G}Object.defineProperty(t,"__esModule",{value:!0}), t.default=r;var n=[],o="";},function(e,t,r){function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var t={previousConformedValue:void 0,previousPlaceholder:void 0};return{state:t,update:function(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,o=n.inputElement,s=n.mask,c=n.guide,m=n.pipe,b=n.placeholderChar,C=void 0===b?h.placeholderChar:b,k=n.keepCharPositions,O=void 0!==k&&k,P=n.showMask,x=void 0!==P&&P;if("undefined"==typeof r&&(r=o.value), r!==t.previousConformedValue){("undefined"==typeof s?"undefined":l(s))===g&&void 0!==s.pipe&&void 0!==s.mask&&(m=s.pipe, s=s.mask);var T=void 0,_=void 0;if(s instanceof Array&&(T=(0, p.convertMaskToPlaceholder)(s,C)), s!==!1){var w=a(r),M=o.selectionEnd,j=t.previousConformedValue,S=t.previousPlaceholder,E=void 0;if(("undefined"==typeof s?"undefined":l(s))===v){if(_=s(w,{currentCaretPosition:M,previousConformedValue:j,placeholderChar:C}), _===!1)return;var R=(0, p.processCaretTraps)(_),V=R.maskWithoutCaretTraps,N=R.indexes;_=V, E=N, T=(0, p.convertMaskToPlaceholder)(_,C);}else _=s;var I={previousConformedValue:j,guide:c,placeholderChar:C,pipe:m,placeholder:T,currentCaretPosition:M,keepCharPositions:O},A=(0, d.default)(w,_,I),q=A.conformedValue,D=("undefined"==typeof m?"undefined":l(m))===v,F={};D&&(F=m(q,u({rawValue:w},I)), F===!1?F={value:j,rejected:!0}:(0, p.isString)(F)&&(F={value:F}));var L=D?F.value:q,J=(0, f.default)({previousConformedValue:j,previousPlaceholder:S,conformedValue:L,placeholder:T,rawValue:w,currentCaretPosition:M,placeholderChar:C,indexesOfPipedChars:F.indexesOfPipedChars,caretTrapIndexes:E}),U=L===T&&0===J,W=x?T:y,B=U?W:L;t.previousConformedValue=B, t.previousPlaceholder=T, o.value!==B&&(o.value=B, i(o,J));}}}}}function i(e,t){document.activeElement===e&&(b?C(function(){return e.setSelectionRange(t,t,m)},0):e.setSelectionRange(t,t,m));}function a(e){if((0, p.isString)(e))return e;if((0, p.isNumber)(e))return String(e);if(void 0===e||null===e)return y;throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(e))}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);}return e},l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=o;var s=r(4),f=n(s),c=r(2),d=n(c),p=r(3),h=r(1),v="function",y="",m="none",g="object",b="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),C="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout;},function(e,t){function r(e){return function(){return e}}var n=function(){};n.thatReturns=r, n.thatReturnsFalse=r(!1), n.thatReturnsTrue=r(!0), n.thatReturnsNull=r(null), n.thatReturnsThis=function(){return this}, n.thatReturnsArgument=function(e){return e}, e.exports=n;},function(e,t,r){function n(e,t,r,n,i,a,u,l){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var f=[r,n,i,a,u,l],c=0;s=new Error(t.replace(/%s/g,function(){return f[c++]})), s.name="Invariant Violation";}throw s.framesToPop=1, s}}e.exports=n;},function(e,t,r){var n=r(6),o=r(7),i=r(10);e.exports=function(){function e(e,t,r,n,a,u){u!==i&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t};return r.checkPropTypes=n, r.PropTypes=r, r};},function(e,t,r){e.exports=r(8)();},function(e,t){var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";e.exports=r;},function(t,r){t.exports=e;}])});
});

var MaskedInput$1 = unwrapExports(reactTextMask);
var reactTextMask_1 = reactTextMask.reactTextMask;

var Input = function (_PureComponent) {
  inherits(Input, _PureComponent);

  function Input() {
    classCallCheck(this, Input);
    return possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));
  }

  createClass(Input, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          inputRef = _props.inputRef,
          props = objectWithoutProperties(_props, ['inputRef']);

      return this.props.mask ? React.createElement(MaskedInput$1, _extends({}, props, { ref: inputRef })) : React.createElement('input', _extends({}, props, { ref: inputRef }));
    }
  }]);
  return Input;
}(PureComponent);

Input.propTypes = {
  mask: PropTypes.any,
  inputRef: PropTypes.func.isRequired
};
Input.defaultProps = {
  mask: undefined
};

var withUtils = function withUtils() {
  return function (Component$$1) {
    var WithUtils = function WithUtils(props, context) {
      if (!context.muiPickersDateUtils) {
        // eslint-disable-next-line no-console
        console.error('Utils should be provided');
      }

      return React.createElement(Component$$1, _extends({ utils: context.muiPickersDateUtils }, props));
    };

    WithUtils.contextTypes = {
      muiPickersDateUtils: PropTypes.func
    };

    WithUtils.displayName = 'withUtils' + (Component$$1.displayName || Component$$1.name);

    return WithUtils;
  };
};

/* eslint-disable react/sort-comp */
var DateTextField = function (_PureComponent) {
  inherits(DateTextField, _PureComponent);

  function DateTextField() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, DateTextField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = DateTextField.__proto__ || Object.getPrototypeOf(DateTextField)).call.apply(_ref, [this].concat(args))), _this), _this.getDisplayDate = function (props) {
      var utils = props.utils,
          value = props.value,
          format$$1 = props.format,
          invalidLabel = props.invalidLabel,
          emptyLabel = props.emptyLabel,
          labelFunc = props.labelFunc;


      var isEmpty = value === null;
      var date = utils.date(value);

      if (labelFunc) {
        return labelFunc(isEmpty ? null : date, invalidLabel);
      }

      if (isEmpty) {
        return emptyLabel;
      }

      return utils.isValid(date) ? utils.format(date, format$$1) : invalidLabel;
    }, _this.getError = function (value) {
      var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.props;
      var utils = props.utils,
          maxDate = props.maxDate,
          minDate = props.minDate,
          disablePast = props.disablePast,
          disableFuture = props.disableFuture,
          maxDateMessage = props.maxDateMessage,
          minDateMessage = props.minDateMessage,
          invalidDateMessage = props.invalidDateMessage;


      if (!utils.isValid(value)) {
        // if null - do not show error
        if (utils.isNull(value)) {
          return '';
        }
        return invalidDateMessage;
      }

      if (maxDate && utils.isAfter(value, maxDate) || disableFuture && utils.isAfter(value, utils.endOfDay(utils.date()))) {
        return maxDateMessage;
      }

      if (minDate && utils.isBefore(value, minDate) || disablePast && utils.isBefore(value, utils.startOfDay(utils.date()))) {
        return minDateMessage;
      }

      return '';
    }, _this.updateState = function () {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props;
      return {
        value: props.value,
        displayValue: _this.getDisplayDate(props),
        error: _this.getError(props.utils.date(props.value))
      };
    }, _this.state = _this.updateState(), _this.handleBlur = function (e) {
      e.preventDefault();
      e.stopPropagation();
    }, _this.handleChange = function (e) {
      var _this$props = _this.props,
          clearable = _this$props.clearable,
          onClear = _this$props.onClear,
          utils = _this$props.utils,
          format$$1 = _this$props.format;


      if (clearable && e.target.value === '') {
        if (_this.props.value === null) {
          _this.setState(_this.updateState());
        } else if (onClear) {
          onClear();
        }

        return;
      }

      var oldValue = utils.date(_this.state.value);
      var newValue = utils.parse(e.target.value, format$$1);

      var error = _this.getError(newValue);

      _this.setState({
        displayValue: e.target.value,
        value: error ? newValue : oldValue,
        error: error
      }, function () {
        if (!error && utils.format(newValue, 'LLLL') !== utils.format(oldValue, 'LLLL')) {
          _this.props.onChange(newValue);
        }
      });
    }, _this.handleFocus = function (e) {
      e.stopPropagation();
      e.preventDefault();
      var keyboard = _this.props.keyboard;


      if (keyboard) {
        return;
      }

      e.target.blur();
      _this.openPicker(e);
    }, _this.handleKeyPress = function (e) {
      if (e.key === 'Enter') {
        _this.openPicker(e);
      }
    }, _this.openPicker = function (e) {
      var _this$props2 = _this.props,
          disabled = _this$props2.disabled,
          onClick = _this$props2.onClick;


      if (!disabled) {
        onClick(e);
      }
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(DateTextField, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.value !== this.state.value || nextProps.format !== this.props.format || nextProps.maxDate !== this.props.maxDate || nextProps.minDate !== this.props.minDate) {
        this.setState(this.updateState(nextProps));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          utils = _props.utils,
          format$$1 = _props.format,
          classes = _props.classes,
          disabled = _props.disabled,
          onClick = _props.onClick,
          invalidLabel = _props.invalidLabel,
          invalidDateMessage = _props.invalidDateMessage,
          clearable = _props.clearable,
          onClear = _props.onClear,
          emptyLabel = _props.emptyLabel,
          labelFunc = _props.labelFunc,
          keyboard = _props.keyboard,
          value = _props.value,
          mask = _props.mask,
          InputProps = _props.InputProps,
          keyboardIcon = _props.keyboardIcon,
          maxDate = _props.maxDate,
          minDate = _props.minDate,
          disablePast = _props.disablePast,
          disableFuture = _props.disableFuture,
          maxDateMessage = _props.maxDateMessage,
          minDateMessage = _props.minDateMessage,
          TextFieldComponent = _props.TextFieldComponent,
          InputAdornmentProps = _props.InputAdornmentProps,
          adornmentPosition = _props.adornmentPosition,
          other = objectWithoutProperties(_props, ['utils', 'format', 'classes', 'disabled', 'onClick', 'invalidLabel', 'invalidDateMessage', 'clearable', 'onClear', 'emptyLabel', 'labelFunc', 'keyboard', 'value', 'mask', 'InputProps', 'keyboardIcon', 'maxDate', 'minDate', 'disablePast', 'disableFuture', 'maxDateMessage', 'minDateMessage', 'TextFieldComponent', 'InputAdornmentProps', 'adornmentPosition']);
      var _state = this.state,
          displayValue = _state.displayValue,
          error = _state.error;

      var localInputProps = {
        inputComponent: Input,
        inputProps: {
          mask: !keyboard ? null : mask,
          readOnly: !keyboard
        },
        className: classes.input
      };

      if (keyboard) {
        localInputProps[adornmentPosition + 'Adornment'] = React.createElement(
          InputAdornment,
          _extends({ position: adornmentPosition }, InputAdornmentProps),
          React.createElement(
            IconButton,
            { onClick: this.openPicker },
            ' ',
            React.createElement(
              Icon,
              null,
              ' ',
              keyboardIcon,
              ' '
            ),
            ' '
          )
        );
      }

      return React.createElement(TextFieldComponent, _extends({
        onClick: this.handleFocus,
        error: !!error,
        helperText: error,
        onKeyPress: this.handleKeyPress,
        onBlur: this.handleBlur,
        disabled: disabled,
        value: displayValue
      }, other, {
        onChange: this.handleChange,
        InputProps: _extends({}, localInputProps, InputProps)
      }));
    }
  }]);
  return DateTextField;
}(PureComponent);

DateTextField.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  value: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)]),
  mask: PropTypes.any,
  minDate: DomainPropTypes.date,
  minDateMessage: PropTypes.string,
  maxDate: DomainPropTypes.date,
  maxDateMessage: PropTypes.string,
  disablePast: PropTypes.bool,
  disableFuture: PropTypes.bool,
  disabled: PropTypes.bool,
  format: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onClear: PropTypes.func,
  onClick: PropTypes.func.isRequired,
  invalidLabel: PropTypes.string,
  emptyLabel: PropTypes.string,
  labelFunc: PropTypes.func,
  keyboard: PropTypes.bool,
  InputProps: PropTypes.shape(),
  keyboardIcon: PropTypes.node,
  invalidDateMessage: PropTypes.string,
  clearable: PropTypes.bool,
  TextFieldComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  utils: PropTypes.func.isRequired,
  InputAdornmentProps: PropTypes.object,
  adornmentPosition: PropTypes.oneOf(['start', 'end'])
};
DateTextField.defaultProps = {
  disabled: false,
  invalidLabel: 'Unknown',
  emptyLabel: '',
  value: new Date(),
  labelFunc: undefined,
  format: undefined,
  InputProps: undefined,
  keyboard: false,
  mask: undefined,
  keyboardIcon: 'event',
  invalidDateMessage: 'Invalid Date Format',
  clearable: false,
  onClear: undefined,
  disablePast: false,
  disableFuture: false,
  minDate: '1900-01-01',
  maxDate: '2100-01-01',
  minDateMessage: 'Date should not be before minimal date',
  maxDateMessage: 'Date should not be after maximal date',
  TextFieldComponent: TextField,
  InputAdornmentProps: {},
  adornmentPosition: 'end'
};
var styles$1 = {
  input: {
    alignItems: 'flex-end'
  }
};

var DateTextField$1 = withStyles(styles$1)(withUtils()(DateTextField));

var ModalWrapper = function (_PureComponent) {
  inherits(ModalWrapper, _PureComponent);

  function ModalWrapper() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, ModalWrapper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = ModalWrapper.__proto__ || Object.getPrototypeOf(ModalWrapper)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      open: false
    }, _this.open = function () {
      _this.setState({ open: true });
    }, _this.close = function () {
      _this.setState({ open: false });
    }, _this.handleAccept = function () {
      _this.close();
      if (_this.props.onAccept) {
        _this.props.onAccept();
      }
    }, _this.handleDismiss = function () {
      _this.close();
      if (_this.props.onDismiss) {
        _this.props.onDismiss();
      }
    }, _this.handleClear = function () {
      _this.close();
      if (_this.props.onClear) {
        _this.props.onClear();
      }
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(ModalWrapper, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          value = _props.value,
          format$$1 = _props.format,
          children = _props.children,
          dialogContentClassName = _props.dialogContentClassName,
          onAccept = _props.onAccept,
          onDismiss = _props.onDismiss,
          invalidLabel = _props.invalidLabel,
          labelFunc = _props.labelFunc,
          okLabel = _props.okLabel,
          cancelLabel = _props.cancelLabel,
          clearLabel = _props.clearLabel,
          clearable = _props.clearable,
          other = objectWithoutProperties(_props, ['value', 'format', 'children', 'dialogContentClassName', 'onAccept', 'onDismiss', 'invalidLabel', 'labelFunc', 'okLabel', 'cancelLabel', 'clearLabel', 'clearable']);


      return React.createElement(
        Fragment,
        null,
        React.createElement(DateTextField$1, _extends({
          value: value,
          format: format$$1,
          onClick: this.open
          // onFocus={this.togglePicker} <- Currently not properly works with .blur() on TextField
          , invalidLabel: invalidLabel,
          labelFunc: labelFunc,
          clearable: clearable
        }, other)),
        React.createElement(
          ModalDialog$1,
          {
            open: this.state.open,
            onClear: this.handleClear,
            onAccept: this.handleAccept,
            onDismiss: this.handleDismiss,
            dialogContentClassName: dialogContentClassName,
            clearLabel: clearLabel,
            okLabel: okLabel,
            cancelLabel: cancelLabel,
            clearable: clearable
          },
          children
        )
      );
    }
  }]);
  return ModalWrapper;
}(PureComponent);

ModalWrapper.propTypes = {
  value: DomainPropTypes.date,
  children: PropTypes.node.isRequired,
  format: PropTypes.string,
  onAccept: PropTypes.func,
  onDismiss: PropTypes.func,
  onClear: PropTypes.func,
  dialogContentClassName: PropTypes.string,
  invalidLabel: PropTypes.string,
  labelFunc: PropTypes.func,
  okLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  clearLabel: PropTypes.string,
  clearable: PropTypes.bool
};
ModalWrapper.defaultProps = {
  dialogContentClassName: '',
  invalidLabel: undefined,
  value: new Date(),
  labelFunc: undefined,
  okLabel: undefined,
  cancelLabel: undefined,
  clearLabel: undefined,
  format: undefined,
  onAccept: undefined,
  onDismiss: undefined,
  onClear: undefined,
  clearable: false
};

// 7.2.1 RequireObjectCoercible(argument)
var _defined = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

// 7.1.13 ToObject(argument)

var _toObject = function (it) {
  return Object(_defined(it));
};

var hasOwnProperty = {}.hasOwnProperty;
var _has = function (it, key) {
  return hasOwnProperty.call(it, key);
};

var _global = createCommonjsModule(function (module) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
});

var SHARED = '__core-js_shared__';
var store = _global[SHARED] || (_global[SHARED] = {});
var _shared = function (key) {
  return store[key] || (store[key] = {});
};

var id = 0;
var px = Math.random();
var _uid = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

var shared = _shared('keys');

var _sharedKey = function (key) {
  return shared[key] || (shared[key] = _uid(key));
};

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


var IE_PROTO = _sharedKey('IE_PROTO');
var ObjectProto = Object.prototype;

var _objectGpo = Object.getPrototypeOf || function (O) {
  O = _toObject(O);
  if (_has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

var _core = createCommonjsModule(function (module) {
var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
});

var _core_1 = _core.version;

var _aFunction = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

// optional / simple context binding

var _ctx = function (fn, that, length) {
  _aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var _isObject = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

var _anObject = function (it) {
  if (!_isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

var _fails = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

// Thank's IE8 for his funny defineProperty
var _descriptors = !_fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

var document$1 = _global.document;
// typeof document.createElement is 'object' in old IE
var is = _isObject(document$1) && _isObject(document$1.createElement);
var _domCreate = function (it) {
  return is ? document$1.createElement(it) : {};
};

var _ie8DomDefine = !_descriptors && !_fails(function () {
  return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
});

// 7.1.1 ToPrimitive(input [, PreferredType])

// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var _toPrimitive = function (it, S) {
  if (!_isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var dP = Object.defineProperty;

var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  _anObject(O);
  P = _toPrimitive(P, true);
  _anObject(Attributes);
  if (_ie8DomDefine) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var _objectDp = {
	f: f
};

var _propertyDesc = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var _hide = _descriptors ? function (object, key, value) {
  return _objectDp.f(object, key, _propertyDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] : (_global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? _ctx(out, _global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) _hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
var _export = $export;

// most Object methods by ES6 should accept primitives



var _objectSap = function (KEY, exec) {
  var fn = (_core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  _export(_export.S + _export.F * _fails(function () { fn(1); }), 'Object', exp);
};

// 19.1.2.9 Object.getPrototypeOf(O)



_objectSap('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return _objectGpo(_toObject(it));
  };
});

var getPrototypeOf$2 = _core.Object.getPrototypeOf;

var getPrototypeOf = createCommonjsModule(function (module) {
module.exports = { "default": getPrototypeOf$2, __esModule: true };
});

unwrapExports(getPrototypeOf);

var classCallCheck$1 = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
});

unwrapExports(classCallCheck$1);

// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
_export(_export.S + _export.F * !_descriptors, 'Object', { defineProperty: _objectDp.f });

var $Object = _core.Object;
var defineProperty$3 = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};

var defineProperty$1 = createCommonjsModule(function (module) {
module.exports = { "default": defineProperty$3, __esModule: true };
});

unwrapExports(defineProperty$1);

var createClass$1 = createCommonjsModule(function (module, exports) {
exports.__esModule = true;



var _defineProperty2 = _interopRequireDefault(defineProperty$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
});

unwrapExports(createClass$1);

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
var _toInteger = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

// true  -> String#at
// false -> String#codePointAt
var _stringAt = function (TO_STRING) {
  return function (that, pos) {
    var s = String(_defined(that));
    var i = _toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

var _library = true;

var _redefine = _hide;

var toString = {}.toString;

var _cof = function (it) {
  return toString.call(it).slice(8, -1);
};

// fallback for non-array-like ES3 and non-enumerable old V8 strings

// eslint-disable-next-line no-prototype-builtins
var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return _cof(it) == 'String' ? it.split('') : Object(it);
};

// to indexed object, toObject with fallback for non-array-like ES3 strings


var _toIobject = function (it) {
  return _iobject(_defined(it));
};

// 7.1.15 ToLength

var min = Math.min;
var _toLength = function (it) {
  return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

var max = Math.max;
var min$1 = Math.min;
var _toAbsoluteIndex = function (index, length) {
  index = _toInteger(index);
  return index < 0 ? max(index + length, 0) : min$1(index, length);
};

// false -> Array#indexOf
// true  -> Array#includes



var _arrayIncludes = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = _toIobject($this);
    var length = _toLength(O.length);
    var index = _toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var arrayIndexOf = _arrayIncludes(false);
var IE_PROTO$2 = _sharedKey('IE_PROTO');

var _objectKeysInternal = function (object, names) {
  var O = _toIobject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO$2) _has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (_has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

// IE 8- don't enum bug keys
var _enumBugKeys = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

// 19.1.2.14 / 15.2.3.14 Object.keys(O)



var _objectKeys = Object.keys || function keys(O) {
  return _objectKeysInternal(O, _enumBugKeys);
};

var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
  _anObject(O);
  var keys = _objectKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) _objectDp.f(O, P = keys[i++], Properties[P]);
  return O;
};

var document$2 = _global.document;
var _html = document$2 && document$2.documentElement;

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])



var IE_PROTO$1 = _sharedKey('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE$1 = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = _domCreate('iframe');
  var i = _enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  _html.appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE$1][_enumBugKeys[i]];
  return createDict();
};

var _objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE$1] = _anObject(O);
    result = new Empty();
    Empty[PROTOTYPE$1] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else result = createDict();
  return Properties === undefined ? result : _objectDps(result, Properties);
};

var _wks = createCommonjsModule(function (module) {
var store = _shared('wks');

var Symbol = _global.Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
};

$exports.store = store;
});

var def = _objectDp.f;

var TAG = _wks('toStringTag');

var _setToStringTag = function (it, tag, stat) {
  if (it && !_has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
_hide(IteratorPrototype, _wks('iterator'), function () { return this; });

var _iterCreate = function (Constructor, NAME, next) {
  Constructor.prototype = _objectCreate(IteratorPrototype, { next: _propertyDesc(1, next) });
  _setToStringTag(Constructor, NAME + ' Iterator');
};

var ITERATOR = _wks('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  _iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = _objectGpo($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      _setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!_library && !_has(IteratorPrototype, ITERATOR)) _hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!_library || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    _hide(proto, ITERATOR, $default);
  }
  // Plug for library
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) _redefine(proto, key, methods[key]);
    } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

var $at = _stringAt(true);

// 21.1.3.27 String.prototype[@@iterator]()
_iterDefine(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

var _iterStep = function (done, value) {
  return { value: value, done: !!done };
};

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
  this._t = _toIobject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return _iterStep(1);
  }
  if (kind == 'keys') return _iterStep(0, index);
  if (kind == 'values') return _iterStep(0, O[index]);
  return _iterStep(0, [index, O[index]]);
}, 'values');

var TO_STRING_TAG = _wks('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = _global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) _hide(proto, TO_STRING_TAG, NAME);
  
}

var f$1 = _wks;

var _wksExt = {
	f: f$1
};

var iterator$2 = _wksExt.f('iterator');

var iterator = createCommonjsModule(function (module) {
module.exports = { "default": iterator$2, __esModule: true };
});

unwrapExports(iterator);

var _meta = createCommonjsModule(function (module) {
var META = _uid('meta');


var setDesc = _objectDp.f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !_fails(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!_isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!_has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!_has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !_has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};
});

var _meta_1 = _meta.KEY;
var _meta_2 = _meta.NEED;
var _meta_3 = _meta.fastKey;
var _meta_4 = _meta.getWeak;
var _meta_5 = _meta.onFreeze;

var defineProperty$5 = _objectDp.f;
var _wksDefine = function (name) {
  var $Symbol = _core.Symbol || (_core.Symbol = _library ? {} : _global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty$5($Symbol, name, { value: _wksExt.f(name) });
};

var f$2 = Object.getOwnPropertySymbols;

var _objectGops = {
	f: f$2
};

var f$3 = {}.propertyIsEnumerable;

var _objectPie = {
	f: f$3
};

// all enumerable object keys, includes symbols



var _enumKeys = function (it) {
  var result = _objectKeys(it);
  var getSymbols = _objectGops.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = _objectPie.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};

// 7.2.2 IsArray(argument)

var _isArray = Array.isArray || function isArray(arg) {
  return _cof(arg) == 'Array';
};

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)

var hiddenKeys = _enumBugKeys.concat('length', 'prototype');

var f$5 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return _objectKeysInternal(O, hiddenKeys);
};

var _objectGopn = {
	f: f$5
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window

var gOPN$1 = _objectGopn.f;
var toString$1 = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN$1(it);
  } catch (e) {
    return windowNames.slice();
  }
};

var f$4 = function getOwnPropertyNames(it) {
  return windowNames && toString$1.call(it) == '[object Window]' ? getWindowNames(it) : gOPN$1(_toIobject(it));
};

var _objectGopnExt = {
	f: f$4
};

var gOPD$1 = Object.getOwnPropertyDescriptor;

var f$6 = _descriptors ? gOPD$1 : function getOwnPropertyDescriptor(O, P) {
  O = _toIobject(O);
  P = _toPrimitive(P, true);
  if (_ie8DomDefine) try {
    return gOPD$1(O, P);
  } catch (e) { /* empty */ }
  if (_has(O, P)) return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
};

var _objectGopd = {
	f: f$6
};

// ECMAScript 6 symbols shim





var META = _meta.KEY;



















var gOPD = _objectGopd.f;
var dP$1 = _objectDp.f;
var gOPN = _objectGopnExt.f;
var $Symbol = _global.Symbol;
var $JSON = _global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE$2 = 'prototype';
var HIDDEN = _wks('_hidden');
var TO_PRIMITIVE = _wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = _shared('symbol-registry');
var AllSymbols = _shared('symbols');
var OPSymbols = _shared('op-symbols');
var ObjectProto$1 = Object[PROTOTYPE$2];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = _global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE$2] || !QObject[PROTOTYPE$2].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = _descriptors && _fails(function () {
  return _objectCreate(dP$1({}, 'a', {
    get: function () { return dP$1(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto$1, key);
  if (protoDesc) delete ObjectProto$1[key];
  dP$1(it, key, D);
  if (protoDesc && it !== ObjectProto$1) dP$1(ObjectProto$1, key, protoDesc);
} : dP$1;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _objectCreate($Symbol[PROTOTYPE$2]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto$1) $defineProperty(OPSymbols, key, D);
  _anObject(it);
  key = _toPrimitive(key, true);
  _anObject(D);
  if (_has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!_has(it, HIDDEN)) dP$1(it, HIDDEN, _propertyDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (_has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _objectCreate(D, { enumerable: _propertyDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP$1(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  _anObject(it);
  var keys = _enumKeys(P = _toIobject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _objectCreate(it) : $defineProperties(_objectCreate(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = _toPrimitive(key, true));
  if (this === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key)) return false;
  return E || !_has(this, key) || !_has(AllSymbols, key) || _has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = _toIobject(it);
  key = _toPrimitive(key, true);
  if (it === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && _has(AllSymbols, key) && !(_has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(_toIobject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!_has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto$1;
  var names = gOPN(IS_OP ? OPSymbols : _toIobject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (_has(AllSymbols, key = names[i++]) && (IS_OP ? _has(ObjectProto$1, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = _uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto$1) $set.call(OPSymbols, value);
      if (_has(this, HIDDEN) && _has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, _propertyDesc(1, value));
    };
    if (_descriptors && setter) setSymbolDesc(ObjectProto$1, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  _redefine($Symbol[PROTOTYPE$2], 'toString', function toString() {
    return this._k;
  });

  _objectGopd.f = $getOwnPropertyDescriptor;
  _objectDp.f = $defineProperty;
  _objectGopn.f = _objectGopnExt.f = $getOwnPropertyNames;
  _objectPie.f = $propertyIsEnumerable;
  _objectGops.f = $getOwnPropertySymbols;

  if (_descriptors && !_library) {
    _redefine(ObjectProto$1, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  _wksExt.f = function (name) {
    return wrap(_wks(name));
  };
}

_export(_export.G + _export.W + _export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)_wks(es6Symbols[j++]);

for (var wellKnownSymbols = _objectKeys(_wks.store), k = 0; wellKnownSymbols.length > k;) _wksDefine(wellKnownSymbols[k++]);

_export(_export.S + _export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return _has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

_export(_export.S + _export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && _export(_export.S + _export.F * (!USE_NATIVE || _fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!_isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!_isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE$2][TO_PRIMITIVE] || _hide($Symbol[PROTOTYPE$2], TO_PRIMITIVE, $Symbol[PROTOTYPE$2].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
_setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
_setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
_setToStringTag(_global.JSON, 'JSON', true);

_wksDefine('asyncIterator');

_wksDefine('observable');

var symbol$2 = _core.Symbol;

var symbol = createCommonjsModule(function (module) {
module.exports = { "default": symbol$2, __esModule: true };
});

unwrapExports(symbol);

var _typeof_1 = createCommonjsModule(function (module, exports) {
exports.__esModule = true;



var _iterator2 = _interopRequireDefault(iterator);



var _symbol2 = _interopRequireDefault(symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};
});

unwrapExports(_typeof_1);

var possibleConstructorReturn$1 = createCommonjsModule(function (module, exports) {
exports.__esModule = true;



var _typeof3 = _interopRequireDefault(_typeof_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};
});

unwrapExports(possibleConstructorReturn$1);

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */


var check = function (O, proto) {
  _anObject(O);
  if (!_isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
var _setProto = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = _ctx(Function.call, _objectGopd.f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

// 19.1.3.19 Object.setPrototypeOf(O, proto)

_export(_export.S, 'Object', { setPrototypeOf: _setProto.set });

var setPrototypeOf$2 = _core.Object.setPrototypeOf;

var setPrototypeOf = createCommonjsModule(function (module) {
module.exports = { "default": setPrototypeOf$2, __esModule: true };
});

unwrapExports(setPrototypeOf);

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
_export(_export.S, 'Object', { create: _objectCreate });

var $Object$1 = _core.Object;
var create$2 = function create(P, D) {
  return $Object$1.create(P, D);
};

var create = createCommonjsModule(function (module) {
module.exports = { "default": create$2, __esModule: true };
});

unwrapExports(create);

var inherits$1 = createCommonjsModule(function (module, exports) {
exports.__esModule = true;



var _setPrototypeOf2 = _interopRequireDefault(setPrototypeOf);



var _create2 = _interopRequireDefault(create);



var _typeof3 = _interopRequireDefault(_typeof_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};
});

unwrapExports(inherits$1);

// 19.1.2.14 Object.keys(O)



_objectSap('keys', function () {
  return function keys(it) {
    return _objectKeys(_toObject(it));
  };
});

var keys$2 = _core.Object.keys;

var keys = createCommonjsModule(function (module) {
module.exports = { "default": keys$2, __esModule: true };
});

unwrapExports(keys);

var objectWithoutProperties$1 = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};
});

unwrapExports(objectWithoutProperties$1);

// 19.1.2.1 Object.assign(target, source, ...)





var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
var _objectAssign = !$assign || _fails(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = _toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = _objectGops.f;
  var isEnum = _objectPie.f;
  while (aLen > index) {
    var S = _iobject(arguments[index++]);
    var keys = getSymbols ? _objectKeys(S).concat(getSymbols(S)) : _objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;

// 19.1.3.1 Object.assign(target, source)


_export(_export.S + _export.F, 'Object', { assign: _objectAssign });

var assign$2 = _core.Object.assign;

var assign = createCommonjsModule(function (module) {
module.exports = { "default": assign$2, __esModule: true };
});

unwrapExports(assign);

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 * 
 */

/*eslint-disable no-self-compare */

var hasOwnProperty$1 = Object.prototype.hasOwnProperty;

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is$1(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual(objA, objB) {
  if (is$1(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty$1.call(objB, keysA[i]) || !is$1(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

var shallowEqual_1 = shallowEqual;

/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = process.env.NODE_ENV !== 'production';

var warning = function() {};

if (__DEV__) {
  warning = function(condition, format$$1, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format$$1 === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format$$1.length < 10 || (/^[s\W]*$/).test(format$$1)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format$$1
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format$$1.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

var warning_1 = warning;

var supports = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.passiveOption = undefined;



var _defineProperty2 = _interopRequireDefault(defineProperty$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function defineProperty(object, property, attr) {
  return (0, _defineProperty2.default)(object, property, attr);
}

// Passive options
// Inspired by https://github.com/Modernizr/Modernizr/blob/master/feature-detects/dom/passiveeventlisteners.js
var passiveOption = exports.passiveOption = function () {
  var cache = null;

  return function () {
    if (cache !== null) {
      return cache;
    }

    var supportsPassiveOption = false;

    try {
      window.addEventListener('test', null, defineProperty({}, 'passive', {
        get: function get() {
          supportsPassiveOption = true;
        }
      }));
    } catch (err) {
      //
    }

    cache = supportsPassiveOption;

    return supportsPassiveOption;
  }();
}();

exports.default = {};
});

unwrapExports(supports);
var supports_1 = supports.passiveOption;

var lib = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", {
  value: true
});



var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf);



var _classCallCheck3 = _interopRequireDefault(classCallCheck$1);



var _createClass3 = _interopRequireDefault(createClass$1);



var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn$1);



var _inherits3 = _interopRequireDefault(inherits$1);



var _typeof3 = _interopRequireDefault(_typeof_1);



var _keys2 = _interopRequireDefault(keys);



var _objectWithoutProperties3 = _interopRequireDefault(objectWithoutProperties$1);



var _assign2 = _interopRequireDefault(assign);

exports.withOptions = withOptions;



var _react2 = _interopRequireDefault(React);



var _propTypes2 = _interopRequireDefault(PropTypes);



var _shallowEqual2 = _interopRequireDefault(shallowEqual_1);



var _warning2 = _interopRequireDefault(warning_1);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultEventOptions = {
  capture: false,
  passive: false
};

function mergeDefaultEventOptions(options) {
  return (0, _assign2.default)({}, defaultEventOptions, options);
}

function getEventListenerArgs(eventName, callback, options) {
  var args = [eventName, callback];
  args.push(supports.passiveOption ? options : options.capture);
  return args;
}

function on(target, eventName, callback, options) {
  // eslint-disable-next-line prefer-spread
  target.addEventListener.apply(target, getEventListenerArgs(eventName, callback, options));
}

function off(target, eventName, callback, options) {
  // eslint-disable-next-line prefer-spread
  target.removeEventListener.apply(target, getEventListenerArgs(eventName, callback, options));
}

function forEachListener(props, iteratee) {
  var children = props.children,
      target = props.target,
      eventProps = (0, _objectWithoutProperties3.default)(props, ['children', 'target']);


  (0, _keys2.default)(eventProps).forEach(function (name) {
    if (name.substring(0, 2) !== 'on') {
      return;
    }

    var prop = eventProps[name];
    var type = typeof prop === 'undefined' ? 'undefined' : (0, _typeof3.default)(prop);
    var isObject = type === 'object';
    var isFunction = type === 'function';

    if (!isObject && !isFunction) {
      return;
    }

    var capture = name.substr(-7).toLowerCase() === 'capture';
    var eventName = name.substring(2).toLowerCase();
    eventName = capture ? eventName.substring(0, eventName.length - 7) : eventName;

    if (isObject) {
      iteratee(eventName, prop.handler, prop.options);
    } else {
      iteratee(eventName, prop, mergeDefaultEventOptions({ capture: capture }));
    }
  });
}

function withOptions(handler, options) {
  process.env.NODE_ENV !== "production" ? (0, _warning2.default)(options, 'react-event-listener: should be specified options in withOptions.') : void 0;

  return {
    handler: handler,
    options: mergeDefaultEventOptions(options)
  };
}

var EventListener = function (_React$Component) {
  (0, _inherits3.default)(EventListener, _React$Component);

  function EventListener() {
    (0, _classCallCheck3.default)(this, EventListener);
    return (0, _possibleConstructorReturn3.default)(this, (EventListener.__proto__ || (0, _getPrototypeOf2.default)(EventListener)).apply(this, arguments));
  }

  (0, _createClass3.default)(EventListener, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.addListeners();
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return !(0, _shallowEqual2.default)(this.props, nextProps);
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate() {
      this.removeListeners();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.addListeners();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.removeListeners();
    }
  }, {
    key: 'addListeners',
    value: function addListeners() {
      this.applyListeners(on);
    }
  }, {
    key: 'removeListeners',
    value: function removeListeners() {
      this.applyListeners(off);
    }
  }, {
    key: 'applyListeners',
    value: function applyListeners(onOrOff) {
      var target = this.props.target;


      if (target) {
        var element = target;

        if (typeof target === 'string') {
          element = window[target];
        }

        forEachListener(this.props, onOrOff.bind(null, element));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children || null;
    }
  }]);
  return EventListener;
}(_react2.default.Component);

EventListener.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * You can provide a single child too.
   */
  children: _propTypes2.default.node,
  /**
   * The DOM target to listen to.
   */
  target: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]).isRequired
} : {};

exports.default = EventListener;
});

var EventListener = unwrapExports(lib);
var lib_1 = lib.withOptions;

var keycode = createCommonjsModule(function (module, exports) {
// Source: http://jsfiddle.net/vWx8V/
// http://stackoverflow.com/questions/5603195/full-list-of-javascript-keycodes

/**
 * Conenience method returns corresponding value for given keyName or keyCode.
 *
 * @param {Mixed} keyCode {Number} or keyName {String}
 * @return {Mixed}
 * @api public
 */

exports = module.exports = function(searchInput) {
  // Keyboard Events
  if (searchInput && 'object' === typeof searchInput) {
    var hasKeyCode = searchInput.which || searchInput.keyCode || searchInput.charCode;
    if (hasKeyCode) searchInput = hasKeyCode;
  }

  // Numbers
  if ('number' === typeof searchInput) return names[searchInput]

  // Everything else (cast to string)
  var search = String(searchInput);

  // check codes
  var foundNamedKey = codes[search.toLowerCase()];
  if (foundNamedKey) return foundNamedKey

  // check aliases
  var foundNamedKey = aliases[search.toLowerCase()];
  if (foundNamedKey) return foundNamedKey

  // weird character?
  if (search.length === 1) return search.charCodeAt(0)

  return undefined
};

/**
 * Get by name
 *
 *   exports.code['enter'] // => 13
 */

var codes = exports.code = exports.codes = {
  'backspace': 8,
  'tab': 9,
  'enter': 13,
  'shift': 16,
  'ctrl': 17,
  'alt': 18,
  'pause/break': 19,
  'caps lock': 20,
  'esc': 27,
  'space': 32,
  'page up': 33,
  'page down': 34,
  'end': 35,
  'home': 36,
  'left': 37,
  'up': 38,
  'right': 39,
  'down': 40,
  'insert': 45,
  'delete': 46,
  'command': 91,
  'left command': 91,
  'right command': 93,
  'numpad *': 106,
  'numpad +': 107,
  'numpad -': 109,
  'numpad .': 110,
  'numpad /': 111,
  'num lock': 144,
  'scroll lock': 145,
  'my computer': 182,
  'my calculator': 183,
  ';': 186,
  '=': 187,
  ',': 188,
  '-': 189,
  '.': 190,
  '/': 191,
  '`': 192,
  '[': 219,
  '\\': 220,
  ']': 221,
  "'": 222
};

// Helper aliases

var aliases = exports.aliases = {
  'windows': 91,
  '⇧': 16,
  '⌥': 18,
  '⌃': 17,
  '⌘': 91,
  'ctl': 17,
  'control': 17,
  'option': 18,
  'pause': 19,
  'break': 19,
  'caps': 20,
  'return': 13,
  'escape': 27,
  'spc': 32,
  'pgup': 33,
  'pgdn': 34,
  'ins': 45,
  'del': 46,
  'cmd': 91
};


/*!
 * Programatically add the following
 */

// lower case chars
for (i = 97; i < 123; i++) codes[String.fromCharCode(i)] = i - 32;

// numbers
for (var i = 48; i < 58; i++) codes[i - 48] = i;

// function keys
for (i = 1; i < 13; i++) codes['f'+i] = i + 111;

// numpad keys
for (i = 0; i < 10; i++) codes['numpad '+i] = i + 96;

/**
 * Get by code
 *
 *   exports.name[13] // => 'Enter'
 */

var names = exports.names = exports.title = {}; // title for backward compat

// Create reverse mapping
for (i in codes) names[codes[i]] = i;

// Add aliases
for (var alias in aliases) {
  codes[alias] = aliases[alias];
}
});

var keycode_1 = keycode.code;
var keycode_2 = keycode.codes;
var keycode_3 = keycode.aliases;
var keycode_4 = keycode.names;
var keycode_5 = keycode.title;

var CalendarHeader = function CalendarHeader(props) {
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

var styles$3 = function styles(theme) {
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

var CalendarHeader$1 = withStyles(styles$3, { withTheme: true, name: 'MuiPickersCalendarHeader' })(withUtils()(CalendarHeader));

var DayWrapper = function (_PureComponent) {
  inherits(DayWrapper, _PureComponent);

  function DayWrapper() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, DayWrapper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = DayWrapper.__proto__ || Object.getPrototypeOf(DayWrapper)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function () {
      _this.props.onSelect(_this.props.value);
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(DayWrapper, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          value = _props.value,
          dayInCurrentMonth = _props.dayInCurrentMonth,
          disabled = _props.disabled,
          onSelect = _props.onSelect,
          other = objectWithoutProperties(_props, ['children', 'value', 'dayInCurrentMonth', 'disabled', 'onSelect']);

      return React.createElement(
        'div',
        _extends({
          onClick: dayInCurrentMonth && !disabled ? this.handleClick : undefined,
          onKeyPress: dayInCurrentMonth && !disabled ? this.handleClick : undefined,
          role: 'presentation'
        }, other),
        children
      );
    }
  }]);
  return DayWrapper;
}(PureComponent);

DayWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  dayInCurrentMonth: PropTypes.bool,
  disabled: PropTypes.bool,
  onSelect: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired
};
DayWrapper.defaultProps = {
  dayInCurrentMonth: true,
  disabled: false
};

var Day = function (_PureComponent) {
  inherits(Day, _PureComponent);

  function Day() {
    classCallCheck(this, Day);
    return possibleConstructorReturn(this, (Day.__proto__ || Object.getPrototypeOf(Day)).apply(this, arguments));
  }

  createClass(Day, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          children = _props.children,
          classes = _props.classes,
          disabled = _props.disabled,
          hidden = _props.hidden,
          current = _props.current,
          selected = _props.selected,
          other = objectWithoutProperties(_props, ['children', 'classes', 'disabled', 'hidden', 'current', 'selected']);


      var className = classnames(classes.day, (_classnames = {}, defineProperty(_classnames, classes.hidden, hidden), defineProperty(_classnames, classes.current, current), defineProperty(_classnames, classes.selected, selected), defineProperty(_classnames, classes.disabled, disabled), _classnames));

      return React.createElement(
        IconButton,
        _extends({
          className: className,
          tabIndex: hidden || disabled ? -1 : 0
        }, other),
        React.createElement(
          'span',
          null,
          ' ',
          children,
          ' '
        )
      );
    }
  }]);
  return Day;
}(PureComponent);

Day.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  current: PropTypes.bool,
  disabled: PropTypes.bool,
  hidden: PropTypes.bool,
  selected: PropTypes.bool
};
Day.defaultProps = {
  disabled: false,
  hidden: false,
  current: false,
  selected: false
};


var styles$4 = function styles(theme) {
  return {
    day: {
      width: 36,
      height: 36,
      fontSize: theme.typography.caption.fontSize,
      margin: '0 2px',
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightMedium
    },
    hidden: {
      opacity: 0,
      pointerEvents: 'none'
    },
    current: {
      color: theme.palette.primary.main,
      fontWeight: 600
    },
    selected: {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.primary.main,
      fontWeight: theme.typography.fontWeightMedium
    },
    disabled: {
      pointerEvents: 'none',
      color: theme.palette.text.hint
    }
  };
};

var Day$1 = withStyles(styles$4)(Day);

/* eslint-disable no-unused-expressions */
var Calendar = function (_Component) {
  inherits(Calendar, _Component);

  function Calendar() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Calendar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      currentMonth: _this.props.utils.getStartOfMonth(_this.props.date)
    }, _this.onDateSelect = function (day) {
      var _this$props = _this.props,
          date = _this$props.date,
          utils = _this$props.utils;


      var withHours = utils.setHours(day, utils.getHours(date));
      var withMinutes = utils.setMinutes(withHours, utils.getMinutes(date));

      _this.props.onChange(withMinutes);
    }, _this.handleChangeMonth = function (newMonth) {
      _this.setState({ currentMonth: newMonth });
    }, _this.validateMinMaxDate = function (day) {
      var _this$props2 = _this.props,
          minDate = _this$props2.minDate,
          maxDate = _this$props2.maxDate,
          utils = _this$props2.utils;


      return minDate && utils.isBeforeDay(day, utils.date(minDate)) || maxDate && utils.isAfterDay(day, utils.date(maxDate));
    }, _this.shouldDisableDate = function (day) {
      var _this$props3 = _this.props,
          disablePast = _this$props3.disablePast,
          disableFuture = _this$props3.disableFuture,
          shouldDisableDate = _this$props3.shouldDisableDate,
          utils = _this$props3.utils;


      return disableFuture && utils.isAfterDay(day, utils.date()) || disablePast && utils.isBeforeDay(day, utils.date()) || _this.validateMinMaxDate(day) || shouldDisableDate(day);
    }, _this.moveToDay = function (day) {
      if (day && !_this.shouldDisableDate(day)) {
        _this.props.onChange(day);
      }
    }, _this.handleKeyDown = function (event) {
      var _this$props4 = _this.props,
          theme = _this$props4.theme,
          date = _this$props4.date,
          utils = _this$props4.utils;


      switch (keycode(event)) {
        case 'up':
          _this.moveToDay(utils.addDays(date, -7));
          break;
        case 'down':
          _this.moveToDay(utils.addDays(date, 7));
          break;
        case 'left':
          theme.direction === 'ltr' ? _this.moveToDay(utils.addDays(date, -1)) : _this.moveToDay(utils.addDays(date, 1));
          break;
        case 'right':
          theme.direction === 'ltr' ? _this.moveToDay(utils.addDays(date, 1)) : _this.moveToDay(utils.addDays(date, -1));
          break;
        default:
          // if keycode is not handled, stop execution
          return;
      }

      // if event was handled prevent other side effects (e.g. page scroll)
      event.preventDefault();
    }, _this.renderWeeks = function () {
      var utils = _this.props.utils;
      var currentMonth = _this.state.currentMonth;

      var weeks = utils.getWeekArray(currentMonth);

      return weeks.map(function (week) {
        return React.createElement(
          'div',
          {
            key: 'week-' + week[0].toString(),
            className: _this.props.classes.week
          },
          _this.renderDays(week)
        );
      });
    }, _this.renderDays = function (week) {
      var _this$props5 = _this.props,
          date = _this$props5.date,
          renderDay = _this$props5.renderDay,
          utils = _this$props5.utils;


      var selectedDate = utils.startOfDay(date);
      var currentMonthNumber = utils.getMonth(_this.state.currentMonth);
      var now = utils.date();

      return week.map(function (day) {
        var disabled = _this.shouldDisableDate(day);
        var dayInCurrentMonth = utils.getMonth(day) === currentMonthNumber;

        var dayComponent = React.createElement(
          Day$1,
          {
            current: utils.isSameDay(day, now),
            hidden: !dayInCurrentMonth,
            disabled: disabled,
            selected: utils.isSameDay(selectedDate, day)
          },
          utils.getDayText(day)
        );

        if (renderDay) {
          dayComponent = renderDay(day, selectedDate, dayInCurrentMonth, dayComponent);
        }

        return React.createElement(
          DayWrapper,
          {
            key: day.toString(),
            value: day,
            dayInCurrentMonth: dayInCurrentMonth,
            disabled: disabled,
            onSelect: _this.onDateSelect
          },
          dayComponent
        );
      });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Calendar, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        currentMonth: this.props.utils.getStartOfMonth(nextProps.date)
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var currentMonth = this.state.currentMonth;
      var _props = this.props,
          classes = _props.classes,
          utils = _props.utils;


      return React.createElement(
        Fragment,
        null,
        React.createElement(EventListener, { target: 'window', onKeyDown: this.handleKeyDown }),
        React.createElement(CalendarHeader$1, {
          currentMonth: currentMonth,
          onMonthChange: this.handleChangeMonth,
          leftArrowIcon: this.props.leftArrowIcon,
          rightArrowIcon: this.props.rightArrowIcon,
          utils: utils
        }),
        React.createElement(
          'div',
          { className: classes.calendar },
          this.renderWeeks()
        )
      );
    }
  }]);
  return Calendar;
}(Component);

Calendar.propTypes = {
  date: PropTypes.object.isRequired,
  minDate: DomainPropTypes.date,
  maxDate: DomainPropTypes.date,
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  disablePast: PropTypes.bool,
  disableFuture: PropTypes.bool,
  leftArrowIcon: PropTypes.node,
  rightArrowIcon: PropTypes.node,
  renderDay: PropTypes.func,
  /** @ignore */
  theme: PropTypes.object.isRequired,
  shouldDisableDate: PropTypes.func,
  utils: PropTypes.func.isRequired
};
Calendar.defaultProps = {
  minDate: '1900-01-01',
  maxDate: '2100-01-01',
  disablePast: false,
  disableFuture: false,
  leftArrowIcon: undefined,
  rightArrowIcon: undefined,
  renderDay: undefined,
  shouldDisableDate: function shouldDisableDate() {
    return false;
  }
};
var styles$2 = function styles(theme) {
  return {
    calendar: {
      height: 36 * 6,
      marginTop: theme.spacing.unit * 1.5
    },
    week: {
      display: 'flex',
      justifyContent: 'center'
    }
  };
};

var Calendar$1 = withStyles(styles$2, {
  name: 'MuiPickersCalendar',
  withTheme: true
})(withUtils()(Calendar));

var Year = function (_PureComponent) {
  inherits(Year, _PureComponent);

  function Year() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Year);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Year.__proto__ || Object.getPrototypeOf(Year)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function () {
      _this.props.onSelect(_this.props.value);
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Year, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          classes = _props.classes,
          selected = _props.selected,
          disabled = _props.disabled,
          value = _props.value,
          children = _props.children,
          other = objectWithoutProperties(_props, ['classes', 'selected', 'disabled', 'value', 'children']);


      return React.createElement(
        Typography,
        _extends({
          role: 'button',
          component: 'div',
          className: classnames(classes.root, (_classnames = {}, defineProperty(_classnames, classes.selected, selected), defineProperty(_classnames, classes.disabled, disabled), _classnames)),
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
var styles$6 = function styles(theme) {
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

var Year$1 = withStyles(styles$6)(Year);

var YearSelection = function (_PureComponent) {
  inherits(YearSelection, _PureComponent);

  function YearSelection() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, YearSelection);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = YearSelection.__proto__ || Object.getPrototypeOf(YearSelection)).call.apply(_ref, [this].concat(args))), _this), _this.componentDidMount = function () {
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
    }, _this.selectedYearRef = undefined, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(YearSelection, [{
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
            Year$1,
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
var styles$5 = {
  container: {
    maxHeight: 300,
    overflowY: 'auto',
    justifyContent: 'center'
  }
};

var YearSelection$1 = withStyles(styles$5, { name: 'MuiPickersYearSelection' })(withUtils()(YearSelection));

var PickerToolbar = function PickerToolbar(props) {
  var children = props.children,
      className = props.className,
      classes = props.classes,
      other = objectWithoutProperties(props, ['children', 'className', 'classes']);


  return React.createElement(
    Toolbar,
    _extends({ className: classnames(classes.toolbar, className) }, other),
    children
  );
};

PickerToolbar.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

PickerToolbar.defaultProps = {
  className: ''
};

var styles$7 = function styles(theme) {
  return {
    toolbar: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      height: 100,
      backgroundColor: theme.palette.type === 'light' ? theme.palette.primary.main : theme.palette.background.default
    }
  };
};

var PickerToolbar$1 = withStyles(styles$7, { name: 'MuiPickersToolbar' })(PickerToolbar);

var ToolbarButton = function ToolbarButton(props) {
  var classes = props.classes,
      selected = props.selected,
      label = props.label,
      className = props.className,
      other = objectWithoutProperties(props, ['classes', 'selected', 'label', 'className']);


  return React.createElement(
    Typography,
    _extends({
      className: classnames(classes.toolbarBtn, className, defineProperty({}, classes.toolbarBtnSelected, selected))
    }, other),
    label
  );
};

ToolbarButton.propTypes = {
  selected: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
};

ToolbarButton.defaultProps = {
  className: ''
};

var styles$8 = function styles(theme) {
  return {
    toolbarBtn: {
      cursor: 'pointer',
      color: 'rgba(255, 255, 255, 0.54)'
    },
    toolbarBtnSelected: {
      color: theme.palette.common.white
    }
  };
};

var ToolbarButton$1 = withStyles(styles$8, { name: 'MuiPickersToolbarButton' })(ToolbarButton);

var DatePicker = function (_PureComponent) {
  inherits(DatePicker, _PureComponent);

  function DatePicker() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, DatePicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      showYearSelection: _this.props.openToYearSelection
    }, _this.handleYearSelect = function (date) {
      _this.props.onChange(date, false);
      _this.openCalendar();
    }, _this.openYearSelection = function () {
      _this.setState({ showYearSelection: true });
    }, _this.openCalendar = function () {
      _this.setState({ showYearSelection: false });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(DatePicker, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          disablePast = _props.disablePast,
          disableFuture = _props.disableFuture,
          onChange = _props.onChange,
          animateYearScrolling = _props.animateYearScrolling,
          leftArrowIcon = _props.leftArrowIcon,
          rightArrowIcon = _props.rightArrowIcon,
          renderDay = _props.renderDay,
          utils = _props.utils,
          shouldDisableDate = _props.shouldDisableDate;
      var showYearSelection = this.state.showYearSelection;


      return React.createElement(
        Fragment,
        null,
        React.createElement(
          PickerToolbar$1,
          null,
          React.createElement(ToolbarButton$1, {
            variant: 'subheading',
            onClick: this.openYearSelection,
            selected: showYearSelection,
            label: utils.getYearText(this.date)
          }),
          React.createElement(ToolbarButton$1, {
            variant: 'display1',
            onClick: this.openCalendar,
            selected: !showYearSelection,
            label: utils.getDatePickerHeaderText(this.date)
          })
        ),
        this.props.children,
        showYearSelection ? React.createElement(YearSelection$1, {
          date: this.date,
          onChange: this.handleYearSelect,
          minDate: this.minDate,
          maxDate: this.maxDate,
          disablePast: disablePast,
          disableFuture: disableFuture,
          animateYearScrolling: animateYearScrolling,
          utils: utils
        }) : React.createElement(Calendar$1, {
          date: this.date,
          onChange: onChange,
          disablePast: disablePast,
          disableFuture: disableFuture,
          minDate: this.minDate,
          maxDate: this.maxDate,
          leftArrowIcon: leftArrowIcon,
          rightArrowIcon: rightArrowIcon,
          renderDay: renderDay,
          utils: utils,
          shouldDisableDate: shouldDisableDate
        })
      );
    }
  }, {
    key: 'date',
    get: function get$$1() {
      return this.props.utils.startOfDay(this.props.date);
    }
  }, {
    key: 'minDate',
    get: function get$$1() {
      return this.props.utils.date(this.props.minDate);
    }
  }, {
    key: 'maxDate',
    get: function get$$1() {
      return this.props.utils.date(this.props.maxDate);
    }
  }]);
  return DatePicker;
}(PureComponent);

DatePicker.propTypes = {
  date: PropTypes.object.isRequired,
  minDate: DomainPropTypes.date,
  maxDate: DomainPropTypes.date,
  onChange: PropTypes.func.isRequired,
  disablePast: PropTypes.bool,
  disableFuture: PropTypes.bool,
  animateYearScrolling: PropTypes.bool,
  openToYearSelection: PropTypes.bool,
  children: PropTypes.node,
  leftArrowIcon: PropTypes.node,
  rightArrowIcon: PropTypes.node,
  renderDay: PropTypes.func,
  utils: PropTypes.func.isRequired,
  shouldDisableDate: PropTypes.func
};
DatePicker.defaultProps = {
  minDate: '1900-01-01',
  maxDate: '2100-01-01',
  disablePast: false,
  disableFuture: false,
  animateYearScrolling: undefined,
  openToYearSelection: false,
  children: null,
  leftArrowIcon: undefined,
  rightArrowIcon: undefined,
  renderDay: undefined,
  shouldDisableDate: undefined
};
var DatePicker$1 = withUtils()(DatePicker);

/* eslint-disable react/sort-comp */
/* eslint-disable react/require-default-props */

var PickerBase = function (_PureComponent) {
  inherits(PickerBase, _PureComponent);

  function PickerBase() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, PickerBase);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = PickerBase.__proto__ || Object.getPrototypeOf(PickerBase)).call.apply(_ref, [this].concat(args))), _this), _this.getValidDateOrCurrent = function () {
      var _this$props = _this.props,
          utils = _this$props.utils,
          value = _this$props.value;

      var date = utils.date(value);

      return utils.isValid(date) ? date : utils.date();
    }, _this.state = {
      date: _this.getValidDateOrCurrent()
    }, _this.getFormat = function () {
      if (_this.props.format || _this.props.labelFunc) {
        return _this.props.format;
      }

      return _this.props.ampm ? _this.default12hFormat : _this.default24hFormat;
    }, _this.getRef = function (node) {
      _this.wrapper = node;
    }, _this.handleClear = function () {
      _this.props.onChange(null);
    }, _this.handleAccept = function () {
      _this.props.onChange(_this.state.date);
    }, _this.handleDismiss = function () {
      _this.setState({ date: _this.getValidDateOrCurrent(_this.props) });
    }, _this.handleChange = function (date) {
      var isFinish = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      _this.setState({ date: date }, function () {
        if (isFinish && _this.props.autoOk) {
          _this.handleAccept();
          _this.wrapper.close();
        }
      });
    }, _this.handleTextFieldChange = function (date) {
      if (date === null) {
        _this.handleClear();
      } else {
        _this.setState({ date: date }, _this.handleAccept);
      }
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(PickerBase, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!this.props.utils.isEqual(this.state.date, nextProps.value)) {
        this.setState({ date: this.getValidDateOrCurrent(nextProps) });
      }
    }
  }]);
  return PickerBase;
}(PureComponent);

PickerBase.propTypes = {
  value: DomainPropTypes.date,
  onChange: PropTypes.func.isRequired,
  autoOk: PropTypes.bool,
  format: PropTypes.string,
  labelFunc: PropTypes.func,
  ampm: PropTypes.bool,
  utils: PropTypes.func.isRequired
};

var DatePickerWrapper = function (_PickerBase) {
  inherits(DatePickerWrapper, _PickerBase);

  function DatePickerWrapper() {
    classCallCheck(this, DatePickerWrapper);
    return possibleConstructorReturn(this, (DatePickerWrapper.__proto__ || Object.getPrototypeOf(DatePickerWrapper)).apply(this, arguments));
  }

  createClass(DatePickerWrapper, [{
    key: 'render',
    value: function render() {
      var date = this.state.date;
      var _props = this.props,
          value = _props.value,
          format$$1 = _props.format,
          autoOk = _props.autoOk,
          onChange = _props.onChange,
          animateYearScrolling = _props.animateYearScrolling,
          openToYearSelection = _props.openToYearSelection,
          invalidLabel = _props.invalidLabel,
          leftArrowIcon = _props.leftArrowIcon,
          rightArrowIcon = _props.rightArrowIcon,
          renderDay = _props.renderDay,
          labelFunc = _props.labelFunc,
          utils = _props.utils,
          shouldDisableDate = _props.shouldDisableDate,
          minDateMessage = _props.minDateMessage,
          maxDateMessage = _props.maxDateMessage,
          minDate = _props.minDate,
          maxDate = _props.maxDate,
          disablePast = _props.disablePast,
          disableFuture = _props.disableFuture,
          other = objectWithoutProperties(_props, ['value', 'format', 'autoOk', 'onChange', 'animateYearScrolling', 'openToYearSelection', 'invalidLabel', 'leftArrowIcon', 'rightArrowIcon', 'renderDay', 'labelFunc', 'utils', 'shouldDisableDate', 'minDateMessage', 'maxDateMessage', 'minDate', 'maxDate', 'disablePast', 'disableFuture']);


      return React.createElement(
        ModalWrapper,
        _extends({
          ref: this.getRef,
          value: value,
          format: format$$1,
          onClear: this.handleClear,
          onAccept: this.handleAccept,
          onChange: this.handleTextFieldChange,
          onDismiss: this.handleDismiss,
          invalidLabel: invalidLabel,
          labelFunc: labelFunc,
          minDate: minDate,
          maxDate: maxDate,
          disablePast: disablePast,
          disableFuture: disableFuture,
          minDateMessage: minDateMessage,
          maxDateMessage: maxDateMessage
        }, other),
        React.createElement(DatePicker$1, {
          date: date,
          onChange: this.handleChange,
          animateYearScrolling: animateYearScrolling,
          openToYearSelection: openToYearSelection,
          leftArrowIcon: leftArrowIcon,
          rightArrowIcon: rightArrowIcon,
          renderDay: renderDay,
          utils: utils,
          minDate: minDate,
          maxDate: maxDate,
          disablePast: disablePast,
          disableFuture: disableFuture,
          shouldDisableDate: shouldDisableDate
        })
      );
    }
  }]);
  return DatePickerWrapper;
}(PickerBase);

DatePickerWrapper.propTypes = {
  /* Datepicker value */
  value: DomainPropTypes.date,
  /* Min selectable date */
  minDate: DomainPropTypes.date,
  /* Max selectable date */
  maxDate: DomainPropTypes.date,
  /* Moment format string for input */
  format: PropTypes.string,
  /* Callback firing when date accepted */
  onChange: PropTypes.func.isRequired,
  /* Auto accept date on selection */
  autoOk: PropTypes.bool,
  /* Disable past dates */
  disablePast: PropTypes.bool,
  /* Disable future dates */
  disableFuture: PropTypes.bool,
  /* To animate scrolling to current year (with scrollIntoView) */
  animateYearScrolling: PropTypes.bool,
  /* Open datepicker from year selection */
  openToYearSelection: PropTypes.bool,
  /* Displayed string if date can`t be parsed (or null) */
  invalidLabel: PropTypes.string,
  /* Allow to specify dynamic label for text field labelFunc(date, invalidLabel) */
  labelFunc: PropTypes.func,
  /* Left arrow icon */
  leftArrowIcon: PropTypes.node,
  /* Right arrow icon */
  rightArrowIcon: PropTypes.node,
  /* Custom renderer for day renderDay(date, selectedDate, dayInCurrentMonth) */
  renderDay: PropTypes.func,
  /* Date displaying utils */
  utils: PropTypes.func.isRequired,
  /* Disable specific date hook */
  shouldDisableDate: PropTypes.func
};
DatePickerWrapper.defaultProps = {
  value: new Date(),
  format: 'MMMM Do',
  autoOk: false,
  minDate: undefined,
  maxDate: undefined,
  disablePast: undefined,
  disableFuture: undefined,
  animateYearScrolling: undefined,
  openToYearSelection: undefined,
  invalidLabel: undefined,
  leftArrowIcon: undefined,
  rightArrowIcon: undefined,
  renderDay: undefined,
  labelFunc: undefined,
  shouldDisableDate: undefined
};
var index = withUtils()(DatePickerWrapper);

var ClockPointer = function (_Component) {
  inherits(ClockPointer, _Component);

  function ClockPointer() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, ClockPointer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = ClockPointer.__proto__ || Object.getPrototypeOf(ClockPointer)).call.apply(_ref, [this].concat(args))), _this), _this.getAngleStyle = function () {
      var _this$props = _this.props,
          value = _this$props.value,
          isInner = _this$props.isInner,
          max = _this$props.max;


      var angle = 360 / max * value;

      return {
        height: isInner ? '26%' : '40%',
        transform: 'rotateZ(' + angle + 'deg)'
      };
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(ClockPointer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          hasSelected = _props.hasSelected;


      return React.createElement(
        'div',
        {
          className: classes.pointer,
          style: this.getAngleStyle()
        },
        React.createElement('div', { className: classnames(classes.thumb, defineProperty({}, classes.noPoint, hasSelected)) })
      );
    }
  }]);
  return ClockPointer;
}(Component);

ClockPointer.propTypes = {
  classes: PropTypes.object.isRequired,
  value: PropTypes.number.isRequired,
  hasSelected: PropTypes.bool.isRequired,
  isInner: PropTypes.bool.isRequired,
  max: PropTypes.number.isRequired
};
var styles$11 = function styles(theme) {
  return {
    pointer: {
      width: 2,
      backgroundColor: theme.palette.primary.main,
      position: 'absolute',
      left: 'calc(50% - 1px)',
      bottom: '50%',
      transformOrigin: 'center bottom 0px'
    },
    thumb: {
      width: 4,
      height: 4,
      backgroundColor: theme.palette.common.white,
      borderRadius: '100%',
      position: 'absolute',
      top: -21,
      left: -15,
      border: '14px solid ' + theme.palette.primary.main,
      boxSizing: 'content-box'
    },
    noPoint: {
      backgroundColor: theme.palette.primary.main
    }
  };
};

var ClockPointer$1 = withStyles(styles$11, { name: 'MuiPickersClockPointer' })(ClockPointer);

var HOURS = 'hours';

var MINUTES = 'minutes';

var clockType = Object.freeze({
	HOURS: HOURS,
	MINUTES: MINUTES
});

var center = {
  x: 260 / 2,
  y: 260 / 2
};

var basePoint = {
  x: center.x,
  y: 0
};

var cx = basePoint.x - center.x;
var cy = basePoint.y - center.y;

var rad2deg = function rad2deg(rad) {
  return rad * 57.29577951308232;
};

var getAngleValue = function getAngleValue(step, offsetX, offsetY) {
  var x = offsetX - center.x;
  var y = offsetY - center.y;

  var atan = Math.atan2(cx, cy) - Math.atan2(x, y);

  var deg = rad2deg(atan);
  deg = Math.round(deg / step) * step;
  deg %= 360;

  var value = Math.floor(deg / step) || 0;
  // eslint-disable-next-line no-restricted-properties
  var delta = Math.pow(x, 2) + Math.pow(y, 2);
  var distance = Math.sqrt(delta);

  return { value: value, distance: distance };
};

var getHours$1 = function getHours$$1(offsetX, offsetY, ampm) {
  // eslint-disable-next-line
  var _getAngleValue = getAngleValue(30, offsetX, offsetY),
      value = _getAngleValue.value,
      distance = _getAngleValue.distance;

  value = value || 12;

  if (!ampm) {
    if (distance < 90) {
      value += 12;
      value %= 24;
    }
  } else {
    value %= 12;
  }

  return value;
};

var getMinutes = function getMinutes(offsetX, offsetY) {
  var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 6;

  var _getAngleValue2 = getAngleValue(step, offsetX, offsetY),
      value = _getAngleValue2.value;

  return value;
};

var convertToMeridiem = function convertToMeridiem(time, meridiem, ampm, utils) {
  if (ampm) {
    var currentMeridiem = utils.getHours(time) >= 12 ? 'pm' : 'am';
    if (currentMeridiem !== meridiem) {
      var hours = meridiem === 'am' ? utils.getHours(time) - 12 : utils.getHours(time) + 12;

      return utils.setHours(time, hours);
    }
  }

  return time;
};

var Clock = function (_Component) {
  inherits(Clock, _Component);

  function Clock() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Clock);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Clock.__proto__ || Object.getPrototypeOf(Clock)).call.apply(_ref, [this].concat(args))), _this), _this.handleTouchMove = function (e) {
      _this.isMoving = true;
      _this.setTime(e);
    }, _this.handleMouseUp = function (e) {
      if (_this.isMoving) {
        _this.isMoving = false;
      }
      _this.setTime(e.nativeEvent, true);
    }, _this.handleTouchEnd = function (e) {
      if (_this.isMoving) {
        _this.setTime(e.nativeEvent, true);
        _this.isMoving = false;
      }
    }, _this.handleMove = function (e) {
      e.preventDefault();
      e.stopPropagation();
      // MouseEvent.which is deprecated, but MouseEvent.buttons is not supported in Safari
      var isButtonPressed = typeof e.buttons === 'undefined' ? e.nativeEvent.which === 1 : e.buttons === 1;

      if (isButtonPressed) {
        _this.setTime(e.nativeEvent, false);
      }
    }, _this.hasSelected = function () {
      var _this$props = _this.props,
          type = _this$props.type,
          value = _this$props.value;


      if (type === HOURS) {
        return true;
      }

      return value % 5 === 0;
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Clock, [{
    key: 'setTime',
    value: function setTime(e) {
      var isFinish = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var offsetX = e.offsetX,
          offsetY = e.offsetY;


      if (typeof offsetX === 'undefined') {
        var rect = e.target.getBoundingClientRect();

        offsetX = e.changedTouches[0].clientX - rect.left;
        offsetY = e.changedTouches[0].clientY - rect.top;
      }

      var value = this.props.type === MINUTES ? getMinutes(offsetX, offsetY) : getHours$1(offsetX, offsetY, this.props.ampm);

      this.props.onChange(value, isFinish);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          value = _props.value,
          children = _props.children,
          type = _props.type,
          ampm = _props.ampm;


      var max = type === HOURS ? 12 : 60;
      var isPointerInner = !ampm && type === HOURS && (value < 1 || value > 12);

      return React.createElement(
        'div',
        { className: classes.container },
        React.createElement(
          'div',
          {
            className: classes.clock
          },
          React.createElement('div', {
            role: 'menu',
            tabIndex: -1,
            className: classes.squareMask,
            onTouchMove: this.handleTouchMove,
            onTouchEnd: this.handleTouchEnd,
            onMouseUp: this.handleMouseUp,
            onMouseMove: this.handleMove
          }),
          React.createElement(ClockPointer$1, {
            max: max,
            value: value,
            isInner: isPointerInner,
            hasSelected: this.hasSelected()
          }),
          children
        )
      );
    }
  }]);
  return Clock;
}(Component);

Clock.propTypes = {
  type: PropTypes.oneOf(Object.keys(clockType).map(function (key) {
    return clockType[key];
  })).isRequired,
  classes: PropTypes.object.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  ampm: PropTypes.bool
};
Clock.defaultProps = {
  ampm: false
};
var styles$10 = function styles(theme) {
  return {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      margin: [[theme.spacing.unit * 4, 0, theme.spacing.unit]]
    },
    clock: {
      backgroundColor: 'rgba(0,0,0,.07)',
      borderRadius: '50%',
      height: 260,
      width: 260,
      position: 'relative',
      pointerEvents: 'none'
    },
    squareMask: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      pointerEvents: 'auto',
      outline: 'none'
    }
  };
};

var Clock$1 = withStyles(styles$10, { name: 'MuiPickersClock' })(Clock);

var positions = {
  0: [0, 40],
  1: [55, 19.6],
  2: [94.4, 59.5],
  3: [109, 114],
  4: [94.4, 168.5],
  5: [54.5, 208.4],
  6: [0, 223],
  7: [-54.5, 208.4],
  8: [-94.4, 168.5],
  9: [-109, 114],
  10: [-94.4, 59.5],
  11: [-54.5, 19.6],
  12: [0, 5],
  13: [36.9, 49.9],
  14: [64, 77],
  15: [74, 114],
  16: [64, 151],
  17: [37, 178],
  18: [0, 188],
  19: [-37, 178],
  20: [-64, 151],
  21: [-74, 114],
  22: [-64, 77],
  23: [-37, 50]
};

var ClockNumber = function (_Component) {
  inherits(ClockNumber, _Component);

  function ClockNumber() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, ClockNumber);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = ClockNumber.__proto__ || Object.getPrototypeOf(ClockNumber)).call.apply(_ref, [this].concat(args))), _this), _this.getTransformStyle = function (index) {
      var position = positions[index];

      return {
        transform: 'translate(' + position[0] + 'px, ' + position[1] + 'px'
      };
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(ClockNumber, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          selected = _props.selected,
          label = _props.label,
          index = _props.index,
          classes = _props.classes,
          isInner = _props.isInner;


      var className = classnames(classes.clockNumber, defineProperty({}, classes.selected, selected));

      return React.createElement(
        Typography,
        {
          variant: isInner ? 'body1' : 'subheading',
          component: 'span',
          className: className,
          style: this.getTransformStyle(index, isInner)
        },
        label
      );
    }
  }]);
  return ClockNumber;
}(Component);

ClockNumber.propTypes = {
  index: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
  isInner: PropTypes.bool
};
ClockNumber.defaultProps = {
  isInner: false
};
var styles$12 = function styles(theme) {
  var size = theme.spacing.unit * 4;
  return {
    clockNumber: {
      width: size,
      height: size,
      position: 'absolute',
      left: 'calc(50% - ' + size / 2 + 'px)',
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50%',
      color: theme.palette.type === 'light' ? theme.palette.text.primary : theme.palette.text.hint
    },
    selected: {
      color: theme.palette.common.white
    }
  };
};

var ClockNumber$1 = withStyles(styles$12, { name: 'MuiPickersClockNumber' })(ClockNumber);

var HourView = function (_PureComponent) {
  inherits(HourView, _PureComponent);

  function HourView() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, HourView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = HourView.__proto__ || Object.getPrototypeOf(HourView)).call.apply(_ref, [this].concat(args))), _this), _this.getHourNumbers = function () {
      var _this$props = _this.props,
          ampm = _this$props.ampm,
          utils = _this$props.utils,
          date = _this$props.date;

      var currentHours = utils.getHours(date);

      var hourNumbers = [];
      var startHour = ampm ? 1 : 0;
      var endHour = ampm ? 12 : 23;

      var isSelected = function isSelected(hour) {
        if (ampm) {
          if (hour === 12) {
            return currentHours === 12 || currentHours === 0;
          }

          return currentHours === hour || currentHours - 12 === hour;
        }

        return currentHours === hour;
      };

      for (var hour = startHour; hour <= endHour; hour += 1) {
        var label = hour.toString();

        if (hour === 0) {
          label = '00';
        }

        var props = {
          index: hour,
          label: utils.formatNumber(label),
          selected: isSelected(hour),
          isInner: !ampm && (hour === 0 || hour > 12)
        };

        hourNumbers.push(React.createElement(ClockNumber$1, _extends({ key: hour }, props)));
      }

      return hourNumbers;
    }, _this.handleChange = function (hours, isFinish) {
      var _this$props2 = _this.props,
          date = _this$props2.date,
          utils = _this$props2.utils;

      var updatedTime = utils.setHours(date, hours);

      _this.props.onChange(updatedTime, isFinish);
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(HourView, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          date = _props.date,
          ampm = _props.ampm,
          utils = _props.utils;

      var value = utils.getHours(date);

      return React.createElement(
        Clock$1,
        {
          type: HOURS,
          value: value,
          ampm: ampm,
          onChange: this.handleChange
        },
        this.getHourNumbers()
      );
    }
  }]);
  return HourView;
}(PureComponent);

HourView.propTypes = {
  date: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  utils: PropTypes.func.isRequired,
  ampm: PropTypes.bool
};
HourView.defaultProps = {
  ampm: true
};
var HourView$1 = withUtils()(HourView);

var MinutesView = function (_Component) {
  inherits(MinutesView, _Component);

  function MinutesView() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, MinutesView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = MinutesView.__proto__ || Object.getPrototypeOf(MinutesView)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (minutes, isFinish) {
      var _this$props = _this.props,
          date = _this$props.date,
          utils = _this$props.utils;

      var updatedDate = utils.setMinutes(date, minutes);
      _this.props.onChange(updatedDate, isFinish);
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(MinutesView, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          date = _props.date,
          utils = _props.utils;


      var f = utils.formatNumber;
      var value = utils.getMinutes(date);

      return React.createElement(
        Clock$1,
        {
          type: MINUTES,
          onChange: this.handleChange,
          value: value
        },
        React.createElement(ClockNumber$1, { label: f('00'), selected: value === 0, index: 12 }),
        React.createElement(ClockNumber$1, { label: f('05'), selected: value === 5, index: 1 }),
        React.createElement(ClockNumber$1, { label: f('10'), selected: value === 10, index: 2 }),
        React.createElement(ClockNumber$1, { label: f('15'), selected: value === 15, index: 3 }),
        React.createElement(ClockNumber$1, { label: f('20'), selected: value === 20, index: 4 }),
        React.createElement(ClockNumber$1, { label: f('25'), selected: value === 25, index: 5 }),
        React.createElement(ClockNumber$1, { label: f('30'), selected: value === 30, index: 6 }),
        React.createElement(ClockNumber$1, { label: f('35'), selected: value === 35, index: 7 }),
        React.createElement(ClockNumber$1, { label: f('40'), selected: value === 40, index: 8 }),
        React.createElement(ClockNumber$1, { label: f('45'), selected: value === 45, index: 9 }),
        React.createElement(ClockNumber$1, { label: f('50'), selected: value === 50, index: 10 }),
        React.createElement(ClockNumber$1, { label: f('55'), selected: value === 55, index: 11 })
      );
    }
  }]);
  return MinutesView;
}(Component);

MinutesView.propTypes = {
  date: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  utils: PropTypes.func.isRequired
};
MinutesView.defaultProps = {};
var MinutesView$1 = withUtils()(MinutesView);

var TimePicker = function (_Component) {
  inherits(TimePicker, _Component);

  function TimePicker() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, TimePicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = TimePicker.__proto__ || Object.getPrototypeOf(TimePicker)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isHourViewShown: true,
      meridiemMode: _this.props.utils.getHours(_this.props.date) >= 12 ? 'pm' : 'am'
    }, _this.setMeridiemMode = function (mode) {
      return function () {
        _this.setState({ meridiemMode: mode }, function () {
          return _this.handleChange(_this.props.date, false, false);
        });
      };
    }, _this.handleHourChange = function (time, isFinish) {
      _this.handleChange(time, isFinish, true);
    }, _this.handleMinutesChange = function (time, isFinish) {
      _this.handleChange(time, isFinish, false);
    }, _this.openMinutesView = function () {
      _this.setState({ isHourViewShown: false });
    }, _this.openHourView = function () {
      _this.setState({ isHourViewShown: true });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(TimePicker, [{
    key: 'handleChange',
    value: function handleChange(time, isFinish, openMinutes) {
      var withMeridiem = convertToMeridiem(time, this.state.meridiemMode, this.props.ampm, this.props.utils);

      if (isFinish) {
        if (!openMinutes) {
          this.props.onChange(withMeridiem, isFinish);
          return;
        }

        this.openMinutesView();
      }

      this.props.onChange(withMeridiem, false);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          theme = _props.theme,
          date = _props.date,
          utils = _props.utils,
          ampm = _props.ampm;
      var _state = this.state,
          isHourViewShown = _state.isHourViewShown,
          meridiemMode = _state.meridiemMode;


      var rtl = theme.direction === 'rtl';
      var hourMinuteClassName = rtl ? classes.hourMinuteLabelReverse : classes.hourMinuteLabel;

      return React.createElement(
        Fragment,
        null,
        React.createElement(
          PickerToolbar$1,
          { className: classes.toolbar },
          React.createElement(
            'div',
            { className: hourMinuteClassName },
            React.createElement(ToolbarButton$1, {
              variant: 'display3',
              onClick: this.openHourView,
              selected: isHourViewShown,
              label: utils.getHourText(date, ampm)
            }),
            React.createElement(ToolbarButton$1, {
              variant: 'display3',
              label: ':',
              selected: false,
              className: classes.separator
            }),
            React.createElement(ToolbarButton$1, {
              variant: 'display3',
              onClick: this.openMinutesView,
              selected: !isHourViewShown,
              label: utils.getMinuteText(date)
            })
          ),
          ampm && React.createElement(
            'div',
            { className: classes.ampmSelection },
            React.createElement(ToolbarButton$1, {
              className: classes.ampmLabel,
              selected: meridiemMode === 'am',
              variant: 'subheading',
              label: utils.getMeridiemText('am'),
              onClick: this.setMeridiemMode('am')
            }),
            React.createElement(ToolbarButton$1, {
              className: classes.ampmLabel,
              selected: meridiemMode === 'pm',
              variant: 'subheading',
              label: utils.getMeridiemText('pm'),
              onClick: this.setMeridiemMode('pm')
            })
          )
        ),
        this.props.children,
        isHourViewShown ? React.createElement(HourView$1, {
          date: date,
          meridiemMode: meridiemMode,
          onChange: this.handleHourChange,
          utils: utils,
          ampm: ampm
        }) : React.createElement(MinutesView$1, {
          date: date,
          onChange: this.handleMinutesChange,
          utils: utils
        })
      );
    }
  }]);
  return TimePicker;
}(Component);

TimePicker.propTypes = {
  date: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  children: PropTypes.node,
  utils: PropTypes.func.isRequired,
  ampm: PropTypes.bool
};
TimePicker.defaultProps = {
  children: null,
  ampm: true
};
var styles$9 = function styles() {
  return {
    toolbar: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 50
    },
    separator: {
      margin: '0 4px 0 2px',
      cursor: 'default'
    },
    ampmSelection: {
      marginLeft: 20,
      marginRight: -20
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
    }
  };
};

var TimePicker$1 = withStyles(styles$9, { withTheme: true, name: 'MuiPickersTimePicker' })(withUtils()(TimePicker));

var TimePickerWrapper = function (_PickerBase) {
  inherits(TimePickerWrapper, _PickerBase);

  function TimePickerWrapper() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, TimePickerWrapper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = TimePickerWrapper.__proto__ || Object.getPrototypeOf(TimePickerWrapper)).call.apply(_ref, [this].concat(args))), _this), _this.default12hFormat = 'hh:mm A', _this.default24hFormat = 'HH:mm', _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(TimePickerWrapper, [{
    key: 'render',
    value: function render() {
      var date = this.state.date;
      var _props = this.props,
          value = _props.value,
          format$$1 = _props.format,
          autoOk = _props.autoOk,
          onChange = _props.onChange,
          invalidLabel = _props.invalidLabel,
          utils = _props.utils,
          ampm = _props.ampm,
          other = objectWithoutProperties(_props, ['value', 'format', 'autoOk', 'onChange', 'invalidLabel', 'utils', 'ampm']);


      return React.createElement(
        ModalWrapper,
        _extends({
          ref: this.getRef,
          value: value,
          format: this.getFormat(),
          onClear: this.handleClear,
          onAccept: this.handleAccept,
          onChange: this.handleTextFieldChange,
          onDismiss: this.handleDismiss,
          invalidLabel: invalidLabel
        }, other),
        React.createElement(TimePicker$1, {
          date: date,
          onChange: this.handleChange,
          utils: utils,
          ampm: ampm
        })
      );
    }
  }]);
  return TimePickerWrapper;
}(PickerBase);

TimePickerWrapper.propTypes = {
  value: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)]),
  format: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  autoOk: PropTypes.bool,
  invalidLabel: PropTypes.string,
  utils: PropTypes.func.isRequired,
  ampm: PropTypes.bool
};
TimePickerWrapper.defaultProps = {
  value: new Date(),
  format: undefined,
  autoOk: false,
  invalidLabel: undefined,
  ampm: true
};
var index$1 = withUtils()(TimePickerWrapper);

var DateTimePickerView = function DateTimePickerView(props) {
  var view = props.view,
      selected = props.selected,
      children = props.children,
      classes = props.classes;


  if (view !== selected) {
    return null;
  }

  return React.createElement(
    'div',
    { className: classnames(defineProperty({}, classes.hidden, view !== selected)) },
    children
  );
};

DateTimePickerView.propTypes = {
  view: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired
};

var styles$14 = {};

var View = withStyles(styles$14, { name: 'MuiPickerDTPickerView ' })(DateTimePickerView);

var YEAR = 'year';

var DATE = 'date';

var HOUR = 'hour';

var MINUTES$1 = 'minutes';

var viewType = Object.freeze({
	YEAR: YEAR,
	DATE: DATE,
	HOUR: HOUR,
	MINUTES: MINUTES$1
});

var viewToTabIndex = function viewToTabIndex(openView) {
  if (openView === DATE || openView === YEAR) {
    return 'date';
  }

  return 'time';
};

var tabIndexToView = function tabIndexToView(tab) {
  if (tab === 'date') {
    return DATE;
  }

  return HOUR;
};

var DateTimePickerTabs = function DateTimePickerTabs(props) {
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

var styles$15 = function styles(theme) {
  return {
    tabs: {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.type === 'light' ? theme.palette.primary.main : theme.palette.background.default
    }
  };
};

var DateTimePickerTabs$1 = withTheme()(withStyles(styles$15, { name: 'MuiPickerDTTabs' })(DateTimePickerTabs));

var DateTimePickerHeader = function DateTimePickerHeader(props) {
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
    PickerToolbar$1,
    { className: classes.toolbar },
    React.createElement(
      'div',
      { className: classes.dateHeader },
      React.createElement(ToolbarButton$1, {
        variant: 'subheading',
        onClick: changeOpenView(YEAR),
        selected: openView === YEAR,
        label: utils.getYearText(date)
      }),
      React.createElement(ToolbarButton$1, {
        variant: 'display1',
        onClick: changeOpenView(DATE),
        selected: openView === DATE,
        label: utils.getDateTimePickerHeaderText(date)
      })
    ),
    React.createElement(
      'div',
      { className: classes.timeHeader },
      React.createElement(
        'div',
        { className: hourMinuteClassName },
        React.createElement(ToolbarButton$1, {
          variant: 'display2',
          onClick: changeOpenView(HOUR),
          selected: openView === HOUR,
          label: utils.getHourText(date, ampm)
        }),
        React.createElement(ToolbarButton$1, {
          variant: 'display2',
          label: ':',
          selected: false,
          className: classes.separator
        }),
        React.createElement(ToolbarButton$1, {
          variant: 'display2',
          onClick: changeOpenView(MINUTES$1),
          selected: openView === MINUTES$1,
          label: utils.getMinuteText(date)
        })
      ),
      ampm && React.createElement(
        'div',
        { className: classes.ampmSelection },
        React.createElement(ToolbarButton$1, {
          className: classes.ampmLabel,
          selected: meridiemMode === 'am',
          type: 'subheading',
          label: utils.getMeridiemText('am'),
          onClick: setMeridiemMode('am')
        }),
        React.createElement(ToolbarButton$1, {
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

var styles$16 = function styles() {
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

var DatetimePickerHeader = withStyles(styles$16, { withTheme: true })(withUtils()(DateTimePickerHeader));

var DateTimePicker = function (_Component) {
  inherits(DateTimePicker, _Component);

  function DateTimePicker() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, DateTimePicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = DateTimePicker.__proto__ || Object.getPrototypeOf(DateTimePicker)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      openView: _this.props.openTo,
      meridiemMode: _this.props.utils.getHours(_this.props.date) >= 12 ? 'pm' : 'am'
    }, _this.onChange = function (time) {
      var isFinish = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var nextView = arguments[2];

      _this.handleChange(time);

      if (isFinish && _this.props.autoSubmit) {
        _this.handleViewChange(nextView);
      }
    }, _this.setMeridiemMode = function (mode) {
      return function () {
        _this.setState({ meridiemMode: mode }, function () {
          return _this.handleChange(_this.props.date, false);
        });
      };
    }, _this.handleViewChange = function (view) {
      _this.setState({ openView: view });
    }, _this.handleChange = function (time) {
      var isFinish = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var withMeridiem = convertToMeridiem(time, _this.state.meridiemMode, _this.props.ampm, _this.props.utils);
      _this.props.onChange(withMeridiem, isFinish);
    }, _this.handleYearChange = function (date, isFinish) {
      _this.onChange(date, isFinish, DATE);
    }, _this.handleDayChange = function (date, isFinish) {
      _this.onChange(date, isFinish, HOUR);
    }, _this.handleHourChange = function (time, isFinish) {
      _this.onChange(time, isFinish, MINUTES$1);
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(DateTimePicker, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          openView = _state.openView,
          meridiemMode = _state.meridiemMode;
      var _props = this.props,
          date = _props.date,
          minDate = _props.minDate,
          maxDate = _props.maxDate,
          showTabs = _props.showTabs,
          disablePast = _props.disablePast,
          disableFuture = _props.disableFuture,
          leftArrowIcon = _props.leftArrowIcon,
          rightArrowIcon = _props.rightArrowIcon,
          dateRangeIcon = _props.dateRangeIcon,
          timeIcon = _props.timeIcon,
          renderDay = _props.renderDay,
          utils = _props.utils,
          ampm = _props.ampm,
          shouldDisableDate = _props.shouldDisableDate,
          animateYearScrolling = _props.animateYearScrolling;


      return React.createElement(
        Fragment,
        null,
        React.createElement(DatetimePickerHeader, {
          date: date,
          openView: openView,
          meridiemMode: meridiemMode,
          setMeridiemMode: this.setMeridiemMode,
          onOpenViewChange: this.handleViewChange,
          utils: utils,
          ampm: ampm
        }),
        showTabs && React.createElement(DateTimePickerTabs$1, {
          view: openView,
          onChange: this.handleViewChange,
          dateRangeIcon: dateRangeIcon,
          timeIcon: timeIcon
        }),
        React.createElement(
          View,
          { view: YEAR, selected: openView },
          React.createElement(YearSelection$1, {
            date: date,
            minDate: minDate,
            maxDate: maxDate,
            onChange: this.handleYearChange,
            disablePast: disablePast,
            disableFuture: disableFuture,
            utils: utils,
            animateYearScrolling: animateYearScrolling
          })
        ),
        React.createElement(
          View,
          { view: DATE, selected: openView },
          React.createElement(Calendar$1, {
            date: date,
            minDate: minDate,
            maxDate: maxDate,
            onChange: this.handleDayChange,
            disablePast: disablePast,
            disableFuture: disableFuture,
            leftArrowIcon: leftArrowIcon,
            rightArrowIcon: rightArrowIcon,
            renderDay: renderDay,
            utils: utils,
            shouldDisableDate: shouldDisableDate
          })
        ),
        React.createElement(
          View,
          { view: HOUR, selected: openView },
          React.createElement(HourView$1, {
            date: date,
            meridiemMode: meridiemMode,
            onChange: this.handleHourChange,
            utils: utils,
            ampm: ampm
          })
        ),
        React.createElement(
          View,
          { view: MINUTES$1, selected: openView },
          React.createElement(MinutesView$1, {
            date: date,
            onChange: this.handleChange,
            utils: utils
          })
        )
      );
    }
  }]);
  return DateTimePicker;
}(Component);

DateTimePicker.propTypes = {
  date: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  autoSubmit: PropTypes.bool,
  openTo: PropTypes.oneOf(Object.keys(viewType).map(function (key) {
    return viewType[key];
  })),
  disablePast: PropTypes.bool,
  disableFuture: PropTypes.bool,
  minDate: DomainPropTypes.date,
  maxDate: DomainPropTypes.date,
  showTabs: PropTypes.bool,
  leftArrowIcon: PropTypes.node,
  rightArrowIcon: PropTypes.node,
  dateRangeIcon: PropTypes.node,
  timeIcon: PropTypes.node,
  renderDay: PropTypes.func,
  utils: PropTypes.func.isRequired,
  ampm: PropTypes.bool,
  shouldDisableDate: PropTypes.func,
  animateYearScrolling: PropTypes.bool
};
DateTimePicker.defaultProps = {
  minDate: '1900-01-01',
  maxDate: '2100-01-01',
  autoSubmit: true,
  openTo: DATE,
  disablePast: false,
  disableFuture: false,
  showTabs: true,
  leftArrowIcon: undefined,
  rightArrowIcon: undefined,
  dateRangeIcon: undefined,
  timeIcon: undefined,
  renderDay: undefined,
  ampm: true,
  shouldDisableDate: undefined,
  animateYearScrolling: false
};
var DateTimePicker$1 = withUtils()(DateTimePicker);

var DateTimePickerWrapper = function (_PickerBase) {
  inherits(DateTimePickerWrapper, _PickerBase);

  function DateTimePickerWrapper() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, DateTimePickerWrapper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = DateTimePickerWrapper.__proto__ || Object.getPrototypeOf(DateTimePickerWrapper)).call.apply(_ref, [this].concat(args))), _this), _this.default12hFormat = 'MMMM Do hh:mm a', _this.default24hFormat = 'MMMM Do HH:mm', _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(DateTimePickerWrapper, [{
    key: 'render',
    value: function render() {
      var date = this.state.date;
      var _props = this.props,
          value = _props.value,
          format$$1 = _props.format,
          autoOk = _props.autoOk,
          openTo = _props.openTo,
          classes = _props.classes,
          minDate = _props.minDate,
          maxDate = _props.maxDate,
          showTabs = _props.showTabs,
          autoSubmit = _props.autoSubmit,
          disablePast = _props.disablePast,
          disableFuture = _props.disableFuture,
          invalidLabel = _props.invalidLabel,
          leftArrowIcon = _props.leftArrowIcon,
          rightArrowIcon = _props.rightArrowIcon,
          dateRangeIcon = _props.dateRangeIcon,
          timeIcon = _props.timeIcon,
          renderDay = _props.renderDay,
          labelFunc = _props.labelFunc,
          utils = _props.utils,
          ampm = _props.ampm,
          shouldDisableDate = _props.shouldDisableDate,
          animateYearScrolling = _props.animateYearScrolling,
          other = objectWithoutProperties(_props, ['value', 'format', 'autoOk', 'openTo', 'classes', 'minDate', 'maxDate', 'showTabs', 'autoSubmit', 'disablePast', 'disableFuture', 'invalidLabel', 'leftArrowIcon', 'rightArrowIcon', 'dateRangeIcon', 'timeIcon', 'renderDay', 'labelFunc', 'utils', 'ampm', 'shouldDisableDate', 'animateYearScrolling']);


      return React.createElement(
        ModalWrapper,
        _extends({
          ref: this.getRef,
          value: value,
          format: this.getFormat(),
          onAccept: this.handleAccept,
          onChange: this.handleTextFieldChange,
          onDismiss: this.handleDismiss,
          onClear: this.handleClear,
          dialogContentClassName: classes.dialogContent,
          invalidLabel: invalidLabel,
          labelFunc: labelFunc,
          minDate: minDate,
          maxDate: maxDate,
          disablePast: disablePast,
          disableFuture: disableFuture
        }, other),
        React.createElement(DateTimePicker$1, {
          date: date,
          openTo: openTo,
          autoSubmit: autoSubmit,
          onChange: this.handleChange,
          disablePast: disablePast,
          disableFuture: disableFuture,
          minDate: minDate,
          maxDate: maxDate,
          showTabs: showTabs,
          leftArrowIcon: leftArrowIcon,
          rightArrowIcon: rightArrowIcon,
          dateRangeIcon: dateRangeIcon,
          timeIcon: timeIcon,
          renderDay: renderDay,
          utils: utils,
          ampm: ampm,
          shouldDisableDate: shouldDisableDate,
          animateYearScrolling: animateYearScrolling
        })
      );
    }
  }]);
  return DateTimePickerWrapper;
}(PickerBase);

DateTimePickerWrapper.propTypes = {
  value: DomainPropTypes.date,
  format: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  autoOk: PropTypes.bool,
  classes: PropTypes.object.isRequired,
  autoSubmit: PropTypes.bool,
  disableFuture: PropTypes.bool,
  openTo: PropTypes.string,
  minDate: DomainPropTypes.date,
  maxDate: DomainPropTypes.date,
  showTabs: PropTypes.bool,
  invalidLabel: PropTypes.string,
  leftArrowIcon: PropTypes.node,
  rightArrowIcon: PropTypes.node,
  dateRangeIcon: PropTypes.node,
  timeIcon: PropTypes.node,
  renderDay: PropTypes.func,
  labelFunc: PropTypes.func,
  utils: PropTypes.func.isRequired,
  ampm: PropTypes.bool,
  shouldDisableDate: PropTypes.func,
  animateYearScrolling: PropTypes.bool
};
DateTimePickerWrapper.defaultProps = {
  value: new Date(),
  format: undefined,
  autoOk: false,
  autoSubmit: undefined,
  openTo: undefined,
  disableFuture: undefined,
  minDate: undefined,
  maxDate: undefined,
  showTabs: true,
  invalidLabel: undefined,
  leftArrowIcon: undefined,
  rightArrowIcon: undefined,
  dateRangeIcon: undefined,
  timeIcon: undefined,
  renderDay: undefined,
  labelFunc: undefined,
  ampm: true,
  shouldDisableDate: undefined,
  animateYearScrolling: false
};
var styles$13 = {
  dialogContent: {
    width: 310
  }
};

var index$2 = withStyles(styles$13, { name: 'MuiPickerDTPickerModal' })(withUtils()(DateTimePickerWrapper));

var MuiPickersUtilsProvider = function (_PureComponent) {
  inherits(MuiPickersUtilsProvider, _PureComponent);

  function MuiPickersUtilsProvider() {
    classCallCheck(this, MuiPickersUtilsProvider);
    return possibleConstructorReturn(this, (MuiPickersUtilsProvider.__proto__ || Object.getPrototypeOf(MuiPickersUtilsProvider)).apply(this, arguments));
  }

  createClass(MuiPickersUtilsProvider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        muiPickersDateUtils: this.props.utils
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);
  return MuiPickersUtilsProvider;
}(PureComponent);

MuiPickersUtilsProvider.propTypes = {
  utils: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired
};
MuiPickersUtilsProvider.childContextTypes = {
  muiPickersDateUtils: PropTypes.func
};

var DateFnsUtils = function () {
  function DateFnsUtils() {
    classCallCheck(this, DateFnsUtils);
  }

  createClass(DateFnsUtils, null, [{
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

var MomentUtils = function () {
  function MomentUtils() {
    classCallCheck(this, MomentUtils);
  }

  createClass(MomentUtils, null, [{
    key: 'date',
    value: function date(value, formatString) {
      return moment(value, formatString);
    }
  }, {
    key: 'isValid',
    value: function isValid$$1(date) {
      return date.isValid();
    }
  }, {
    key: 'isNull',
    value: function isNull(date) {
      return date.parsingFlags().nullInput;
    }
  }, {
    key: 'isAfter',
    value: function isAfter$$1(date, value) {
      return date.isAfter(value);
    }
  }, {
    key: 'isBefore',
    value: function isBefore$$1(date, value) {
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
    value: function startOfDay$$1(date) {
      return date.startOf('day');
    }
  }, {
    key: 'endOfDay',
    value: function endOfDay$$1(date) {
      return date.endOf('day');
    }
  }, {
    key: 'format',
    value: function format$$1(date, formatString) {
      return date.format(formatString);
    }
  }, {
    key: 'formatNumber',
    value: function formatNumber(num) {
      return num;
    }
  }, {
    key: 'getHours',
    value: function getHours$$1(date) {
      return date.get('hours');
    }
  }, {
    key: 'addDays',
    value: function addDays$$1(date, count) {
      return count < 0 ? date.clone().subtract(Math.abs(count), 'days') : date.clone().add(count, 'days');
    }
  }, {
    key: 'setHours',
    value: function setHours$$1(date, value) {
      return date.clone().hours(value);
    }
  }, {
    key: 'getMinutes',
    value: function getMinutes(date) {
      return date.get('minutes');
    }
  }, {
    key: 'setMinutes',
    value: function setMinutes$$1(date, value) {
      return date.clone().minutes(value);
    }
  }, {
    key: 'getMonth',
    value: function getMonth(date) {
      return date.get('month');
    }
  }, {
    key: 'isSameDay',
    value: function isSameDay$$1(date, comparing) {
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
    value: function getYear$$1(date) {
      return date.get('year');
    }
  }, {
    key: 'setYear',
    value: function setYear$$1(date, year) {
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
    value: function isEqual$$1(value, comparing) {
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

export { index as DatePicker, index$1 as TimePicker, index$2 as DateTimePicker, MuiPickersUtilsProvider, DateFnsUtils as dateFnsUtils, MomentUtils as momentUtils };
//# sourceMappingURL=material-ui-pickers.es.js.map
