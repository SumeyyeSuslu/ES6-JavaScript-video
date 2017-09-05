// ES6 - Set:
let myArray = [11,22,34,65,34];
let mySet = new Set(myArray);
mySet.add('100');
console.log(mySet);
mySet.add({a:1, b:2});
mySet.delete(22);
mySet.clear();
console.log(mySet.size);
mySet.forEach(function(val){
  console.log(val);
})
