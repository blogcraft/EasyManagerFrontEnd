import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model(){
    return {};
  },
  actions:{
    save(model) {
      const newClient = this.store.createRecord('client', model);
      newClient.save().then((client)=>{this.transitionTo('clients.show', client);});
    },
    cancel(){
      this.transitionTo('clients');
    }
  }
});
