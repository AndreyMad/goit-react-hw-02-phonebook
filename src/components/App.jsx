import React, { Component } from "react";
import keyGenerator from "uuid/v1";
import Phonebook from "./Phonebook/Phonebook";
import Contacts from "./Contacts/Contacts";
import Filter from "./Filter/Filter";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" }
    ],
    filter: ""
  };

  handleFilter = e => {
    this.setState({ filter: e.target.value });
    const { contacts, filter } = this.state;
    this.searchFunc(contacts, filter);
  };

  searchFunc = (contactsArray, filter) => {
    const filteredValue = contactsArray.filter(el => {
      return el.name.toLowerCase().includes(filter.toLowerCase());
    });

    return filteredValue;
  };

  deleteFunc = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => {
        return contact.id !== id;
      })
    }));
  };

  handleSubmit = value => {
    const { contacts } = this.state;
    const testForSameUserName = contacts.find(
      contact => contact.name === value.name
    );
    if (!testForSameUserName) {
      const contactFromInput = {
        id: keyGenerator(),
        name: value.name,
        number: value.number
      };
      const newContactsArray = [...contacts, contactFromInput];
      this.setState({ contacts: newContactsArray });
    } else alert(`${value.name} contact is allready exist`); // eslint-disable-line no-alert
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredValue = this.searchFunc(contacts, filter);
    return (
      <>
        <h1>Phonebook</h1>
        <Phonebook
          handleSubmit={this.handleSubmit}
          resetForm={this.resetForm}
        />
        <Filter handleFilter={this.handleFilter} />
        <Contacts
          deleteFunc={this.deleteFunc}
          contacts={filteredValue || contacts}
        />
      </>
    );
  }
}

export default App;
