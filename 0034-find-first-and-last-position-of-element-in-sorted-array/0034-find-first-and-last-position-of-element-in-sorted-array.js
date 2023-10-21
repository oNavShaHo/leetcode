/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    

const firstIndex = nums.indexOf(target);
const lastIndex = nums.lastIndexOf(target);
    
return [firstIndex, lastIndex];

};