import React from "react";
import "./style.css";

function MemoryCard(props) {
    return (
      <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} onClick={()=> props.handleIncrement(props.id)} />

        </div>
        {/* <span onClick={() => props.clickMemory(props.id)} className="click">
        {/* 𝘅 */}
      {/* </span> */}
       </div>
    );
  }
  
  export default MemoryCard;