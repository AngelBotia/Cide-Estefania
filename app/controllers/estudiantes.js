import Controller from '@ember/controller';
import { service } from '@ember/service';
import { action } from '@ember/object';
import Constants from '../helpers/Constants';

export default class EstudiantesController extends Controller {
  @service router;
  @service login;
  @service estudiantes;

  @action
  logOut(event) {
    this.login.logOut();
  }

  @action
  onSubmitForm(event){
    const form = document.getElementById("Form-Usuarios");
    localStorage.setItem(Constants.STUDENTS,[]);
  }

 
}
