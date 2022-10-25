//Includes(value,start_index)

const products =["Pencil","pen","Eraser","sharpener","pen"];

let result =products.includes("pen");
console.log(result);    //true

result=products.includes("scale"); 
console.log(result);    //false

result=products.includes("Pen",2); 
console.log(result);    //false

result=products.includes("Pen",0); 
console.log(result);    //false

