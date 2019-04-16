import React from 'react';
import './importAllIcons';
import './icons.scss';

interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string
}

function classes(...names: (string | undefined)[]) {
    return names.filter(Boolean).join(' ');
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    const {className, ...restProps} = props;
    return (
        <svg className={classes('h-icon', className)}
             {...restProps}
        >
            <use xlinkHref={`#${props.name}`}/>
        </svg>
    );
};

export default Icon;