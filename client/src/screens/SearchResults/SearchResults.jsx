import Search from '../../components/Search/Search.jsx';
import { AZ, ZA } from "../../utils/sort.js";
import { Link } from "react-router-dom";
import './SearchResults.css'

function SearchResults(props) {
  
  let noResults = '';
  let noResultsImgUrl = '';
  if (props.queriedSongssamples.length === 0 && props.queriedProducers.length===0) {
    noResults = 'No results to be found';
    noResultsImgUrl = 'https://media1.giphy.com/media/5x89XRx3sBZFC/giphy.gif?cid=ecf05e47owra8pwdsqv5wccqslnrijh7fl4up938oh33bf9w&rid=giphy.gif';
  }


  let arrayOfObjects = [];
  return <div className="search-result-parent-div">
    <p>{noResults}</p>
    <img src={noResultsImgUrl} alt="no-results"/>
    {props.queriedSongssamples.map((index) => {
      let item = {};
        {
          props.allSongs.map((index2) => {
            if (index2.id === index.song_id) {
              item.songName = `${index2.name}`;
              item.songArtist = `${index2.artist}`;
              item.songRecordLabel = `${index2.record_label}`;
              item.songYear = `${index2.year}`;
              item.songGenre = `${index2.genre}`;
              item.songSampleAppears = `${index2.sample_appears}`;
              item.picAddress = `${index2.song_pic_address}`;
              {
                props.allProducers.map((index4) => {
                  if (index2.producer_id === index4.id) {
                    item.songProducerName = `${index4.name}`;
                  }
                });
              }
            }
          });
      }
      {
        props.allSamples.map((index2) => {
          if (index2.id === index.sample_id) {
            item.sampleName = `${index2.name}`;
            item.sampleArtist = `${index2.artist}`;
            item.sampleRecordLabel = `${index2.record_label}`;
            item.sampleYear = `${index2.year}`;
            item.sampleGenre = `${index2.genre}`;
            item.songSampledAt = `${index2.sampled_at}`;
            item.samplePicAddress = `${index2.sample_pic_address}`;
            item.id = index.id;
            {
              props.allProducers.map((index4) => {
                if (index2.producer_id === index4.id) {
                  item.sampleProducerName = `${index4.name}`;
                }
              });
            }
          }
        });
      }
      arrayOfObjects.push(item);
    })}
    {arrayOfObjects.map((index3) => {
        return (
          <div>
            <div>
              <h3>
                Song: "{index3.songName}" by {index3.songArtist}{" "}
              </h3>
              <img src={index3.picAddress}/>
              <p>Record label: {index3.songRecordLabel} </p>
              <p>{index3.songYear}</p>
              <p>Genre: {index3.songGenre}</p>
              <p>
                Sample Appears: <em>{index3.songSampleAppears}</em>
              </p>
              <p>Producer: {index3.songProducerName}</p>
            </div>
            <div>
              <h3>
                Sample: "{index3.sampleName}" by {index3.sampleArtist}{" "}
              </h3>
              <img src={index3.samplePicAddress}/>
              <p>Record label: {index3.sampleRecordLabel}</p>
              <p>{index3.sampleYear}</p>
              <p>Genre: {index3.sampleGenre}</p>
              <p>
                Sampled At: <em>{index3.songSampledAt}</em>
              </p>
              <p>Producer: {index3.sampleProducerName}</p>
              <Link to={`/songssamples/${index3.id}`}>Read more</Link>
            </div>
            
          </div>
        )
    })}
    {props.queriedProducers.map((producerIndex) => {
      return <div>
        <h2>Producer</h2>
        <img src={producerIndex.producer_pic_address}/>
          <h3>Name: {producerIndex.name}</h3>
      <p>Genre: {producerIndex.genre}</p>
      <p>Lifetime: {producerIndex.lifetime}</p>
        <p>Location: {producerIndex.location}</p> 
        </div>
      })}
    </div> 
}
export default SearchResults