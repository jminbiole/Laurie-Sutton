import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  this.route('page', {path: '/'});
  this.route('about');
  this.route('blogs');
    this.route('blog-single');
});

export default Router;
