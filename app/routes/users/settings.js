import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    var setting = this.store.findAll('setting');
    return setting;
  },
  actions:{
    save(model) {
      model.save().then(function(){
          $('#response .alert-success').show().delay(1500).hide(1000);
      });
    }
  }
});
