export default DS.JSONAPISerializer.extend({
  attrs: {
    date: "date",
    paid: "paid",
    subtotal: "subtotal",
    taxable: "taxable",
    taxrate: "taxrate",
    taxdue: "taxdue",
    other: "other",
    total: "total"
  },
  keyForAttribute: function(attr) {
    return Ember.String.underscore(attr);
  },
  serializeAttribute: function(snapshot, json, key, attributes) {
    json = json || {};
    this._super(snapshot, json, key, attributes);
  }
});
