import { isString } from 'src/is-string';

describe('isString', () => {
    it('should return true if the argument is a string', () => {
        expect(isString('string')).toBe(true);
    });

    it('should return false if the argument is not a string', () => {
        expect(isString()).toBe(false);
    });
});
