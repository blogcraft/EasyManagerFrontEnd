import DS from 'ember-data';

export default DS.Model.extend({
  clientId: DS.attr('number'),
  client: DS.attr(),
  confirm: DS.attr('boolean'),
  assist: DS.attr('boolean'),
  date: DS.attr('string'),
  time: DS.attr('string'),
  note: DS.attr('string'),
  address: DS.attr('string')
});
