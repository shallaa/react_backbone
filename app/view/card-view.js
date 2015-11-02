var React = require('react');
var componentMixin = require('../core/component-mixin');
var template = require('../util/template.js');

var CardView = React.createClass({
  mixins: [componentMixin],
  getBackboneCollections: function() {
    return [this.props.cards];
  },
  render: function() {
    return React.DOM.div(null, template.render('card'));
  }
});

module.exports = CardView;