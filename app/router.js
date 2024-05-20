import EmberRouter from '@ember/routing/router';
import config from 'cide/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
 

  this.route('index', { path: '/' },function() {
    this.route('comandas');
    this.route('principal');
  });



  this.route('comandas');
  this.route('login', { path: '/*path' });
  this.route('login');
  this.route('principal');
});
