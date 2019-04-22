import React, { Component } from 'react';
import Button from './components/common/Button';
import Firebase from './helpers/firebase';
import './App.css';



class App extends Component {

  componentDidMount(){
    this.testFirebase('kennefritzon@gmail.com','123456fritzpass');
  }
  
  testFirebase = async (email,password) => {
      let res = await Firebase.auth().createUserWithEmailAndPassword(email,password);
      console.log('compte ok', res);
  }

  render() {
    return (
      <div className="App">
        <Button
          size='large'
          type='primary'
          label='Login'
          icon='check'
          onClick={() => alert('click on button')}
          //loading
         />
      </div>
    );
  }
}

export default App;
