import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'redux-zero/react';
import {Grid, Row, Col  } from 'react-bootstrap'

const Head = ({title}) => {
  return (
    <Row className="text-center">
      <Col mdOffset={2} md={8}>
        <h1>{title}</h1>
      </Col>
    </Row>
  );
}

const Song = ({}) => {
  return(
    <Row></Row>
  );
}

const Buttons = ({}) => {
  return(
    <Row></Row>
  );
}


const App = ({playlist, actualSong, play}) =>  {
  return (
    <Grid>
      <Head title="TreeItunes"/>
    </Grid>
  );
}

const mapToPlay = ({playlist, actualSong, play}) => ({playlist, actualSong, play})
export default connect(mapToPlay)(App);
