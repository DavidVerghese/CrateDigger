import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function SongsSamplesEdit(props) {
  // songssamples
  const [formData, setFormData] = useState({
    song_id: "",
    sample_id: "",
  });
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
  const { song_id, sample_id } = formData;
  const { name, artist, genre, record_label, year, producer_id } = songFormData;
  const updateSongssample = props.updateSongssample;
  const allSongssamples = props.allSongssamples;
  const updateSong = props.updateSong;
  const allSongs = props.allSongs;
  const { id } = useParams();
  let oneSongssample = '';
  let oneSong = '';
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
        }
      })
      //SONGSAMPLE
      const song_id = oneSongssample.song_id;
      const sample_id = oneSongssample.sample_id;
      //SONGS
      const songName = oneSong.name;
      const songArtist = oneSong.artist;
      const songGenre = oneSong.genre;
      const songRecordLabel = oneSong.record_label;
      const songYear = oneSong.year;
      const songProducerId = oneSong.producer_id;
      const songSampleAppears = oneSong.sample_appears;
      setFormData({ song_id, sample_id });
      setSongFormData({ songName, songArtist,songGenre,songRecordLabel,songYear,songProducerId,songSampleAppears });
    }
    if (allSongssamples.length) {
      prefillFormData()
    }
  }, [allSongssamples, id])


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

  return (<div className="form-container">
  <form onSubmit={(e) => {
    e.preventDefault()
      updateSongssample(id, formData);
      updateSong(id, songFormData);
      console.log();
  }}>
    <h3>Update Song id</h3>
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
      <h3>Song info</h3>
      <label>name:
    <input
          type="text"
          name="name"
        onChange={songHandleChange}
      />
      </label>
      <label>artist:
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
      <label>Song name:
    <input
          type="text"
          name="sample_appears"
        onChange={songHandleChange}
      />
      </label>
    <button>Submit</button>
  </form>
</div>)
}
export default SongsSamplesEdit 