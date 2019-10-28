import React, { Component } from "react";
import MemoryCard from "./components/MemoryCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import memories from "./memories.json";

class App extends Component {
  // Setting this.state.memories to the memories json array
  state = {
    memories
  };

  clickMemory = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const memories = this.state.memories.filter(memory => memory.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ memories });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        {this.state.memories.map(memory => (
          <MemoryCard
            id={memory.id}
            key={memory.id}
            image={memory.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
