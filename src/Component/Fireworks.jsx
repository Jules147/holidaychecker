import React, { Component } from "react";
import "./Fireworks.css";
class Fireworks extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="firework" id="firework1">
          <div class="explosion"></div>
          <div class="explosion"></div>
          <div class="explosion"></div>
          <div class="explosion"></div>
          <div class="explosion"></div>
          <div class="explosion"></div>
          <div class="explosion"></div>
          <div class="explosion"></div>
          <div class="explosion"></div>
          <div class="explosion"></div>
          <div class="explosion"></div>
          <div class="explosion"></div>
        </div>
        <div class="firework" id="firework2">
          <div class="explosion"></div>
          <div class="explosion"></div>
          <div class="explosion"></div>
          <div class="explosion"></div>
          <div class="explosion"></div>
          <div class="explosion"></div>
          <div class="explosion"></div>
          <div class="explosion"></div>
          <div class="explosion"></div>
          <div class="explosion"></div>
          <div class="explosion"></div>
          <div class="explosion"></div>
        </div>
        <div class="firework" id="firework3">
          <div class="explosion"></div>
          <div class="explosion"></div>
          <div class="explosion"></div>
          <div class="explosion"></div>
          <div class="explosion"></div>
          <div class="explosion"></div>
          <div class="explosion"></div>
          <div class="explosion"></div>
          <div class="explosion"></div>
          <div class="explosion"></div>
          <div class="explosion"></div>
          <div class="explosion"></div>
        </div>
      </>
    );
  }
}

export default Fireworks;
