var redux = require('redux');

//same output with the same input

//no side effects. should not update variables outside of the scope of the function

//should be synchronous. promises not allowed.

console.log('Starting redux example');

//pure functions
function add(a, b){
  return a + b;
}

var a = 3;
function add(b){
  return a + b;
}

var result;
function add(a, b){
  result = a + b;
}

function add(a, b){
  return a + b + new Date().getSeconds();
}

function changeProp(obj){
  return{
    ...obj,
    name: 'Jen'
  }
  // obj.name = 'Jen';
  // return obj;
}

var startingValue = {
  name: 'John',
  age: 25
}

var res = changeProp(startingValue);

console.log(startingValue);
console.log(res);
