
# When.js

A simple and light package to use as a switch but with some vitamins. Inspired on the [match](https://www.php.net/manual/en/control-structures.match.php) function from PHP.


## Installation

Install when.js:

```bash
  npm install when.js

  pnpm install when.js

  yarn add when.js
```
    
## Usage

```ts
import { createEvaluator, PredicateValue } from 'when.js'

const cases: PredicateValue<number | string | object, string>[] = [
  [(x: number | string) => typeof x === 'number' && x > 10, 'greater than 10'],
  ['hello', 'greeting'],
  [{ key: 'value' }, 'object match'],
  [[1, 2, 3], 'array match'],
  [5, 'number five']
];
const defaultCase = 'default value';

const evaluator = createEvaluator(cases, defaultCase);

console.log(evaluator(12)); // 'greater than 10'
console.log(evaluator('hello')); // 'greeting'
console.log(evaluator({ key: 'value' })); // 'object match'
console.log(evaluator([1, 2, 3])); // 'array match'
console.log(evaluator(5)); // 'number five'
console.log(evaluator(0)); // 'default value'
```

## How does it work?
The createEvaluator function generates an evaluator function that takes a series of predicate-value pairs and an optional default case. When invoked with an input, the evaluator iterates through the predicates, applying each to the input. If a predicate is a function, it checks if the input satisfies the condition. If it's a value, it compares it directly to the input. The evaluator returns the corresponding value of the first true predicate. If no predicates match, it returns the value from the default case. This approach allows for flexible, reusable evaluation logic.


## License

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)


## Author

- [@ajomuch92](https://www.github.com/ajomuch92)

