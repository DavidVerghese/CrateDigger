import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './SongsSamplesEditing.css'

function SongsSamplesEdit(props) {
  //songs
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
  const { name, artist, genre, record_label, year, producer_id,sample_appears } = songFormData;
  const { sampleName, sampleArtist, sampleGenre, sampleRecord_label, sampleYear, sampleProducer_id,sampled_at } = sampleFormData;
  const updateSongssample = props.updateSongssample;
  const allSongssamples = props.allSongssamples;
  const updateSong = props.updateSong;
  const allSongs = props.allSongs;
  const updateSample = props.updateSample;
  const allSamples = props.allSamples;
  const { id } = useParams();
  let oneSongssample = '';
  let songPicAddress = ''
  let oneSong = '';
  let oneSample = '';
  useEffect(() => {
    const prefillFormData = () => {
      allSongssamples.map((index) => {
        if (index.id === Number(id)) {
          oneSongssample = index;
          allSongs.map((index2) => {
            if (index2.id === index.song_id) {
              oneSong = index2;
            }
          })
          allSamples.map((index3) => {
            if (index3.id === index.sample_id) {
              oneSample = index3;
            }
          })
        }
      })
      //SONGS
      const songName = oneSong.name;
      const songArtist = oneSong.artist;
      const songGenre = oneSong.genre;
      const songRecordLabel = oneSong.record_label;
      const songYear = oneSong.year;
      const songProducerId = oneSong.producer_id;
      const songSampleAppears = oneSong.sample_appears;
      const songImageAddress = oneSong.song_pic_address;
      songPicAddress = songImageAddress;
      //samples
      const sampleName = oneSample.name;
      const sampleArtist = oneSample.artist;
      const sampleGenre = oneSample.genre;
      const sampleRecordLabel = oneSample.record_label;
      const sampleYear = oneSample.year;
      const sampleProducerId = oneSample.producer_id;
      const sampleSampledAt = oneSample.sampled_at;
      setSongFormData({ songName, songArtist, songGenre, songRecordLabel, songYear, songProducerId, songSampleAppears });
      setSampleFormData({ sampleName, sampleArtist,sampleGenre,sampleRecordLabel,sampleYear,sampleProducerId,sampleSampledAt });
    }
    if (allSongssamples.length) {
      prefillFormData()
    }
  }, [allSongssamples, id])


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

  return (<div className="songs-samples-editing-form-container">
  <form onSubmit={(e) => {
    e.preventDefault()
      updateSong(id, songFormData);
      updateSample(id, sampleFormData);
    }}>
      <div className="song-samples-editing-song-info">
        <h3>Song Information</h3>
        <p><em>Leave fields you don't want to change blank</em></p>
      <img src={songPicAddress}/>
      <label><p>name:</p>
    <input
          type="text"
          name="name"
        onChange={songHandleChange}
      />
      </label>
      <label><p>artist:</p>
    <input
          type="text"
          name="artist"
        onChange={songHandleChange}
      />
      </label>
      <label><p>genre:</p>
    <input
          type="text"
          name="genre"
        onChange={songHandleChange}
      />
      </label>
      <label><p>Record Label:</p>
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
      <label><p>Producer Id:</p>
    <input
          type="text"
          name="producer id"
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
      </div>
    
      <div className="song-samples-editing-sample-info">
        <h3>Sample information</h3>
        <p><em>Leave fields you don't want to change blank</em></p>
      <label><p>name:</p>
    <input
          type="text"
          name="name"
        onChange={sampleHandleChange}
      />
      </label>
      <label><p>artist:</p>
    <input
          type="text"
          name="artist"
        onChange={sampleHandleChange}
      />
      </label>
      <label><p>genre:</p>
    <input
          type="text"
          name="genre"
        onChange={sampleHandleChange}
      />
      </label>
      <label><p>Record Label:</p>
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
      <label><p>Producer Id:</p>
    <input
          type="text"
          name="producer id"
        onChange={sampleHandleChange}
      />
      </label>
      <label><p>Sampled at:</p>
    <input
          type="text"
          name="sample_appears"
        onChange={sampleHandleChange}
      />
        </label>
        </div>
    <br/>
    <button>Submit</button>
  </form>
</div>)
}
export default SongsSamplesEdit 