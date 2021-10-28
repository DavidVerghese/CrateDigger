
import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Link, Switch, useHistory } from 'react-router-dom';
import SongsSamples from './screens/SongsSamples/SongsSamples.jsx';
import SongsSamplesRedo from './screens/SongsSamplesRedo/SongsSamplesRedo.jsx';
import SongsSamplesDetail from './screens/SongsSamplesDetail/SongsSamplesDetail.jsx';
import SongsSamplesEditingRedo from './screens/SongsSamplesEditingRedo/SongsSamplesEditingRedo.jsx';
import SongsSamplesCreate from './screens/SongsSamplesCreate/SongsSamplesCreate.jsx';
import SearchResults from './screens/SearchResults/SearchResults.jsx';
import Producers from './screens/Producers/Producers.jsx';
import ProducersDetail from './screens/ProducersDetail/ProducersDetail.jsx';
import { getAllSongssamples, deleteSongssample, postSongssample, putSongssample } from './services/songssamples';
import { getAllSongs, postSong, putSong } from './services/songs';
import { getAllSamples,  postSample } from './services/samples';
import { getAllProducers, deleteProducer, postProducer, putProducer } from './services/producers';
import Search from './components/Search/Search.jsx';
import { AZ, ZA } from "./utils/sort.js";
import Home from './screens/Home/Home.jsx';

