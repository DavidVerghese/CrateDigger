import Search from '../../components/Search/Search.jsx';
import { AZ, ZA} from "../../utils/sort.js";

function SearchResults(props) {
  console.log(props.queriedSongs);
  return <div>
    <p>Producers</p>
    {props.queriedProducers.map((producerIndex)=>{
        return <div className="producers-entry">
          <h3>Name: {producerIndex.name}</h3>
      <p>Genre: {producerIndex.genre}</p>
      <p>Lifetime: {producerIndex.lifetime}</p>
      <p>Location: {producerIndex.location}</p> 
        </div>
      })}
       <p>Samples: </p>
      {props.queriedSamples.map((sampleIndex)=>{
        return <div>
          <div className="songssamples-song">
        <h3>Sample: "{sampleIndex.name}" by {sampleIndex.artist} </h3>
         <p>Record label: {sampleIndex.record_label}</p>
        <p>{sampleIndex.year}</p>
        <p>Genre: {sampleIndex.genre}</p>
          <p>Sampled At: <em>{sampleIndex.sampled_at}</em></p>
      <p>Producer: {sampleIndex.producer_id}</p> 
       {/* <Link to={`/songssamples/${sampleIndex.id}/edit`}>Edit</Link>
     <button onClick={() => removeSongssample(sampleIndex.id)}>Delete</button>  */}
    </div> 
        </div>
      })}
      <p>Songs: </p>
      {props.queriedSongs.map((songIndex)=>{
        return <div>
          <div className="songssamples-song">
          <h3>Song: "{songIndex.name}" by {songIndex.artist} </h3> 
          <p>Record label: {songIndex.record_label} </p>
         <p>{songIndex.year}</p>
          <p>Genre: {songIndex.genre}</p>
          <p>Sample Appears: <em>{songIndex.sample_appears}</em></p>
          <p>Producer: {songIndex.producer_id}</p> 
    </div> 
        </div>
      })}
    </div>
}
export default SearchResults