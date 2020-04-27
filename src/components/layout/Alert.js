import React, { useContext } from "react";
import AlertContex from "../../contex/alert/alertContex";

const Alert = () => {
  const alertContex = useContext(AlertContex);
  const { alert } = alertContex;
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className='fas fa-info-circle' />
        {alert.message}
      </div>
    )
  );
};

export default Alert;
