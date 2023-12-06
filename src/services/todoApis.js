const todoApis = {
  getTodo: async () => {
    const res = await fetch(
      "https://g8m2f5ln-3000.inc1.devtunnels.ms/api/todos"
    );

    const response = await res.json();

    return response;
  },
  postTodo: async (body) => {
    const res = await fetch(
      "https://g8m2f5ln-3000.inc1.devtunnels.ms/api/todos",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    const response = await res.json();

    return response;
  },
  putTodo: async (id, body) => {
    const res = await fetch(
      "https://g8m2f5ln-3000.inc1.devtunnels.ms/api/todos/" + id,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    const response = await res.json();

    return response;
  },
  deleteTodo: async (id) => {
    const res = await fetch(
      ` https://g8m2f5ln-3000.inc1.devtunnels.ms/api/todos/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const response = await res.json();

    return response;
  },
};

export { todoApis };
