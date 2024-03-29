function isPrime(num) {
  //TODO
  const prime = [2, 3, 5, 7, 11];
  if (num < 2) {
    return false;
  }
  //   for (let i = 0; i < 5; i++) {
  //     console.log(prime[i]);
  //     if (num === prime[i]) {
  //       return console.log("1.true", num, "is prime");
  //     }
  //   }
  //   for (let j = 0; j < 5; j++) {
  //     if (num % prime[j] === 0) {
  //       return console.log("2.false", num, "is not a prime");
  //     }
  //   }
  //   for (let k = 0; k < 5; k++) {
  //     if (num % prime[k] != 0) {
  //       return console.log("3.true", num, "is prime");
  //     }
  //   }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return console.log("false", num, "is not prime");
    }
  }
  return console.log("true", num, "is prime");
}

isPrime(13);
isPrime(29);
isPrime(75);
isPrime(97042201);
