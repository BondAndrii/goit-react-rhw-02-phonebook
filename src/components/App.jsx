import React from "react";

import { nanoid } from "nanoid";

import { Component } from "react";

import { ContactForm } from "./ContactForm/ContactForm";

import { ContactList } from "./ContactList/ContactList";

import { Filter } from "components/Filter/Filter";

export class App extends Component {
  
  state = {
   contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter:'',
    
  }
  addNewContact = ({name, number}) => {
    
    const contact = {
      id: nanoid(),
      name,
      number,
    }
    this.setState(prevState => ({ contacts: [ ...prevState.contacts, contact,] }))
    console.log(this.state);    
  }
  handleFilter = (event) => {    
    const { value } = event.currentTarget;
    this.setState({ filter: value });    
  }
  makeFilterList = () => {
    const { filter, contacts } = this.state;
    const normalFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalFilter));    
  }
  render() {
    const { filter} = this.state;    
    const forPrint = this.makeFilterList();    
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addNewContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.handleFilter} />
        <ContactList contacts={forPrint} filter={filter } onChange={this.handleFilter} />
    </div>
  );
  }
  
};
