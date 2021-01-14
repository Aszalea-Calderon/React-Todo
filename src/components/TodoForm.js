import React from "react";

class TodoForm extends React.Component {
  //Constructor with state

  constructor() {
    super();
    this.state = {
      itemName: "",
    };
  }

  handleChanges = (e) => {
    //update state with each keystroke
    this.setState({ itemName: e.target.value });
  };

  //Submitting
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.itemName);
  };
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChanges}
            value={this.state.itemName}
            name="todo"
            type="text"
            placeholder="Add task"
          />
          <button>Add to do</button>
        </form>
      </>
    );
  }
}
export default TodoForm;
