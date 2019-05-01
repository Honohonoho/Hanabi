import React from 'react';
import {classNamePrefix} from '../utils/classesHelper';

const scopeClass = classNamePrefix('h-layout');

interface Props extends React.HTMLAttributes<HTMLElement>{

}

const Footer: React.FunctionComponent<Props> = (props) => {
    const {className, ...restProps} = props;
    return (
        <div className={scopeClass('footer', {extra: className})}
             {...restProps}
        >
            {props.children}
        </div>
    );
};

export default Footer;

