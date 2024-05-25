import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';
import Constants from '../helpers/Constants';

export default class ComandasController extends Controller {
  @tracked user = false;
  @service login;
  @service comandas;
  @service router;

  @action
  logOut(event) {
    this.login.logOut();
  }
  @action
  onSubmitForm(event){
    event.preventDefault();
    const form = document.getElementById("formComandas");
    const formData = this.getObjectForm(form);
    const currentLocalStorage = JSON.parse(localStorage.getItem(Constants.COMANDAS_STORAGE))
    currentLocalStorage.push(formData);
    localStorage.setItem(Constants.COMANDAS_STORAGE,JSON.stringify(currentLocalStorage))
    this.cleanForm(form);
    window.alert("✅ La comanda se ha realizado con exito ")
  }
  getObjectForm(form){
    const user = JSON.parse(localStorage.getItem(Constants.USER_CREDENTIALS)).user;
    const formData = {
      comedor:{
        price: 8.5,
        cant: form.comedor.value
      },
      camiseta:{
        price: 20,
        cant: form.camiseta.value
      },
      pantalones:{
        price: 25,
        cant: form.pantalones.value
      },
      calcetines:{
        price: 25,
        cant: form.calcetines.value
      },
      chaqueta:{
        price: 25,
        cant: form.chaqueta.value
      }, 
      babero:{
        price: 25,
        cant: form.chaqueta.value
      },
      status: Constants.status.P,
      user:user,
      codigoFactura: Date.now(),
      fecha: new Date().toISOString().split('T')[0]

    }
    return formData;
  }

  cleanForm(form){
    form.comedor.value=0;
    form.camiseta.value=0;
    form.pantalones.value=0;
    form.calcetines.value=0;
    form.chaqueta.value=0;
    form.babero.value=0;
  }
}
