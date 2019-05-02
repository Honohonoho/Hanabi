function classes(...names: (string | undefined)[]) {
    return names.filter(Boolean).join(' ');
}

export default classes;

interface extraClass {
    extra: string | undefined;
}

// key 类型为 string, value 类型为 boolean 的 object
interface classToggles {
    [K: string]: boolean;
}

function classNamePrefix(prefix: string) {

    return function concatClassName(name: string | classToggles, options?: extraClass) {

        const namesAsObject = (typeof name === 'string' || name === undefined) ?
            {[name]: name} :
            name;

        const scopeClass = Object
            .entries(namesAsObject)
            .filter(kv => kv[1] !== false)
            .map(kv => kv[0])
            .map(name => {
                return [prefix, name]
                    .filter(Boolean)
                    .join('-')
            })
            .join(' ');

        if (options && options.extra) {
            return [scopeClass, options.extra].filter(Boolean).join(' ');
        } else {
            return scopeClass;
        }
    };

}

export {classNamePrefix};