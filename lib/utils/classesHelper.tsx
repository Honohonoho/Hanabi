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

    return (name: string | classToggles, options?: extraClass) =>
        Object
            .entries(name instanceof Object ? name : {[name]: name})
            .filter(kv => kv[1] !== false)
            .map(kv => kv[0])
            .map(name => {
                return [prefix, name]
                    .filter(Boolean)
                    .join('-');
            })
            .concat(options && options.extra || [])
            .join(' ');
}

export {classNamePrefix};