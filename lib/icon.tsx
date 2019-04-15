import React from 'react';
import './importAllIcons';
import './icons.scss';

interface IconProps {
    name: String
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    return (
        <svg className="h-icon">
            <use xlinkHref={`#${props.name}`}/>
        </svg>
    );
};

export default Icon;