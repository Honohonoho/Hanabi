import classes, {classNamePrefix} from '../classesHelper';

describe('classes', () => {
    it('accept one class', function () {
        const result = classes('any-icon')
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

describe('classNamePrefix', () => {
    it('multi classes', () => {
        const scopeClass = classNamePrefix('h-layout');
        expect(scopeClass('')).toEqual('h-layout');
        expect(scopeClass({'header': true, 'active': false})).toEqual('h-layout-header');
        expect(scopeClass({'header': true, 'active': true})).toEqual('h-layout-header h-layout-active');
        expect(scopeClass({'header': true, 'active': true}, {extra: 'active'}))
            .toEqual('h-layout-header h-layout-active active');
    })
})