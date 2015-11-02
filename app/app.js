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

var CardView = require('./view/card-view.js');

$(function app() {
  Q.all(TemplateList.map(function(template) {
      template.source = Template.load(template.name);
      return template;
    }))
    .done(function() {
      var tempCollections = new Backbone.Collection();

      ReactDOM.render(
        <CardView cards={tempCollections} />,
        document.getElementById('app')
      );
    });
});