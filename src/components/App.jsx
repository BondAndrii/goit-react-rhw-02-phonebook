import React from "react";

import { Component } from "react";

import { ContactForm } from "./ContactForm/ContactForm";

import { ContactList } from "./ContactList/ContactList";

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    
  }
  render() {
   
    return (
    <div>
        <ContactForm />
        <ContactList/>
    </div>
  );
  }
  
};
