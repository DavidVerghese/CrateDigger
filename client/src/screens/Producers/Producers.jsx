import './Producers.css'
function Producers(props) {
  return <div>
    {props.allProducers.map((index) =>
    {
      return <div className="producers-entry">
        <h3>Name: {index.name}</h3>
        <p>Genre: {index.genre}</p>
        <p>Lifetime: {index.lifetime}</p>
        <p>Location: {index.location}</p>
      </div>
    })}
    </div>
}
export default Producers