import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Link, Switch, useHistory } from 'react-router-dom';
import Container from './containers/Container';
import SongsSamples from './screens/SongsSamples/SongsSamples.jsx';
import SongsSamplesDetail from './screens/SongsSamplesDetail/SongsSamplesDetail.jsx';
import SongsSamplesEditing from './screens/SongsSamplesEditing/SongsSamplesEditing.jsx';
import Producers from './screens/Producers/Producers.jsx';
import ProducersDetail from './screens/ProducersDetail/ProducersDetail.jsx';
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
    fetchSongssamples();
  }, [])

  const fetchSongssamples = async () => {
    const songssamples = await getAllSongssamples();
    setAllSongssamples(songssamples);

    const songs = await getAllSongs();
    setAllSongs(songs);

    const samples = await getAllSamples();
    setAllSamples(samples);

    const producers = await getAllProducers();
    setAllProducers(producers);
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
  const removeProducer = async (id) => {
    await deleteProducer(id);
    setAllProducers(prevState => prevState.filter(producer => producer.id !== id));
    // history.push('/dogs');
  }

  return (
    <div className="App">
      <h4><Link to='/songssamples'>SongsSamples</Link></h4>
      <h4><Link to='/container'>Container</Link></h4>
      <h4><Link to='/producers'>Producers</Link></h4>
      
      <Route exact path='/container'><Container /></Route>
      <Route exact path='/songssamples'>
        <SongsSamples
          allSongssamples={allSongssamples}
          allSongs={allSongs}
          allSamples={allSamples}
          allProducers={allProducers}
          />
      </Route>
      <Route exact path='/songssamples/:id'>
        <SongsSamplesDetail
          allSongssamples={allSongssamples}
          removeSongssample={removeSongssample}
          allSongs={allSongs}
          allSamples={allSamples}
          allProducers={allProducers}
        />
      </Route>
      <Route path='/songssamples/:id/edit'>
          <SongsSamplesEditing
            updateDog={updateSongssample}
            allDogs={allSongssamples}
          />
        </Route>
      <Route exact path='/producers'>
        <Producers
          allProducers={allProducers}/>
      </Route>
      <Route exact path='/producers/:id'>
        <ProducersDetail
          allProducers={allProducers}/>
      </Route>
    </div>
  );
}

export default App;
