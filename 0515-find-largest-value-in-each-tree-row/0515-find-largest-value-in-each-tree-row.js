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
var largestValues = function(root) {
     let result=[];
     help(0,result,root);

     return result;
}; 

function help(i, result, root) {
    if (root == null) return;

    
    if (i >= result.length) {
        result.push(root.val);
    } else {
       

        result[i] = Math.max(result[i], root.val);
    }

    help(i + 1, result, root.left);
    help(i + 1, result, root.right);
}








