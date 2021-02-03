import './Producers.css';
import { Route, Link, Switch, useHistory } from 'react-router-dom';

function Producers(props) {
  return <div>
    {props.allProducers.map((index) =>
    {
      return <div className="producers-entry">
        <h3>Name: {index.name}</h3>
        <img src={index.producer_pic_address}/>
        <p>Genre: {index.genre}</p>
        <p>Lifetime: {index.lifetime}</p>
        <p>Location: {index.location}</p>
        <Link to={`/producers/${index.id}`}>Read more</Link>
      </div>
    })}
    </div>
}
export default Producers