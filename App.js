import React, { Component } from 'react';
import './App.css';
import Slider from './components/slider'
import Roster from './components/Roster'
import Bio from './components/Bio'
import observerMenu from './utils/observer'



class App extends Component {

  

constructor(props) {
  super(props)

  this.state = {
   
    urlD: 'https://avatarfiles.alphacoders.com/889/88985.png' ,
    fullData: {
      bio: "Rick Sanchez is the co-eponymous main character and leading protagonist of the show. He is a genius scientist whose alcoholism and reckless, nihilistic behavior are a source of concern for his daughter's family, as well as the safety of their son, Morty. He is voiced by Justin Roiland."
    }
    
}

  this.eventHandler = (newState) => {
   this.setState(newState) ;
 
  }
}

  componentDidMount() {
    observerMenu.addObserver("obz", this.eventHandler, this.state)

    observerMenu.addObserver("obz2", this.eventHandler, this.state)
  }
  



  render() {
    return (
      
 
      <div className="App">
          
      

          <Slider />
          <Roster />
          <Bio urlD = {this.state.urlD} fullData ={this.state.fullData} />
         
      </div>


    );
  }
}


export default App;
