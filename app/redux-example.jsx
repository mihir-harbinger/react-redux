var redux = require('redux');
console.log("Starting redux example");

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
  return result;
}

function add(a, b){
  return a + b + new Date().getSeconds();
}

function changeProp(obj){
  return{
    ...obj,
    name: 'Mike'
  };
  // obj.name = 'Mike';
}

var obj = {
  name: 'Mihir',
  age: 22
};

console.log(changeProp(obj));
console.log(obj);
