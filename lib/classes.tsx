function classNamePrefix(prefix: string) {
    return function concatClassName(name?: string) {
        return [prefix, name].filter(Boolean).join('-');
    };
}

export {classNamePrefix};