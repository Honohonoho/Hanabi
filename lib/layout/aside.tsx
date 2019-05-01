import React from 'react';
import {classNamePrefix} from '../classesHelper';

const scopeClass = classNamePrefix('h-layout');

const Aside: React.FunctionComponent = () => {
    return (
        <div className={scopeClass('aside')}>aside</div>
    );
};

export default Aside;

