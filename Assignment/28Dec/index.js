// =========================================  Implement Queue in javascript.
/*
var queue = [];
// Inserting vales into the queue.
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
queue.push(5);
console.log("The current queue is: ", queue);
// Removing element form queue using array method: shift()
var removeEle = queue.shift();
console.log("Removed element is: ", removeEle);
console.log("The current queue is: ", queue);

*/
// =========================================================================
//Given an integer array nums, return true if any value appears at least twice in the array, 
//and return false if every element is distinct.
var containsDuplicate = function(nums) {
    nums.sort();
    for (let i = 1; i < nums.length; ++ i) {
        if (nums[i] == nums[i - 1]) {
            return true;
        }
    }
    return false;
};
console.log(containsDuplicate([1,2,3,4,5,5]))
