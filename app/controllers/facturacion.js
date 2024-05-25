import Controller from '@ember/controller';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class FacturacionController extends Controller {
  @service router;
  @service login;
  @service comandas;
  @action
  logOut(event) {
    this.login.logOut();
  }
}
