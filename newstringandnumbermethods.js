//ES6 - New String & Number Methods in ES6:
let theString = 'Hello, my name is Brad and I love JavaScript';
console.log(theString.startsWith('Hello'));
console.log(theString.endsWith('JavaScript'));
console.log(theString.includes('love'));
console.log(theString.startsWith('ello'));
console.log(theString.endsWith('Java'));

// Output:
true
true
true
false
false

console.log(0xFF);
console.log(0b101011);
console.log(0o543);
console.log(Number.isFinite(3));
console.log(Number.isFinite(-3));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(NaN));
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(1));
console.log(Number.isInteger(NaN));

// Output:
255
43
355
true
true
false
false
true
false
false

