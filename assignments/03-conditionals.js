// Assignment 3: Conditional Logic Implementation
(function () {
  const ask = (msg, def) => (typeof prompt === "function" ? prompt(msg, def) : def);
  const score = Number(ask("Enter your test score (0-100):", "85"));

  // if...else: validate the score
  if (Number.isNaN(score) || score < 0 || score > 100) {
    console.log("Invalid score: enter a number between 0 and 100.");
    return;
  }

  // switch: letter grade
  let grade;
  switch (Math.floor(score / 10)) {
    case 10:
    case 9:
      grade = "A";
      break;
    case 8:
      grade = "B";
      break;
    case 7:
      grade = "C";
      break;
    case 6:
      grade = "D";
      break;
    default:
      grade = "F";
  }

  // ternary: pass or fail (pass mark = 40)
  const status = score >= 40 ? "Passed" : "Failed";

  console.log(`Score: ${score}`);
  console.log(`Grade: ${grade}`);
  console.log(`Status: ${status}`);
})();
