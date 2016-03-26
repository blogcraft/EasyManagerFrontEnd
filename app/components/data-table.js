import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function(){
    const id = this.get('DTid');
    $(id).DataTable({
  			responsive: true
  	});
  }
});
