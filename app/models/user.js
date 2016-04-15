import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  //name: DS.attr('string'),
  lastName: DS.attr('string'),
  profession: DS.attr('string'),
  email: DS.attr('string')
});
