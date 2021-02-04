import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import './ProducersDetail.css'

function ProducersDetail(props) {
  const [producers, setProducers] = useState(null);
  const { id } = useParams();
  const allProducers = props.allProducers;
  const removeProducers = props.removeProducer;
  let oneProducer = '';
  let item = {};
  let songsWorkedOn = [];
  useEffect(() => {
    if (allProducers.length) {
      allProducers.map((num) => {
        if (num.id === Number(id)) {
          oneProducer = num;
        }
      });
      setProducers(oneProducer)
    }
  }, [allProducers, id])

  return (
    
    <div className="producers-detail-parent-div">
         {
        props.allProducers.map((index2) => {
          if (producers !== null) {
            if (index2.id === producers.id) {
              item.name = index2.name;
              item.genre = index2.genre;
              item.lifetime = index2.lifetime;
              item.location = index2.location;
              item.imageAddress = index2.producer_pic_address;
              props.allSongs.map((thing) => {
                if (thing.producer_id === producers.id) {
                  songsWorkedOn.push(thing);
                }
              })
              props.allSamples.map((thing4) => {
                if (thing4.producer_id === producers.id) {
                  songsWorkedOn.push(thing4);
                }
              })
            }
            
          }
      }
      )
      }
      <h3>Name: {item.name}</h3>
      <img src={item.imageAddress} alt="producer-pic"/>
      <div className="producers-detail-text">
      <p>Genre: {item.genre}</p>
      <p>Lifetime: {item.lifetime}</p>
        <p>Location: {item.location}</p> </div>
        {songsWorkedOn.map((thing2) => {
        return <p id="producers-detail-songs-worked-on">Songs worked on: "{thing2.name}"</p>
      })}
      </div>
  )
}
export default ProducersDetail