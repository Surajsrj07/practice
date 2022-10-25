//concat

let a=[10,20,30];
let b=[40,50,60];
let c=[70,80,90];

let d=a.concat(b);
console.log(d);

d=a.concat(b,c);
console.log(d);

//adding new arrays
d=a.concat(b,c,25,26,68);
console.table(d);

//adding nested arrays

d=a.concat(b,c,25,26,68,['a','b','c']);
console.table(d);
