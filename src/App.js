import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'redux-zero/react';


const App = ({playlist, actualSong, play}) =>  {
  return (
      <div className="App">
       
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
   );
}

const mapToPlay = ({playlist, actualSong, play}) => ({playlist, actualSong, play})
export default connect(mapToPlay)(App);
