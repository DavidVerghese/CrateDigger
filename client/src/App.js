import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Link, Switch, useHistory } from 'react-router-dom';
import { getAllSongssamples, deleteSongssample, postSongssample, putSongssample } from './services/songssamples';
import { getAllSongs, deleteSong, postSong, putSong } from './services/songs';
import { getAllSamples, deleteSample, postSample, putSample } from './services/samples';
import { getAllProducers, deleteProducer, postProducer, putProducer } from './services/producers';

function App() {
  const [allSongssamples, setAllSongssamples] = useState([]);
  const [allSongs, setAllSongs] = useState([]);
  const [allSamples, setAllSamples] = useState([]);
  const [allProducers, setAllProducers] = useState([]);

  const history = useHistory();

  useEffect(() => {
    // 3. call your function that sets all dogs in state
    fetchSongssamples();
  }, [])

  // 2. make a function to get all dogs and then set state

  const fetchSongssamples = async () => {
    const songssamples = await getAllSongssamples();
    setAllSongssamples(songssamples);
    console.log(songssamples);

    const songs = await getAllSongs();
    setAllSongs(songs);
    console.log(songs);

    const samples = await getAllSamples();
    setAllSamples(samples);
    console.log(samples);

    const producers = await getAllProducers();
    setAllProducers(producers);
    console.log(producers);
  }

  return (
    <div className="App">
      {allSongssamples.map((songssampleInfo) => {
        return (
          <p>Songssample: {songssampleInfo.sample_id}</p>
        )
      })}
      {allSongs.map((songInfo) => {
        return (
          <p>Song: {songInfo.name}</p>
        )
      })}
      {allSamples.map((sampleInfo) => {
        return (
          <p>Sample: {sampleInfo.name}</p>
        )
      })}
      {allProducers.map((producerInfo) => {
        console.log(producerInfo.name);
        return (
          <p>Producer: {producerInfo.name}</p>
        )
      })}
    </div>
  );
}

export default App;
