import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
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

  render() {
    const { contacts } = this.state;

    return (
      <div>
        {contacts.map(contact => (
          <Contact
            name={contact.name}
            email={contact.email}
            phone={contact.phone}
          />
        ))}
      </div>
    );
  }
}

export default Contacts;
