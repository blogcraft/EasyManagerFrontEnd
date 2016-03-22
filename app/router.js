import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('protected');
  this.route('login');
  this.route('register');
  this.route('confirm');
  this.route('confirm-success');
  this.route('dashboard');
  this.route('appointments');
  this.route('clients');
  this.route('payments');
});

export default Router;
