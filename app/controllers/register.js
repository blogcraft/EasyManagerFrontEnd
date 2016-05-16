import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    register: function() {

      var data, _this;
      _this = this;
      data = this.getProperties("first_name", "email", "password", "password_confirmation");

      return Ember.$.ajax({
        method: "POST",
        url: "http://localhost:3000/auth",
        dataType: 'json',
        data: data
      }).then((() => {
        return Ember.run((() => {
          console.log("Registration Suceeded!");
          _this.transitionToRoute('confirm');
        }));
      }), (function(xhr, status, error) {
        console.log(status);
        console.log(error);
        return Ember.run((() => {
          _this.set('errorMessage', JSON.parse(xhr.responseText).errors.full_messages.join(", ") || error);
        }));
      }));
    }
  }
});
