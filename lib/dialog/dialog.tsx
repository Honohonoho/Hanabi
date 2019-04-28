import React, {ReactNode, Fragment, ReactElement} from 'react';
import './dialog.scss';
import Icon from '../icon/icon';
import {classNamePrefix} from '../classes';
import ReactDOM from 'react-dom';

interface Props {
    visible: boolean;
    children: ReactNode;
    buttons?: Array<ReactElement>;
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

    const dialog =
        props.visible ?
            <Fragment>
                <div className={className('mask')} onClick={onClickMask}/>
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
                        {props.buttons && props.buttons.map((button, index) => {
                            return React.cloneElement(button, {key: index});
                        })}
                    </footer>
                </div>
            </Fragment>
            :
            null;
    return (
        ReactDOM.createPortal(dialog, document.body)
    );
};
Dialog.defaultProps = {
    closeOnClickMask: false
};
const alert = (content: string) => {
    const component =
        <Dialog visible={true}
                onClose={() => {
                    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
                    ReactDOM.unmountComponentAtNode(div);
                    div.remove();
                }}
        >
            {content}
        </Dialog>;
    const div = document.createElement('div');
    document.body.append(div);
    ReactDOM.render(component, div);
};
const confirm = (content: string, confirm?: () => void, cancel?: () => void) => {
    const confirmFn = () => {
        ReactDOM.render(React.cloneElement(component, {visible: false}), div);
        ReactDOM.unmountComponentAtNode(div);
        div.remove();
        confirm && confirm();
    };
    const cancelFn = () => {
        ReactDOM.render(React.cloneElement(component, {visible: false}), div);
        ReactDOM.unmountComponentAtNode(div);
        div.remove();
        cancel && cancel();
    };
    const component = (
        <Dialog visible={true}
                onClose={cancelFn}
                buttons={[
                    <button onClick={confirmFn}>confirm</button>,
                    <button onClick={cancelFn}>cancel</button>
                ]}
        >
            {content}
        </Dialog>
    );
    const div = document.createElement('div');
    document.body.append(div);
    ReactDOM.render(component, div);
};
export {alert, confirm};
export default Dialog;