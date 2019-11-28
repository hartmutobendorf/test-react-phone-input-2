import React from 'react';
import logo from './logo.svg';
import './App.css';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/dist/style.css'

var state = { phone : ''}

function handleOnChange() {

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <PhoneInput defaultCountry={'us'} value={state.phone} onChange={handleOnChange} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
