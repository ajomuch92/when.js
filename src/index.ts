import isEqual from 'lodash.isequal';

export type Predicate<T> = (item: T) => boolean;
export type PredicateValue<T, V> = [Predicate<T> | T, V];

export function createEvaluator<T, V>(
  cases: PredicateValue<T, V>[],
  defaultCase: any
): (item: T) => V {
  return (item: T): V => {
    for (const [predicate, value] of cases) {
      if (typeof predicate === 'function') {
        if ((predicate as Predicate<T>)(item)) {
          return value;
        }
      } else if (isEqual(predicate, item)) {
        return value;
      }
    }
    return defaultCase;
  };
}
