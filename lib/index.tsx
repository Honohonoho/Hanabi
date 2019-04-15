import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon';

const fn = (e: React.MouseEvent<SVGElement | SVGUseElement>) => {
    console.log(e);
    console.log(e.target);
    console.log((e.target as SVGUseElement).href);
};
ReactDOM.render(
    <div>
        <Icon name="wechat" onClick={fn}/>
        {/*<Icon name="alipay"/>*/}
        {/*<Icon name="qq"/>*/}
    </div>
    , document.getElementById('app')
);