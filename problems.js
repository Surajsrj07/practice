let ratingData = [{
    restaurant: 'KFC',
    rating:5
},
{
    restaurant: 'Burger King',
    rating:4
},
{
    restaurant: 'KFC',
    rating:3
},
{
    restaurant: 'Domino',
    rating:2
},
{
    restaurant: 'Subway',
    rating:3
},
{
    restaurant: 'Domino',
    rating:1
},
{
    restaurant: 'Subway',
    rating:4
},
{
    restaurant: 'Pizza Hut',
    rating:5
},

];



//STEP 1: Open the first door ( Identify the data type)
//STEP 2: EXTRACT THE FIRST DATA
//STEP 3: Open the SECOND door ( Identify the data type)
//STEP 4: EXTRACT THE SECOND DATA
//sTEP 5: Make a template code, Identify the variable

// console.log(Object.values(ratingData[0])[1]);

// console.log(ratingData.length);

// var len_ratingData = ratingData.length();

// console.log(Object.values(ratingData[0])[1]);

//step 1:

// console.log(typeof ratingData);

//step 2:

// console.log(Object.values(ratingData[0])[1]);


//Step 3 :

// console.log(ratingData.length);


// let total=0;

// for ( let i = 0; i < ratingData.length; i++ )
//  {
    
//     total +=(Object.values(ratingData[i])[1]);
//     //   console.log(total);

//  }

// console.log("Average ratings =" +total/ratingData.length);


console.log(ratingData);

console.log(ratingData.length);

// simpleArray = ratingData.filter(
//     (element, i) => i = simpleArray.indexOf()
//   );
console.log(Object.values(ratingData[0]));


var total = 0;

for(i=0; i <ratingData.length; i++)
{
    total += (Object.values(ratingData[i])[1]);
}

// console.log(total);

