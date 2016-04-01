import Ember from 'ember';
import Devise from 'ember-simple-auth/authorizers/devise';

export default Devise.extend({
  identificationAttributeName: "uid",
  tokenAttributeName: "access-token"
});
