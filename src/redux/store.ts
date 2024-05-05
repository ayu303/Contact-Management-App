// Import configureStore function from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';

// Import contactReducer from contactSlice file
import contactReducer from './contactSlice';

// Configure Redux store using configureStore
const store = configureStore({
  reducer: {
    // Define a key 'contacts' for the contactReducer
    contacts: contactReducer,
    // Add more reducers if necessary
  },
});

// Export the configured store
export default store;

// Export an empty object to prevent TypeScript errors related to ES6 imports
export {};
