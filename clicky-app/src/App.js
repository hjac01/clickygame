import React, { Component } from "react";
import MemoryCard from "./components/MemoryCard";
import Wrapper from "./components/Wrapper";
import memories from "./memories.json";
import Header from "./components/Header";

class App extends Component {
  state = {
    memories,
    score: 0,
    beenClicked: [],

  };

shuffleCards = ()=> {
  this.state.memories.sort(()=>.5-Math.random())
}
  handleIncrement = (id) => {
    if(this.state.beenClicked.includes(id)){
      alert("you lost")
      this.setState({
        score: 0, 
        beenClicked: []
      })
    }else{
    this.setState({beenClicked:this.state.beenClicked.concat(id)})
    this.setState({ score: this.state.score + 1 });
    this.shuffleCards()
    }

  };

  render() {
    return (
      <div>
      <Header
        score = {this.state.score}
        />
      <Wrapper>
        {this.state.memories.map(memory => (
          <MemoryCard
            handleIncrement={this.handleIncrement}
            id={memory.id}
            image={memory.image}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
