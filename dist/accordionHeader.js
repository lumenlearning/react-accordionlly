'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var AccordionHeader = (function (_Component) {
  _inherits(AccordionHeader, _Component);

  function AccordionHeader() {
    _classCallCheck(this, AccordionHeader);

    _get(Object.getPrototypeOf(AccordionHeader.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(AccordionHeader, [{
    key: 'hr',
    value: function hr() {
      if (this.props.dividers) {
        return this.props.reactKey !== 0 ? _react2['default'].createElement('hr', null) : null;
      } else {
        return null;
      }
    }
  }, {
    key: 'setHeaderTag',
    value: function setHeaderTag() {
      var hTag = '';

      if (!this.props.hTag) {
        hTag = _react2['default'].createElement(
          'h3',
          this.returnHeaderProps(),
          this.props.title
        );
      }

      if (this.props.hTag === 'h1') {
        hTag = _react2['default'].createElement(
          'h1',
          this.returnHeaderProps(),
          this.props.title
        );
      } else if (this.props.hTag === 'h2') {
        hTag = _react2['default'].createElement(
          'h2',
          this.returnHeaderProps(),
          this.props.title
        );
      } else if (this.props.hTag === 'h3') {
        hTag = _react2['default'].createElement(
          'h3',
          this.returnHeaderProps(),
          this.props.title
        );
      } else if (this.props.hTag === 'h4') {
        hTag = _react2['default'].createElement(
          'h4',
          this.returnHeaderProps(),
          this.props.title
        );
      } else if (this.props.hTag === 'h5') {
        hTag = _react2['default'].createElement(
          'h5',
          this.returnHeaderProps(),
          this.props.title
        );
      } else if (this.props.hTag === 'h6') {
        hTag = _react2['default'].createElement(
          'h6',
          this.returnHeaderProps(),
          this.props.title
        );
      }

      return hTag;
    }
  }, {
    key: 'returnHeaderProps',
    value: function returnHeaderProps() {
      var props = {
        'aria-controls': 'react-accordionlly-section-body-' + this.props.reactKey,
        'className': "react-accordionlly-section-title",
        'id': 'react-accordionlly-section-title-' + this.props.reactKey
      };

      return props;
    }
  }, {
    key: 'render',
    value: function render() {
      var arrowToggle = {
        transform: this.props.expanded ? 'rotate(90deg)' : 'none',
        transition: 'transform .3s ease'
      };

      console.log(this.props);

      return _react2['default'].createElement(
        'div',
        { style: { display: 'block' } },
        this.hr(),
        _react2['default'].createElement(
          'div',
          {
            onClick: this.props.onClick,
            className: 'react-accordionlly-section-title-wrapper'
          },
          this.setHeaderTag(),
          _react2['default'].createElement('div', { className: 'space' }),
          _react2['default'].createElement(
            'div',
            {
              className: "react-accordionlly-section-title-toggle-indicator",
              style: arrowToggle
            },
            '❯'
          )
        )
      );
    }
  }]);

  return AccordionHeader;
})(_react.Component);

exports['default'] = AccordionHeader;
module.exports = exports['default'];