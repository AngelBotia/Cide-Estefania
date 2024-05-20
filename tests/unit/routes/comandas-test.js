import { module, test } from 'qunit';
import { setupTest } from 'cide/tests/helpers';

module('Unit | Route | comandas', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:comandas');
    assert.ok(route);
  });
});
