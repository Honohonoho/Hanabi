import React from 'react';
import './importAllIcons';

interface IconProps {
    name: String
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    return (
        <span>
            <svg>
                <use xinkHref={`#${props.name}`}/>
            </svg>
        </span>
    );
};

export default Icon;