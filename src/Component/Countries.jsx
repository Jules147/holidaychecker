import React, { Component } from "react";
import "./Countries.css";
import { countries } from "../countries";

class Countries extends Component {
  state = {};
  render() {
    return (
      <>
        <div
          className="country_list"
          onChange={(e) => {
            this.props.onChangeCountry(e);
          }}
        >
          <select defaultValue={"DEFAULT"}>
            <option value="DEFAULT" disabled>
              Select a Country
            </option>
            {countries.map((country) => {
              return (
                <React.Fragment key={country.name}>
                  <option value={country.code}>{country.name}</option>
                </React.Fragment>
              );
            })}
          </select>
        </div>
      </>
    );
  }
}

export default Countries;
