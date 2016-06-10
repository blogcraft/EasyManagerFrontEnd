import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin,{
  model(){
    return Ember.RSVP.hash({
      clients: this.store.findAll('client'),
      datetime: moment()
    });
  },
  actions:{
    save(model) {
      if (!model.clientId) {
        return;
      }
      const newAppointment = this.store.createRecord('appointment', model);
      newAppointment.save().then(function(){
        display('ok');
      });
      model = {};
    },
    cancel(){
      this.transitionTo('appointments');
    }
  }
});

Ember.onerror = function (error) {
  display(error);
};

function display(result) {
  var div;
  if(result === 'error') {
    div = Ember.$("#response .alert-danger");
  }
  if(result === 'ok') {
    div = Ember.$("#response .alert-success");
  }
  if (div) {
    div.show().delay(1500).hide(1000);
  }
}
