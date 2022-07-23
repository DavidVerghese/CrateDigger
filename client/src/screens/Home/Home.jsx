import './Home.css'
import { Link } from "react-router-dom";

import vinyl from "../../pictures/vinyl.png";
import turntable_arm from "../../pictures/turntable_arm.png";
import turntable from "../../pictures/turntable.png"

function Home() {
  return <div className="home">


    
    {/* <h2>Welcome to Crate Digger!</h2> */}
    <p>Find out where your favorite songs got their tune</p>
    <br />
   
    <div id="turntable-container">
      <img id="turntable-arm" src={turntable_arm} />
      <img id="turntable" src={turntable} />
      <img id="spin" src={vinyl} />
    </div>

    
    
    
    
  
   
    <Link to="/cards"><button type="button" className="btn btn-primary">Click to enter</button></Link>
  </div>
}
export default Home