import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin,{
  model(){
    return Ember.RSVP.hash({
      clients: this.store.findAll('client'),
      appointment: {}
    });
  },
  actions:{
    save(model) {
      const newAppointment = this.store.createRecord('appointment', model.appointment);
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
  display('error');
};

function display(result) {
  var div;
  if(result == 'error') {
    div = $("#response .alert-danger");
  }
  if(result == 'ok') {
    div = $("#response .alert-success");
  }

  div.show().delay(1500).hide(1000);
}
