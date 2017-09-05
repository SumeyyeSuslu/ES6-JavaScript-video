// ES6 - Default Parameters and Spread Operator:
function greet($greeting){
  console.log($greeting);
}
greet('Hello');
greet();

// Output:
"Hello"
undefined

function greet($greeting = 'Hello World'){
  console.log($greeting);
}
greet();

// Output:
"Hello World"

// Spread Operator:
let args = [1,2,3];
function test (){
  console.log(args);
}
test(...args);

// Output:
[1, 2, 3]

let args1 = [1,2,3];
let args2 = [4,5,6];
function test (){
  console.log(args1 + ',' + args2);
}
test(...args1, ...args2);

// Output:
"1,2,3,4,5,6"
