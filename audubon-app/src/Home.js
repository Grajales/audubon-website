import React, { Component } from "react";
import './Home.css';
import {Link} from "react-router-dom";
class Home extends Component {
  render() {
    let birdList = this.props.birdshome.map((bird, index) => {
       return(
         <div className="bird" > 
         <Link to={"/bird/" + index}> 
         <img src={bird.image} alt=""/> 
         </Link> 
         </div>
       )
       })
    return (
      <div>
        <h1>Audubon Society</h1>
        <div className="birdList">
          {birdList}
         </div>
      </div>
    );
  }
}
export default Home;

