import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr('string'),
  paid: DS.attr('boolean'),
  subtotal: DS.attr('number'),
  taxable: DS.attr('number'),
  taxrate: DS.attr('number'),
  taxdue: DS.attr('string'),
  other: DS.attr('string'),
  total: DS.attr('string'),
  clientName: DS.attr('string'),
  clientLastName: DS.attr('string'),
  appointment: DS.belongsTo('appointment')
});
