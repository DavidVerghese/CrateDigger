import SongsSamples from "../SongsSamples/SongsSamples"
import './SongsSamplesCreate.css'
import React, { useState } from 'react'

function SongsSamplesCreate(props) {
  const [formData, setFormData] = useState({
    song_id: "",
    sample_id: "",
  });
  const { song_id, sample_id } = formData;
  const createSongssample = props.createSongssample;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  return <div className="songs-samples-create-parent-div">
    <form onSubmit={(e) => {
          e.preventDefault()
          // call the create dog function and pass in the formData;
          createSongssample(formData);
        }}>
          <h3>Create a Song/Sample Pair</h3>
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
          <button>Submit</button> 
        </form>
    </div>
}
export default SongsSamplesCreate