import DS from 'ember-data';

export default DS.Model.extend({
  clientId: DS.attr('string'),
  client: DS.belongsTo('client'),
  confirm: DS.attr('boolean'),
  assist: DS.attr('boolean'),
  datetime: DS.attr('utc'),
  note: DS.attr('string'),
  address: DS.attr('string')
});
