import React, { Component } from 'react';
import Button from './components/common/Button';
import Firebase from './helpers/firebase';
import Main from './components/Pages/main';
import Signup from './components/Pages/signup';
//import './App.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userIsLoged: true
    }
  }

  componentDidMount() {
    //this.testFirebase('kennefritzon@gmail.com','123456fritzpass');
  }

  testFirebase = async (email, password) => {
    let res = await Firebase.auth().createUserWithEmailAndPassword(email, password);
    console.log('compte ok', res);
  }

  render() {
    const { userIsLoged } = this.state;
    return (
      <div className="App">
        {
          (!userIsLoged) ?
          <Signup
          styles={{
            background: '#e6eced'
          }}
        />:
         <Main />
        }
        {/*<Button
          size='large'
          type='primary'
          label='Login'
          icon='check'
          onClick={() => alert('click on button')}
          //loading
       />*/}
      </div>
    );
  }
}

export default App;
