import './Sample.css'
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getOneSample } from '../../services/samples'
import { youtubePlayer } from '../../services/youtubePlayer'

function Sample(props) {
  let id = props.id;
  const [sample, setSample] = useState([]);
  useEffect(() => {
    const fetchSample = async () => {
      const sample = await getOneSample(id);
      setSample(sample);
    };
    fetchSample();
  }, []);


  return <div className="song-or-sample">
  <div className="posts-info">
    <p>Sample name: {sample.name}</p>
    <p>Sample artist: {sample.artist}</p>
    <button>Find out more info</button>
    <button>Edit</button>
    <button>Delete</button>
  </div>

  <div> {youtubePlayer(sample.youtube_embed)}</div>

</div>
}
export default Sample