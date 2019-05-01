import React from 'react';
import {classNamePrefix} from '../classesHelper';

const scopeClass = classNamePrefix('h-layout');

const Footer: React.FunctionComponent = () => {
    return (
        <div className={scopeClass('footer')}>footer</div>
    );
};

export default Footer;