function App() {

  const [allSongssamples, setAllSongssamples] = useState([]);
  const [allSongs, setAllSongs] = useState([]);
  const [allSamples, setAllSamples] = useState([]);
  const [allProducers, setAllProducers] = useState([]);

  const history = useHistory();
  useEffect(() => {
    fetchData();
  }, [allSongssamples])

  const fetchData = async () => {
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
  }
  const createSong = async (songData) => {
    const newSong = await postSong(songData);
    setAllSongs(prevState => ([
      ...prevState,
      newSong
    ]));
  }
  const createSample = async (sampleData) => {
    const newSample = await postSample(sampleData);
    setAllSamples(prevState => ([
      ...prevState,
      newSample
    ]));
  }
  const createProducer = async (producerData) => {
    const newProducer = await postProducer(producerData);
    setAllProducers(prevState => ([
      ...prevState,
      newProducer
    ]));
  }

  const updateSongssample = async (id, songssampleData) => {
    const updatedSongssample = await putSongssample(id, songssampleData);
    setAllSongssamples(prevState => prevState.map(songssample => {
        return songssample.id === Number(id) ? updatedSongssample : songssample
      })
    )
  }
  const updateSong = async (id, songData) => {
    const updatedSong = await putSong(id, songData);
    setAllSongs(prevState => prevState.map(song => {
        return song.id === Number(id) ? updatedSong : song
      })
    )
  }
  const updateSample = async (id, sampleData) => {
    const updatedSample = await putSong(id, sampleData);
    setAllSamples(prevState => prevState.map(sample => {
        return sample.id === Number(id) ? updatedSample : sample
      })
    )
  }
  const updateProducer = async (id, producerData) => {
    const updatedProducer = await putProducer(id, producerData);
    setAllProducers(prevState => prevState.map(producer => {
        return producer.id === Number(id) ? updatedProducer : producer
      })
    )
  }

  const removeSongssample = async (id) => {
    await deleteSongssample(id);
    setAllSongssamples(prevState => prevState.filter(songssample => songssample.id !== id));
  }
  const removeProducer = async (id) => {
    await deleteProducer(id);
    setAllProducers(prevState => prevState.filter(producer => producer.id !== id));
  }


  const [queriedSongs, setQueriedSongs] = useState([]);
  const [queriedSamples, setQueriedSamples] = useState([]);
  const [queriedProducers, setQueriedProducers] = useState([]);
  const [queriedSongssamples, setQueriedSongssamples] = useState([]);

  const [searchResults, setSearchResults] = useState([]);
   const [sortType, setSortType] = useState([]);
  const handleSort = type => {
    setSortType(type)
    switch (type) {
      case "name-ascending":
        setQueriedSongs(AZ(queriedSongs));
        setQueriedSamples(AZ(queriedSamples));
        setQueriedProducers(AZ(queriedProducers));
        setQueriedSongssamples(AZ(queriedSongssamples));
        break
      case "name-descending":
        setQueriedSongs(ZA(queriedSongs));
        setQueriedSamples(ZA(queriedSamples));
        setQueriedProducers(ZA(queriedProducers));
        setQueriedSongssamples(ZA(queriedSongssamples));
        break
      default:
        break
    }
  };

  const handleSubmit = event => event.preventDefault()
  const handleSearch = event => {
    const newQueriedSongs = allSongs.filter(song => song.name.toLowerCase().includes(event.target.value.toLowerCase()));
    const newQueriedSamples = allSamples.filter(sample => sample.name.toLowerCase().includes(event.target.value.toLowerCase()));
    const newQueriedProducers = allProducers.filter(producer => producer.name.toLowerCase().includes(event.target.value.toLowerCase()));
    const newQueriedSongssamples = [];
    allSongssamples.map((songssamplesid) => {
      newQueriedSongs.map((queriedsongsid) => {
        if (queriedsongsid.id === songssamplesid.song_id) {
          newQueriedSongssamples.push(songssamplesid);
        }
      })
      newQueriedSamples.map((queriedsamplesid) => {
        if (queriedsamplesid.id === songssamplesid.sample_id) {
          newQueriedSongssamples.push(songssamplesid);
        }
      })
    })
    setQueriedProducers(newQueriedProducers);
    setQueriedSamples(newQueriedSamples);
    setQueriedSongs(newQueriedSongs);
    setQueriedSongssamples(newQueriedSongssamples);
  }


  return (
    <div className="App">
      <div className="nav">
      <Link to='/'><h1>CRATE DIGGER</h1></Link>
      <p><Link to='/songssamples'>ALL POSTS</Link></p>
      <p><Link to='/producers'>PRODUCERS</Link></p>
        <p><Link to='/new'>ADD A POST</Link></p>
        <div className="searchbar-parent-div">
           <Search
        onSubmit={handleSubmit} 
        onChange={handleSearch} 
      />
      <Link to='/searchresults'><button id="submit-button">Submit</button></Link>
          </div>
     
      </div>
      <Route exact path='/'>
          <Home />
        </Route>
      <Route exact path='/new'>
          <SongsSamplesCreate
          createSongssample={createSongssample}
          createSong={createSong}
          createSample={createSample}
          createProducer={createProducer}
          allSongs={allSongs}
          allSamples={allSamples}
          allProducers={allProducers}
          />
        </Route>
      <Route exact path='/songssamples'>
        <SongsSamples
          allSongssamples={allSongssamples}
          allSongs={allSongs}
          allSamples={allSamples}
          allProducers={allProducers}
          />
      </Route>
      <Route exact path='/songssamplesredo'>
        <SongsSamplesRedo
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
        <SongsSamplesEditingRedo
          allSongssamples={allSongssamples}
          updateSongssample={updateSongssample}
          allSongs={allSongs}
          updateSong={updateSong}
          allSamples={allSamples}
          updateProducer={updateProducer}
          allProducers={allProducers}
          updateSample = {updateSample}
          removeSongssample={removeSongssample}
          
          />
        </Route>
      <Route exact path='/producers'>
        <Producers
          allProducers={allProducers}
          allSongs={allSongs}
          allSamples={allSamples}
        />
      </Route>
      <Route exact path='/producers/:id'>
        <ProducersDetail
          allProducers={allProducers} allSongs={allSongs}
          allSamples={allSamples}/>
        
      </Route>
      <Route exact path='/searchresults'>
        <SearchResults
          queriedProducers={queriedProducers}
          queriedSamples={queriedSamples}
          queriedSongs={queriedSongs}
          queriedSongssamples={queriedSongssamples}
          allSongssamples={allSongssamples}
          removeSongssample={removeSongssample}
          allSongs={allSongs}
          allSamples={allSamples}
          allProducers={allProducers}
        />
      </Route>
      <div className="footer"> © David Verghese</div>
    </div>
  );
}

export default App;
