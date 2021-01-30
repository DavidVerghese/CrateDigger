import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Link, Switch, useHistory } from 'react-router-dom';
import { getAll, deleteSongsample, postSongsample, putSongsample } from './services/songssamples';

function App() {
  const [allSongssamples, setAllSongssamples] = useState([]);
  const history = useHistory();

  useEffect(() => {
    // 3. call your function that sets all dogs in state
    fetchSongssamples();
  }, [])

  // 2. make a function to get all dogs and then set state

  const fetchSongssamples = async () => {
    const songssamples = await getAll();
    setAllSongssamples(songssamples);
    console.log(songssamples);
  }

  return (
    <div className="App">
      Hi!
    </div>
  );
}

export default App;
