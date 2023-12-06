import React, { useState } from "react";

const AddTodo = ({ handleAddTodos }) => {
  const [text, setText] = useState("");
  return (
    <div>
      <label htmlFor="addTodo">Add Todo</label>
      <input
        type="text"
        name="todo"
        id="addTodo"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />

      <button
        onClick={() => {
          text.length > 1 && handleAddTodos(text);
          text.length > 1 && setText("");
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default AddTodo;
