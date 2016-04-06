import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  tagName: '',
  clientSelected: null,
  clients: Ember.computed('clients', function() {
    return this.get('clients');
  }),
  actions: {
    selectClient(clientId) {
      this.set('client', clientId);
    }
  }
});
