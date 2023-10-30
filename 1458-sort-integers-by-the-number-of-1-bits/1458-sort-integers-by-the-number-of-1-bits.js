/**
 * @param {number} n
 * @return {number}
 */
function bitCount(n) {
  return (n.toString(2).match(/1/g) || []).length;
}

var sortByBits = function(arr) {
  arr.sort((a, b) => {
    const countA = bitCount(a);
    const countB = bitCount(b);

    if (countA === countB) {
      return a - b;
    } else {
      return countA - countB;
    }
  });

  return arr;
};
