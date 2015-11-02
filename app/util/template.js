var $ = require('jquery');

function load(name) {
  $.ajax({ url: '/template/' + name + '.html' })
    .done(function(data) {
      window.localStorage.setItem('template-' + name, data);
    });
}

function render(name) {
  return window.localStorage.getItem('template-' + name);
}

module.exports = {
  load: load,
  render: render
};