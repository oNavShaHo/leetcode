/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    

let firstIndex = nums.indexOf(target);
let lastIndex = nums.lastIndexOf(target);
    
return [firstIndex, lastIndex];

};