import ContactForm from "../ContactForm/ContactForm.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import ContactList from "../ContactList/ContactList.jsx";
import dataContacts from "../data/dataContacts.json"
import { useState } from "react";


export default function App() {

const [filter, setFilter] = useState('');


  return (
    <div>
      <h1>Phonebook</h1>
      <p>{filter}</p>
      <ContactForm />
      <SearchBox value={filter} onFilter={setFilter}/>
      <ContactList dataContacts={dataContacts}/>
    </div>
  );
}
