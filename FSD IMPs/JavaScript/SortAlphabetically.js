//sort alphabetically
function alphabetSort(arr)
{
  return arr.sort((a, b) => a.localeCompare(b));
}
let array = ["d", "c", "b", "a"]
console.log(alphabetSort(array)) // ["a", "b", "c", "d"]