var _ = require('underscore');
var React = require('react');
var componentMixin = require('../core/component-mixin');
var template = require('../util/template.js');

var CardItem = require('./card-item.js');

var CardView = React.createClass({
  render: function() {
    var listItems = this.props.cards.map(function(item){
      return React.createElement(CardItem, {card:item});
    });

    return (
      React.createElement('div', {className: 'swiper-container'},
        React.createElement('div', {className: 'swiper-wrapper'},
          listItems
        )
      )
    );
  }
});

module.exports = CardView;