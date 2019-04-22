import React, { Component } from 'react';
import { Layout } from 'antd';
import PageHeader from './header';
import PageFooter from './footer';
import SideBar from './sideNav';

const {
    Content,
    Header,
    Footer,
} = Layout;

class Main extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Layout>
                <SideBar />
                <Layout style={{ marginLeft: 200 }}>
                    <PageHeader />
                    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                        <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                            ...
          <br />
                            Really
          <br />...<br />...<br />...<br />
                            long
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />
                            content
        </div>
                    </Content>
                    <PageFooter />
                </Layout>
                {/*<PageHeader />
                <Content
                  style={{
                      height: '87vh',
                  }}
                >Content</Content>
                <PageFooter />*/}
            </Layout>
        )
    }
}

export default Main;