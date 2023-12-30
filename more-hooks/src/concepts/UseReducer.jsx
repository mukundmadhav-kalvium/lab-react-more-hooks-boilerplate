import React, { useReducer, useState } from "react";

const reducer = (state, action) => {
  return state;
};

const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>u s e R E D U C E R</h1>
      <button onClick={() => dispatch({ type: "Increase" })}>+</button>
      <h2>{count}</h2>
      <button onClick={() => dispatch({ type: "Decrease" })}>-</button>
    </div>
  );
};

export default UseReducer;
