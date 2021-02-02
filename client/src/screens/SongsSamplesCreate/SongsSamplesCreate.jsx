import SongsSamples from "../SongsSamples/SongsSamples"
import './SongsSamplesCreate.css'
import React, { useState } from 'react'

function SongsSamplesCreate(props) {

  const [formData, setFormData] = useState({
    song_id: "",
    sample_id: ""
  });
  const [songProducerFormData, setSongProducerFormData] = useState({
    name: "",
    genre: "",
    location: "",
    lifetime: ""
  });
  const [sampleProducerFormData, setSampleProducerFormData] = useState({
    name: "",
    genre: "",
    location: "",
    lifetime: ""
  });
  const [songFormData, setSongFormData] = useState({
    name: "",
    artist: "",
    genre: "",
    record_label: "",
    year: "",
    // producer_id: "",
    sample_appears: ""
  });
  const [sampleFormData, setSampleFormData] = useState({
    name: "",
    artist: "",
    genre: "",
    record_label: "",
    year: "",
    // producer_id: "",
    sampled_at: ""
  });
  const [songsSampleFormData, setSongsSampleFormData] = useState({
    song_id: songFormData,
    sample_id: sampleFormData,
    song_producer: songProducerFormData,
    sample_producer: sampleProducerFormData
  });
  console.log(songsSampleFormData);
  const object = {};
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
    // console.log(songFormData);
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
    // console.log(sampleFormData);
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
    console.log(songsSampleFormData);
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
    console.log(songsSampleFormData);
  }
  const producerHandleChange = (e) => {
    const { name, value } = e.target;
    setProducerFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    // PRODUCER ERRROR ONE
    // can't get the id of the producer since it hasn't 
    // been created yet
    //  console.log(props.allProducers[props.allProducers.length - 1].id);
    // SONGSSAMPLES ERROR ONE: You can't set form data here, as the songs and samples 
      // haven't been created yet -- You have to set it with 
    // a new button outside of form
     // setFormData({
      //   song_id: props.allSongs[props.allSongs.length-1].id,
      //   sample_id: props.allSamples[props.allSamples.length-1].id
      // })
    // console.log(props.allSongs[props.allSongs.length - 1]);
      // console.log(props.allSamples[props.allSamples.length - 1]);
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
      createProducer(producerFormData);
      createSongssample(songsSampleFormData);
    
      
    }}>
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
      {/* <label>Producer id:
            <input
              type="text"
              name="producer_id"
              onChange={songHandleChange}
            />
      </label> */}
      <label>Sample appears:
            <input
              type="text"
              name="sample_appears"
              onChange={songHandleChange}
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
      {/* <label>Producer id:
            <input
              type="text"
              name="producer_id"
              onChange={sampleHandleChange}
            />
      </label> */}
      <label>Sample appears:
            <input
              type="text"
              name="sampled_at"
              onChange={sampleHandleChange}
            />
      </label>

      <h3>Create a producer:</h3>
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
      </label>

      <div className="song-sample-create-button-section">
        <button>Ready</button> 
      </div>
      
    </form>
  </div>
}
export default SongsSamplesCreate