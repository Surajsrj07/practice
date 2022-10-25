//array methods

let a = [10, 20, 30, 40, 50];
//example : 0=>10 ,1=>20 ,2=>30 and so on.
console.log(a);
console.table(a);
console.log(a[2]);  //30


//another method  => ARRAY CONSTRUCTOR

let b = new Array(10, 20, 30, 40, 50);
console.table(b);


//Array stores all types of data values

let c = new Array("suraj", 25, true,
    { m1: 80, m2: 99, m3: 86 });
console.table(c);
console.table(c[3]);