import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    return this.store.find('user', 'me');
  },
  actions:{
    save(model) {
    //  model.set('name', model.get('firstName'));
      model.save().then(function(){
          display('ok');
      });
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

  div.show().delay(1500).hide(1000);
}
