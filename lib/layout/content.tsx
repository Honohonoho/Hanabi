import React from 'react';
import {classNamePrefix} from '../classesHelper';

const scopeClass = classNamePrefix('h-layout');

const Content: React.FunctionComponent = () => {
    return (
        <div className={scopeClass('content')}>content</div>
    );
};

export default Content;

