var Backbone = require('backbone');

var Card = Backbone.Model.extend({
  defaults: {
    'title': 'no title',
    'description': 'no description'
  }
});

module.exports = Card;