import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function SongsSamplesEditingRedo(props) {
  const [song_id2, setSong_id2] = useState('');
  const [sample_id2, setSample_id2] = useState('');
  const [songsSampleFormData, setSongsSampleFormData] = useState({
    song_id: "",
    sample_id: ""
  });
  const { song_id, sample_id } = songsSampleFormData;
  const { updateSongssample, allSongssamples } = props;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const oneSongsSample = allSongssamples.find(songssample => {
        return songssample.id === Number(id);
      })
      // console.log(oneSongsSample);
      setSong_id2(oneSongsSample.song_id);
      setSample_id2(oneSongsSample.sample_id);
      const { song_id, sample_id } = oneSongsSample;
      // setSongsSampleFormData({ song_id, sample_id });
    }
    if (allSongssamples.length) {
      prefillFormData()
    }
  }, [allSongssamples, id])
  
  const songsSampleHandleChange = (e) => {
    const { name, value } = e.target;
    setSongsSampleFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    console.log(songsSampleFormData);
    // console.log(songsSampleFormData);
  }

  return <div>
    <form onSubmit={(e) => {
      e.preventDefault();
      updateSongssample(id, songsSampleFormData);
        }}>
      <h3>Update SongsSamples</h3>
      <p>{song_id2}</p>
      <p>{sample_id2}</p>

          <label>Song Id:
            <input
              type="text"
              name="song_id"
              onChange={songsSampleHandleChange}
            />
          </label>
          <label>Sample Id:
            <input
              type="text"
              name="sample_id"
              onChange={songsSampleHandleChange}
            />
          </label>
          <button>Submit</button>
        </form>
  </div>
}
export default SongsSamplesEditingRedo