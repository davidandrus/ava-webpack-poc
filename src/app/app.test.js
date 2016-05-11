import test from 'ava';
import { getOptions } from './app';

test('this will just pass', t => {
  t.pass();
})

test('app exists', t => {
  const result = getOptions();
  t.is(result, 'It worked');
  t.pass();
})
