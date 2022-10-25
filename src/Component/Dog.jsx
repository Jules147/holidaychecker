import React, { Component } from "react";
import dog from "./dog.jpg";
import "./Dog.css";

class Dog extends Component {
  state = {};
  render() {
    return (
      <>
        <div>
          <h3 className="noResult">
            There's no holiday on the day you've chosen
          </h3>
          <img src={dog} alt=""></img>
        </div>
      </>
    );
  }
}

export default Dog;
