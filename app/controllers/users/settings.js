import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
    change: function(val){
      $('#datePrice').val(currencyFormat(val));
    }
  }
});

function currencyFormat(num) {
  num = num.replace('$', '').replace(/\./g, '');
  var value = num.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  return `$${value}`;
}
