// Assignment 5: Function Architecture and Scope
(function () {
  // Standard function with default parameters
  function areaStandard(length = 5, width = 4) {
    return length * width;
  }

  // Arrow function with default parameters
  const areaArrow = (length = 5, width = 4) => length * width;

  console.log(`Standard Function Area (Default 5x4): ${areaStandard()}`);
  console.log(`Arrow Function Area (Custom 10x3): ${areaArrow(10, 3)}`);

  // Function scope: var and let inside a function are not visible outside
  function functionScopeDemo() {
    var insideFunction = "I live inside the function";
    return insideFunction;
  }
  console.log(`Function scope: ${functionScopeDemo()}`);
  console.log(`Outside the function, typeof insideFunction is "${typeof insideFunction}"`);

  // Block scope: let/const stay inside { }
  {
    let blockVar = "I live inside the block";
    console.log(`Block scope: ${blockVar}`);
  }
  try {
    console.log(blockVar); // eslint-disable-line no-undef
  } catch (err) {
    console.log(`Scope Test Error: ${err.name}: ${err.message} (when accessed outside block)`);
  }
})();
