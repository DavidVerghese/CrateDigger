import './SongEdit.css'
import { getOneSong, putSong } from "../../services/songs";
import { putSongProducerName, getSongProducerName } from "../../services/songproducers";
import { useParams, Redirect } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { youtubePlayer} from "../../services/youtubePlayer"
function SongEdit() {
  const { id } = useParams();
  const [isUpdated, setUpdated] = useState(false);
  const [song, setSong] = useState({
    name: "",
    artist: "",
    genre: "",
    record_label: "",
    year: "",
    producer_id: "",
    sample_appears: "",
    song_pic_address: "",
    youtube_address: "",
    youtube_embed: ""
  });
  const [producerName, setProducerName] = useState({
    name: ""
  })
  const [producerObject, setProducerObject] = useState({
    producer: {
      name: ""
    }
  })

useEffect(() => {
  const fetchSong = async () => {
    const song = await getOneSong(id);
    setSong(song);
  };
  fetchSong();
  const fetchProducerName = async () => {
    const producerName = await getSongProducerName(id);
    setProducerName( producerName );
    
  };
  fetchProducerName();

}, [id])

if (isUpdated) {
  return <Redirect to={`/song/${id}`} />;
}
  

  
  const handleChange = (event) => {
  const { name, value } = event.target;
    setSong({
      ...song,
      [name]: value,
    });
  };

  const songProducerNameChange = (event) => {
    const { name, value } = event.target;
    setProducerObject({
      producer: {
          [name]: value,
        }
      
      });
    };
  


const handleSubmit = async (event) => {
  event.preventDefault();
  setSong({
    ...song
  });
  const updated = await putSong(id, song);
  const updated2 = await putSongProducerName(id, producerName);
  setUpdated(updated);
};


  return   <div className="song-edit">
  <form className="song-edit-form" onSubmit={handleSubmit}>
    <h1>Edit Song</h1>
    <label htmlFor="name">Name</label>
    <input
      className="input-name"
      placeholder="Name"
      value={song.name}
      name="name"
      required
      autoFocus
      onChange={handleChange}
      />
      <label htmlFor="artist">Artist</label>
    <input
      className="input-name"
      placeholder="Artist"
      value={song.artist}
      name="artist"
      required
      autoFocus
      onChange={handleChange}
      />
        <label htmlFor="genre">Genre</label>
    <input
      className="input-genre"
      placeholder="Genre"
      value={song.genre}
      name="genre"
      required
      autoFocus
      onChange={handleChange}
      />
          <label htmlFor="record_label">Record label</label>
    <input
      className="input-genre"
      placeholder="Record_label"
      value={song.record_label}
      name="record_label"
      required
      autoFocus
      onChange={handleChange}
      />
          <label htmlFor="year">Year</label>
    <input
      className="year"
      placeholder="Year"
      value={song.year}
      name="year"
      required
      autoFocus
      onChange={handleChange}
      />

<label htmlFor="youtube_embed">Youtube Embed</label>
    <input
      className="youtube_embed"
      placeholder="youtube_embed"
      value={song.youtube_embed}
      name="youtube_embed"
      required
      autoFocus
      onChange={handleChange}
      />
      <label htmlFor="producer_name">Producer Name</label>
    <input
      className="producer_name"
      placeholder="producer_name"
      value={producerName}
      name="producer_name"
      required
      autoFocus
      onChange={songProducerNameChange}
      />

      {youtubePlayer(song.youtube_embed)}


    <button type="submit">
      Save
    </button>
  </form>
</div>
}
export default SongEdit