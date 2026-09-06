/**
 * 🧪 testing module
 * @version 1.0.0
 * @date 2026-09-06
 * @license MIT
 * @author Robert Willemelis <github.com/willi84>
 */
import fn from './index';

describe('@robert.tools/eleventy-filter-translate', () => {
    const FN = fn;
    it('should return a eleventy-filter-translate string', () => {
        expect(FN('hello', { hello: 'hola' })).toBe('hola');
    });
    it('should return the key if translation is not found', () => {
        expect(FN('goodbye', { hello: 'hola' })).toBe('goodbye');
    });
    it('should return the key if translations object is not provided', () => {
        expect(FN('hello', null)).toBe('hello');
        expect(FN('hello', undefined)).toBe('hello');
        expect(FN('hello', {})).toBe('hello');
    });

    it('should return a eleventy-filter-translate string with empty input', () => {
        expect(FN('', { '': 'empty' })).toBe('empty');
    });
});
