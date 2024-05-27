import { module, test } from 'qunit';
import { setupRenderingTest } from 'cide/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | invoice', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Invoice />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Invoice>
        template block text
      </Invoice>
    `);

    assert.dom().hasText('template block text');
  });
});
