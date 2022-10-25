//Map() method :

const numbers =[0,1,2,3,4,5,6,7,8,9,10];
//map(value,index,array)

let sqrt =numbers.map((value)=>{
    return Math.sqrt(value).toFixed(2);
});


console.log(sqrt);



const users = [
    {
     full_name :"suraj",
     age :28,
     city : "salem",
     salary : 10000,
   },

   {
    full_name :"Manoj",
    age : 25,
    city : "Udupi",
    salary : 15000,
  },

  {
    full_name : "Dhiraj",
    age : 24,
    city : "salem",
    salary : 16000,
  },

  {
    full_name : "Akshay",
    age : 22,
    city : "Madurai",
    salary : 12000,
  },

];

console.table(users);

let eligible_user =users.map((user)=>({
   full_name:user.full_name,
   age:user.age,
   city:user.city,
   salary:user.salary,
   elgibility_status:user.salary>=15000?"eligible":"not eligible",

}));

console.table(eligible_user);