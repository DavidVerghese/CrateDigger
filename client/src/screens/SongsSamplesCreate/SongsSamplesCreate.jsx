import SongsSamples from "../SongsSamples/SongsSamples"

import React, { useState } from 'react'

function SongsSamplesCreate(props) {
  const [formData, setFormData] = useState({
    song_id: "",
    sample_id: "",
  });
  const { song_id, sample_id } = formData;
  const createSongssample = props.createSongssample;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  return <div>
    Hi
    </div>
}
export default SongsSamplesCreate