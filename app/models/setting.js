import DS from 'ember-data'

export default DS.Model.extend({
  //id: DS.attr('integer'),
  name: DS.attr('string'),
  value: DS.attr('string')
});
