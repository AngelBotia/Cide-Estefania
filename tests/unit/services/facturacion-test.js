import { module, test } from 'qunit';
import { setupTest } from 'cide/tests/helpers';

module('Unit | Service | facturacion', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:facturacion');
    assert.ok(service);
  });
});
