import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class LoginRoute extends Route {
  @service login;
  @service router;
  
  beforeModel() {
    const credential = JSON.parse(localStorage.getItem('user_credential'));

    if (this.login.authUser(credential)) {
      this.router.transitionTo('/');
    } else {
      this.router.transitionTo('/login');
    }
  }
}
