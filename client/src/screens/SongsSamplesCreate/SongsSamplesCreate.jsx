import SongsSamples from "../SongsSamples/SongsSamples"
import './SongsSamplesCreate.css'
import React, { useState } from 'react'

function SongsSamplesCreate(props) {
  const [formData, setFormData] = useState({
    song_id: "",
    sample_id: "",
  });
  const [songFormData, setSongFormData] = useState({
    name: "",
    artist: "",
    genre: "",
    record_label: "",
    year: "",
    producer_id: "",
    sample_appears: ""
  });
  const { song_id, sample_id } = formData;
  const { name, artist, genre, record_label, year, producer_id, sample_appears } = songFormData;
  const createSongssample = props.createSongssample;
  const createSong = props.createSong;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }
  const songHandleChange = (e) => {
    const { name, value } = e.target;
    setSongFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  return <div className="songs-samples-create-parent-div">
    <form onSubmit={(e) => {
          e.preventDefault()
          // call the create dog function and pass in the formData;
      createSongssample(formData);
      createSong(songFormData);
        }}>
          <h3>Create a Song/Sample Pair:</h3>
          <label>Song id:
            <input
              type="text"
              name="song_id"
              onChange={handleChange}
            />
          </label>
          <label>Sample id:
            <input
              type="text"
              name="sample_id"
              onChange={handleChange}
            />
      </label>
      <h3>Create a Song:</h3>
      <label>Name:
            <input
              type="text"
              name="name"
              onChange={songHandleChange}
            />
      </label>
      <label>Artist:
            <input
              type="text"
              name="artist"
              onChange={songHandleChange}
            />
      </label>
      <label>Genre:
            <input
              type="text"
              name="genre"
              onChange={songHandleChange}
            />
      </label>
      <label>Record label:
            <input
              type="text"
              name="record_label"
              onChange={songHandleChange}
            />
      </label>
      <label>Year:
            <input
              type="text"
              name="year"
              onChange={songHandleChange}
            />
      </label>
      <label>Producer id:
            <input
              type="text"
              name="producer_id"
              onChange={songHandleChange}
            />
      </label>
      <label>Sample appears:
            <input
              type="text"
              name="sample_appears"
              onChange={songHandleChange}
            />
          </label>
          <button>Submit</button> 
        </form>
    </div>
}
export default SongsSamplesCreate