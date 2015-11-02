var React = require('react');
var componentMixin = require('../core/component-mixin');
var template = require('../util/template.js');

var CardItem = React.createClass({
  componentDidMount: function() {
    this.props.card.on('change', function() {
      this.forceUpdate();
    }, this);
  },
  componentWillUnmount: function() {
    this.props.card.off('change');
  },
  render: function() {
    // TODO: JSX를 대체할 더 명확한 방법이 필요..
    return (
      React.createElement('div', {className: 'swiper-slide'},
          React.createElement('div', null, this.props.card.get('title')),
          React.createElement('div', null, this.props.card.get('description'))
      )
    );
  }
});

module.exports = CardItem;