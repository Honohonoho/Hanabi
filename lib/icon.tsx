import React from 'react';
import './importAllIcons';
import './icons.scss';

interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    return (
        <svg className="h-icon" {...props}>
            <use xlinkHref={`#${props.name}`}/>
        </svg>
    );
};

export default Icon;