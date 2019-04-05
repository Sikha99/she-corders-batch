import React, { Component } from 'react';

import './App.css';



class App extends Component {
  constructor(){
    super();
    this.state={
      data:" "
    }
    this.displayMessage=this.displayMessage.bind(this)
  };
  displayMessage(){

    var Today=new Date()
    var hour=Today.getHours()
  
  if(hour < 12)
  {
    this.setState({data: "good morning sikha"})
  }else if (hour < 18 )
  {
    this.setState({data: "GOOD AFTERNOON SIKHA"})
  }else{
    this.setState({data: "GOOD EVENING SIKHA"})
  }
  
  }
  render() {
    return (
      <div className="App">
        <h1>welcome</h1>
        <button onClick={this.displayMessage}>please click here</button>
        <h1>{this.state.data}</h1>
        
      </div>
    );
  }
}

export default App;

