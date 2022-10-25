

//forEach method:-

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//forEach (value,index,array)

numbers.forEach((value) => {
    console.log(value);
});



numbers.forEach((value, index) => {
    console.table("Index : " + index + " " + "value : " + value);
});


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

//for each()
users.forEach((value)=>{
    console.table(value.city);
})


