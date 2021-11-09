import './Post.css'
import { getOneSong } from '../../services/songs.js'
import { youtubePlayer } from '../../services/youtubePlayer'
import { getAllSamplesAssociatedWithASong } from '../../services/samples_associated_with_songs'
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

function Post(props) {
  const [song, setSong] = useState([]);
  const [samplesAssociatedWithASong, setSamplesAssociatedWithASong] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchSong = async () => {
      const song = await getOneSong(id);
      setSong(song);
    };
    fetchSong();
    const fetchSamplesAssociatedWithASong = async () => {
      const samplesAssociatedWithASong = await getAllSamplesAssociatedWithASong(id);
      setSamplesAssociatedWithASong(samplesAssociatedWithASong);
    };
    fetchSamplesAssociatedWithASong();
  }, []);

  function youtubePlayer(youtube_embed) {
    return <iframe className = "posts-iframe" src={youtube_embed} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  }
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

  return <div className="post">
    <h2> Song:</h2>
    <div className="song-or-sample">
    <div className="posts-info">
    <p>Song name: {song.name}</p>
    <p>Song artist: {song.artist}</p>
        <button>Find out more info</button>
        <button>Edit</button>
        </div>
      {youtubePlayer(song.youtube_embed)}</div>
    
    <h2> Samples:</h2>
    {samplesAssociatedWithASong.map((index) => { return sample(index) })}
    <div className="posts-add-sample">
       <em>Want to add in a new sample</em>
    <button>Add a sample</button>
    </div>
   
  </div>
  
}
export default Post

