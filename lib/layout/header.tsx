import React from 'react';
import {classNamePrefix} from '../classesHelper';

const scopeClass = classNamePrefix('h-layout');

const Header: React.FunctionComponent = () => {
    return (
        <div className={scopeClass('header')}>header</div>
    );
};

export default Header;

