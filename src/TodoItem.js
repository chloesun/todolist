import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    return <li className="List">{this.props.children}</li>;
  }
}

export default TodoItem;
