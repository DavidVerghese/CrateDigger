import './AllPostsCard.css'

function AllPostCard(props) {
  const index = props.index;
  return <div className="allposts-thumbnail"><img className="allposts-thumbnail-pic" src={index.song_pic_address} /><p>"{index.name}"</p><p>{index.artist}</p><button>Find out samples</button></div>
}
export default AllPostCard