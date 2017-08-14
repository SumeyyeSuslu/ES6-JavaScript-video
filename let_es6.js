function testLet(){
  let a =30;
  if (true){
    let a=50;
    console.log(a);
  }
  console.log(a);
}
testLet();

//Output:
//50
//30

//Babel difference between ES5
"use strict";

function testVar(){
  var a =30;
  if (true){
    var a=50;
    console.log(a);
  }
  console.log(a);
}
testVar();

//Output:
//50
//50
