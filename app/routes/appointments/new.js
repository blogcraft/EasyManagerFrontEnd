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
      newAppointment.save().then((appointment)=>{this.transitionTo('appointments');});
    },
    cancel(){
      this.transitionTo('appointments');
    }
  }
});
