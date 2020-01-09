import React, { Component } from "react";
import style from "./Phonebook.module.css";

const keyGen = require("uuid/v1");

class Phonebook extends Component {
  state = {
    name: "",
    number: ""
  };

  handleChangeState = e => {
    return e;
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={style.form}>
        <label htmlFor="input_name">
          Name
          <input
            onChange={this.handleChangeState}
            value={name}
            key={keyGen()}
            type="input"
            id="input_name"
          />
        </label>
        <label htmlFor="input_name">
          Number
          <input value={number} key={keyGen()} type="input" id="input_number" />
        </label>
        <input type="submit" />
      </form>
    );
  }
}

export default Phonebook;
