// For in
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}
// Closures

// var a = 5;
// function outer(x,y){
//     var b = 7;
//     function inner(){
//         console.log(a)
//         console.log(b*b*b)
//         let sum = x + y;
//         console.log(sum)
//     }
//     inner()
// }
// outer(12,8)

// function sayHello() {
//     var say = function() { console.log(hello); }
//     // Local variable that ends up within the closure 
//     var hello = 'Hello, world!';
//     return say;
//   }
//   var sayHelloClosure = sayHello(); 
//   sayHelloClosure(); // ‘Hello, world!’



  function sum(){
    let cache={};
    return function(x,y){
        if(cache[x +''+ y] ){
            console.log(`alredy calculated for ${x} and ${y}`);
            return cache[(x, y)];
        }
        const result =  x+y;
        console.log(result)
        cache[x+''+y] = result;
        return result;
    }
  }
  const memoized = sum()
  memoized(7,6);
  memoized(7,6);
  memoized(15,5);
  memoized(15,5);
  memoized(5,15);
  memoized(8,15);
  memoized(6,14);










  
// ================== Currying Function ===

// let printList = List("Akshay","Khurana","Manisha","Rahul");

function main() {
    let result=[];
      return function printList(x) {
        if (!x) {
          return result;
        }
        result = result + " " + x;
         return printList;
      };
    }
    const printList = main();
    console.log("Names are -",printList("Akshay,")("Khurana,")("Manisha,")("Rahul")())