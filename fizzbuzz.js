let answer = parseInt(prompt("Enter number: "));

for (let i = 1; i <= answer; i++) {
    if (i % 3 === 0 & i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
            console.log("Fizz");
    } else if (i % 5 === 0) {
            console.log("Fizz");
    } else {
        console.log(i);
    }
}