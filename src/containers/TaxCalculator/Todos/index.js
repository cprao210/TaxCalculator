import React, { useEffect, useState } from "react";
import AddTodo from "../../../components/InputBox/AddTodo";
import ViewTodo from "../../../components/ViewTodo";
import { todoApis } from "../../../services/todoApis";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    const data = await todoApis.getTodo();
    console.log(data, "data");
    setTodos(data);
  };

  const handleAddTodos = async (text) => {
    const data = {
      task: text,
    };
    const postRes = await todoApis.postTodo(data);
    console.log(postRes, "postRes");
    setTodos((state) => [...state, postRes]);
  };

  const handleDelete = async (id) => {
    const postRes = await todoApis.deleteTodo(id);
    console.log(postRes, "postRes");
    const newTod = todos.filter((d) => d.id !== id);
    setTodos(newTod);
  };

  useEffect(() => {
    getTodos();
  }, []);
  const handleEdit = (id) => {
    const newdata = todos.map((d) => {
      return { ...d, isEdit: id === d.id };
    });
    setTodos(newdata);
  };
  const handleEditSubmit = async (id, task) => {
    const body = {
      task,
    };
    try {
      const res = await todoApis.putTodo(id, body);
      const newdata = todos.map((d) => {
        return { ...d, task: id === d.id ? task : d.task, isEdit: false };
      });
      setTodos(newdata);
    } catch (error) {}
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <AddTodo handleAddTodos={handleAddTodos} />
      <ViewTodo
        todos={todos}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleEditSubmit={handleEditSubmit}
      />
    </div>
  );
};

export { Todos };
