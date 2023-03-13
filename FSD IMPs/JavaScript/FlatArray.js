var array = [123, 500, [1, 2, [34, 56, 67, [234, 1245], 900]], 845, [30257]]
//flatten array of array
array.flat(Infinity)
// output:
// [123, 500, 1, 2, 34, 56, 67, 234, 1245, 900, 845, 30257]