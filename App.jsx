import { useState } from "react";

function TodoItem1() {
  // State to store the list of todos
  const [todoItems, setTodoItems] = useState([
    { id: 1, name: "Buy milk", dueDate: "2024-04-10" },
    { id: 2, name: "Go to gym", dueDate: "2024-04-12" },
  ]);

  // State to store user input for new todo
  const [newTodoName, setNewTodoName] = useState("");
  const [newDueDate, setNewDueDate] = useState("");

  // Function to add a new todo
  const addTodo = () => {
    if (newTodoName.trim() === "" || newDueDate.trim() === "") {
      alert("Please enter both task name and due date.");
      return;
    }

    const newTodo = {
      id: todoItems.length + 1,
      name: newTodoName,
      dueDate: newDueDate,
    };

    setTodoItems([...todoItems, newTodo]); 
    setNewTodoName(""); 
    setNewDueDate(""); 
  };

  // Function to delete a todo
  const deleteTodo = (id) => {
    const updatedTodos = todoItems.filter((todo) => todo.id !== id);
    setTodoItems(updatedTodos);
  };

  return (
    <div className="container">
      <h2 className="text-center">Todo List</h2>

      {/* Input Fields for New Todo */}
      <div className="row mb-3">
        <div className="col-4">
          <input
            type="text"
            className="form-control"
            placeholder="Enter task name"
            value={newTodoName}
            onChange={(e) => setNewTodoName(e.target.value)}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            className="form-control"
            value={newDueDate}
            onChange={(e) => setNewDueDate(e.target.value)}
          />
        </div>
        <div className="col-2">
          <button className="btn btn-primary" onClick={addTodo}>
            Add Todo
          </button>
        </div>
      </div>

      {/* Render list of Todos */}
      {todoItems.length === 0 ? (
        <p className="text-center">No tasks available.</p>
      ) : (
        todoItems.map((todo) => (
          <div className="row mb-2" key={todo.id}>
            <div className="col-4">{todo.name}</div>
            <div className="col-4">{todo.dueDate}</div>
            <div className="col-2">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default TodoItem1;
