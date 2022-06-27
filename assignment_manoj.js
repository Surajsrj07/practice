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

// let total=0;
duplicate_array = []

for ( let i = 0; i < ratingData.length; i++ )
 {
    
    // console.log(Object.values(ratingData[i])[0]);
    duplicate_array.push(Object.values(ratingData[i])[0])

    // total +=(Object.values(ratingData[i])[1]);
    //   console.log(total);

 }

 console.log(duplicate_array)
// console.log("Average ratings =" +total/ratingData.length);

