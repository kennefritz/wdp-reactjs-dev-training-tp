import React, { Component } from 'react';
import { Layout } from 'antd';
import PageHeader from './header';
import PageFooter from './footer';

const {
    Header, Footer, Sider, Content,
} = Layout;

class Main extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Layout>
                <PageHeader />
                <Content
                  style={{
                      height: '87vh',
                  }}
                >Content</Content>
                <PageFooter />
            </Layout>
        )
    }
}

export default Main;