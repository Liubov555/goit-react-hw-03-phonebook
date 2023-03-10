
import React, { Component } from "react";
import { Section } from "./App.styles";
import { nanoid } from "nanoid";

import { ContactForm } from '../ContactForm/ContactForm';
import ContactList from "../ContactList/ContactList";
import { Filter } from "../Filter/Filter";

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
  }

  formSubmit = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const findContact = this.state.contacts.find(contact =>
      contact.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()));

    findContact
      ? alert(`${name} is already in contacts`)
      : this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts]
      }));

  };

  findFilterInput = evt => {
    this.setState({ filter: evt.target.value })
  };

  findContact = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => (contact.id !== id))
    }))
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) this.setState({ contacts: parsedContacts });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contact)
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));

  };

  render() {

    return (
      <Section>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmit} />

        <h2>Contacts</h2>
        <Filter
          filter={this.state.filter}
          findFilterInput={this.findFilterInput}
        />
        <ContactList
          contacts={this.findContact()}
          deleteContact={this.deleteContact} />
      </Section >
    );
  };
}
