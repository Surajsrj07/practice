// const restaurant =[{

//     name : "Seven Days Restaurant",
//     address : "3rd lane service road west layout",
//     city : "Bangalore"

// }

// {

//     name : "Chilli Bites",
//     address : "Electronic City",
//     city : "Bangalore"

// }

// {
//     name : "Punjabi Tadka",
//     address : "Four corner street",
//     city : "Delhi"

// }
// {
//     name : "Hotel Heaven",
//     address : "SVC gardens stop",
//     city : "Mumbai"
// }
// {

//     name : "The Northern Delight";
//     address : "Twin bridge road",
//     city : "Kolkata"
// };

// ];

// console.log(restaurant);


 
var restaurantList = [];
restaurantList = ["Seven Days Restaurant", "Chilli bites", "Hotel Heaven", "The Northern Delight", "Punjabi Tadka"];

// console.log(restaurantList);


function print(){
    // console.log(restaurantList);
}

print();


let orderData = {
    //key : value
'Below 500': 20,
'500-1000': 29,
'1000-1500': 30,
'1500-2000': 44,
'Above 2000': 76
};


//Total no of orders placed for the restaurant::

// let totalOrders = console.log(orderData["Below 500"]+ orderData["500-1000"]+ orderData["1000-1500"]+ orderData["1500-2000"]+ orderData["Above 2000"]);

var total = 0;
new_array=[]

//template
// console.log(Object.values(orderData)[4]);

 for(i=0 ; i < (Object.values(orderData).length) ; i++)
 {
    total +=(Object.values(orderData)[i]);
 }
 console.log(" Total score = " + total);


//Total no of order proportions options::


// function percentage(orderData, totalOrders){
//     return (orderData/totalOrders)*100 ;

// }

// percentage('Below 500'/199);

