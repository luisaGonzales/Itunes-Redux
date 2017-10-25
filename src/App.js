import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'redux-zero/react';


const App = ({playlist, actualSong, play}) => {
  return (
    <div></div>
  );
}

const mapToProps = ({playlist, actualSong, play}) => ({playlist, actualSong, play});
export default connect (mapToProps)(App);
