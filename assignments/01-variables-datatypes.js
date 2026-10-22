// Assignment 1: Variables, Data Types, and Console Operations
(function () {
  var name = "Alice";                          // var: function-scoped
  let age = 25;                                // let: block-scoped, reassignable
  const isEmployed = true;                     // const: cannot be reassigned
  const skills = ["HTML", "CSS", "JavaScript"];

  const show = (arr) => "[" + arr.map((s) => `"${s}"`).join(", ") + "]";

  console.log(`Name: ${name} (Type: ${typeof name})`);
  console.log(`Age: ${age} (Type: ${typeof age})`);
  console.log(`Is Employed: ${isEmployed} (Type: ${typeof isEmployed})`);
  console.log(`Skills: ${show(skills)} (Type: ${typeof skills})`);
})();
