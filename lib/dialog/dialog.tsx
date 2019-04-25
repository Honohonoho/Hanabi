import React, {ReactNode, Fragment} from 'react';
import './dialog.scss';
import Icon from '../icon/icon';
import {classNamePrefix} from '../classes';

interface Props {
    visible: Boolean,
    children: ReactNode
}

const className = classNamePrefix('h-dialog');

const Dialog: React.FunctionComponent<Props> = (props) => {
    return (
        props.visible ?
            <Fragment>
                <div className={className('mask')}></div>
                <div className={className()}>
                    <div className={className('close')}>
                        <Icon name="close"/>
                    </div>
                    <header className={className('header')}>
                        Dialog Title
                    </header>
                    <main className={className('body')}>
                        {props.children}
                    </main>
                    <footer className={className('footer')}>
                        <button>ok</button>
                        <button>cancel</button>
                    </footer>
                </div>
            </Fragment> :
            null
    );
};
export default Dialog;