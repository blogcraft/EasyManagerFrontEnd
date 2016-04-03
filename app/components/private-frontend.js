import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    invalidateSession: function() {
      this.sendAction("invalidateSession"); // Exposes the action
    }
  }
});
