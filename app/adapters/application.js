import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  host: 'http://localhost:3000',
  authorizer: 'authorizer:devise',

  headers: Ember.computed('session', function() {
    return {
      "access-token": this.get('session.data.authenticated.accessToken'),
      "uid": this.get('session.data.authenticated.uid'),
      "expiry": this.get('session.data.authenticated.expiry'),
      "token-type": this.get('session.data.authenticated.tokenType'),
      "client": this.get('session.data.authenticated.client')
    };
  })
});
