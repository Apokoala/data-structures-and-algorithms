class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    findMaximumValue() {
        let maxValue = this.value;
        if (this.left) {
            maxValue = Math.max(maxValue, this.left.findMaximumValue());
        }
        if (this.right) {
            maxValue = Math.max(maxValue, this.right.findMaximumValue());
        }
        return maxValue;
    }
}

module.exports = { BinaryTree }