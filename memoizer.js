// Create a memoizer function

const memoize = function (fn) {
    const cache = {};

    return function () {
        const KEY = JSON.stringify(arguments);
        if (cache[KEY]) {
            return cache[KEY];
        }
        const evaluatedValue = fn(...arguments);
        cache[KEY] = evaluatedValue;
        return evaluatedValue;
    }
}

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return factorial(n - 1) * n;
}

const memoizedFactorial = memoize(factorial);

let a = memoizedFactorial(100);
console.log(a);

let b = memoizedFactorial(100);
console.log(b);


//memorizer funtion for sum
function memorize(fn) {
  let context = {};
  return function (...args) {
    let key = JSON.stringify(args);
    if (context[key]) {
      console.log("Cached Data");
      return context[key];
    } else {
      let result = fn(...args);
      context[key] = result;
      console.log("Calculated Data");
      return context[key];
    }
  };
}

function sum(a, b) {
  return a + b;
}

let result = memorize(sum);
console.log(result(3, 3));
console.log(result(3, 3));
console.log(result(3, 3));
