import React, { Component } from "react";

const Context = React.createContext();

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
}
