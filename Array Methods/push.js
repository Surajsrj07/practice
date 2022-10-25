//push

const x =[1,2,3,4,5,6,7];

console.log(x);
console.log(x.push(50));
console.log(x);

x.push(60,70,80);
console.log(x);



let fruits =["mango","apple"];

console.log(fruits);

fruits.push("banana");
console.log(fruits);

fruits.push("Gauva","Orange");
console.log(fruits);

//Merging two arrays:

let user1=["ram","suresh","gopi"];
let user2=["kumar","rahul"];

user1.push(...user2);
console.log(user1);

