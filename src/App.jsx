import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import './App.css';
import { useState, useEffect } from 'react';
import contacts from './data/contacts.json';

function App() {
  const [contactsData, setContactsData] = useState(() => {
    const savedObject = window.localStorage.getItem('saved-contacts-data');

    if (savedObject !== null) {
      return JSON.parse(savedObject);
    }

    return contacts;
  });

  useEffect(() => {
    window.localStorage.setItem(
      'saved-contacts-data',
      JSON.stringify(contactsData)
    );
  }, [contactsData]);

  const [searchValue, setSearchValue] = useState('');
  const getContactsData = contactsData.filter(({ name }) =>
    name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const onAddContact = data => {
    setContactsData(prev => [...prev, data]);
  };
  const onChangeSearchValue = evt => {
    setSearchValue(evt.target.value);
  };
  const onDeleteContact = id => {
    setContactsData(prev => prev.filter(el => id !== el.id));
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm handleAdd={onAddContact} />
      <SearchBox value={searchValue} handleChange={onChangeSearchValue} />
      <ContactList
        contactsData={getContactsData}
        handleDelete={onDeleteContact}
      />
    </>
  );
}

export default App;
