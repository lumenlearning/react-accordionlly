'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _accordionWrapperJsx = require('./accordionWrapper.jsx');

var _accordionWrapperJsx2 = _interopRequireDefault(_accordionWrapperJsx);

var _accordionSectionJsx = require('./accordionSection.jsx');

var _accordionSectionJsx2 = _interopRequireDefault(_accordionSectionJsx);

require('./styles/styles.css');

exports['default'] = { Accordion: _accordionWrapperJsx2['default'], AccordionSection: _accordionSectionJsx2['default'] };
module.exports = exports['default'];