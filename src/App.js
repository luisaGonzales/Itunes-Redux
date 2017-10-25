import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'redux-zero/react';
import {Grid, Row, Col, Button  } from 'react-bootstrap';
import {play, stop, next} from './Actions'

const Head = ({title}) => {
  return (
    <Row className="text-center">
      <Col mdOffset={2} md={8}>
        <h1>{title}</h1>
      </Col>
    </Row>
  );
}

const SongList = ({playlist}) => {
  return (
    playlist.map((song, index) => {
      return(
        <Song title={song.title} artist={song.artist} duration={song.duration} isPlayingSong={song.isPlayingSong} />
      );
    })
  );
}


const Song = ({title, artist, duration, isPlayingSong}) => {
  return (
    <Row className={isPlayingSong ? 'isPlaying' : ''}>
      <Col mdOffset={2} md={6}>
        {title} - {artist} 
      </Col>
      <Col md={2}>
        {duration}
      </Col>
    </Row>
  );
}

const Buttons = ({play, next, stop}) => {
  return(
    <Row className="text-center">
      <Col mdOffset={2} md={8}>
        <Button className="btns" onClick={play}>Play</Button>
        <Button className="btns" onClick={next}>Next</Button>
        <Button className="btns" onClick={stop}>Stop</Button>
      </Col>
    </Row>
  );
}


const App = ({playlist, actualSong, isPlaying}) =>  {
  return (
    <Grid>
      <Head title="TreeItunes"/>
      <SongList playlist={playlist}/>
      <Buttons play={play} stop={stop} next={next}/>
    </Grid>
  );
}

const mapToPlay = ({playlist, actualSong, isPlaying}) => ({playlist, actualSong, isPlaying})
export default connect(mapToPlay)(App);
