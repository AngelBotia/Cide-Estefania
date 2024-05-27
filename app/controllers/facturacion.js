import Controller from '@ember/controller';
import { service } from '@ember/service';
import { action } from '@ember/object';
import Constants from '../helpers/Constants';

export default class FacturacionController extends Controller {
  @service router;
  @service login;
  @service comandas;

  @action
  logOut(event) {
    this.login.logOut();
  }

  @action
  onClickUserShowInvoice(event) {
    const invoice = document.getElementById('factura');
    const fila = event.target.parentNode.parentNode.parentNode;
    if (!fila) return;
    // this.invoiceData = {
    //   booking_id: fila.cells[0].innerHTML,
    //   hotelId: fila.cells[1].innerHTML,
    //   bookingDate: fila.cells[2].innerHTML,
    //   description: fila.cells[3].innerHTML,
    //   pax: fila.cells[4].innerHTML,
    // };
    invoice.showModal();
  }
  @action
  onChangeStatusAdmin(event) {
    const idElement =
    event.target.parentNode.parentNode.firstElementChild.innerHTML;
    debugger
    const indexToEdit = this.comandas.comandasList.findIndex(
      (item) => (item.codigoFactura == idElement)
    );
    const comandasListToUpdate = this.comandas.comandasList;
    comandasListToUpdate[indexToEdit].status = event.currentTarget.value;
    localStorage.setItem(Constants.COMANDAS_STORAGE,JSON.stringify(comandasListToUpdate));
    this.comandas.updateComandasList(comandasListToUpdate);
    window.location.reload();
  }
}

