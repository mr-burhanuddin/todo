import TodoList from "./components/TodoList";

function App() {
  return (
    <div className=".container-fluid">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center">
            Sometimes our stop-doing list needs to be bigger than our to-do list
            🧑‍💼.
          </h3>
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
