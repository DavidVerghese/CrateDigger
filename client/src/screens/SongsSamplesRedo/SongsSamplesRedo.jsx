import { getAllSongs } from '../../services/songs.js'
import { useState, useEffect } from 'react';
import "./SongsSamplesRedo.css";

function SongsSamplesRedo(props) {

  const [songs, setSongs] = useState([]);
  useEffect(() => {
    const fetchSongs = async () => {
      const songs = await getAllSongs();
      setSongs(songs);
    };
    fetchSongs();
  }, []);

  return <div>
    <h1>hi</h1>
    {songs.map((index, key) => {
      return <div key={key}><p>{index.name} Find out what samples this song contains</p><img className="songsample-redo-pic" src={index.song_pic_address}/><button>Click Here</button></div>
    })}
  </div>
}

export default SongsSamplesRedo