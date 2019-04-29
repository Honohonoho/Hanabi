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
                    {props.buttons && props.buttons.length > 0 &&
                    // set key for each button element
                    <footer className={className('footer')}>
                        {props.buttons && props.buttons.map((button, index) => {
                            return React.cloneElement(button, {key: index});
                        })}
                    </footer>
                    }
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
// model 为基础Dialog， confirm 和 alert API 可在 model 基础上扩展而来
const model = (content: ReactNode, buttons?: Array<ReactElement>, afterClose?: () => void) => {
    const closeModel = () => {
        ReactDOM.render(React.cloneElement(component, {visible: false}), div);
        ReactDOM.unmountComponentAtNode(div);
        div.remove();
    };
    const component =
        <Dialog visible={true}
                onClose={() => {
                    closeModel();
                    afterClose && afterClose();
                }}
                buttons={buttons}
        >
            {content}
        </Dialog>;
    const div = document.createElement('div');
    document.body.append(div);
    ReactDOM.render(component, div);
    return closeModel;
};
const alert = (content: string) => {
    const buttons = [<button onClick={() => {closeDialog();}}>OK</button>];
    const closeDialog = model(content, buttons);

};
const confirm = (content: string, confirm?: () => void, cancel?: () => void) => {
    const confirmFn = () => {
        closeDialog();
        confirm && confirm();
    };
    const cancelFn = () => {
        closeDialog();
        cancel && cancel();
    };
    const buttons = [
        <button onClick={confirmFn}>confirm</button>,
        <button onClick={cancelFn}>cancel</button>
    ];
    const closeDialog = model(content, buttons, cancel);

};

export {alert, confirm, model};
export default Dialog;