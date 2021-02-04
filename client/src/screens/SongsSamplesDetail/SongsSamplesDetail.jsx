import { Link, useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import './SongsSamplesDetail.css'

function SongsSamplesDetail(props) {
  const [songssamples, setSongssamples] = useState(null);
  const { id } = useParams();
  const allSongssamples = props.allSongssamples;
  const removeSongssample = props.removeSongssample;
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
  let item = {};
  return <div className="songssamples-detail-parent-div">
    {
      props.allSongs.map((index2) => {
        if (songssamples !== null) {
          if (index2.id === songssamples.song_id) {
            item.songName = `${index2.name}`;
            item.songArtist = `${index2.artist}`;
            item.songRecordLabel = `${index2.record_label}`;
            item.songYear = `${index2.year}`;
            item.songGenre = `${index2.genre}`;
            item.songSampleAppears = `${index2.sample_appears}`;
            item.imageAddress = `${index2.song_pic_address}`;
            item.youtubeAddress = `${index2.youtube_address}`;
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
            item.id = index2.id;
            item.sampleYoutubeAddress = `${index2.youtube_embed}`;
            item.sampleImageAddress = `${index2.sample_pic_address}`;
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
    <div>
      <h2>SONG: "{item.songName}" by {item.songArtist} </h2> 
      <img src={item.imageAddress} />
      <br></br>
      <div className="songsamples-detail-song-text">
              <a href={item.youtubeAddress} target="_blank">Link</a>
          <p>RECORD LABEL: {item.songRecordLabel} </p>
         <p>YEAR: {item.songYear}</p>
          <p>GENRE: {item.songGenre}</p>
          <p>SAMPLE APPEARS: <em>{item.songSampleAppears}</em></p>
        <p>Producer: {item.songProducerName}</p>
      </div>
    </div> 
    <div>
      <h3>SAMPLE: "{item.sampleName}" by {item.sampleArtist} </h3>
      <img src={item.sampleImageAddress} />
      <br></br>
      <div className="songsamples-detail-song-text">
              <a href={item.sampleYoutubeAddress} target="_blank">Link</a>
        <p>RECORD LABEL: {item.sampleRecordLabel}</p>
        <p>YEAR: {item.sampleYear}</p>
        <p>GENRE: {item.sampleGenre}</p>
          <p>Sampled At: <em>{item.songSampledAt}</em></p>
        <p>PRODUCER: {item.sampleProducerName}</p>
      </div>
      <div className="songssamples-detail-buttons-parent-div">
      <Link to={`/songssamples/${item.id}/edit`}><button>Edit</button></Link>
    <button onClick={() => removeSongssample(item.id)}>Delete</button></div>
    </div>
  </div>
}
export default SongsSamplesDetail