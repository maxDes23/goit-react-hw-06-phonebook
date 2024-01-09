import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(0, 0, 0);
  border-radius: 5px;
  padding: 20px;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }

  input {
    padding: 10px;
    margin-top: 5px;
  }

  button {
    padding: 8px;
    margin-top: 10px;
    cursor: pointer;
  }
`;

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = evt => {
    setName(evt.target.value);
  };

  const handleNumberChange = evt => {
    setNumber(evt.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(name, number);
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          value={name}
          onChange={handleNameChange}
          required
          placeholder="Name"
        />
      </label>
      <label>
        Number:
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          placeholder="0123456789"
          value={number}
          onChange={handleNumberChange}
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </Form>
  );
};

export default ContactForm;
