import React from 'react';
import './Show.css';
import {Redirect} from "react-router-dom";
class show extends React.Component{
    constructor(props){
        super(props);
    }

render(){
    let index= this.props.match.params.index;
   // console.log(this.props)
    return(
            <div>
                <h1>Bird: {this.props.birdshow[index].name}  </h1>
                <img src={this.props.birdshow[index].image} alt=""/> 
                <ul className="show" >  
                <li> genus:{this.props.birdshow[index].genus} </li> 
                <li> conservation Status:{this.props.birdshow[index].conservationStatus} </li> 
                <li>homepage:  {this.props.birdshow[index].homepage}</li> 
                </ul>
            <a href="http://localhost:3000/"> Birds Home Page  </a>
            </div>
            )


    }
}
export default show;