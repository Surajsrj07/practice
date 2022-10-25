//Slice
//start ,end
let numbers = [0,1,2,3,4,5,6,7,8,9,10];

console.table(numbers);

console.log(numbers.slice());  // output : 0 to 10

console.log(numbers.slice(2)); //2,3,4,5,6,7,8,9,10

console.log(numbers.slice(2,8)); //2,3,4,5,6,7

console.log(numbers.slice(-4)); // 7,8,9,,10
