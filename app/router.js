import EmberRouter from '@ember/routing/router';
import config from 'cide/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('index', { path: '/' });
  this.route('login', { path: '/*path' });
  this.route('comandas');
  this.route('estudiantes');
  this.route('facturacion');
  this.route('registre');
  this.route('recovery');
});
