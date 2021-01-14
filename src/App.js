import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

//Setting an intial source of data as we don't have anything
const todo = [
  {
    name: "Take out trash",
    id: 1,
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

  //Class methods to update the state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>

        <TodoForm addItem={this.addItem} />
        <TodoList todo={this.state.todo} />
      </div>
    );
  }
}

export default App;
