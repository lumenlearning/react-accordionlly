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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var AccordionBody = (function (_Component) {
  _inherits(AccordionBody, _Component);

  function AccordionBody(props, refs) {
    _classCallCheck(this, AccordionBody);

    _get(Object.getPrototypeOf(AccordionBody.prototype), 'constructor', this).call(this, props, refs);
    this.state = {
      maxHeight: props.expanded ? 'none' : 0,
      overflow: props.expanded ? 'visible' : 'hidden',
      transition: 'max-height .3s ease'
    };
  }

  _createClass(AccordionBody, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this = this;

      this.setMaxHeight();

      // Set initial overflow value to visible if section is expanded
      if (this.props.expanded) {
        this.setState({ overflow: 'visible' });
      }

      // Listen for transition to end before setting overflow
      var bodyNode = _reactDom2['default'].findDOMNode(this.refs.body);

      bodyNode.addEventListener('transitionend', function () {
        _this.setState({
          overflow: _this.props.expanded ? 'visible' : 'hidden'
        });
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.expanded !== this.props.expanded) {
        this.setMaxHeight();
      }
    }
  }, {
    key: 'setMaxHeight',
    value: function setMaxHeight() {
      var bodyNode = _reactDom2['default'].findDOMNode(this.refs.body);

      this.setState({
        maxHeight: this.props.expanded ? bodyNode.scrollHeight + 'px' : 0,
        overflow: 'hidden'
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        {
          'aria-labelledby': 'react-accordionlly-section-title-' + this.props.reactKey,
          className: 'react-accordionlly-section-body',
          id: 'react-accordionlly-section-body-' + this.props.reactKey,
          style: this.state,
          ref: 'body'
        },
        _react2['default'].createElement(
          'div',
          { className: 'react-accordionlly-section-body-wrapper' },
          this.props.children
        )
      );
    }
  }]);

  return AccordionBody;
})(_react.Component);

exports['default'] = AccordionBody;
module.exports = exports['default'];