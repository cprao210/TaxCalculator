import React, { useState } from "react";

const ViewTodo = ({ todos, handleDelete, handleEdit, handleEditSubmit }) => {
  const [editValue, setEditValue] = useState("");
  return (
    <div
    //   style={{
    //     display: "flex",
    //     flexDirection: "column",
    //     gap: "10px",
    //   }}
    >
      {todos.map((todo, index) => {
        return (
          <div className="todo" key={index}>
            {todo.isEdit ? (
              <>
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => {
                    setEditValue(e.target.value);
                  }}
                />{" "}
                <button
                  onClick={() => {
                    handleEditSubmit(todo.id, editValue);
                  }}
                >
                  Save
                </button>{" "}
              </>
            ) : (
              <>
                {todo.task}{" "}
                <button
                  onClick={() => {
                    handleEdit(todo.id);
                    setEditValue(todo.task);
                  }}
                >
                  edit
                </button>{" "}
                <button
                  onClick={() => {
                    handleDelete(todo.id);
                  }}
                >
                  Deelete
                </button>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ViewTodo;
