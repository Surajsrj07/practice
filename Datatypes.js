//Data types in JS:

// 1)Primitive datatype
/*
  number (125); (25.15);
  string ("Suraj");
  boolean (true or false);
  null
  undefined  ->>if cannot assign values
  symbols ES6
*/

// 2)Reference datatype
/*
  Array ([45,25,18]);
  Object Literals ({name: "suraj",age:28});
  Date 
  Time
  Function
  */

  var a =25;
  var name = "Suraj Yeshvanth";

  var isMarried = true;

  var phoneNumber = null;

  let b;

  console.log(b);

  console.log(typeof(name));

  //symbols
  const s1 =Symbol();
  const s2 =Symbol();

  console.log(s1==s2);

  var courses = ['c', 'c++', 'Java' ];

  console.log(typeof(courses));

  


  var d = new Date();

  console.log(typeof(d));
  console.log(d);


  var student ={
    'name':'suraj',
    'age' :12
  }
  console.log(typeof(student));
