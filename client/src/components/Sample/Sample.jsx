import './Sample.css'
import { useState, useEffect } from 'react';
import { getOneSample } from '../../services/samples'
import { deleteSongssample  } from '../../services/songssamples'
import { youtubePlayer } from '../../services/youtubePlayer'
import { useParams, Link, useHistory } from "react-router-dom";

function Sample(props) {
  let sample_id = props.sample_id;
  let songssample_id = props.songssample_id;
  const [sample, setSample] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchSample = async () => {
      const sample = await getOneSample(sample_id);
      setSample(sample);
    };
    fetchSample();
  }, []);

  let handleDelete = () => {
    deleteSongssample(songssample_id);
    history.push("/allposts");
  };


  return <div className="song-or-sample">
  <div className="posts-info">
    <p>Sample name: {sample.name}</p>
    <p>Sample artist: {sample.artist}</p>
    <button>Find out more info</button>
    <button>Edit</button>
    
    <button onClick={handleDelete}>
              Remove this sample
            </button>
  </div>

  <div> {youtubePlayer(sample.youtube_embed)}</div>

</div>
}
export default Sample