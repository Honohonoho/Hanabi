import React from 'react';
import {classNamePrefix} from '../classesHelper';
import '../utils/classes';
import './layout.scss';

const scopeClass = classNamePrefix('h-layout');

interface Props extends React.HTMLAttributes<HTMLElement>{

}

const Layout: React.FunctionComponent<Props> = (props) => {
    const {className, ...restProps} = props;
    return (
        <div className={scopeClass('', {extra: className})}
             {...restProps}
        >
            {props.children}
        </div>
    );
};

export default Layout;

