import Controller from '@ember/controller';
import { action } from '@ember/object';
import Constants from '../helpers/Constants';

export default class RecoveryController extends Controller {
    
    @action
    onSubmit(event){
        event.preventDefault();
        const form = document.getElementById('recoveryForm');
        const formData = {
            user: form.user.value,
            password: form.password.value,
            rePassword: form.rePassword.value,
          };
        if(!this.userIsExist(formData)){
            window.alert('❌ El usuario no existe');
            return;
        }
        if(!this.passwordIsEqual(formData)){
            window.alert('❌ Las contraseñas no coinciden');
            return;
        }
        const currentLocalLogin=JSON.parse(localStorage.getItem(Constants.USER_STORAGE));
        const indexToEdit = currentLocalLogin.findIndex((item)=>item.user==formData.user);
        currentLocalLogin[indexToEdit].password=formData.password;
        localStorage.setItem(Constants.USER_STORAGE,JSON.stringify(currentLocalLogin))
        window.alert(`El cambio de contraseña al usuario:${formData.user} ha sido un exito ✅`)
        this.clearForm(form);
    }

    userIsExist(formData) {
        const {  user } = formData;
        const currentLocalStorage = JSON.parse(localStorage.getItem('Login'));
    
        if (!currentLocalStorage) return false;
    
        return currentLocalStorage.find((item) => {
          return item.user == user;
        });
    }

    
    passwordIsEqual(formData) {
        const { password, rePassword } = formData;
        if (!password || !rePassword) return;
        return password == rePassword;
    }
    clearForm(form){
       form.user.value='',
        form.password.value='',
        form.rePassword.value=''
    }
    
}
