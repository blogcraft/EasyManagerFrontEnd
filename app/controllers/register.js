import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    register: function() {

      var data, _this;
      _this = this;
      data  = this.getProperties("name", "email", "password", "password_confirmation" );

      return Ember.$.ajax({

        method: "POST",
        url: "http://localhost:3000/users",
        dataType: 'json',
        data: data

      }).then((function(response) {

        return Ember.run((function() {

          console.log("Registration Suceeded!");
          _this.transitionToRoute('confirm');

          return _this.send("registrationSucceeded", response);
        }));
      }), (function(xhr, status, error) {
        return Ember.run((function() {
          _this.set('errorMessage', JSON.parse(xhr.responseText).errors.full_messages.join(", ") || reason);
          return _this.send("registrationFailed", xhr, status, error);
        }));
      }));
    },

    registrationSucceeded: function(response) {
      return console.log("Registration Succeeded: " + (Ember.inspect(response)));
    },

    registrationFailed: function(xhr, status, error) {

      var cur_error  = JSON.parse(xhr.responseText)["errors"];

      var cur_error_str = "<div class='regerror alert alert-danger'>";
      for (var key in cur_error) {
        if (cur_error.hasOwnProperty(key)) {
          cur_error_str = cur_error_str + key + " " + cur_error[key];
          cur_error_str = cur_error_str + "<br/>";
        }
      }

      cur_error_str = cur_error_str + "</div>";

      $(".regerror").replaceWith(cur_error_str);
      return console.log("Registration Failed: " + status);
    }

  }
});
