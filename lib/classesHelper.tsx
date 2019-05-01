interface extraClass {
    extra: string | undefined;
}

function classNamePrefix(prefix: string) {
    return function concatClassName(name?: string, options?: extraClass) {
        const result = [prefix, name].filter(Boolean).join('-');
        if (options && options.extra) {
            return [result, options.extra].filter(Boolean).join(' ');
        } else {
            return result;
        }
    };
}

export {classNamePrefix};