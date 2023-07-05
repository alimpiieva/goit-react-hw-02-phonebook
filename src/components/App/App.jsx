import React, { Component } from 'react';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactsFilter from 'components/ContactsFilter/ContactsFilter';
import { nanoid } from 'nanoid';
import { Container } from './App.styled';


class App extends Component {
  state = {
        contacts: [
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
          { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
          { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
          { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: '',
      };
  
   componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }

  componentDidUpdate(_,prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }
  
  addContact = (name, number) => {
    const { contacts } = this.state;

 
    const existingContact = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());

    if (existingContact) {
      alert(`${existingContact.name} is already in contacts`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <Container>
        <ContactForm addContact={this.addContact} />

        <h2>Contacts:</h2>
        <ContactsFilter filter={filter} onFilterChange={this.handleFilterChange} />
        <ContactList contacts={filteredContacts} onDeleteContact={this.deleteContact} />
      </Container>
    );
  }
}


export default App;


