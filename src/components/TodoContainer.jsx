import "../styles/Todo.css";
import { useContext } from "react";
import {TodoContext} from "../context/TodoState";
import TodoItem from "./TodoItem";

function TodoContainer() {
  const { todoList } = useContext(TodoContext);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted!");
  }
  return (
    <main>
      <h1 className="hero-title">todos</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="What needs to be done?" />
      </form>
      <ul className="todo-list">
        {todoList &&
          todoList.map((todo, index) => (
            <TodoItem key={index}>{todo.text}</TodoItem>
          ))}
      </ul>
    </main>
  );
}

export default TodoContainer;
