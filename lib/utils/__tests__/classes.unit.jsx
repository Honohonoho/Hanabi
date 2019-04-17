import classes from '../classes';

describe('classes', () => {
    it('accept one class', function () {
        const result = classes('any-icon');
        expect(result).toEqual('any-icon')
    });
    it('accept classes', function () {
        const result = classes('any-icon-1', 'any-icon-2');
        expect(result).toEqual('any-icon-1 any-icon-2')
    });
    it('accept classes include undefined', function () {
        const result = classes('any-icon-1', undefined, 'any-icon-2');
        expect(result).toEqual('any-icon-1 any-icon-2')
    });
    it('accept null class', function () {
        const result = classes();
        expect(result).toEqual('')
    });
});