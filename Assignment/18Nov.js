//============================================ task 1 ================================
// call once function
// desc: create a function which can't be called more than once

// var variables = true;
// const onceFunction = () => {
//     if(variables == true){
//       variables = false;
//       console.log("Hello JavaScript")

//   }else {
//        throw( "Alredy called once")
//   }
// }
// onceFunction()
// onceFunction()
// onceFunction()

//================================     task 2 =============================
// const arr = [[1,2], [2, 4, [5, 6, [2, 4]]], 8, 9]
// create a fucntion to flat the array => [1,2,2,4,5,6,2,4,8,9]

// const arr = [[1, 2], [2, 4, [5, 6, [2, 4]]], 8, 9]

// const getNumber=(array) => {
//   array.forEach((value)=>{
//     if(Array.isArray(value)){
//     getNumber(value)
//     }else{
//         console.log(value)
//     }
// })
// }
// getNumber(arr)

// console.log("test",arr.join())

// =========================== task 3 =======================================
// a = [{name:'amit'}, {name: 'Akshay'}]
// b = [{name: 'abcd'},{name:'abdc'}, {name:'kjdshck}, {name: 'Akshay'}, {name: 'akshay'}, {name:'AMit'}]
// result = [{name: 'Akshay'}, {name: 'akshay'}, {name:'AMit'}]

a = [{ name: "amit" }, { name: "Akshay" }, { name: "Joey" }];
b = [
  { name: "abcd" },
  { name: "abdc" },
  { name: "kjdshck" },
  { name: "Akshay" },
  { name: "akshay" },
  { name: "AMit" },
  { name: "Joey" },
];

const compareArray = (a, b) => {
  let res = [];
  res = b.filter((ele1) => {
    return a.find((ele2) => {
      return ele2.name.toUpperCase() === ele1.name.toUpperCase();   //find= returns first ele which passes condition
    });
  });
  return res;
};
result = compareArray(a, b);
console.log(result);











// for(i=0;i<=a.length-1;i++){
//     let res1 = Object.values(a);
//     let resFinal =res1[i]
//     console.log(resFinal)
// }

// for(i=0;i<=b.length-1;i++){
//     let res2 = Object.values(b);
//     var resFinal2 =res2[i]
//     console.log(resFinal2)
//     if(res1[i]=res2[i]){
//         console.log(res1)
//     }
// }

// ======================== Raw Work=============
// const arr1 =a;
// function double(x){
//     return x;
// }
// let output1=arr1.map(double);
// console.log(output1);

// const arr2 =b;
// function double(x){
//     return x;
// }
// let output2=arr2.map(double);
// console.log(output2);

// function outer(){
//     let executed = false;
//     return function(){

//         if(!executed){
//             console.log("Yesss")
//         }else
//     }
// }
// outer()
// outer()
