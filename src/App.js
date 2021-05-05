import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
function One(){
  return <div>Quang</div>;
}
//anonymous
var Two=function(){
  return(
    <div>
      <h2>C2</h2>
    </div>
  );
}
//cach 3
var Three=()=>{
  return(
    <div>
      <h2>C3</h2>
    </div>
  );
}
//class
class Welcome extends Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dao Quang
        </a>
       <One></One>
      <Two></Two>
      <Three></Three>

      </header>
    </div>
  );
}

export default App;
