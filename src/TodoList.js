import React, { Component } from "react";

class TodoList extends Component {
  constructor(props) {
    super(props);
    //initial state
    this.state = {
      items: []
    };
    //ensure this keyword resolves properly
    this.addItem = this.addItem.bind(this);
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
    if (this._inputElement.value != "") {
      const newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };

      this.setState(prevState => {
        return {
          // ensure state object isn't modified, a new array made of the existing items data with newly entered data
          items: prevState.items.concat(newItem)
        };
      });

      this._inputElement.value = "";
    }
    console.log(this.state.items);

    e.preventDefault();
  }

  render() {
    return (
      <div className="todoList">
        <form onSubmit={this.addItem}>
          <input
            placeholder="Enter Task"
            ref={element => (this._inputElement = element)}
          />
          <button type="submit"> Add </button>
        </form>
      </div>
    );
  }
}

export default TodoList;
