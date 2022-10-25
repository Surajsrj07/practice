//Sort

//ascending or descending 

const names = ["suraj", "dhiraj", "manoj", "meghana", "akshay"];
console.log("Before sort : " + names);
names.sort();
console.log("After sort : " + names);

//it takes only first character

let num = [25, 45, 24, 11, 37, 8, 19];
console.log("Before sort : " + num);
num.sort();
console.log("After sort : " + num); //11,19,24,25,37,45,8

//Ascending order in numbers
num = [25, 45, 24, 11, 37, 8, 19];
console.log("Before sort : " + num);
num.sort((a, b) => {
    return a - b;
});
console.log("After sort : " + num); //8,11,19,24,25,37,45

//descending order
num = [25, 45, 24, 11, 37, 8, 19];
console.log("Before sort : " + num);
num.sort((a, b) => {
    return b - a;
});
console.log("After sort : " + num); //8,11,19,24,25,37,45



const users = [
    {
        full_name: "suraj",
        age: 38,
        city: "salem",
        salary: 10000,
    },

    {
        full_name: "Manoj",
        age: 15,
        city: "Udupi",
        salary: 15000,
    },

    {
        full_name: "Dhiraj",
        age: 44,
        city: "salem",
        salary: 16000,
    },

    {
        full_name: "Akshay",
        age: 2,
        city: "Madurai",
        salary: 12000,
    },

];


//ascending Age format
console.table(users);

users.sort((a, b) => {
    return a.age - b.age;
})

console.table(users);

//ascending full name format 

users.sort((a,b)=>{
    if (a.full_name>b.full_name) return 1;
    if (a.full_name<b.full_name) return -1;
    return 0;
});

console.table(users);

//ascending in salary

users.sort((a,b)=>{
   return a.salary-b.salary;
});

console.table(users);