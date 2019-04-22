import React from 'react';

interface Props {
    visible: Boolean
}
const Dialog: React.FunctionComponent<Props> = (props) => {
    return (
        props.visible ?
            <div>dialog</div> :
            null
    );
};
export default Dialog;