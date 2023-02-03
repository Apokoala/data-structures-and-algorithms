function maxTrees(tree) {
    let maxValue = 0;

    function traverse(node){
        if (!node) return;
        maxValue = Math.max(maxValue, node.value);
        traverse(node.left);
        traverse(node.right);
    }
    traverse(root);
    return maxValue;
}