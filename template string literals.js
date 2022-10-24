
let full_Name = "Suraj";
let age = "28";
let city = "Nellai";
let role = "Ceo of KGF";

let output = "";


output = "<table border='1'><tr><th>name</th><td>" + full_Name + "</td></tr><tr><th>name</th><td>" + age + "</td></tr><tr><th>name</th><td>" + city + "</td></tr><tr><th>name</th><td>" + role + "</td></tr></table>"


output += "<hr><table border='1'>"+
"<tr><th>name</th><td>" + full_Name + "</td></tr>"+
"<tr><th>name</th><td>" + age + "</td></tr>"+
"<tr><th>name</th><td>" + city + "</td></tr>"+
"<tr><th>name</th><td>" + role + "</td></tr>"+
"</table>"

//Template string literals

output+= `<hr><table border='1'>
<tr><th>name</th><td>${full_Name}</td></tr>
<tr><th>age</th><td>${age}</td></tr>
<tr><th>city</th><td>${city}</td></tr>
<tr><th>role</th><td>${role}</td></t
</table>`;


document.body.innerHTML = output;
