import './Sample.css'
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getOneSample } from "../../services/samples"
import { youtubePlayer } from "../../services/youtubePlayer"
import { getOneProducer } from "../../services/producers"

function Song(props) {
  const { id } = useParams();
  const [sample, setSample] = useState([]);
  const [producer, setProducer] = useState([]);
  useEffect(() => {
    const fetchSample = async () => {
      const sample = await getOneSample(id);
      setSample(sample);
      console.log(sample)
    };
    fetchSample();
    const fetchProducer = async () => {
      const producer = await getOneProducer(id);
      setProducer(producer);
    };
    fetchProducer();
  }, []);

  return <div><h2>{sample.name}</h2>
    <p>by {sample.artist}</p>
    <p>Genre: {sample.genre}</p>
    <p>Record label: {sample.record_label}</p>
    <p>Year: {sample.year}</p>
    <p>Producer: {producer.name}</p>
    <Link to={`/sampleedit/${sample.id}`}> <button>Edit</button></Link>
    <div> {youtubePlayer(sample.youtube_embed)}</div>
  </div>
}
export default Song