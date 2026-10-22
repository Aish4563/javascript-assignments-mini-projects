// Assignment 4: Loop Control Structures
(function () {
  // for loop: multiplication table
  console.log("-- Multiplication Table of 5 --");
  for (let i = 1; i <= 5; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
  }

  // while + break: first number > 10 divisible by 6
  console.log("-- First number > 10 divisible by 6 --");
  let num = 11;
  while (true) {
    if (num % 6 === 0) {
      console.log(`Found: ${num}`);
      break;
    }
    num++;
  }

  // do...while + continue: skip even numbers
  console.log("-- Odd numbers from 1 to 10 (do...while with continue) --");
  const odds = [];
  let n = 0;
  do {
    n++;
    if (n % 2 === 0) continue; // skip evens (n already incremented, so no infinite loop)
    odds.push(n);
  } while (n < 10);
  console.log(`Odd numbers: ${odds.join(", ")}`);
})();
