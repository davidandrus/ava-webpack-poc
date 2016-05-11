import test from 'ava';
import { getOptions, testTestModel } from './app';

test('this will just pass', t => {
  t.pass();
})

test('app exists', t => {
  const result = getOptions();
  t.is(result, 'It worked');
  t.pass();
})

test('aliases work', t => {
  const result = testTestModel();
  t.is(result, "I am testModel");
})
