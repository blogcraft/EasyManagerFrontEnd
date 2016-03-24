import Ember from 'ember';

import Client from '../models/client';

export default Ember.Service.extend({
  getClientById(id) {
    const clients = this.getClients();
    return clients.findBy('id', id);
  },
  getClients() {
    return [{
      id: 1,
      firstName: 'test',
      lastName: 'test2',
      phone: '1234'
    }, {
      id: 2,
      firstName: 'test3',
      lastName: 'test4',
      phone: '12345'
    }];
  },

  createClient(){
    return Client.create({});
  }
});
