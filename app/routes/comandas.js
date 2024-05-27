import Route from '@ember/routing/route';
import { service } from '@ember/service';
import Constants from '../helpers/Constants';
export default class ComandasRoute extends Route {
  @service router;
  @service login;
  @service comandas;

  beforeModel() {
    const credential = JSON.parse(localStorage.getItem('user_credential'));
    if (this.login.authUser(credential)) {
      if(!localStorage.getItem(Constants.COMANDAS_STORAGE)) this.initComandaStorage();
      this.comandas.initComandasList();
      this.router.transitionTo('/comandas');
    } else {
      this.router.transitionTo('/login');
    }
  }

  initComandaStorage(){
    localStorage.setItem(Constants.COMANDAS_STORAGE,JSON.stringify([]));
  }
}
