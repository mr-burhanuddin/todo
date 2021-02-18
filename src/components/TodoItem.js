import React, { useState } from "react";
import TodoForm from "./TodoForm";

function TodoItem({ todos, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo) => (
    <div
      key={todo.id}
      className="list-group-item text-capitalize d-flex justify-content-between my-2"
    >
      <div>{todo.text}</div>
      <div className="icons">
        <div className="todo-icons">
          <span className="mx-2 text-warning">
            <i
              onClick={() => setEdit({ id: todo.id, value: todo.text })}
              className="bi bi-pencil-square"
            ></i>
          </span>
          <span className="mx-2 text-danger">
            <i
              onClick={() => removeTodo(todo.id)}
              className="bi bi-bookmark-x"
            ></i>
          </span>
        </div>
      </div>
    </div>
  ));
}

export default TodoItem;
