import { module, test } from 'qunit';
import { setupTest } from 'cide/tests/helpers';

module('Unit | Service | comandas', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:comandas');
    assert.ok(service);
  });
});
