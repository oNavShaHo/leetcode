var findMode = function(root) {
    const counts = {};
    let maxCount = 0;
    const modes = [];

    const inorder = function(node) {
        if (!node) {
            return;
        }

        inorder(node.left);

        const count = (counts[node.val] || 0) + 1;
        counts[node.val] = count;

        if (count > maxCount) {
            maxCount = count;
            modes.length = 0;
            modes.push(node.val);
        } else if (count === maxCount) {
            modes.push(node.val);
        }

        inorder(node.right);
    };

    inorder(root);

    return modes;    
};