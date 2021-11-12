import './Song.css'
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getOneSong } from "../../services/songs"
import { youtubePlayer } from "../../services/youtubePlayer"
import { getOneProducer } from "../../services/producers"

function Song(props) {
  const { id } = useParams();
  const [song, setSong] = useState([]);
  const [producer, setProducer] = useState([]);
  useEffect(() => {
    const fetchSong = async () => {
      const song = await getOneSong(id);
      setSong(song);
    };
    fetchSong();
    const fetchProducer = async () => {
      const producer = await getOneProducer(id);
      setProducer(producer);
    };
    fetchProducer();
  }, []);

  return <div><h2>{song.name}</h2>
    <p>by {song.artist}</p>
    <p>Genre: {song.genre}</p>
    <p>Record label: {song.record_label}</p>
    <p>Year: {song.year}</p>
    <p>Producer: {producer.name}</p>
    <button>Edit</button>
    <div> {youtubePlayer(song.youtube_embed)}</div>
  </div>
}
export default Song