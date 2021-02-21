import * as assert from 'assert';
import dirTreeObj from '../dist/main.js';

it('Main', async () => {
  assert.deepStrictEqual(await dirTreeObj('./tests/data'), {
    '.': ['a.txt', 'b.txt'],
    sub: {
      '.': ['a.js', 'a.txt', 'b.txt'],
    },
  });
});
