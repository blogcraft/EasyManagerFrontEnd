import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model(params) {
    return this.store.find('appointment', params.appointment_id);
  },
  setupController: function(controller, model){
    this._super(controller,model);
    controller.set('model2', this.store.findAll('client'));
  },
  actions:{
    save(model) {
      if (!model.clientId) {
        return;
      }
      model.save().then(()=>{this.transitionTo('appointments');});
    },
    cancel(){
      this.transitionTo('appointments');
    }
  }
});
