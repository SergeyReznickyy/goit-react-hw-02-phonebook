import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from 'components/App.module.css';
import { ContactForm } from 'components/ContactForm/contactForm';
import { Filter } from 'components/Filter/filter';
import { ContactList } from 'components/Contact/contact';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandle = data => {
    console.log(data);
    const { contacts } = this.state;
    if (contacts.some(contact => contact.name === data.name)) {
      alert(`${data.name} is already in contacts.`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...data, id: nanoid(5) }],
    }));
  };

  handleChangeFilter = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
    console.log('Filter Value:', value);
  };

  onFiltredСontacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  onDeleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  render() {
    return (
      <div className={css.app}>
        <div className={css.app_container}>
          <h1 className={css.title}>Phonebook</h1>
          <ContactForm onSubmit={this.formSubmitHandle} />
          <h2 className={css.title}>Contacts</h2>
          <Filter
            value={this.state.filter}
            handleChange={this.handleChangeFilter}
          />
          <ContactList
            filtredСontacts={this.onFiltredСontacts()}
            onDeleteContact={this.onDeleteContact}
          />
        </div>
      </div>
    );
  }
}
