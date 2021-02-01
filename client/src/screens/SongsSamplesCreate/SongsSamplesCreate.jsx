import SongsSamples from "../SongsSamples/SongsSamples"
import './SongsSamplesCreate.css'
import React, { useState } from 'react'

function SongsSamplesCreate(props) {

  const [formData, setFormData] = useState({
    song_id: "",
    sample_id: ""
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
  const [sampleFormData, setSampleFormData] = useState({
    name: "",
    artist: "",
    genre: "",
    record_label: "",
    year: "",
    producer_id: "",
    sampled_at: ""
  });
  const [producerFormData, setProducerFormData] = useState({
    name: "",
    genre: "",
    lifetime: "",
    location: ""
  });
  // const { song_id, sample_id } = formData;
  // const { name, artist, genre, record_label, year, producer_id, sample_appears } = songFormData;
  // const sampleFormData = { sampleName, sampleArtist, sampleGenre, sampleRecord_label, sampleYear, sampleProducer_id, sampleSampled_at }
  const createSongssample = props.createSongssample;
  const createSong = props.createSong;
  const createSample = props.createSample;
  const createProducer = props.createProducer;

  const songHandleChange = (e) => {
    const { name, value } = e.target;
    setSongFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }
  const sampleHandleChange = (e) => {
    const { name, value } = e.target;
    setSampleFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }
  const producerHandleChange = (e) => {
    const { name, value } = e.target;
    setProducerFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    // setFormData(prevState => ({
    //   ...prevState,
    //   [name]: value
    // }));
  }

  return <div className="songs-samples-create-parent-div">
    <form onSubmit={(e) => {
          e.preventDefault()
      createSong(songFormData);
      createSample(sampleFormData);
      createProducer(producerFormData);
      
    }}>
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
      <h3>Create a Sample:</h3>
      <label>Name:
            <input
              type="text"
              name="name"
              onChange={sampleHandleChange}
            />
      </label>
      <label>Artist:
            <input
              type="text"
              name="artist"
              onChange={sampleHandleChange}
            />
      </label>
      <label>Genre:
            <input
              type="text"
              name="genre"
              onChange={sampleHandleChange}
            />
      </label>
      <label>Record label:
            <input
              type="text"
              name="record_label"
              onChange={sampleHandleChange}
            />
      </label>
      <label>Year:
            <input
              type="text"
              name="year"
              onChange={sampleHandleChange}
            />
      </label>
      <label>Producer id:
            <input
              type="text"
              name="producer_id"
              onChange={sampleHandleChange}
            />
      </label>
      <label>Sample appears:
            <input
              type="text"
              name="sampled_at"
              onChange={sampleHandleChange}
            />
      </label>
      {/* <h3>Create a producer:</h3>
      <label>Name:
            <input
              type="text"
              name="name"
              onChange={producerHandleChange}
            />
      </label>
      <label>Genre:
            <input
              type="text"
              name="genre"
              onChange={producerHandleChange}
            />
      </label>
      <label>Lifetime:
            <input
              type="text"
              name="lifetime"
              onChange={producerHandleChange}
            />
      </label>
      <label>Location:
            <input
              type="text"
              name="location"
              onChange={producerHandleChange}
            />
      </label> */}
      <button>Ready</button> 
      <button onClick={(e) => {setFormData({
  song_id: props.allSongs[props.allSongs.length-1].id,
  sample_id: props.allSamples[props.allSamples.length - 1].id})}}>Set</button>
  <button onClick={(e) => {createSongssample(formData);}}>Go</button>
    </form>
  </div>
}
export default SongsSamplesCreate