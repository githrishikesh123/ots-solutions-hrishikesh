// const multiply =(num1,num2)=>{
//     return num1 * num2;
// }
// console.log(`The result is `+ multiply(2,3))
// =========================================
// const area = (radius)=>{
//     return Math.PI*radius*radius;
// }
// console.log(area(2));

// -------------------------
// const arrNum=[1,2,3,4,5]

// const triple=(x)=>{
//     return x*3
// }
// const newArr = arrNum.map(triple)
// console.log(newArr)

// ============================
// const numbers = [1, 2, 3,876, 4,98];
// const sum = numbers.reduce(function (result, item) {
//     if(item>result){
//         res= item
//     }
//     return res;
// }, 0);
// console.log(sum);





// const users = [
//     {firstName:"Akshay",lastName:"Khurana",age:27,gender:"male"},
//     {firstName:"Salman",lastName:"Khan",age:55,gender:"male"},
//     {firstName:"Riya",lastName:"Rajput",age:34,gender:"female"},
//     {firstName:"Simran",lastName:"Kapoor",age:27,gender:"female"}
// ]
// const nameIs = users.reduce((acc, curr)=>{
//     acc+=curr.firstName+ " " + curr.lastName;
//     if(curr.gender="female"){
//     return acc;
//     }
// },[]);
// console.log(nameIs)

// var persons = users.reduce(function (newArr, users) {
//     if (users.gender === 'female') {
//       newArr.push(users.firstName+" "+ users.lastName);
//     }
//     let personOne = newArr ;
//     console.log(typeof(newArr))
//     personOne.map(function())
//     return personOne;
//   }, []);
// console.log(persons)
const users = [
    {firstName:"Akshay",lastName:"Khurana",age:27,gender:"male"},
    {firstName:"Salman",lastName:"Khan",age:55,gender:"male"},
    {firstName:"Riya",lastName:"Rajput",age:34,gender:"female"},
    {firstName:"Simran",lastName:"Kapoor",age:27,gender:"female"}
]
const persons = users.filter((curr) => {
    if (curr.gender == "female") {
      return true;
    }
  }).map((curr) => {
    return `My name is ${curr.firstName} ${curr.lastName}, I am  ${curr.age} years old`;
  });
console.log(persons);

// ======= 2nd Problem========
const personsNew = users.reduce((acc,curr) => {
    if (curr.age == 27) {
        acc.push(curr.firstName + " "+ curr.age)
    }
    return acc ;
},[])
console.log(personsNew);

