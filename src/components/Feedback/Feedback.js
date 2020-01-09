import React from "react";
import PropTypes from "prop-types";
import style from "./Feedback.module.css";

const uuidAPIKey = require("uuid-apikey");

const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {Object.keys(options).map(option => {
        return (
          <button
            key={uuidAPIKey.create().uuid}
            type="button"
            className={style.button}
            onClick={onLeaveFeedback}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};
Feedback.propTypes = {
  options: PropTypes.shape({}).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired
};
export default Feedback;
