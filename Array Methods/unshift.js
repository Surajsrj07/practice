//unshift

//adding first element to an array

let students = ["Ramya","arun","anil","dinesh"];
console.log(students);   

let len =students.unshift("Suraj");
console.log("length is : "+len);
console.log("After unshift : "+students);   //['Suraj', 'Ramya', 'arun', 'anil', 'dinesh']


len =students.unshift("Tiya","Kavin");
console.log("length is : "+len);
console.log("After unshift : "+students);  