import React, { Component } from "react";
import "./Result.css";
import Fireworks from "./Fireworks";
class Result extends Component {
  state = {};
  render() {
    console.log(this.props);
    // ADDED div ATTRIBUTE OF key={i.name} TO PREVENT 'UNIQUE KEY ERROR' */}
    return (
      <>
        {this.props.sendFlag && <img src={this.props.sendFlag} alt=""></img>}
        {/* I COULDN'T GET <img src={this.props.sendFlag} and <Fireworks /> IN THE SAME LINE OF CODE */}
        {this.props.sendFlag && <Fireworks />}
        {this.props.sendHoliday &&
          this.props.sendHoliday.map((i, e) => {
            return (
              <div key={i.name}>
                <h2 className="result">
                  On the {this.props.sendHoliday[e].date_day}/
                  {this.props.sendHoliday[e].date_month}/
                  {this.props.sendHoliday[e].date_year} the holiday being
                  celebrated in {this.props.sendHoliday[e].location} is{" "}
                  <div className="holidayName">
                    {this.props.sendHoliday[e].name}
                  </div>
                </h2>
              </div>
            );
          })}
      </>
    );
  }
}

export default Result;
