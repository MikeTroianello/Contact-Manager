import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    default:
      return state;
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
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
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
