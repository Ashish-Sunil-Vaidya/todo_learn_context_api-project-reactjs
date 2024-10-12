import { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import TodoReducer, { ADD_ITEM, REMOVE_ITEM } from "./TodoReducer";

const initialState = {
  todoList: [
    { id: 1, text: "Learn React", isChecked: false },
    { id: 2, text: "Learn Redux", isChecked: false },
    { id: 3, text: "Learn React Native", isChecked: false },
  ],
};

export const TodoContext = createContext(initialState);

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TodoReducer, initialState);

  const addItem = (todo) => {
    dispatch({ type: ADD_ITEM, payload: todo });
  };

  const deleteItem = (id, isChecked) => {
    dispatch({ type: REMOVE_ITEM, payload: [id, isChecked] });
  };
  return (
    <TodoContext.Provider
      value={{ todoList: state.todoList, addItem, deleteItem }}
    >
      {children}
    </TodoContext.Provider>
  );
};

TodoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TodoProvider;
