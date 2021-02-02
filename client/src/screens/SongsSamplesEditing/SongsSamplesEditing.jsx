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
      console.log();
  }}>
      <h3>SONG INFO</h3>
      <label>NAME:
    <input
          type="text"
          name="name"
        onChange={songHandleChange}
      />
      </label>
      <label>ARTIST:
    <input
          type="text"
          name="artist"
        onChange={songHandleChange}
      />
      </label>
      <label>genre:
    <input
          type="text"
          name="genre"
        onChange={songHandleChange}
      />
      </label>
      <label>Record Label:
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
      <label>Producer Id:
    <input
          type="text"
          name="producer id"
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

      <h3>Sample info</h3>
      <label>name:
    <input
          type="text"
          name="name"
        onChange={sampleHandleChange}
      />
      </label>
      <label>artist:
    <input
          type="text"
          name="artist"
        onChange={sampleHandleChange}
      />
      </label>
      <label>genre:
    <input
          type="text"
          name="genre"
        onChange={sampleHandleChange}
      />
      </label>
      <label>Record Label:
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
      <label>Producer Id:
    <input
          type="text"
          name="producer id"
        onChange={sampleHandleChange}
      />
      </label>
      <label>Sampled at:
    <input
          type="text"
          name="sample_appears"
        onChange={sampleHandleChange}
      />
      </label>
    <button>Submit</button>
  </form>
</div>)
}
export default SongsSamplesEdit 