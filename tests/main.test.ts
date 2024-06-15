import {describe, expect, test} from '@jest/globals';
import { PredicateValue, createEvaluator } from "../src";

describe('Testing the package', () => {
  const cases: PredicateValue<number | string | object, string>[] = [
    [(x: number | string) => typeof x === 'number' && x > 10, 'greater than 10'],
    ['hello', 'greeting'],
    [{ key: 'value' }, 'object match'],
    [[1, 2, 3], 'array match'],
    [5, 'number five']
  ];
  
  const defaultCase = 'default value';
  
  const evaluator = createEvaluator(cases, defaultCase);
  
  test('Case 1', () => {
    expect(evaluator(12)).toBe('greater than 10');
  });
  
  test('Case 2', () => {
    expect(evaluator('hello')).toBe('greeting');
  });
  
  test('Case 3', () => {
    expect(evaluator({ key: 'value' })).toBe('object match');
  });
  
  test('Case 4', () => {
    expect(evaluator([1, 2, 3])).toBe('array match');
  });
  
  test('Default', () => {
    expect(evaluator(0)).toBe('default value');
  });
})
