import React, { Component } from "react";
import style from "./Phonebook.module.css";

class Phonebook extends Component {
  state = {
    name: "",
    number: ""
  };

  handleChangeState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={style.form}>
        <label htmlFor="name">
          Name
          <input
            onChange={this.handleChangeState}
            value={name}
            type="input"
            name="name"
          />
        </label>
        <label htmlFor="number">
          Number
          <input
            value={number}
            type="input"
            name="number"
            onChange={this.handleChangeState}
          />
        </label>
        <input type="submit" className={style.submit_btn} value="Add contact" />
      </form>
    );
  }
}

export default Phonebook;
