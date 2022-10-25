import React, { Component } from "react";
import axios from "axios";
// THIS IMPORT IS ONLY BEING USED TO BRING IN STYLING FROM 3RD PARTY PACKAGE
import Calendar from "./Component/Calendar";
import Result from "./Component/Result";
import Dog from "./Component/Dog";
import Home from "./Component/Home";

class App extends Component {
  state = {
    country: "",
    date: new Date(),
    holiday: [],
    flag: "",
    count: 0,
    reminder: false,
    // originally set to this as API previously only allowed input in 2022
    year: "2022",
  };

  // CREATES FULL URL TO SEND TO HOLIDAY API
  createHolidayURL = () => {
    const urlWithKey =
      "https://holidays.abstractapi.com/v1/?api_key=2ba82c11ab7a459bada758c0a3a19da1&country=";
    let countryCode = this.state.country;
    let yyyymmdd = this.state.date.toLocaleDateString();
    let preYear = "&year=";
    let year = yyyymmdd.slice(6, 10);
    let preMonth = "&month=";
    let month = yyyymmdd.slice(3, 5);
    let preDay = "&day=";
    let day = yyyymmdd.slice(0, 2);

    return (
      urlWithKey +
      countryCode +
      preYear +
      year +
      preMonth +
      month +
      preDay +
      day
    );
  };

  // SETS THE STATE OF "COUNTRY"
  onChangeCountry = (e) => {
    this.setState({ ...this.state, country: e.target.value, reminder: false });
  };

  // SETS THE STATE OF "CALENDAR" AND SETS REMINDER IF DATE ISN'T IN 2022
  onChangeCalendar = (e) => {
    let fullDate = e.toLocaleDateString();
    let yyyy = fullDate.slice(6, 10);

    this.setState({ ...this.state, date: e, year: yyyy });
  };

  // CREATES COUNTRY FLAG URL AND PLACES INTO STATE
  createFlagURL = () => {
    const fullFlag = "https://countryflagsapi.com/png/" + this.state.country;
    this.setState({ flag: fullFlag });
  };

  // CALLS THE API AND UPDATES STATE WITH FULL HOLIDAY DATA
  callHolidayAPI = async () => {
    if (this.state.country === "") {
      this.setState({ reminder: true });
      setTimeout(() => {
        this.resetState();
      }, 3000);
      return;
    }

    try {
      const fullURL = this.createHolidayURL();
      console.log(fullURL);
      const holidayData = await axios.get(fullURL);

      if (holidayData.data.length) {
        this.createFlagURL();
        this.setState({ holiday: holidayData.data, reminder: false, count: 1 });
      } else {
        this.setState({ holiday: holidayData.data, reminder: false, count: 2 });
      }
    } catch (errors) {
      console.log(errors);
    }

    // SETTIMEOUT WHERE REFRESH PAGE IS STORED
    this.myTimer = setTimeout(() => {
      this.resetState();
    }, 5000);
  };

  // REMOVES SETTIMEOUT PREVENTING PROGRAM CRASH
  componentWillUnmount = () => {
    clearTimeout(this.myTimer);
  };

  // FUNCTION TO RESTORE ORIGINAL STATE
  resetState = () => {
    this.setState({
      country: "",
      date: new Date(),
      holiday: [],
      flag: "",
      count: 0,
      reminder: false,
      year: "2022",
    });
  };

  render() {
    console.log(this.state);
    return (
      <>
        {this.state.count === 0 && (
          <Home
            onChangeCountry={this.onChangeCountry}
            onChangeCalendar={this.onChangeCalendar}
            callHolidayAPI={this.callHolidayAPI}
            reminderValue={this.state.reminder}
            year={this.state.year}
          />
        )}

        {this.state.count === 1 && (
          <Result sendHoliday={this.state.holiday} sendFlag={this.state.flag} />
        )}
        {this.state.count === 2 && <Dog />}
      </>
    );
  }
}

export default App;
