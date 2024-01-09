import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from 'components/contacts.Slice.jsx';
import App from 'components/App';
import './index.css';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const persistedState = loadState();

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  localStorage.setItem('state', JSON.stringify(store.getState()));
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
