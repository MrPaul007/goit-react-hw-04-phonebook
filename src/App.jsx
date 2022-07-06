import { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid'
import initialContacts from "./data/initialContacts.json";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";

function App() {
  const [contacts, setContacts] = useState(initialContacts)
  const [filter, setFilter] = useState("")

  const firstRender = useRef(true);
  
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("contacts"));
    if (items?.length) {
      setContacts(items);
    }
  }, []);

  useEffect(() => {
    if(!firstRender.current) {
        localStorage.setItem("contacts", JSON.stringify(contacts));
    }
    else {
        firstRender.current = false;
    }
}, [contacts]);

  const addContact = ( {name, number} ) => {    
    const isMached = contacts.find(item => item.name.toLowerCase() === name.toLowerCase());
    const newContact = {
      id: nanoid(),
      name,
      number
    };

    isMached ? alert(`${name} is already in contacts`) : 
      setContacts(prevContacts => [...prevContacts, newContact])
  }

  const deleteContact = (contactId) => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== contactId));
  };
    
  const changeFilter = (e) => {
    setFilter(e.target.value);
    console.log(filter)
  };
    
  const getVisibleContacts = () => {
    if (!filter) {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact}/>
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter}/>
      <ContactList contacts={getVisibleContacts()} onDelete={deleteContact} />
    </div>
  );
}

export default App;