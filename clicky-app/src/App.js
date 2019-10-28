import React, { Component } from "react";
import MemoryCard from "./components/MemoryCard";
import memories from "./memories.json";

class App extends Component {
  // Setting this.state.memories to the memories json array
  state = {
    memories
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        {this.state.memories.map(memory => (
          <FriendCard
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
