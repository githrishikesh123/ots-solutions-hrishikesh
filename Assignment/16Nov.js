// setTimeout( func1=()=>{
//     let promise = new Promise(function(resolve,reject){
//         resolve("Resolved!")
//     },2000)
//     console.log(promise)

// })


/* Create a promise. Have it resolve with a value of 'Resolved!' in resolve after a delay of 1000ms,
 using setTimeout.
*/
let promise = new Promise(function(resolve,reject){
    setTimeout( func1=()=>{
    console.log(promise)
    resolve("Resolved!!")
},2000)
})


// Create another promise. Now have it reject with a value of "Rejected!" without using setTimeout.

// let promise = new Promise(function(resolve,reject){
//     reject("Rejected!!!")
// },2000)
// console.log(promise)