import { getAllSongs } from '../../services/songs.js'
import { getAllSamples } from '../../services/samples.js'
import { getAllSongsSamples } from '../../services/songssamples.js'
import { useState, useEffect } from 'react';

function SongsSamplesRedo(props) {

  const [songs, setSongs] = useState([]);
  const [samples, setSamples] = useState([]);
  const [songssamples, setSongsSamples] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      const songs = await getAllSongs();
      setSongs(songs);
    };
    fetchSongs();
  }, []);

  return <div>
    <h1>hi</h1>
    {songs.map((index) => {
      return <p>{index.name}</p>
    })}
  </div>
}

export default SongsSamplesRedo