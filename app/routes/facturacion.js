import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class FacturacionRoute extends Route {
  @service router;
  @service login;
  @service comandas;
  beforeModel() {
    const credential = JSON.parse(localStorage.getItem('user_credential'));

    if (this.login.authUser(credential)) {
      this.comandas.initComandasList();
      this.router.transitionTo('/facturacion');
    } else {
      this.router.transitionTo('/login');
    }
  }
}
