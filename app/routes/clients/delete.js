import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model(params) {
    const id = params.client_id;

    return this.store.find('client', id);
  },
  actions:{
    delete(model) {
      let _this = this;
        model.destroyRecord()
        .then(() => {
          _this.transitionTo('clients');
        });
    },
    cancel(){
      this.transitionTo('clients');
    }
  }
});
