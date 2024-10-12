import { VscChromeClose } from "react-icons/vsc";
import PropTypes from "prop-types";

function TodoItem(props) {
  return (
    <li className="todo-list--item">
      <span className="todo--checkbox-container">
        <input
          type="checkbox"
          // isChecked={props.isChecked}
          className="todo--checkbox"
          onChange={() => {
            //   setIsChecked(!props.isChecked);
          }}
        />
      </span>
      <span className="todo--text">{props.children}</span>
      <button className="todo--delete">
        <VscChromeClose />
      </button>
    </li>
  );
}

TodoItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TodoItem;
