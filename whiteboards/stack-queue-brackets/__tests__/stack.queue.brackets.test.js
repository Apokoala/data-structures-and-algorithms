const { validateBrackets } = require('../stack.queue.brackets');

describe('validateBrackets', () => {
    it('should return true for balanced brackets', () => {
        expect(validateBrackets('{}')).toBe(true);
        expect(validateBrackets('{}(){}')).toBe(true);
        expect(validateBrackets('()[[Extra Characters]]')).toBe(true);
        expect(validateBrackets('(){}[[]]')).toBe(true);
        expect(validateBrackets('{}{Code}[Fellows](())')).toBe(true);
    });
    
    it('should return false for unbalanced brackets', () => {
        expect(validateBrackets('[({}]')).toBe(false);
        expect(validateBrackets('(]')).toBe(false);
        expect(validateBrackets('{(})')).toBe(false);
        expect(validateBrackets('{')).toBe(false);
        expect(validateBrackets(')')).toBe(false);
        expect(validateBrackets('[}')).toBe(false);
    });
});