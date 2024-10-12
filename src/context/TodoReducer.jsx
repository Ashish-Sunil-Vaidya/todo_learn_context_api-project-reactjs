export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

export function TodoReducer(state, action) {
  switch (action.type) {
    case REMOVE_ITEM:
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== action.payload),
      };

    case ADD_ITEM:
      return {
        ...state,
        todoList: [action.payload, ...state.todoList],
      };

    default:
      return state;
  }
}

export default TodoReducer;
