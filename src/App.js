import React from 'react';
import './App.css';
import PropTypes from "prop-types";
import ContactForm from './components/ContactFotm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';



class App extends React.Component {
  state = {
    contacts: [],
    filter: "",
  }

  componentDidMount(){

    const contacts = localStorage.getItem('contacts');

    const parsedContacts = JSON.parse(contacts);

    if(parsedContacts){

      this.setState({contacts: parsedContacts})

    }
    
  }

  componentDidUpdate(prevProps, prevState){

    if(this.state.contacts !== prevState.contacts){

      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }

  }

  formSubmitHandler = (data) => {

    const { contacts } = this.state;
    const findContact = contacts.find((contact) => {
      return contact.name === data.name;
    });

    !findContact
      ? this.setState((prevState) => ({
        contacts: [data, ...prevState.contacts],
      }))
      : alert(`${data.name} is already in contact`);

  }

  getList = () => {
    const { filter, contacts } = this.state;
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  deleteContact = (data) => {
    return this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== data.id),
    }));
  };

  filterList = (e) => {
    this.setState({
      filter: e.target.value,
    });
  };

  
  render() {

    const { filter } = this.state;
    const getContacts = this.getList();

    return (
      <div>
        <h1 className="title"> Phonebook</h1>

        <ContactForm
          onSubmit={this.formSubmitHandler}
        />

        <h2 className="title">Contacts</h2>

        <Filter filter={filter}
          filterList={this.filterList}
        />

        <ContactList
          getContacts={getContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    )
  }
}

export default App;

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};