import React from 'react';
import Layout from './layout';
import Aside from './aside';
import Header from './header';
import Content from './content';
import Footer from './footer';
import './layout.example.scss';

export default function () {
    return (
        <div>
            <h2>example one</h2>
            <Layout className="ex-layout">
                <Header className="ex-header">header</Header>
                <Content className="ex-content">content</Content>
                <Footer className="ex-footer">footer</Footer>
            </Layout>
            <h2>example two</h2>
            <Layout className="ex-layout">
                <Header className="ex-header">header</Header>
                <Layout>
                    <Aside className="ex-aside">aside</Aside>
                    <Content className="ex-content">content</Content>
                </Layout>
                <Footer className="ex-footer">footer</Footer>
            </Layout>
            <h2>example three</h2>
            <Layout className="ex-layout">
                <Header className="ex-header">header</Header>
                <Layout>
                    <Content className="ex-content">content</Content>
                    <Aside className="ex-aside">aside</Aside>
                </Layout>
                <Footer className="ex-footer">footer</Footer>
            </Layout>
            <h2>example four</h2>
            <Layout className="ex-layout">
                <Aside className="ex-aside">aside</Aside>
                <Layout>
                    <Header className="ex-header">header</Header>
                    <Content className="ex-content">content</Content>
                    <Footer className="ex-footer">footer</Footer>
                </Layout>
            </Layout>
        </div>
    );
};