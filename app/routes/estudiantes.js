import Route from '@ember/routing/route';
import { service } from '@ember/service';
import Constants from '../helpers/Constants';

export default class EstudiantesRoute extends Route {
  @service router;
  @service login;
  @service estudiantes;

  beforeModel() {
    const credential = JSON.parse(localStorage.getItem('user_credential'));

    if (this.login.authUser(credential)) {
      this.estudiantes.studenlist = JSON.parse(
        localStorage.getItem(Constants.STUDENTS),
      );
    } else {
      this.router.transitionTo('/login');
    }

    if (!localStorage.getItem(Constants.STUDENTS)) {
      this.estudiantes.initStudentLocalStorage();
    }
    this.login.dateNow = new Date().toISOString().split('T')[0];
  }
}
