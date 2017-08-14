const colors = [];
colors.push('red');
colors.push('blue');
console.log(colors);

/* Output:
["red", "blue"]
*/

const colors = [];
colors.push('red');
colors.push('blue');
colors = 'green';
console.log(colors);

/*Output:
"error"
"TypeError: Assignment to constant variable.
    at cazekefuyo.js:4:8
    at https://static.jsbin.com/js/prod/runner-4.0.4.min.js:1:13850
    at https://static.jsbin.com/js/prod/runner-4.0.4.min.js:1:10792"
*/

//Babel- ES5:
'use strict';

var colors = [];
colors.push('red');
colors.push('blue');
console.log(colors);

/*Output:
["red", "blue"]
*/
