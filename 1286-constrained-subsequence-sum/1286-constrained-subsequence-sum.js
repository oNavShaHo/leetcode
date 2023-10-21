/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var constrainedSubsetSum = function(nums, k) {
    let maxSum = nums[0];
        const maxSumQueue = [];

        for (let i = 0; i < nums.length; i++) {
            nums[i] += maxSumQueue.length ? maxSumQueue[0] : 0;
            maxSum = Math.max(maxSum, nums[i]);

            while (maxSumQueue.length && nums[i] > maxSumQueue[maxSumQueue.length - 1]) {
                maxSumQueue.pop();
            }

            if (nums[i] > 0) {
                maxSumQueue.push(nums[i]);
            }

            if (i >= k && maxSumQueue.length && maxSumQueue[0] === nums[i - k]) {
                maxSumQueue.shift();
            }
        }

        return maxSum;
};