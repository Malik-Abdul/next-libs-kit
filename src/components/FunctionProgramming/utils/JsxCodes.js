const JSXCodeLexicalScope = `
// global
var x = 2;

function outerFunction() {
  let y = 3;
  console.log("in outer Function");
  console.log("global x = ", x);
  console.log("y = ", y);

  function innerFunction() {
    y = y + 2;
    console.log("in inner Function");
    console.log("y = ", y);
    x = x + 2;
    console.log("global x = ", x);

    // The child function has access to the values of its parent function and the global scope
    // This is lexical scope
  }
  innerFunction();  // Calling of innerFunction in the outerFunction
}
outerFunction();

// Output
// in outer Function
// global x =  2
// y =  3
// in inner Function
// y =  5
// global x =  4
// This all procedure is not a closure, it is the example of lexical scope

`;

export { JSXCodeLexicalScope };
