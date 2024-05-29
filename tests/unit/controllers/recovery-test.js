import { module, test } from 'qunit';
import { setupTest } from 'cide/tests/helpers';

module('Unit | Controller | recovery', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:recovery');
    assert.ok(controller);
  });
});
