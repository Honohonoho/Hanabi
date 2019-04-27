import React, {ReactNode, Fragment, ReactElement} from 'react';
import './dialog.scss';
import Icon from '../icon/icon';
import {classNamePrefix} from '../classes';

interface Props {
    visible: boolean;
    children: ReactNode;
    buttons: Array<ReactElement>;
    onClose: React.MouseEventHandler;
    closeOnClickMask?: boolean; // not required attribute
}

const className = classNamePrefix('h-dialog');

const Dialog: React.FunctionComponent<Props> = (props) => {
    const onClickClose: React.MouseEventHandler = (e) => {
        props.onClose(e);
    };
    const onClickMask: React.MouseEventHandler = (e) => {
        if (props.closeOnClickMask) {
            props.onClose(e);
        }
    };

    return (
        props.visible ?
            <Fragment>
                <div className={className('mask')} onClick={onClickMask} />
                <div className={className()}>
                    <div className={className('close')} onClick={onClickClose}>
                        <Icon name="close"/>
                    </div>
                    <header className={className('header')}>
                        Dialog Title
                    </header>
                    <main className={className('body')}>
                        {props.children}
                    </main>
                    <footer className={className('footer')}>
                        {/* set key for each button element */}
                        {props.buttons.map((button, index) => {
                            return React.cloneElement(button, {key: index});
                        })}
                    </footer>
                </div>
            </Fragment> :
            null
    );
};
Dialog.defaultProps = {
    closeOnClickMask: false
};
export default Dialog;