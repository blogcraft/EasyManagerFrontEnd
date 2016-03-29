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

  this.route('clients', function() {
    this.route('new');
    this.route('show', { path: 'show/:client_id'});
    this.route('delete', { path: 'delete/:client_id'});
  });

  this.route('payments');

  this.route('users', function(){
    this.route('profile', {path: 'profile'});
  });
});

export default Router;
