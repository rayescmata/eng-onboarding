const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// program to generate fibonacci series up to n terms

// take input from the user

rl.question("Enter the number of terms: ", (answer) => {
  const terms = parseInt(answer);
  let n1 = 0,
    n2 = 1,
    nextTerm;

  console.log("Fibonacci Series:");

  for (let i = 1; i <= terms; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
});
