import React, { useState, useEffect } from "react";
import "./SongsSamples.css";
import { Route, Link, Switch, useHistory } from "react-router-dom";
import Search from '../../components/Search/Search.jsx';
import { AZ, ZA} from "../../utils/sort.js";


function SongsSamples(props) {
  // searchbar stuff 
  const [queriedSongs, setQueriedSongs] = useState([]);
  const [queriedSamples, setQueriedSamples] = useState([]);
  const [queriedProducers, setQueriedProducers] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
   const [sortType, setSortType] = useState([]);
  const handleSort = type => {
    setSortType(type)
    switch (type) {
      case "name-ascending":
        setQueriedSongs(AZ(queriedSongs));
        setQueriedSamples(AZ(queriedSamples));
        setQueriedProducers(AZ(queriedProducers));
        break
      case "name-descending":
        setQueriedSongs(ZA(queriedSongs));
        setQueriedSamples(ZA(queriedSamples));
        setQueriedProducers(ZA(queriedProducers));
        break
      default:
        break
    }
  };

  const handleSubmit = event => event.preventDefault()
  const handleSearch = event => {
    const newQueriedSongs = props.allSongs.filter(song => song.name.toLowerCase().includes(event.target.value.toLowerCase()));
    const newQueriedSamples = props.allSamples.filter(sample => sample.name.toLowerCase().includes(event.target.value.toLowerCase()));
    const newQueriedProducers = props.allProducers.filter(producer => producer.name.toLowerCase().includes(event.target.value.toLowerCase()));
    newQueriedSongs.map((index6) => {
      newQueriedSamples.push(index6);
    });
    newQueriedSamples.map((songsSamplesIterable) => {
      newQueriedProducers.push(songsSamplesIterable);
    })
    //console.log(newQueriedProducers);
    setSearchResults(newQueriedProducers);
  }

  const searchResultsJSX = searchResults.map((product, index) => {
    console.log(product,index)
    // return < Product _id={product._id} name={product.name} images={product.images} price={product.price} key={index} sale={product.sale} />
  })

  let arrayOfObjects = [];
  return (
    <div>
      {props.allSongssamples.map((index) => {
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
      <Search
        onSubmit={handleSubmit} 
        onChange={handleSearch} 
      />
      {arrayOfObjects.map((index3) => {
        return (
          <div className="songssamples-entry">
            <div className="songssamples-song">
              <h3>
                Song: "{index3.songName}" by {index3.songArtist}{" "}
              </h3>
              <p>Record label: {index3.songRecordLabel} </p>
              <p>{index3.songYear}</p>
              <p>Genre: {index3.songGenre}</p>
              <p>
                Sample Appears: <em>{index3.songSampleAppears}</em>
              </p>
              <p>Producer: {index3.songProducerName}</p>
            </div>
            <div className="songssamples-sample">
              <h3>
                Sample: "{index3.sampleName}" by {index3.sampleArtist}{" "}
              </h3>
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
    </div>
  );
}
export default SongsSamples;
