import React, { useState, useEffect } from "react";
import "./SongsSamples.css";
import { Route, Link, Switch, useHistory } from "react-router-dom";
import Search from '../../components/Search/Search.jsx';
import SearchResults from '../SongsSamples/SongsSamples.jsx';
import { AZ, ZA} from "../../utils/sort.js";

function SongsSamples(props) {

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
              item.youtubeAddress = `${index2.youtube_address}`;
              item.imageAddress = `${index2.song_pic_address}`;
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
              item.sampleYoutubeAddress = `${index2.youtube_embed}`;
              item.sampleImageAddress = `${index2.sample_pic_address}`;
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
          <div className="songssamples-parent-div">
            <div className="songssamples-entry">
            <div className="songssamples-song">
              <h3>
                SONG: "{index3.songName}" by {index3.songArtist}{" "}
                </h3>
                <div className="songssamples-song-img-div">
              <img src={index3.imageAddress} /></div>
              <p>GENRE: {index3.songGenre}</p>
            </div>
            <div className="songssamples-sample">
              <h3>
                SAMPLE: "{index3.sampleName}" by {index3.sampleArtist}{" "}
                </h3>
                <div className="songssamples-samples-img-div">
              <img src={index3.sampleImageAddress} /></div>
              <p>GENRE: {index3.sampleGenre}</p>
              <Link to={`/songssamples/${index3.id}`}><button>Read more</button></Link>
            </div>
            
            </div>
            </div>
        )
      })}
            
    </div>
  );
}
export default SongsSamples;
