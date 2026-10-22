// Assignment 2: Operators, Expressions, and Input Handling
(function () {
  // prompt() in the browser; sensible defaults when run in Node.js
  const ask = (msg, def) => (typeof prompt === "function" ? prompt(msg, def) : def);

  const subtotal = Number(ask("Enter the bill amount:", "100"));
  const tipPercent = Number(ask("Enter the tip percentage:", "15"));

  if (!Number.isFinite(subtotal) || !Number.isFinite(tipPercent) || subtotal < 0 || tipPercent < 0) {
    console.log("Invalid input: please enter positive numbers only.");
    return;
  }

  let tip = (subtotal * tipPercent) / 100;
  let total = subtotal;
  total += tip; // assignment operator

  console.log(`Subtotal: $${subtotal}`);
  console.log(`Tip Percentage: ${tipPercent}%`);
  console.log(`Calculated Tip: $${tip}`);
  console.log(`Total Amount to Pay: $${total}`);
})();
