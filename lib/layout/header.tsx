import React from 'react';
import {classNamePrefix} from '../utils/classesHelper';

const scopeClass = classNamePrefix('h-layout');

interface Props extends React.HTMLAttributes<HTMLElement>{

}

const Header: React.FunctionComponent<Props> = (props) => {
    const {className, ...restProps} = props;
    return (
        <div className={scopeClass('header', {extra: className})}
             {...restProps}
        >
            {props.children}
        </div>
    );
};

export default Header;

