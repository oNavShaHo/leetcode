/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
    let obj={};
    let a=[];
    let max=-999;


function help(root)
{   
    if(!root)
    return;
 
    if(!obj[root.val])
    {
        obj[root.val]=1;
       
    }
    else 
    {
        obj[root.val]++;
     
    }

    if(obj[root.val]>max)
    {
        max=obj[root.val];
        a=[root.val]; 
    }
    else if(obj[root.val]==max) 
    {
        a.push(root.val);
    }

    help(root.left);
    help(root.right);

    
};

help(root);

console.log(obj);
 const u = a.filter(val => obj[val] === max);
return u;

}