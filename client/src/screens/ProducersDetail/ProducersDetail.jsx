import { Link, useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import './ProducersDetail.css'

function ProducersDetail(props) {
  const [producers, setProducers] = useState(null);
  const { id } = useParams();
  const allProducers = props.allProducers;
  const removeProducers = props.removeProducer;
  let oneProducer = '';
  let item = {};
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
            }
          }
      }
      )
      }
      <h3>Name: {item.name}</h3>
      <img src={item.imageAddress} />
      <div className="producers-detail-text">
      <p>Genre: {item.genre}</p>
      <p>Lifetime: {item.lifetime}</p>
      <p>Location: {item.location}</p> </div>
      </div>
  )
}
export default ProducersDetail