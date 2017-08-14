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

function testLet() {
  var a = 30;
  if (true) {
    var _a = 50;
    console.log(_a);
  }
  console.log(a);
}
testLet();

//Output:
//50
//30
