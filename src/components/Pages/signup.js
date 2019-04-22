import React, { Component } from 'react';
import { Layout } from 'antd';
const { Content } = Layout;

class Signup extends Component {
   
    render() {
        const { styles } = this.props;
        return (
            <Layout
              style={{
                  height: '100vh'
              }}
            >
                <Content
                    style={styles}
                >
                    <h1>Vous devez construire le contenu de cette page tel que decris!!</h1>
                </Content>
            </Layout>
        )
    }
}
export default Signup;