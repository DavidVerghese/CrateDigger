import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function SongsSamplesEdit(props) {
  const [formData, setFormData] = useState({
    song_id: "",
    sample_id: "",
  });
  const { song_id, sample_id } = formData;
  const updateSongssample = props.updateSongssample;
  const allSongssamples = props.allSongssamples;
  const { id } = useParams();
  let oneSongssample = '';
  useEffect(() => {
    const prefillFormData = () => {
      allSongssamples.map((index) => {
        if (index.id === Number(id)) {
          oneSongssample = index;
        }
      })
      const song_id = oneSongssample.song_id;
      const sample_id = oneSongssample.sample_id;
      setFormData({ song_id, sample_id });
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

  return (<div className="form-container">
  <form onSubmit={(e) => {
    e.preventDefault()
      updateSongssample(id, formData);
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
    <button>Submit</button>
  </form>
</div>)
}
export default SongsSamplesEdit 