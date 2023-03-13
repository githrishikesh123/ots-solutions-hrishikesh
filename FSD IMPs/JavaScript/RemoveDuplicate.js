const ReDuplicates = array => [...new Set(array)];

console.log(ReDuplicates([200,200,300,300,400,500,600,600])) // [200,300,400,600]