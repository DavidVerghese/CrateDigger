import './Post.css'
import { getOneSong } from '../../services/songs.js'
import { youtubePlayer } from '../../services/youtubePlayer'
import { getAllSamplesAssociatedWithASong } from '../../services/samples_associated_with_songs'
import { getOneSample } from '../../services/samples'
import Sample from '../../components/Sample/Sample'
import Song from '../Song/Song'
import { Link } from "react-router-dom";

import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

function Post(props) {
  const [song, setSong] = useState([]);
  const [samplesAssociatedWithASong, setSamplesAssociatedWithASong] = useState([]);
  const [numberOfSamples, setNumberOfSamples] = useState(0);
  const { id } = useParams();
  useEffect(() => {
    const fetchSong = async () => {
      const song = await getOneSong(id);
      setSong(song);
    };
    fetchSong();
    const fetchSamplesAssociatedWithASong = async () => {
      const samplesAssociatedWithASong = await getAllSamplesAssociatedWithASong(id);
      console.log(samplesAssociatedWithASong);
      setSamplesAssociatedWithASong(samplesAssociatedWithASong);
      setNumberOfSamples(samplesAssociatedWithASong.length);
    };
    fetchSamplesAssociatedWithASong();
  }, []);

  function sample(sample) {
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
  function noSample() {
    return <div className="no-samples">
      <p>
        No samples found
      </p>
    
      <img src="https://media0.giphy.com/media/5x89XRx3sBZFC/giphy.gif?cid=790b761101365822e14d9f412f100401e53afcafca7580d1&rid=giphy.gif&ct=g" />
   
    </div>
  }
  function allSamples() {
    return samplesAssociatedWithASong.map((index) => {
      return <Sample songssample_id={index.id} sample_id={index.sample_id} />
    })
  }

  return <div className="post">
    <h2> Song:</h2>
    <div className="song-or-sample">
      <div className="posts-info">
        <p>Song name: {song.name}</p>
        <p>Song artist: {song.artist}</p>
        <Link to={`/song/${song.id}`}><button>Find out more info</button></Link>
        <Link to={`/songedit/${song.id}`}><button>Edit</button></Link>
      </div>
      {youtubePlayer(song.youtube_embed)}</div>
    
    <h2> Samples:</h2>
    {(numberOfSamples !== 0) ? allSamples() : noSample()}
    <div className="posts-add-sample">
       <em>Want to add in a new sample?</em>
    <button>Add a sample</button>
    </div>
   
  </div>
  
}
export default Post

