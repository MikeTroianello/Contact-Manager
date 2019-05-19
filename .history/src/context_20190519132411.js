import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Joe",
        email: "joe@mailbox.co",
        phone: "(123)456-7890"
      },
      {
        id: 2,
        name: "Mike",
        email: "mike@mailbox.co",
        phone: "(123)456-1111"
      },
      {
        id: 3,
        name: "Mark",
        email: "mark@mailbox.co",
        phone: "(123)456-2231"
      }
    ]
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
