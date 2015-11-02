var Backbone = require('backbone');

var Card = require('../model/card.js');

var Cards = Backbone.Collection.extend({
  model: Card
});

module.exports = Cards;