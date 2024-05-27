import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import Constants from '../helpers/Constants';

export default class ComandasService extends Service {
  @tracked comandasList;

  @action
  initComandasList() {
    this.comandasList = JSON.parse(
      localStorage.getItem(Constants.COMANDAS_STORAGE),
    );
  }

  @action
  updateComandasList(newComandas) {
    this.comandasList = newComandas;
  }
}
