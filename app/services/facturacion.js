import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class FacturacionService extends Service {
  @tracked invoiceList;
}
