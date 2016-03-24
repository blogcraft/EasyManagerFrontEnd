import DS from 'ember-data';

export default DS.Model.extend({
  firstname: DS.attr('string'),
  lastname: DS.attr('string'),
  phone: DS.attr('string'),
  email: DS.attr('string'),
  user: DS.attr('string')
});
