import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
    pay: function(id){
    //  alert(id);
      //var invoice = this.store.find('invoice', id);

      var store = this.store;
      var promise = new Promise(function(resolve, reject){
          resolve(store.find('invoice', id));
      });

      promise.then(function(invoice){
        //alert(invoice.get('paid'));
        invoice.set('paid', !invoice.get('paid'));
        invoice.save();
      });


    }
  }
});
