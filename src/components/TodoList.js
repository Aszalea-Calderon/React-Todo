// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <div className="shopping-list">
      {/* This is what creates each todo */}
      {props.todo.map((item) => (
        <Todo toggleItem={props.toggleItem} key={item.id} item={item} />
      ))}
      <button className="clear-btn" onClick={(e) => props.clearCompleted()}>
        Clear Completed
      </button>
    </div>
  );
};

export default TodoList;
