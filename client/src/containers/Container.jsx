import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { getAllSongssamples, deleteSongssample, postSongssample, putSongssample } from '../services/songssamples';
import { getAllSongs, deleteSong, postSong, putSong } from '../services/songs';
import { getAllSamples, deleteSample, postSample, putSample } from '../services/samples';
import { getAllProducers, deleteProducer, postProducer, putProducer } from '../services/producers';

export default function Container() {

  const [allSongssamples, setAllSongssamples] = useState([]);
  const [allSongs, setAllSongs] = useState([]);
  const [allSamples, setAllSamples] = useState([]);
  const [allProducers, setAllProducers] = useState([]);

  const history = useHistory();

  useEffect(() => {
    fetchSongssamples();
  }, [])

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

  const createSongssample = async (songssampleData) => {
    const newSongssample = await postSongssample(songssampleData);
    setAllSongssamples(prevState => ([
      ...prevState,
      newSongssample
    ]));
    // history.push('/songssamples');
  }

  const updateSongssample = async (id, songssampleData) => {
    const updatedSongssample = await putSongssample(id, songssampleData);
    setAllSongssamples(prevState => prevState.map(songssample => {
        return songssample.id === Number(id) ? updatedSongssample : songssample
      })
    )
    // history.push('/dogs');
  }

  const removeSongssample = async (id) => {
    await deleteSongssample(id);
    setAllSongssamples(prevState => prevState.filter(songssample => songssample.id !== id));
    // history.push('/dogs');
  }

  return (<div>Hi
  </div>)
  

}