/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumScore = function(nums, k) {
    let left = k - 1;
    let right = k + 1;
    let actMin = nums[k];
    let res = nums[k];
    while(left >= 0 && nums[left] >= nums[k]){
        left--;
        res += nums[k];
    }
    while(right <= nums.length - 1 && nums[right] >= nums[k]){
        right++;
        res += nums[k];
    }
    let temp = nums[k];
    while(left >= 0 || right <= nums.length - 1){
        if(left < 0){
            if(nums[right] < actMin){
                actMin = nums[right];
            }
            temp = actMin * (right - 0 + 1);
            if(temp > res){
                res = temp;
            }
            right++;
        }
        else if(right > nums.length - 1){
            if(nums[left] < actMin){
                actMin = nums[left];
            }
            temp = actMin * (nums.length - left);
            if(temp > res){
                res = temp;
            }
            left--;
        }
        else if(left >= 0 && nums[left] > nums[right]){
            if(nums[left] < actMin){
                actMin = nums[left];
            }
            temp = actMin * (right - left);
            if(temp > res){
                res = temp;
            } 
            left--;
        }
        else if(right <= nums.length - 1 && nums[right] > nums[left]){
            if(nums[right] < actMin){
                actMin = nums[right];
            }
            temp = actMin * (right - left);
            if(temp > res){
                res = temp;
            }
            right++;
        }
        else{
            if(nums[left] < actMin){
                actMin = nums[left];
            }
            temp = actMin * (right - left + 1);
            if(temp > res){
                res = temp;
            }
            left--;
            right++;
        }
    }
    return res;
};