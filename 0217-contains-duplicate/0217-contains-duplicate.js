/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let obj={};
    for(let i of nums){
        if(obj[i]==null)
        {
            obj[i]=0;
        }
        
        if(obj[i]==1)
        return true;
        obj[i]++;
    }

    return false;
};