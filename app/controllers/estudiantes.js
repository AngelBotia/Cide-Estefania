import Controller from '@ember/controller';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class EstudiantesController extends Controller {
  @service router;
  @service login;

  @action
  logOut(event) {
    this.login.logOut();
  }
}
