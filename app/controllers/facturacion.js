import Controller from '@ember/controller';
import { service } from '@ember/service';
import { action } from '@ember/object';
import Constants from '../helpers/Constants';
import { tracked } from '@glimmer/tracking';

export default class FacturacionController extends Controller {
  @service router;
  @service login;
  @service comandas;

  @tracked invoiceData;

  @action
  logOut(event) {
    this.login.logOut();
  }

  @action
  onClickUserShowInvoice(event) {

    const invoice = document.getElementById('factura');
    const idElement = event.target.parentNode.firstElementChild.innerHTML;
    if (!idElement) return;
    const currentLocalStorageComanda = JSON.parse(
      localStorage.getItem(Constants.COMANDAS_STORAGE),
    );

    const comandaToShow = currentLocalStorageComanda.find((item) => {
      return item.codigoFactura == idElement;
    });

    const productsToShow = comandaToShow.products.filter(
      (item) => item.cant > 0,
    );
    const total = productsToShow.reduce((sum, item) => sum + item.total, 0);

    this.invoiceData = {
      numeroFactura: comandaToShow.codigoFactura.toString(),
      fecha: comandaToShow.fecha,
      user: comandaToShow.user,
      products: productsToShow,
      total: total,
    };

    invoice.showModal();
  }
  @action
  onChangeStatusAdmin(event) {
    const idElement =
      event.target.parentNode.parentNode.firstElementChild.innerHTML;

    if (!this.comandas.comandasList || !idElement) {
      return;
    }
    const indexToEdit = this.comandas.comandasList.findIndex(
      (item) => item.codigoFactura == idElement,
    );
    const comandasListToUpdate = this.comandas.comandasList;
    comandasListToUpdate[indexToEdit].status = event.currentTarget.value;
    localStorage.setItem(
      Constants.COMANDAS_STORAGE,
      JSON.stringify(comandasListToUpdate),
    );
    this.comandas.updateComandasList(comandasListToUpdate);
    window.location.reload();
  }

  //TODO get elements of the students create by user.
}
