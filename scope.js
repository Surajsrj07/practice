//Var  1997 -2015

//2015 ECMA SCRIPT
//let
//const

//var, let ,const are keywords

//var is a Global scope ,redeclare variable & reassign values  
//let is a Block scope ,cannot redeclare variable & reassign values
//const is a Block scope ,redeclare variable & cannot reassign values but only through object key -value pair


var a = 12;
var b = 25;
console.log(a + b);

//-------------------------------------------------------------------------------

//1)Scope:

//Global/Functional scope  - variable can be declared inside or outside of the scope
//Block Scope   - variable can be declare only inside of the scope


if (true) {

    var msgOne = "Welcome to My world";    /*Global*/

    //<<<<<<< let msg = "Welcome to My world";   /*Block*/

    // const msg = "Welcome to My world";   /*Block*/

    //console.log(msgOne); >>>>>>>>

}

console.log(msgOne);


//2)Variable Redeclartion:

/*var a =25 ;
console.log(a);
                          (for var can redeclare variable)
var a =45;
console.log(a); */

let a = 25;
console.log(a);
//  (for let cannot redeclare variable)
let a = 45;
console.log(a);


// const a =25 ;
// console.log(a);   
//                         //  (for const cannot redeclare variable)
// const a =45;
// console.log(a);

//-------------------------------------------------------------------

//3)Value Assignment

/*
var  a = 25;
console.log(a);

a=45;
console.log(a); 
*/


let  a = 25;
console.log(a);

a=45;
console.log(a); 


/*
const  a = 25;
console.log(a);
                     //const error
a=45;
console.log(a); 
*/

const student =
{
    name: "suraj", age: 12 /*using object only we can change value key pairs of const keyword*/
};

console.table(student);

student.name = "Dhiraj";

console.log(student.name);

console.table(student);

