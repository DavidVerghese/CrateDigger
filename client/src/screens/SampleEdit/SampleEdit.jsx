import './SampleEdit.css'
import { getOneSample, putSample } from "../../services/samples";
import { useParams, Redirect } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { youtubePlayer} from "../../services/youtubePlayer"
function SongEdit() {
  const { id } = useParams();
  const [isUpdated, setUpdated] = useState(false);
  const [sample, setSample] = useState({
    name: "",
    artist: "",
    genre: "",
    record_label: "",
    year: "",
    producer_id: "",
    sampled_at: "",
    sample_pic_address: "",
    youtube_embed: ""
  });

useEffect(() => {
  const fetchSample = async () => {
    const sample = await getOneSample(id);
    setSample(sample);
  };
  fetchSample();

}, [id]);
  
if (isUpdated) {
  return <Redirect to={`/sample/${id}`} />;
}
  

  
  const handleChange = (event) => {
  const { name, value } = event.target;
    setSample({
      ...sample,
      [name]: value,
    });
  };
  


const handleSubmit = async (event) => {
  event.preventDefault();
  setSample({
    ...sample
  });
  const updated = await putSample(id, sample);
  setUpdated(updated);
};


  return   <div className="song-edit">
  <form className="song-edit-form" onSubmit={handleSubmit}>
    <h1>Edit Sample</h1>
    <label htmlFor="name">Name</label>
    <input
      className="input-name"
      placeholder="Name"
      value={sample.name}
      name="name"
      required
      autoFocus
      onChange={handleChange}
      />
      <label htmlFor="artist">Artist</label>
    <input
      className="input-name"
      placeholder="Artist"
      value={sample.artist}
      name="artist"
      required
      autoFocus
      onChange={handleChange}
      />
        <label htmlFor="genre">Genre</label>
    <input
      className="input-genre"
      placeholder="Genre"
      value={sample.genre}
      name="genre"
      required
      autoFocus
      onChange={handleChange}
      />
          <label htmlFor="record_label">Record label</label>
    <input
      className="input-genre"
      placeholder="Record_label"
      value={sample.record_label}
      name="record_label"
      required
      autoFocus
      onChange={handleChange}
      />
          <label htmlFor="year">Year</label>
    <input
      className="year"
      placeholder="Year"
      value={sample.year}
      name="year"
      required
      autoFocus
      onChange={handleChange}
      />
                <label htmlFor="youtube_embed">Youtube Embed</label>
    <input
      className="youtube_embed"
      placeholder="youtube_embed"
      value={sample.youtube_embed}
      name="youtube_embed"
      required
      autoFocus
      onChange={handleChange}
      />

      {youtubePlayer(sample.youtube_embed)}

    <button type="submit">
      Save
    </button>
  </form>
</div>
}
export default SongEdit