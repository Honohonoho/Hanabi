import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon/icon';

const fn: React.MouseEventHandler = (e) => {
    console.log(e);
    console.log(e.target);
    console.log((e.target as SVGUseElement).href);
};
ReactDOM.render(
    <div>
        <Icon name="wechat"
              className="icon-wechat"
              onClick={fn}
              onMouseEnter={fn}
              onMouseLeave={fn}
        />
        {/*<Icon name="alipay"/>*/}
        {/*<Icon name="qq"/>*/}
    </div>
    , document.getElementById('app')
);