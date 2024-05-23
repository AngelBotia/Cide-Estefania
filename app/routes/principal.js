import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class PrincipalRoute extends Route {
  @service router;
  @service login;

  async beforeModel() {
    const credential = JSON.parse(localStorage.getItem('user_credential'));

    if (this.login.authUser(credential)) {
      this.router.transitionTo('/principal');
    } else {
      this.router.transitionTo('/login');
    }

    // let axisController = this.controllerFor('axis');
    // if (!localStorage.getItem('records'))
    //   await axisController.initLocalStorage();
    // axisController.loadRecordsToLocalStore();
  }
}
