import React, { Component } from 'react';
import Button from './components/common/Button';
import './App.css';



class App extends Component {
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
