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

// const getCountryData1 = (country)=>{
//     const fetchData= fetch(`https://restcountries.com/v2/name/${country}`).then((data)=>data.json()).then((result)=>console.log(result))
// }
// console.log(getCountryData1('peru'),"data getting")

// const getCountryData = country=>{
//     fetch(`https://restcountries.com/v2/name/${country}`).then(data=>{
//        // if(!data.ok) throw new Error('country not found')
//        // return data.json()
//    }).then(result=>{
//        console.log(result)
//        const neighbour = result[0].borders[0]
//        return fetch(`https://restcountries.com/v2/name/${neighbour}`)
//    }).then(neighbour=>{
//        // if(!data.status) throw new Error('Error occured in Neighbour req!!')
//        console.log(neighbour)
//    }).catch((error)=>console.log(error,'error occured'))
// }
// getCountryData('india');

// const getCountryData = country=>{
//     fetch(`https://restcountries.com/v2/name/${country}`).then((data=>data.json())).then(result=>{
//         // if(!data.ok) throw new Error('country not found')
//        console.log(result)
//        const neighbour = result[0].borders;
//        console.log(neighbour)
//        return fetch(`https://restcountries.com/v2/name/${neighbour}`)
//    }).then(neighbour=>{
//        // if(!data.status) throw new Error('Error occured in Neighbour req!!')
//     //    console.log(neighbour)
//    }).catch((error)=>console.log(error,'error occured'))
// }
// getCountryData('peru');


const getCountryData = (country) => {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then((data) => {
      if(!data.ok) throw new Error('country not found')
      return data.json()
    })
    .then(result => {
      console.log(result);
      const neighbour = result[1].borders;
      return fetch(`https://restcountries.com/v2/name/${neighbour}`);
    })
    .then((neighbour) => {
        
      console.log(neighbour);
    })
    .catch((error) => console.log(error, "error occured"));
};
getCountryData("india");
