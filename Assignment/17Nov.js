// create constructor function and make object using that CF
function emp(name,salary,age){
    this.name=name,
    this.salary=salary,
    this.age=age
}
employee= new emp("Joey",85000,25)
console.log(employee)

function Emp(){
    this.name="Joey",
    this.salary=85000,
    this.age=25
}
employee= new Emp()
console.log(employee)

// Memoized multiplication

  function multiply(){
    let cache={}
    return function(a,b){
        if(cache[a+''+b]){
            console.log(`already calculates for ${a} and ${b}`)
            return cache[a,b]
        }
        const res = a * b;
        console.log(res)
        cache[a+''+b] = res;
        return res
    }
  }
  const memoized = multiply()
  memoized(3,5)
  memoized(3,5)
  memoized(5,3)
  memoized(2,3)
  memoized(2,5)
