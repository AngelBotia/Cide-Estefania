import { module, test } from 'qunit';
import { setupRenderingTest } from 'cide/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | formulario-usuario', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<FormularioUsuario />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <FormularioUsuario>
        template block text
      </FormularioUsuario>
    `);

    assert.dom().hasText('template block text');
  });
});
