function printNumbers(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3) {
            console.log("Fizz");
        } else if (i % 5) {
            console.log("Buzz");
        } else if (i % 3, i % 5) {
            console.log("FizzBuzz")
        } else {
            console.log(i);
        }
    }
};
printNumbers(4);