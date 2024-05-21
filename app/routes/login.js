import Route from '@ember/routing/route';

export default class LoginRoute extends Route {
  @service login;
  @service router;
  beforeModel() {
    const credential = JSON.parse(localStorage.getItem('user_credential'));

    if (this.login.authUser(credential)) {
      this.router.transitionTo('axis');
    } else {
      this.router.transitionTo('login');
    }
  }
}
