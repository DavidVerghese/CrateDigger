import './Home.css'
import { Link } from "react-router-dom";

import crate_digger from "../../pictures/crate_digger.png"

function Home() {
  return <div className="home">
    <h2>Welcome to Crate Digger!</h2>
    <p>Find out where your favorite songs got their tune</p>
    <br />
   
    <div>
      {/* <img id="home-pic" src="https://media2.giphy.com/media/Z4ITmGFsXV19C/giphy.gif" alt="two djs" ></img> */}
      <img src={crate_digger} />
      <img src={crate_digger} />
      <img src={crate_digger} />
    </div>
   
    <Link to="/cards"><button>Click to enter</button></Link>
  </div>
}
export default Home