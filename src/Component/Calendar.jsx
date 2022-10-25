import React, { Component } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css";

class Cal extends Component {
  render() {
    return (
      <>
        <div className="app">
          <div className="calendar">
            <Calendar
              onChange={(e) => {
                this.props.onChange(e);
              }}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Cal;
