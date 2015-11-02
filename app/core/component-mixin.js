module.exports = {
  componentDidMount: function() {
    this.getBackboneCollections().forEach(function(collection) {
      collection.on('add remove change', this.forceUpdate.bind(this, null));
    }, this);
  },
  componentWillUnmount: function() {
    this.getBackboneCollections().forEach(function(collection) {
      collection.off(null, null, this);
    }, this);
  }
};