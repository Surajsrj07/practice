//Splice Method

//Splice is used to remove elements in an array
//it will change the original array

// removed_elements = splice(start ,length ,new element)

//start
let n1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Before splice :" +n1);
let removed_elements = n1.splice(3);
console.log("Removed Elements :"+removed_elements);
console.log("After splice :" +n1);


//start,length
let n2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Before splice :" +n2);
removed_elements = n2.splice(2,3);
console.log("Removed Elements :"+removed_elements);
console.log("After splice :" +n2);

//start,length,new element (replace)

let n3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Before splice :" +n3);
removed_elements = n3.splice(2,2,25,26);
console.log("Removed Elements :"+removed_elements);
console.log("After splice :" +n3);

//without removing elements adding elements into an array
let n4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Before splice :" +n4);

n4.splice(2,0,25,26);

console.log("After splice :" +n4); 