/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    
    let obj={};
    const n=nums.length/2;
    for(let i of nums)
    {
        if(obj[i]==undefined)
        obj[i]=1;
        else 
        obj[i]++;
        if(obj[i]>=n)
        return i;
    }
    console.log(obj);

    return 999;
};