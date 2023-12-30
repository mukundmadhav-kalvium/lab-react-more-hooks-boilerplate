import React from "react";

const TodoItem = ({ item: { data, isHidden }, index, dispatch }) => {
  return (
    <div
      style={{
        backgroundColor: "purple",
        width: "60vw",
        margin: "50px",
        padding: "10px",
        border: "1px solid silver",
        borderRadius: "20px",
      }}
    >
      <h3>{isHidden ? "This Content is Hidden" : data}</h3>
      <button
        onClick={() => {
          dispatch({ type: "CHANGE_ISHIDDEN", payload: index });
        }}
      >
        Toggle
      </button>
    </div>
  );
};

export default TodoItem;
