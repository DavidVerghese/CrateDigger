import { getAllSongs } from '../../services/songs.js'
import { useState, useEffect } from 'react';
import AllPostsCard from "../../components/AllPostsCard/AllPostsCard"
import "./AllPosts.css";

function AllPosts(props) {

  const [songs, setSongs] = useState([]);
  useEffect(() => {
    const fetchSongs = async () => {
      const songs = await getAllSongs();
      setSongs(songs);
    };
    fetchSongs();
  }, []);

  return <div>
    <h1>All Posts</h1>
    <p><i>Find out the samples these songs contain</i></p>
    <div className="all-posts-content">
    {songs.map((index, key) => {
      return <AllPostsCard key={key} index={index}/>
    })}
    </div>
  </div>
}

export default AllPosts