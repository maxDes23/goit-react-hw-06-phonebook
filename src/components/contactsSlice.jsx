
import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContact: (state, action) => {
      const { id, name, number } = action.payload;
      const isDuplicate = state.contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );
      if (isDuplicate) {
        alert(`${name} is already in contacts.`);
      } else {
        state.contacts.push({ id, name, number });
      }
    },
    deleteContact: (state, action) => {
      const contactId = action.payload;
      state.contacts = state.contacts.filter(
        contact => contact.id !== contactId
      );
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    loadContacts: (state, action) => {
      state.contacts = action.payload;
    },
  },
});

export const { addContact, deleteContact, setFilter, loadContacts } =
  contactsSlice.actions;
export default contactsSlice.reducer;
