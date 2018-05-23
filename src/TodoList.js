import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  constructor(props) {
    super(props);
    //initial state
    this.state = {
      items: [],
      inputText: ""
    };
    //ensure this keyword resolves properly
    this.addItem = this.addItem.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  // addItem(e) {
  //   let { items } = this.state;

  //   // why need key? as intentifier?
  //   const newItem = {
  //     text: this._inputElement.value,
  //     key: Date.now()
  //   };

  //   //push vs concat?
  //   this.setState({
  //     items: items.push(newItem)
  //   });

  //   this._inputElement.value = "";
  //   console.log(items);
  //   // by default, submit a form, page reloads and clears everything
  //   e.preventDefault();
  // }

  addItem(e) {
    let item = this.state.inputText;
    this.setState(state => {
      return {
        //copy over the old array, and create a new array, add the item to the end
        items: [...state.items, item]
      };
    });
    //debugger;
    item = "";
    //console.log(item);
  }

  updateState(e) {
    this.setState({
      inputText: e.target.value
    });
    console.log(e.target.value);
  }

  render() {
    return (
      <div className="todoList">
        {/*<form onSubmit={this.addItem}>*/}
        <input placeholder="Enter Task" onChange={this.updateState} />
        <button type="submit" onClick={this.addItem}>
          Add
        </button>

        {this.state.items.map((item, i) => {
          return <TodoItem key={i}>{item}</TodoItem>;
        })}
        {/*</form>*/}
      </div>
    );
  }
}

export default TodoList;
