import './Producers.css';
import { Link } from 'react-router-dom';

function Producers(props) {
  return <div>
    {props.allProducers.map((index) =>
    {
      return <div className="producers-parent-div">
        <div className="producers-entry">
          <h3>Name: {index.name}</h3>
          <div className="producers-image-div">
            <img src={index.producer_pic_address} alt="producer"/>
          </div>
          <div className="producers-text">
        <Link to={`/producers/${index.id}`}><button>Read more</button></Link></div>
      </div></div>
    })}
    </div>
}
export default Producers