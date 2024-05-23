import Service from '@ember/service';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class LoginService extends Service {
  USER_CREDENTIALS = 'user_credential';
  USER_STORAGE = 'Login';

  @service router;

  @action
  authUser(credential) {
    if (!credential) return false;
    const { user, password } = credential;

    const currentLocalStorageObject = JSON.parse(
      localStorage.getItem(this.USER_STORAGE),
    );

    if (!currentLocalStorageObject) {
      console.log('El local storage esta vacio');
      return;
    }

    return currentLocalStorageObject.find((item) => {
      if (item.user == user && item.password == password) {
        return true;
      }
    });
  }

  @action
  logOut(event) {
    const jsonVoidObject = JSON.stringify({});
    localStorage.setItem('user_credential', jsonVoidObject);
    this.router.transitionTo('/login');
  }

  
}
