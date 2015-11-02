var React = require('react');
var componentMixin = require('../core/component-mixin');
var template = require('../util/template.js');

var CardItem = React.createClass({
  render: function() {
    // TODO: JSX를 대체할 더 명확한 방법이 필요..
    return React.createElement('div', { card: this.props.card }, template.render('card'));
  }
});

module.exports = CardItem;