import React from 'react';
import './importAllIcons';
import './icons.scss';

interface IconProps {
    name: String,
    onClick: (e: React.MouseEvent) => void
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    return (
        <svg className="h-icon" onClick={props.onClick}>
            <use xlinkHref={`#${props.name}`}/>
        </svg>
    );
};

export default Icon;