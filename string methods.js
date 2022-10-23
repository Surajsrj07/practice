//STRING METHODS

let first_name = "Suraja";
let last_name = "Yeshvanth";

let c =first_name +" "+ last_name; //manual 

//concatenation

console.log("concatenation : "+c);

//concat

c=first_name.concat(' ' ,last_name);
console.log("concat : "+c);

//append

c="suraj ";
c+="yeshvanth";
console.log("Append : "+c);


//Escaping  \

c= 'she can\'t dance';
console.log("Escaping : "+c);

//Length

c=first_name.length;
console.log("Length : "+c);


//Uppercase

c=first_name.toUpperCase();
console.log("Uppercase : "+c);

//Lowercase


c=first_name.toLowerCase();
console.log("Lowercase : "+c);


//IndexOf

c=first_name.indexOf('a');
console.log("IndexOf : "+c);  //3

c=first_name.lastIndexOf('a');
console.log("LastIndexOf : "+c); //5

//CharAt

c=first_name.charAt('2');  //r
console.log("CharAt : "+c);

c=first_name.charCodeAt('2');   //ASCII Value
console.log("CharAt : "+c);  //114


//SubStr

c=first_name.substr(0,3);
console.log("Substr : "+c);  

//Substring

let text = "01234567890";

c=text.substring(0,4);
console.log("Substring : "+c);  //0123

c=text.substring(4);
console.log("Substring : "+c);  //4567890

c=text.substring(4,0);
console.log("Substring : "+c);  //0123

c=text.substring(4,2);
console.log("Substring : "+c);   //23

c=text.substring(15,20);
console.log("Substring Invalid Length : "+c); //empty


c=text.substring(-5);
console.log("Substring : "+c);  //01234567890

//Slice

c=text.slice(2,4);
console.log("Slice : "+c);   //23

c=text.slice(4,2);
console.log("Slice : "+c);  //empty

c=text.slice(15,20);
console.log("Substring Invalid Length : "+c);  //empty


c=text.slice(-5);
console.log("Substring : "+c); //67890

//Split

let a = "Tutor joes computer academy";

c=a.split(" ");
console.log("Split : "+c);
console.table(c);


//Replace

a = "I am from Madurai";
console.log("Before Replace : " +a);
c=a.replace('Madurai','Chennai');
console.log("After Replace : " +c);

//includes in JS  //check whether array is present or not

const pets = ['cat', 'dog', 'rabbit'];
console.log(pets.includes('Fox'));   //false
console.log(pets.includes('dog'));   //true


//Trim in js  //removes unwanted spaces

a =" Suraj ";
console.log("Before Trim : "+a.length);  //7
a = a.trim();
console.log("After Trim : "+a.length);   //5


