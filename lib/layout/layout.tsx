import React, {ReactElement} from 'react';
import './layout.scss';
import Aside from './aside';
import {classNamePrefix} from '../utils/classesHelper';

const scopeClass = classNamePrefix('h-layout');

interface Props extends React.HTMLAttributes<HTMLElement> {
    children: ReactElement | Array<ReactElement>
}

const Layout: React.FunctionComponent<Props> = (props) => {
    const {className, ...restProps} = props;
    const children = props.children as Array<ReactElement>;
    const hasAside = 'length' in children &&
        children.reduce((result, node) => {
            return result || node.type === Aside;
        }, false);
    return (
        <div className={scopeClass({'': true, 'has-aside': hasAside }, {extra: className})}
             {...restProps}
        >
            {props.children}
        </div>
    );
};

export default Layout;

