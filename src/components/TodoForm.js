import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");
  const [selfDestruct, setSelfDestruct] = useState(0);

  const handelSubmit = (e) => {
    e.preventDefault();
    handleTimeOut();
    props.onSubmit({
      id: Math.floor(Math.random() * 20000),
      text: input,
    });
    setInput("");
    setSelfDestruct(0);
  };

  const handleTimeOut = (id) => {
    console.log(selfDestruct);
    if (selfDestruct !== null && selfDestruct !== "" && selfDestruct !== 0) {
      setTimeout(() => props.removeTodo(id), parseInt(selfDestruct) * 1000);
    }
  };

  return (
    <div className="card card-body my-3">
      <form onSubmit={handelSubmit}>
        <div className="input-group">
          <div className="input-groud-prepend">
            <div className="input-group-text mx-1 bg-primary text-white">
              <i className="bi bi-bookmark-check"></i>
            </div>
          </div>
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            className="form-control text-capitalize"
            placeholder="Add Todo"
          />
          <div className="input-groud-append">
            <button
              onClick={() =>
                setSelfDestruct(
                  prompt(
                    "Enter the delay in seconds to self destruct the message. Enter 0 if you do not want to self destruct."
                  )
                )
              }
              type="button"
              className="input-group-text mx-1 bg-danger text-white "
            >
              <i className="bi bi-clock-history"></i>
            </button>
          </div>
          <div className="input-groud-append">
            <button
              onSubmit={props.addTodo}
              type="submit"
              className="input-group-text bg-success text-white "
            >
              <i className="bi bi-cursor"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TodoForm;
