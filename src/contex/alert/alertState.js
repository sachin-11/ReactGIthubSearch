import React, { useReducer } from "react";
import AlertContex from "./alertContex";
import AlertReducer from "./alertReducer";

import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = (props) => {
  const initialState = null;
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  //set alert state

  const setAlert = (message, type) => {
    dispatch({
      type: SET_ALERT,
      payload: { message, type },
    });
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
  };

  return (
    <AlertContex.Provider
      value={{
        alert: state,
        setAlert,
      }}>
      {props.children}
    </AlertContex.Provider>
  );
};

export default AlertState;
