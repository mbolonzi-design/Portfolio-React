import React from 'react';
import { Link } from 'react-router-dom';

function Contacts (props) {
  return (
    <div>
      <h1>Contacts</h1>
      <ul>
        {props.contacts.map((contact) => (
          <li key={contact.id}>
            <Link to={`/contacts/${contact.id}`}>{contact.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Contacts;