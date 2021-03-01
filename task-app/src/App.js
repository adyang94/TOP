import React, { Component } from "react";
import Overview from "./Components/Overview.js";

// App.js will handle the input field with the logic.

class App extends Component {
  constructor() {
    super();
    
    this.state = { // Defining state.
      task: "",
      tasks: [],
    };
  }

  callbackFunction = (message) => {
    alert(message);
  };

  handleChange = (e) => {
    this.setState({
      task: e.target.value,
    });
  };
  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: "",
    });
    console.log(`Tasks: ${this.state.tasks}`);
  };

  render () {
    const {task, tasks} = this.state; // Destructuring state.

    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter task</label>
          <input 
            type="text"
            id="taskInput"
            onChange = {this.handleChange}
            value = {this.state.task}
          />
          <button type="submit">
            Add Task
          </button>
        </form>
        <Overview 
          tasks = {tasks}
          callback = {this.callbackFunction}
        />
      </div>
    );
  }
}

export default App;
