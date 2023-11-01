/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 * }
 */

function findMode(root) {
  const obj = {};
  let max = 0;
  let a = [];

  function help(node) {
    if (!node) return;

    if (!obj[node.val]) obj[node.val] = 1;
    else obj[node.val]++;

    if (obj[node.val] > max) {
      max = obj[node.val];
      a = [node.val];
    } else if (obj[node.val] === max) {
      a.push(node.val);
    }

    help(node.left);
    help(node.right);
  }

  help(root);

  const uniqueModes = a.filter(val => obj[val] === max);

  return uniqueModes;
}
