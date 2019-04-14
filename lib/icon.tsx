import React from 'react';
// import './icons/wechat.svg';
// import './icons/alipay.svg';
// import './icons/qq.svg';
import './importAllIcons';

interface IconProps {
    name: String
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    // @ts-ignore
    return (
        <span>
            <svg>
                <use xinkHref={`#${props.name}`}/>
            </svg>
        </span>
    );
};

export default Icon;