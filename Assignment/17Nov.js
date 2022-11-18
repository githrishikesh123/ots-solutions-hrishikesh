// =============create constructor function and make object using that CF

// function emp(name,salary,age){
//     this.name=name,
//     this.salary=salary,
//     this.age=age
// }
// employee= new emp("Joey",85000,25)
// console.log(employee)

// function Emp(){
//     this.name="Joey",
//     this.salary=85000,
//     this.age=25
// }
// employee= new Emp()
// console.log(employee)

// ========================================= Memoized multiplication

//   function multiply(){
//     let cache={}
//     return function(a,b){
//         if(cache[a+''+b]){
//             console.log(`already calculates for ${a} and ${b}`)
//             return cache[a,b]
//         }
//         const res = a * b;
//         console.log(res)
//         cache[a+''+b] = res;
//         return res
//     }
//   }
//   const memoized = multiply()
//   memoized(3,5)
//   memoized(3,5)
//   memoized(5,3)
//   memoized(2,3)
//   memoized(2,5)

// ==============================  promises and fetching data with error handling ==============

const getCountryData = (country) => {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then((data) => {
      if (!data.ok) throw new Error("Country Not Found");
      return data.json();
    })
    .then((result) => {
      console.log(result);
      console.log(result[0].borders, "console all borders");
      const neighbour = result[0].borders[3];
      console.log(neighbour);
      return fetch(`https://restcountries.com/v2/name/${neighbour}`);
    })
    .then((neighbour) => {
    //   if (neighbour.status != 200)
    //     throw new Error("Neighbour Country Not Found");
      neighbour.json();
      console.log(neighbour);
    })
    .catch((error) => console.log(error, "error occured"));
};
getCountryData("india");

// ------------------------------------------
//  Fetch API=======>
// The Fetch API is a simple interface for fetching resources.
//  Fetch allows us to make network request and handle responses

// Promises======>
// The Promise object represents the eventual completion (or failure) of an asynchronous operation
//  and its resulting value.

/*
When working with Promises, we must be aware of what it’s current state.
 There are three states, Pending, Fulfilled and Rejected.
*/
