import React, { useState, useEffect } from 'react';
import './SongsSamples.css'

function SongsSamples(props) {
  console.log(props.allSongs)
  let foo = []
  return <div>
    {props.allSongssamples.map((index) => {
      let item = {}
      {
        props.allSongs.map((index2) => {
          if (index2.id === index.song_id) {
            console.log(index2);
            item.songName = `${index2.name}`;
            item.songArtist = `${index2.artist}`;
            item.songRecordLabel = `${index2.record_label}`;
            item.songYear = `${index2.year}`;
            item.songGenre = `${index2.genre}`;
            item.songSampleAppears = `${index2.sample_appears}`;
          }
        })
      }
      {
        props.allSamples.map((index2) => {
          if (index2.id === index.sample_id) {
            item.sampleName = `${index2.name}`
            item.sampleArtist = `${index2.artist}`;
            item.sampleRecordLabel = `${index2.record_label}`;
            item.sampleYear = `${index2.year}`;
            item.sampleGenre = `${index2.genre}`;
            item.songSampledAt = `${index2.sampled_at}`;
          }
        })
      }
      foo.push(item);
    })}
    {console.log(foo)}
    {foo.map((index3) => {
      return <div className="songssamples-entry">
        <div className="songssamples-song">
          <h3>Song: "{index3.songName}" by {index3.songArtist} </h3>
          <p>Record label: {index3.songRecordLabel} </p>
          <p>{index3.songYear}</p>
          <p>Genre: {index3.songGenre}</p>
          <p>Sample Appears: <em>{index3.songSampleAppears}</em></p>
        </div>
        <div className="songssamples-sample">
        <h3>Sample: "{index3.sampleName}" by {index3.sampleArtist} </h3>
        <p>Record label: {index3.sampleRecordLabel}</p>
        <p>{index3.sampleYear}</p>
        <p>Genre: {index3.sampleGenre}</p>
          <p>Sampled At: <em>{index3.songSampledAt}</em></p>
        </div>
        </div>
    })}
  </div>
}
export default SongsSamples