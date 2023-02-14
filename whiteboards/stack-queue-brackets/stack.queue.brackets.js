function validateBrackets(string) {
    const stack = [];
    const mapping = {')': '(', ']': '[', '}': '{'};
    
    for (const char of string) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else if (char === ')' || char === ']' || char === '}') {
            if (stack.length === 0 || stack[stack.length - 1] !== mapping[char]) {
                return false;
            }
            stack.pop();
        }
    }
    
    return stack.length === 0;
}

module.exports = { validateBrackets }