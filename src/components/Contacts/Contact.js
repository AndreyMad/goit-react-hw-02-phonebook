import React from "react";
import PropTypes from "prop-types";
import style from "./Contacts.module.css";

const Contact = ({ el }) => {
  return (
    <li className={style.list_item}>
      <p>{el.name}</p>
      <p>{el.number}</p>
      <input type="button" value="Delete" className={style.delete_button} />
    </li>
  );
};
Contact.propTypes = {
  el: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
  }).isRequired
};
export default Contact;
