import Service from '@ember/service';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import Constants from '../helpers/Constants';

export default class LoginService extends Service {
  @service router;
  @service login;
  @tracked userType;
  @tracked dateNow;

  @action
  authUser(credential) {
    if (!credential) return false;
    const { user, password } = credential;

    const currentLocalStorageObject = JSON.parse(
      localStorage.getItem(Constants.USER_STORAGE),
    );

    if (!currentLocalStorageObject) {
      console.log('El local storage esta vacio');
      return;
    }

    return currentLocalStorageObject.find((item) => {
      if (item.user == user && item.password == password) {
        this.userType = item.userType;

        if (item.user == 'admin') {
          this.userType = 'Administrador';
        }
        return true;
      }
    });
  }

  @action
  logOut(event) {
    const jsonVoidObject = JSON.stringify({});
    localStorage.setItem(Constants.USER_CREDENTIALS, jsonVoidObject);
    this.router.transitionTo('/login');
  }
}
