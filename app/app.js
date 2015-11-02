require('backbone');
require('react');

var $ = require('jquery');
var _ = require('underscore');
var Q = require('q');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

var TemplateList = require('./config/template.json');
var Template = require('./util/template');
var Url = require('./constants/api.js');

var CardView = require('./view/card-view.js');
var Card = require('./model/card.js');

$(function app() {
  Q.all(TemplateList.map(function(template) { return Template.load(template.name); }))
    .done(function() {
      var tempCollections = new Backbone.Collection();

      $.ajax(Url.URI.SampleData).done(function(data) {
        var cardList = data.cardList;
        var card;

        _.each(cardList, function(cardData) {
          card = new Card(cardData);
          tempCollections.add(card);
        }, this);

        ReactDOM.render(
          React.createElement(CardView, {cards: tempCollections}),
          document.getElementById('app')
        );
      });
    });
});