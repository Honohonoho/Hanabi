import React from 'react';
import Layout from './layout';
import Header from './header';
import Content from './content';
import Footer from './footer';

export default function () {
    return (
        <div>
            <h2>example one</h2>
            <Layout style={{height: 200}} className="layout">
                <Header></Header>
                <Content></Content>
                <Footer></Footer>
            </Layout>
        </div>
    );
};