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
 * @return {number}
 */
var averageOfSubtree = function(root) {
    
  // let a=[[]];
    let c=0;


  function node1visit(root)
{
   if(!root)
   return ;

   const a=node2visit(root);
  
  
   if(( Math.floor(a[0]/a[1]))==root.val)
   c++;

   node1visit(root.left);
   node1visit(root.right);

}
   
node1visit(root);

return c;
  
};



function node2visit(root)
{
        if(!root)
        return [0,0];
         
        let left=node2visit(root.left);
        let right =node2visit(root.right);

        let sum=root.val+left[0]+right[0];
        let count=1+left[1]+right[1];
        return [sum,count];
}