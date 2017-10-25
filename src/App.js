import React, { Component } from 'react';
import './App.css';
import {connect} from 'redux-zero/react';
import {Grid, Row, Col} from 'react-bootstrap';
import {play, stop, next} from './Actions';
import {Head, SongList, Buttons} from './Components';

const App = ({playlist, actualSong, isPlaying}) =>  {
  return (
    <Grid className='bg'>
      <Row>
        <Col mdOffset={3} md={7} className='list'>
          <Head title="TreeItunes"/>
          <SongList playlist={playlist}/>
          <Buttons play={play} stop={stop} next={next}/>
        </Col>
      </Row>
    </Grid>
  );
}

const mapToPlay = ({playlist, actualSong, isPlaying}) => ({playlist, actualSong, isPlaying})
export default connect(mapToPlay)(App);
