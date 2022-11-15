// Function with rest operator
const vehicles =(first,...rest)=>{
    console.log(`The cars are ${first} and ${rest}`)
    console.log(first)
    console.log(rest[1])
}
vehicles("Volvo", "Nissan","Hyundai","Jeep")

// Function with spread operator

objectOne = {
    name:"John",
    place:"UK",
    age:22
}
console.log(objectOne)

objectTwo = {
    name:"Joey",
    ...objectOne
}
console.log(objectTwo)
// ==========================

const users = [
    { firstName: "Akshay", lastName: "Khurana", age: 3, gender: "male" },
    { firstName: "Salman", lastName: "Khan", age: 7, gender: "male" },
    { firstName: "Riya", lastName: "Rajput", age: 14, gender: "female" },
    { firstName: "Simran", lastName: "Kapoor", age: 16, gender: "female" },
  ];

  const personsNew = users.reduce((acc,curr) => {
     acc +=( curr.firstName +" "+ curr.lastName+", ");
     persons = acc;
    return persons;
},[])
console.log(`Names-${personsNew}`);

// ==================================
let space= 5;
var text = "";
for (let i=1; i<=6; i=i+1){
    for(let l=1;l<=space;l++){
        document.write("&nbsp&nbsp")
    }
    for(let j=1; j<=i; j++){
        document.write("*")
    }
    for(let k=1;k<=i;k++){
        if(k>=1){
            document.write(k)
        }
    }
    document.write("<br>");
    space--;
}
// -----------------------------
