var React = require('react');
var componentMixin = require('../core/component-mixin');
var template = require('../util/template.js');

var CardView = React.createClass({
  mixins: [componentMixin],
  getBackboneCollections: function() {
    return [this.props.cards];
  },
  render: function() {
    return (
      //template.render('card')
      <div>test. this. is. react</div>
    );
  }
});

module.exports = CardView;