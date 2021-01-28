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

const primes = Primes.stream();

for (let i = 0; i < 10; i++) {
  console.log(primes.next().value);
}
