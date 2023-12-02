import { Component } from 'react';
import { AppLayout } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = newContact => {
    const hasNewContactInContacts = this.state.contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    hasNewContactInContacts
      ? alert(`${newContact.name} is already in contacts`)
      : this.setState(prevState => {
          return {
            contacts: [...prevState.contacts, newContact],
          };
        });
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(item => item.id !== contactId),
      };
    });
  };

  updateFilter = filterString => {
    this.setState(() => {
      return {
        filter: filterString,
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <AppLayout>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addContact} />

        {contacts.length > 0 && (
          <ContactList
            contacts={contacts}
            filter={filter}
            onUpdateFilter={this.updateFilter}
            onDelete={this.deleteContact}
          ></ContactList>
        )}
      </AppLayout>
    );
  }
}
