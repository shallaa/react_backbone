var $ = require('jquery');

function load(name) {
  var source;

  $.ajax({ url: '/template/' + name + '.html' })
    .done(function(data) {
      source = data;
      window.localStorage.setItem('template-' + name, data);
    });

  return source;
}

function render(name) {
  return window.localStorage.getItem('template-' + name) ||
    _.findWhere(require('../config/template.json'), { name: name }).source;
}

module.exports = {
  load: load,
  render: render
};