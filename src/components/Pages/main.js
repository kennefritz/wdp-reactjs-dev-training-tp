import React, { Component } from 'react';
import { Layout } from 'antd';
import PageHeader from './header';
import PageFooter from './footer';
import SideBar from './sideNav';
import Input from '../common/Input';

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
                    <PageHeader
                      style={{
                          height:'10vh'
                      }}
                     />
                    <Content style={{ margin: '24px 16px 0', overflow: 'initial',height:'85vh' }}>
                        <div style={{ padding: 24, background: '#fff', textAlign: 'center',height: '98%' }}>
                          <Input
                            placeholder="rechercher"
                            prefix //when true Input has a prefixed icon
                            prefixIconType="user"
                            suffix //when true Input has a suffixed icon to give a user more informations about him
                            suffixDescription="ce champ represente le nom de l'utilisateur"
                            suffixIconType="info-circle"
                            addOnBefore
                            addOnAfter
                            beforeText={"Http://"}
                            afterText={".com"}
                            defaultValue="mon site"
                            //type="textarea"
                            searchable
                            size="large"
                            enterButtonText="chercher"
                            onSearch={(value) => alert(value) }
                          />
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