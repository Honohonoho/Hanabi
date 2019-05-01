import React from 'react';
import './importAllIcons';
import './icons.scss';
import classes from '../utils/classesHelper';

interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    const {className, name, ...restProps} = props;
    return (
        <svg className={classes('h-icon', className)}
             {...restProps}
        >
            <use xlinkHref={`#${name}`}/>
        </svg>
    );
};

export default Icon;