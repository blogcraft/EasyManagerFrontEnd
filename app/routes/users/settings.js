import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    return this.store.findAll('setting');
  },
  actions: {
    save() {
      var post_data = [];

      Ember.$('input').each(function(){
        post_data.push({"id": Ember.$(this).attr('name'), "value": Ember.$(this).val()});
      });

      Ember.$.ajax({
        url: 'http://localhost:3000/settings/bulk_update',
        type: 'POST',
        data: {data: post_data},
        success: function(){
          display('ok');
        },
        error: function() {
          display('error');
        }
      });
    }
  }
});

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
