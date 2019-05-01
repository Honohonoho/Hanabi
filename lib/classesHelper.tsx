interface extraClass {
    extra: string | undefined;
}

// key 类型为 string, value 类型为 boolean 的 object
interface classToggles {
    [K: string]: boolean;
}

function classNamePrefix(prefix: string) {

    return function concatClassName(name?: string | classToggles, options?: extraClass) {
        let name2;
        let result;
        if (typeof name === 'string' || name === undefined) {
            name2 = name;
            result = [prefix, name2].filter(Boolean).join('-');
        } else {
            name2 = Object.entries(name).filter(kv => kv[1]).map(kv => kv[0]);
            result = name2.map(n => {
                 return [prefix, n].filter(Boolean).join('-');
            }).join(' ');
        }
        // const result = [prefix, name2].filter(Boolean).join('-');
        if (options && options.extra) {
            return [result, options.extra].filter(Boolean).join(' ');
        } else {
            return result;
        }
    };

}

export {classNamePrefix};