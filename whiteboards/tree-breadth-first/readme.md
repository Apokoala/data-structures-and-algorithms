This challenge was to traverse a binary tree breadth first and return the resulting queue. 
This is very similar to how we would do a depth first except instead of popping the node we shift it.


The code is as follows:
```
function maxTrees(tree) {
    let result = [];
    let queue = [];
    queue.push(tree);

    while (queue.length > 0) {
        let node = queue.shift();
        result.push(node.value);
        if (node.left) {
            queue.push(node.left);
        }
        if (node.right) {
            queue.push(node.right);
        }
    }
    return result;
}
```

The Whiteboard:

[Whiteboard Breadth-First](https://ibb.co/YtV5QB4)