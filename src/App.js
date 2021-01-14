import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./app.css";

//Setting an intial source of data as we don't have anything
const todo = [
  {
    name: "Take out trash",
    id: 123,
    completed: false,
  },
];

class App extends React.Component {
  //Constructor with state
  constructor() {
    super();
    this.state = {
      todo: todo,
    };
  }

  //Adding items
  addItem = (itemName) => {
    this.setState({
      todo: [
        ...this.state.todo,
        { name: itemName, id: Date.now(), completed: false },
      ],
    });
  };

  //Toggling Items-- This needs to spread items. Remember to be careful with this
  toggleItem = (itemId) => {
    this.setState({
      todo: this.state.todo.map((item) => {
        if (item.id === itemId) {
          return { ...item, completed: !item.completed };
        }
        return item;
      }),
    });
  };

  clearCompleted = () => {
    this.setState({
      todo: this.state.todo.filter((item) => {
        return !item.completed;
      }),
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addItem={this.addItem} />
        </div>

        <TodoList
          clearCompleted={this.clearCompleted}
          todo={this.state.todo}
          toggleItem={this.toggleItem}
        />
      </div>
    );
  }
}

export default App;
