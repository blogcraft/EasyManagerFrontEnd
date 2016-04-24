import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    return this.store.findAll('setting');
  },
  actions: {
    save() {
      var post_data = [];

      $('input').each(function(){
        post_data.push({"id": $(this).attr('name'), "value": $(this).val()});
      });

      $.ajax({
        url: 'http://localhost:3000/settings/other',
        type: 'POST',
        data: {data: post_data},
        success: function(data){
          display('ok');
        },
        error: function(e) {
          display('error');
        }
      });
    }
  }
});

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
