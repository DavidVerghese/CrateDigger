import './Card.css'
import { useEffect, useState, useRef} from "react";
import { getOneSong } from "../../services/songs";

function Card(props) {
  const { allSongssamples, allSongs,allSamples } = props;
  console.log(allSongssamples);
  const [revealSample, setRevealSample] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);
  function goForward(){
    if (currentCard < allSongssamples.length-1)
    { setCurrentCard(currentCard + 1) }
    else {
      setCurrentCard(0)
    }
  }
  function goBack() {
    if (currentCard > 0)
    { setCurrentCard(currentCard - 1) }
    else {
      setCurrentCard(allSongssamples.length-1)
    }
  }
  return (<div className="table">
    
   <em className={!revealSample ? "show" : "hide"}>Flip the card to see the sample! </em>
   
    { allSongssamples.map((index, key) => {
      if (key === currentCard) {
        return (<div key={key} className="card" style={{  color:"black" }}>
          {allSongs.map((song) => song.id === index.song_id && !revealSample ? <h2>SONG: {song.name} by {song.artist}</h2> : null)}
          {allSongs.map((song) => song.id === index.song_id && !revealSample ? <iframe  src={song.youtube_embed} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> : null)}
            
          {allSamples.map((song) => song.id === index.song_id && revealSample ? <h2>SAMPLE: {song.name} by {song.artist}</h2> : null)}
          {allSamples.map((song) => song.id === index.sample_id && revealSample ? <iframe src={song.youtube_embed} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> : null)}
            
          <button type="button" className="btn btn-primary" onClick={() => setRevealSample(!revealSample)}>'Flip the card'</button>
        </div>)}
    })}
    <div className="directions">
      <button type="button" className="btn btn-primary" onClick={() => { goBack(); setRevealSample(false) }}>Previous</button>
      <button type="button" className="btn btn-primary" onClick={() => { goForward(); setRevealSample(false) }}>Next</button>
    </div>
    

  </div>)
}

export default Card;