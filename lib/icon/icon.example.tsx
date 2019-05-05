import React, {useState} from 'react';
import Icon from './icon';
import Highlight, {defaultProps} from 'prism-react-renderer';

const code = require('!!raw-loader!./icon.example.tsx').default;

const IconExample: React.FunctionComponent = () => {
    const [codeVisible, setCodeVisible] = useState(false);

    return (
        <div>
            <Icon name="wechat"></Icon>
            <button onClick={() => setCodeVisible(!codeVisible)}>查看代码</button>
            {codeVisible &&
            <Highlight {...defaultProps} code={code} language="jsx">
                {({className, style, tokens, getLineProps, getTokenProps}) => (
                    <pre className={className} style={style}>
                            {tokens.map((line, i) => (
                                <div {...getLineProps({line, key: i})}>
                                    {line.map((token, key) => (
                                        <span {...getTokenProps({token, key})} />
                                    ))}
                                </div>
                            ))}
                        </pre>
                )}
            </Highlight>
            }
        </div>
    );
};
export default IconExample;