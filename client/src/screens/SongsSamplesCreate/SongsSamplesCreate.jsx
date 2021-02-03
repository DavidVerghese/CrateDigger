import SongsSamples from "../SongsSamples/SongsSamples"
import './SongsSamplesCreate.css'
import React, { useState } from 'react'

function SongsSamplesCreate(props) {

  const [songProducerFormData, setSongProducerFormData] = useState({
    name: "",
    genre: "",
    location: "",
    lifetime: "",
    producer_pic_address: ""
  });
  const [sampleProducerFormData, setSampleProducerFormData] = useState({
    name: "",
    genre: "",
    location: "",
    lifetime: "",
    producer_pic_address: ""
  });
  const [songFormData, setSongFormData] = useState({
    name: "",
    artist: "",
    genre: "",
    record_label: "",
    year: "",
    sample_appears: "",
    song_pic_address: "",
    youtube_address: ""
  });
  const [sampleFormData, setSampleFormData] = useState({
    name: "",
    artist: "",
    genre: "",
    record_label: "",
    year: "",
    sampled_at: "",
    sample_pic_address: "",
    youtube_embed: ""
  });
  const [songsSampleFormData, setSongsSampleFormData] = useState({
    song_id: songFormData,
    sample_id: sampleFormData,
    song_producer: songProducerFormData,
    sample_producer: sampleProducerFormData
  });
  const createSongssample = props.createSongssample;
  const createSong = props.createSong;
  const createSample = props.createSample;
  const createSongProducer = props.createProducer;
  const createSampleProducer = props.createProducer;

  const songProducerHandleChange = (e) => {
    const { name, value } = e.target;
    setSongProducerFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    setSongsSampleFormData({
      song: songFormData,
      sample: sampleFormData,
      song_producer: songProducerFormData,
      sample_producer: sampleProducerFormData
    })
  }
  const sampleProducerHandleChange = (e) => {
    const { name, value } = e.target;
    setSampleProducerFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    setSongsSampleFormData({
      song: songFormData,
      sample: sampleFormData,
      song_producer: songProducerFormData,
      sample_producer: sampleProducerFormData
    })
  }
  const songHandleChange = (e) => {
    const { name, value } = e.target;
    setSongFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    setSongsSampleFormData({
      song: songFormData,
      sample: sampleFormData,
      song_producer: songProducerFormData,
      sample_producer: sampleProducerFormData
    })
  }
  const sampleHandleChange = (e) => {
    const { name, value } = e.target;
    setSampleFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    setSongsSampleFormData({
      song: songFormData,
      sample: sampleFormData,
      song_producer: songProducerFormData,
      sample_producer: sampleProducerFormData
    })
  }

  return <div className="songs-samples-create-parent-div">
    <form onSubmit={(e) => {
      e.preventDefault();
      createSongssample(songsSampleFormData);
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
      <label>Sample appears:
            <input
              type="text"
              name="sample_appears"
              onChange={songHandleChange}
            />
      </label>
      <label>Image URL:
            <input
              type="text"
              name="song_pic_address"
              onChange={songHandleChange}
            />
      </label>
      <label>Youtube link:
            <input
              type="text"
              name="youtube_address"
              onChange={songHandleChange}
            />
      </label>
      <h3>Create a Song Producer:</h3>
      <label>Name:
            <input
              type="text"
              name="name"
              onChange={songProducerHandleChange}
            />
      </label>
      <label>Genre:
            <input
              type="text"
              name="genre"
              onChange={songProducerHandleChange}
            />
      </label>
      <label>Location:
            <input
              type="text"
              name="location"
              onChange={songProducerHandleChange}
            />
      </label>
      <label>Lifetime:
            <input
              type="text"
              name="lifetime"
              onChange={songProducerHandleChange}
            />
      </label>
      <label>Image URL:
            <input
              type="text"
              name="producer_pic_address"
              onChange={songProducerHandleChange}
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
      <label>Sample appears:
            <input
              type="text"
              name="sampled_at"
              onChange={sampleHandleChange}
            />
      </label>
      <label>Image URL:
            <input
              type="text"
              name="sample_pic_address"
              onChange={sampleHandleChange}
            />
      </label>
      <label>Youtube link:
            <input
              type="text"
              name="youtube_embed"
              onChange={sampleHandleChange}
            />
      </label>

      <h3>Create a Sample Producer:</h3>
      <label>Name:
            <input
              type="text"
              name="name"
              onChange={sampleProducerHandleChange}
            />
      </label>
      <label>Genre:
            <input
              type="text"
              name="genre"
              onChange={sampleProducerHandleChange}
            />
      </label>
      <label>Location:
            <input
              type="text"
              name="location"
              onChange={sampleProducerHandleChange}
            />
      </label>
      <label>Lifetime:
            <input
              type="text"
              name="lifetime"
              onChange={sampleProducerHandleChange}
            />
      </label>
      <label>Image URL:
            <input
              type="text"
              name="producer_pic_address"
              onChange={sampleProducerHandleChange}
            />
      </label>

      <div className="song-sample-create-button-section">
        <button>Ready</button> 
      </div>
      
    </form>
  </div>
}
export default SongsSamplesCreate