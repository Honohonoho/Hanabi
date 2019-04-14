import React from 'react';
import wechat from './icons/wechat.svg';

console.log(wechat);

interface IconProps {
    name: String
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    return (
        <span>{props.name}</span>
    );
};

export default Icon;