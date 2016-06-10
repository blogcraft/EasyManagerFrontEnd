import Ember from 'ember';

export default Ember.Component.extend({
  clientId: Ember.computed('clientId', function() {
    return this.get('clientId');
  }),
  client: null,
  clients: Ember.computed('clients', function() {
    return this.get('clients');
  }),
  actions: {
    selectClient(clientId) {
      this.set('clientId', clientId);
    }
  }
});
