/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
   max=nums[0];let sum=0;
    for(let i of nums)
    {
        sum+=i;
        max=Math.max(max,sum);
        if(sum<0)
        sum=0;
    }
    return max;
};