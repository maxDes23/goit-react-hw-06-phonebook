import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding: 10px 0;
    border-bottom: 1px solid #ccc;


    button {
      padding: 5px;
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;

const ContactList = ({ contacts, onDeleteContact }) => (
  <List>
    {contacts.map(contact => (
      <li key={contact.id}>
        {contact.name}: {contact.number}
        <button type="button" onClick={() => onDeleteContact(contact.id)}>
          Delete
        </button>
      </li>
    ))}
  </List>
);

export default ContactList;
