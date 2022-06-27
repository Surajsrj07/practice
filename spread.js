// Array
const primaryRoles =["frontend", "backened", "fullstack"];
const secondaryRoles = ["content writer", "graphic designer"];

const roles = [...primaryRoles ,...secondaryRoles];

console.log(roles);

//Object

const userBio ={
    id :07,
    name :"suraj",
    age :"28"

}

const userContact = {
    maidID : "sURAJSRJ@GMAIL.COM",
    PHONE : "9487059375",
    ADDRESS :"Madurai",
}


const userDetails = {...userBio, ...userContact};


console.log(userDetails);