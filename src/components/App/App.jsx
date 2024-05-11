import ContactForm from "../ContactForm/ContactForm.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import ContactList from "../ContactList/ContactList.jsx";
import dataContacts from "../data/dataContacts.json";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [contact, setContact] = useState(dataContacts);
  const [filter, setFilter] = useState("");
  const addContact = ({ contName, contNumber }) => {
    const newContact = { id: uuidv4(), name: contName, number: contNumber };
    setContact((contact) => [...contact, newContact]);
  };

  const deleteContact = (contactId) => {
    setContact((delCont) => {
      return delCont.filter((cont) => cont.id !== contactId);
    });
  };

  const visibleContact = contact.filter(
    (cont) =>
      cont.name.toLowerCase().includes(filter.toLowerCase()) ||
      cont.number.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList
        dataContacts={visibleContact}
        deleteContact={deleteContact}
      />
    </div>
  );
}
