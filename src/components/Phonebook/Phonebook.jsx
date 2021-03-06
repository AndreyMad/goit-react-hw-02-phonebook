import React, { Component } from "react";
import PropTypes from "prop-types";
import style from "./Phonebook.module.css";

class Phonebook extends Component {
  state = {
    name: "",
    number: ""
  };

  static propTypes = {
    handleSubmit: PropTypes.func.isRequired
  };

  handleChangeState = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  resetForm = () => {
    this.setState({
      name: "",
      number: ""
    });
  };

  createContact = e => {
    e.preventDefault();
    const { name, number } = this.state;
    if (name.length && number.length) {
      const { handleSubmit } = this.props;
      handleSubmit(this.state);
      this.resetForm();
    } else alert("Enter name & number"); // eslint-disable-line no-alert
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={style.form} onSubmit={this.createContact}>
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
            type="Number"
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
