import React, {Component} from "react";

class TodoList extends Component {
  render(){
    return(
      <div className="todoList">
        <form>
          <input placeholder="Enter Task">
          </input>
          <button type="submit"> Add </button>
        </form>
      </div>
    )
  }
}

export default TodoList;