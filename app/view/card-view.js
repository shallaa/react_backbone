var _ = require('underscore');
var React = require('react');
var componentMixin = require('../core/component-mixin');
var template = require('../util/template.js');

var CardItem = require('./card-item.js');

var CardView = React.createClass({
  componentDidMount: function() {
    this.props.cards.on('change', function() {
      this.forceUpdate();
    }, this);
  },
  componentWillUnmount: function() {
    this.props.cards.off('change');
  },
  render: function() {
    var listItems = this.props.cards.map(function(item){
      return React.createElement(CardItem, {card:item});
    });

    return React.createElement('div', null, listItems);
  }
});

module.exports = CardView;