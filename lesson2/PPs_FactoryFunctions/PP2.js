// eslint-disable-next-line max-len
// Rewrite the following code to use object-literal syntax to generate the returned object:

function makeObj() {
  let obj = {};
  obj.propA = 10;
  obj.propB = 20;
  return obj;
}

// solution
function makeObj() {
  return {
    propA : 10,
    propB : 20,
  }
}