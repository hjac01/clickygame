import React, { Component } from "react";
import MemoryCard from "./components/MemoryCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import memories from "./memories.json";

class App extends Component {
  state = {
    memories
  };

  clickMemory = id => {
    const memories = this.state.memories.filter(memory => memory.id !== id);
    this.setState({ memories });
  };


  render() {
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        {this.state.memories.map(memory => (
          <MemoryCard
            clickMemory={this.clickMemory}
            id={memory.id}
            image={memory.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
