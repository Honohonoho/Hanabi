import React from 'react';
import Layout from './layout';
import Aside from './aside';
import Header from './header';
import Content from './content';
import Footer from './footer';

export default function () {
    return (
        <div>
            <h2>example one</h2>
            <Layout style={{height: 200}} className="layout">
                <Header>header</Header>
                <Content>content</Content>
                <Footer>footer</Footer>
            </Layout>
            <h2>example two</h2>
            <Layout style={{height: 200}} className="layout">
                <Header>header</Header>
                <Layout>
                    <Aside>aside</Aside>
                    <Content>content</Content>
                </Layout>
                <Footer>footer</Footer>
            </Layout>
            <h2>example three</h2>
            <Layout style={{height: 200}} className="layout">
                <Header>header</Header>
                <Layout>
                    <Content>content</Content>
                    <Aside>aside</Aside>
                </Layout>
                <Footer>footer</Footer>
            </Layout>
            <h2>example four</h2>
            <Layout style={{height: 200}} className="layout">
                <Aside>aside</Aside>
                <Layout>
                    <Header>header</Header>
                    <Content>content</Content>
                    <Footer>footer</Footer>
                </Layout>
            </Layout>
        </div>
    );
};