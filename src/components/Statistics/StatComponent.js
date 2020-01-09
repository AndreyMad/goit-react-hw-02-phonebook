import React from "react";
import PropTypes from "prop-types";
import style from "./StatComponent.module.css";

const StatComponent = ({ label, value }) => {
  return (
    <>
      <p className={style.text}>
        {label}:{value}
      </p>
    </>
  );
};
StatComponent.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
};
export default StatComponent;
