var searchRange = function(nums, target) {
    const firstIndex = findFirstIndex(nums, target);
    const lastIndex = findLastIndex(nums, target);

    return [firstIndex, lastIndex];
};

function findFirstIndex(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let firstIndex = -1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] >= target) {
            if (nums[mid] === target) {
                firstIndex = mid;
            }
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return firstIndex;
}

function findLastIndex(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let lastIndex = -1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] <= target) {
            if (nums[mid] === target) {
                lastIndex = mid;
            }
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return lastIndex;
}
