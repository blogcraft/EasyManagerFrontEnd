export default DS.JSONAPISerializer.extend({
  attrs: {
    firstName: "name",
    lastName: "last_name"
  },
  keyForAttribute: function(attr) {
    return Ember.String.underscore(attr);
  },
  serializeAttribute: function(snapshot, json, key, attributes) {
    json = json || {};
    this._super(snapshot, json, key, attributes);
  }
});
