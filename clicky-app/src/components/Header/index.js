import React from "react";
import "./style.css";

function Header (props){
    return(
        <div class="header"><h1>Clicky Game!!   Your Score: {props.score}</h1></div>
    )
}





export default Header;