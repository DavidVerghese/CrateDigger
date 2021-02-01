import { Link, useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react';

function SongsSamplesDetail(props) {
  const [songssamples, setSongssamples] = useState(null);
  const { id } = useParams();
  const allSongssamples = props.allSongssamples;
  const removeAllsongssamples = props.removeAllsongssamples;
  let oneSongssample = '';
  useEffect(() => {
    if (allSongssamples.length) {
      allSongssamples.map((num) => {
        if (num.id === Number(id)) {
          oneSongssample = num;
        }
      });
      setSongssamples(oneSongssample)
    }
  }, [allSongssamples, id])
  console.log(oneSongssample);
  let item = {};
  return <div className="songssamples-entry">
    {
      props.allSongs.map((index2) => {
        if (songssamples !== null) {
          if (index2.id === songssamples.id) {
            item.songName = `${index2.name}`;
            item.songArtist = `${index2.artist}`;
            item.songRecordLabel = `${index2.record_label}`;
            item.songYear = `${index2.year}`;
            item.songGenre = `${index2.genre}`;
            item.songSampleAppears = `${index2.sample_appears}`;
            {
              props.allProducers.map((index4) => {
                if (index2.producer_id === index4.id) {
                  item.songProducerName = `${index4.name}`
                }
              })
            }
          }
        }
        })
    }
    {
      props.allSamples.map((index2) => {
        if (songssamples !== null) {
          if (index2.id === songssamples.sample_id) {
            item.sampleName = `${index2.name}`
            item.sampleArtist = `${index2.artist}`;
            item.sampleRecordLabel = `${index2.record_label}`;
            item.sampleYear = `${index2.year}`;
            item.sampleGenre = `${index2.genre}`;
            item.songSampledAt = `${index2.sampled_at}`;
            {
              props.allProducers.map((index4) => {
                if (index2.producer_id === index4.id) {
                  item.sampleProducerName = `${index4.name}`
                }
              })
            }
          }
        }
        })
      }
    <div className="songssamples-song">
          <h3>Song: "{item.songName}" by {item.songArtist} </h3> 
          <p>Record label: {item.songRecordLabel} </p>
         <p>{item.songYear}</p>
          <p>Genre: {item.songGenre}</p>
          <p>Sample Appears: <em>{item.songSampleAppears}</em></p>
          <p>Producer: {item.songProducerName}</p> 
    </div> 
    <div className="songssamples-sample">
        <h3>Sample: "{item.sampleName}" by {item.sampleArtist} </h3>
        <p>Record label: {item.sampleRecordLabel}</p>
        <p>{item.sampleYear}</p>
        <p>Genre: {item.sampleGenre}</p>
          <p>Sampled At: <em>{item.songSampledAt}</em></p>
          <p>Producer: {item.sampleProducerName}</p>
        </div>
  </div>
}
export default SongsSamplesDetail