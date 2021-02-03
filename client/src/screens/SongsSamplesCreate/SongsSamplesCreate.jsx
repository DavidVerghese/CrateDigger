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
      
      <h2>Create a New Post</h2>
      <img src="https://media4.giphy.com/media/l0MYz6wr2YZQ1fjuo/giphy.gif?cid=ecf05e47xx0zu6eja3gfubgfw4lfnohpmluh5h65hesdcqb5&rid=giphy.gif"/>
      <div className="songs-samples-create-song">
      <h3>Add a New Song</h3>
      <label><p>Name:</p>
            <input
              type="text"
              name="name"
              onChange={songHandleChange}
            />
      </label>
      <label><p>Artist:</p>
            <input
              type="text"
              name="artist"
              onChange={songHandleChange}
            />
      </label>
      <label><p>Genre:</p>
            <input
              type="text"
              name="genre"
              onChange={songHandleChange}
            />
      </label>
      <label><p>Record label:</p>
            <input
              type="text"
              name="record_label"
              onChange={songHandleChange}
            />
      </label>
      <label><p>Year:</p>
            <input
              type="text"
              name="year"
              onChange={songHandleChange}
            />
      </label>
      <label><p>Sample appears:</p>
            <input
              type="text"
              name="sample_appears"
              onChange={songHandleChange}
            />
      </label>
      <label><p>Image URL:</p>
            <input
              type="text"
              name="song_pic_address"
              onChange={songHandleChange}
            />
      </label>
      <label><p>Youtube link:</p>
            <input
              type="text"
              name="youtube_address"
              onChange={songHandleChange}
            />
        </label></div>
        <div className="songs-samples-create-song-producer">
      <h3>Who Produced This Song?</h3>
      <img src="https://media2.giphy.com/media/CMX3CJpQzlpsc/giphy.gif?cid=ecf05e47xhivbcfwr7prvy3d91rtbkc4p3nxov0n37kbtp6n&rid=giphy.gif"/>
      <label><p>Name:</p>
            <input
              type="text"
              name="name"
              onChange={songProducerHandleChange}
            />
      </label>
      <label><p>Genre:</p>
            <input
              type="text"
              name="genre"
              onChange={songProducerHandleChange}
            />
      </label>
      <label><p>Location:</p>
            <input
              type="text"
              name="location"
              onChange={songProducerHandleChange}
            />
      </label>
      <label><p>Lifetime:</p>
            <input
              type="text"
              name="lifetime"
              onChange={songProducerHandleChange}
            />
      </label>
      <label><p>Image URL:</p>
            <input
              type="text"
              name="producer_pic_address"
              onChange={songProducerHandleChange}
            />
      </label>
      </div>
      <div className="songs-samples-create-sample">
      <h3>Create a Sample:</h3>
      <img src="https://media2.giphy.com/media/u0YhXjoPxl0Pu/giphy.gif?cid=ecf05e47wj7szty5az5r7q8jao8o5g8qw35p4g6xi4x1l8ab&rid=giphy.gif"/>
      <label><p>Name:</p>
            <input
              type="text"
              name="name"
              onChange={sampleHandleChange}
            />
      </label>
      <label><p>Artist:</p>
            <input
              type="text"
              name="artist"
              onChange={sampleHandleChange}
            />
      </label>
      <label><p>Genre:</p>
            <input
              type="text"
              name="genre"
              onChange={sampleHandleChange}
            />
      </label>
      <label><p>Record label:</p>
            <input
              type="text"
              name="record_label"
              onChange={sampleHandleChange}
            />
      </label>
      <label><p>Year:</p>
            <input
              type="text"
              name="year"
              onChange={sampleHandleChange}
            />
      </label>
      <label><p>Sample appears:</p>
            <input
              type="text"
              name="sampled_at"
              onChange={sampleHandleChange}
            />
      </label>
      <label><p>Image URL:</p>
            <input
              type="text"
              name="sample_pic_address"
              onChange={sampleHandleChange}
            />
      </label>
      <label><p>Youtube link:</p>
            <input
              type="text"
              name="youtube_embed"
              onChange={sampleHandleChange}
            />
      </label>
      </div>
      <div className="songs-samples-create-sample-producer">
      <h3>Who produced this sample?</h3>
      <img src="https://media1.giphy.com/media/aeUvvglb3PcdO/giphy.gif?cid=ecf05e47ys9e1j4k517eloclcqtptewh1iiide34lz6cdr6m&rid=giphy.gif"/>
      <label><p>Name:</p>
            <input
              type="text"
              name="name"
              onChange={sampleProducerHandleChange}
            />
      </label>
      <label><p>Genre:</p>
            <input
              type="text"
              name="genre"
              onChange={sampleProducerHandleChange}
            />
      </label>
      <label><p>Location:</p>
            <input
              type="text"
              name="location"
              onChange={sampleProducerHandleChange}
            />
      </label>
      <label><p>Lifetime:</p>
            <input
              type="text"
              name="lifetime"
              onChange={sampleProducerHandleChange}
            />
      </label>
      <label><p>Image URL:</p>
            <input
              type="text"
              name="producer_pic_address"
              onChange={sampleProducerHandleChange}
            />
      </label>
      </div>
      <div className="song-sample-create-button-section">
        <button>Ready</button> 
      </div>
      
    </form>
  </div>
}
export default SongsSamplesCreate