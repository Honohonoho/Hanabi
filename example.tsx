import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import IconExample from './lib/icon/icon.example';
import ButtonExample from './lib/button.example';
import DialogExample from './lib/dialog/dialog.example';
import LayoutExample from './lib/layout/layout.example';
import './lib/index.scss';
import {Layout, Aside, Content, Footer, Header} from './lib/layout/layout';
import './example.scss';
const logo = require('./logo.png');

ReactDOM.render(
    <div>
        <Router>
            <Layout className="site-page">
                <Header className="site-header">
                    <div className="logo">
                    <img src={logo} alt="Hanabi"/>
                        {/*<span>Hanabi UI</span>*/}
                    </div>
                </Header>
                <Layout className="site-main-wrap">
                    <Aside className="site-aside">
                        <h2>组件</h2>
                        <ul>
                            <li>
                                <Link to="/icon">Icon</Link>
                            </li>
                            <li>
                                <Link to="/button">Button</Link>
                            </li>
                            <li>
                                <Link to="/dialog">Dialog</Link>
                            </li>
                            <li>
                                <Link to="/layout">Layout</Link>
                            </li>
                        </ul>
                    </Aside>
                    <Content className="site-main">
                        <Route path="/icon" component={IconExample}/>
                        <Route path="/button" component={ButtonExample}/>
                        <Route path="/dialog" component={DialogExample}/>
                        <Route path="/layout" component={LayoutExample}/>
                    </Content>
                </Layout>
                <Footer className="site-footer">
                    &copy; Li Qi All rights Reserve
                </Footer>
            </Layout>
        </Router>
    </div>
    , document.querySelector('#app'));