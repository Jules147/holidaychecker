import React, { Component } from "react";
import Countries from "./Countries";
import Calendar from "react-calendar";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <>
        <h1>Find out when there are bank holidays in the world</h1>
        {this.props.reminderValue === true ? (
          <h3 id="country" className="remind">
            Please SELECT A COUNTRY from the list below:
          </h3>
        ) : (
          <h3>
            <i id="country">First SELECT A COUNTRY from the list below:</i>
          </h3>
        )}

        <Countries onChangeCountry={this.props.onChangeCountry} />
        {this.props.year > 1999 ? (
          <h3>
            <i>Then SELECT A DATE greater than the year 2000:</i>
          </h3>
        ) : (
          <h3>
            <i id="date">
              Please select a date{" "}
              <b>
                <u>greater than the year 2000</u>
              </b>
            </i>
          </h3>
        )}

        <Calendar
          className="calendar"
          onChange={this.props.onChangeCalendar}
          ng-model-options="{timezone: 'utc'}"
        />
        <h3>
          <i>
            Click the 'FIND HOLIDAY' button below to see if there's a national
            holiday on your chosen date:
          </i>
        </h3>
        <button
          className="button"
          onClick={() => {
            this.props.callHolidayAPI();
          }}
        >
          Find Holiday
        </button>
      </>
    );
  }
}

export default Home;
