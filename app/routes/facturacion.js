import Route from '@ember/routing/route';
import { service } from '@ember/service';
import Constants from '../helpers/Constants';

export default class FacturacionRoute extends Route {
  @service router;
  @service login;
  @service comandas;
  beforeModel() {
    const credential = JSON.parse(localStorage.getItem('user_credential'));

    if (this.login.authUser(credential)) {
      if (this.login.userType == 'Administrador') {this.comandas.initComandasList()}
      else {this.getComandasByUserID();}
      this.router.transitionTo('/facturacion');
    } else {
      this.router.transitionTo('/login');
    }
  }

  getComandasByUserID() {
    const currentLocalComandast = JSON.parse(localStorage.getItem(Constants.COMANDAS_STORAGE));
    const userName = JSON.parse(localStorage.getItem(Constants.USER_CREDENTIALS)).user;
    if(!currentLocalComandast) return;
    const comandasToUpdate = currentLocalComandast.filter(
      (item) => item.user == userName && item.status==Constants.status.A
    );
    this.comandas.updateComandasList(comandasToUpdate);

  }
}

