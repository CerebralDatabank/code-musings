console.log([...Array(100).keys()].slice(1).map(n => !(n % 3) ? (!(n % 5) ? "FizzBuzz" : "Fizz") : (!(n % 3) ? "Buzz" : n)).join("\n"));