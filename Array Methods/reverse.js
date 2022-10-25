//reverse()

const n = [1,2,3,4,5,6];

console.log("Before Reverse : "+n);
n.reverse();
console.log("After Reverse : "+n);


//Array element with length property:

const x ={0:10 ,1:20,2:30,3:40,4:50, length:5};
console.log(x);


Array.prototype.reverse.call(x);
console.table(x);
