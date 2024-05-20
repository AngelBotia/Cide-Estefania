import { module, test } from 'qunit';
import { setupRenderingTest } from 'cide/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | tabla', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Tabla />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Tabla>
        template block text
      </Tabla>
    `);

    assert.dom().hasText('template block text');
  });
});
