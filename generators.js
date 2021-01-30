// Creates an infinite stream of prime numbers

class Primes {
  static *stream() {
    yield 2;
    let n = 3;
    while (true) {
      if (this.isPrime(n)) yield n;
      n += 2;
    }
  }

  static isPrime(n) {
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  }
}

const primesStream = Primes.stream();
const primes = [];

for (let i = 0; i < 10; i++) {
  primes.push(primesStream.next().value);
}

console.log(primes); // [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]

// Creates an infinite stream of fibonacci numbers

function* fibonacciSequence() {
  let [prev, curr] = [0, 1];
  while (true) {
    yield curr;
    [prev, curr] = [curr, prev + curr];
  }
}

const fibStream = fibonacciSequence();
const fibs = [];

for (let i = 0; i < 10; i++) {
  fibs.push(fibStream.next().value);
}

console.log(fibs);
