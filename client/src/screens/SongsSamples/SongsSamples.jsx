import React, { useState, useEffect } from "react";
import "./SongsSamples.css";
import { Route, Link, Switch, useHistory } from "react-router-dom";
import Search from '../../components/Search/Search.jsx';
import SearchResults from '../SongsSamples/SongsSamples.jsx';
import { AZ, ZA} from "../../utils/sort.js";

function SongsSamples(props) {

  let arrayOfObjects = [];
  // console.log(props.allSongs);
  
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
          <div className="songssamples-entry">
            <div className="songssamples-song">
              <h3>
                SONG: "{index3.songName}" by {index3.songArtist}{" "}
              </h3>
              <img src={index3.imageAddress} />
              <p>RECORD LABEL: {index3.songRecordLabel} </p>
              <p>YEAR: {index3.songYear}</p>
              <p>GENRE: {index3.songGenre}</p>
              <p>
                SAMPLE APPEARS: <em>{index3.songSampleAppears}</em>
              </p>
              <p>PRODUCER: {index3.songProducerName}</p>
            </div>
            <div className="songssamples-sample">
              <h3>
                SAMPLE: "{index3.sampleName}" by {index3.sampleArtist}{" "}
              </h3>
              <p>RECORD LABEL: {index3.sampleRecordLabel}</p>
              <p>YEAR: {index3.sampleYear}</p>
              <p>GENRE: {index3.sampleGenre}</p>
              <p>
                SAMPLED AT: <em>{index3.songSampledAt}</em>
              </p>
              <p>PRODUCER: {index3.sampleProducerName}</p>
              <Link to={`/songssamples/${index3.id}`}>Read more</Link>
            </div>
            
          </div>
        )
      })}
    </div>
  );
}
export default SongsSamples;
