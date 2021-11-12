import './AllPostsCard.css'
import { Link } from "react-router-dom";

function AllPostCard(props) {
  const index = props.index;
  return <div className="allposts-thumbnail"><img className="allposts-thumbnail-pic" src={index.song_pic_address} /><p>"{index.name}"</p><p>{index.artist}</p><Link to={`post/${index.id}`}><button>Find out samples</button></Link></div>
}
export default AllPostCard