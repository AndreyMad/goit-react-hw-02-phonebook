import React, { Component } from "react";
import PropTypes from "prop-types";
import style from "./Contacts.module.css";

// const keyGen = require("uuid/v1");

class Contacts extends Component {
  state = {
    filter: ""
  };

  static propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({})).isRequired
  };

  render() {
    const { filter } = this.state;
    const { contacts } = this.props;
    return (
      <div className={style.wrapper}>
        <h2>Contacts</h2>
        <label htmlFor="filter">
          Filter contacts by name
          <input type="input" name="filter" value={filter} />
        </label>
        <ul>
          {contacts.map(el => {
            return (
              <li key={el.id} className={style.list_item}>
                <p>{el.name}</p>
                <p>{el.number}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Contacts;
