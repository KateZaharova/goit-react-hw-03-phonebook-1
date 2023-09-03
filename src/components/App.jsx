import { Layout } from "./Layout";
import { GlobalStyle } from "./GlobalStyle";
import { Component } from "react";
import { ContactForm } from "./Form/Form";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { nanoid } from 'nanoid';


export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', contact:{ name: 'Rosie Simpson', phone: '459-12-56' } },
      { id: 'id-2', contact:{ name: 'Hermione Kline', phone: '443-89-12' } },
      { id: 'id-3', contact:{ name: 'Eden Clements', phone: '645-17-79' } },
      { id: 'id-4', contact:{ name: 'Annie Copeland', phone: '227-91-26' } },
  ],
  filter: '',
  };


componentDidMount() {
    const savedFilter = localStorage.getItem("contact-filter");
      if (savedFilter !== null) {
      this.setState({
        filter: JSON.parse(savedFilter)
      });
    }
}

  componentDidUpdate(prevProps, prevState) {
    if (prevState.filter !== this.state.filter) {
      localStorage.setItem("contact-filter", JSON.stringify(this.state.filter))
}    
}


  addContact = contact => {
    console.log(contact)
    if (-1 !== this.state.contacts.findIndex(option => option.contact.name === contact.name)) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), contact: contact }],
    }))
  };
 
  
  deleteContact = contactId => {
    console.log(contactId);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== contactId),
    }));
  };


  findName = filterName => {
    this.setState(() => ({
      filter: filterName
    })
    ); 
  };

  getFilteredContacts= () => {
    const { contacts, filter } = this.state;

    return contacts.filter(item => {
      return item.contact.name
        .toLowerCase()
        .includes(filter.toLowerCase());
    });
  };

 resetFilter = () => {
    this.setState({
      filter: '',
    })
  }


  render() {
    const filteredContacts = this.getFilteredContacts();

return (
    <Layout
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}>
    <h1>Phonebook</h1>
    <ContactForm onAddContact={this.addContact} />
    <h2>Contacts</h2>
    <Filter onChangeFilter={this.findName} onReset={this.resetFilter}/>
    <ContactList contacts={filteredContacts} onDelete={this.deleteContact} contactData={this.contacts} />
    <GlobalStyle/>
    </Layout>
  );
  };
};
