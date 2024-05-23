import Route from '@ember/routing/route';
import { service } from '@ember/service';
export default class ComandasRoute extends Route {
  @service router;
  @service login;

  beforeModel() {
    const credential = JSON.parse(localStorage.getItem('user_credential'));

    if (this.login.authUser(credential)) {
      this.router.transitionTo('/comandas');
    } else {
      this.router.transitionTo('/login');
    }
  }
}
