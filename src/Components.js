import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';

export const Head = ({title}) => {
    return (
      <Row className="text-center title">
        <Col md={12}>
          <h1>{title}</h1>
        </Col>
      </Row>
    );
  }
  
export const SongList = ({playlist}) => {
    return (
      playlist.map((song, index) => {
        return(
          <Song key={index} title={song.title} artist={song.artist} duration={song.duration} isPlayingSong={song.isPlayingSong} />
        );
      })
    );
  }
  
  
export const Song = ({title, artist, duration, isPlayingSong}) => {
    return (
      <Row className={isPlayingSong ? 'isPlaying' : 'song'}>
        <Col  md={10}>
          {title} - {artist} 
        </Col>
        <Col md={2}>
          {duration}
        </Col>
      </Row>
    );
  }
  
export const Buttons = ({play, next, stop}) => {
    return(
      <Row className="text-center btnsList">
        <Col  md={12}>
          <Button className="btns" onClick={play}>Play</Button>
          <Button className="btns" onClick={next}>Next</Button>
          <Button className="btns" onClick={stop}>Stop</Button>
        </Col>
      </Row>
    );
  }