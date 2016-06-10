import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model(params) {
    const id = params.client_id;

    return this.store.find('client', id);
  },
  actions:{
    save(model) {
      model.save().then((client)=>{this.transitionTo('clients.show', client);});
    },
    cancel(){
      this.transitionTo('clients');
    }
  }
});
