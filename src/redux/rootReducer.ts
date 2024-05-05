// Import combineReducers function from Redux Toolkit
import { combineReducers } from '@reduxjs/toolkit';

// Import contactReducer from contactSlice file
import contactReducer from './contactSlice';

// Combine reducers using combineReducers
const rootReducer = combineReducers({
  // Define a key 'contacts' for the contactReducer
  contacts: contactReducer,
});

// Define RootState type by using ReturnType<typeof rootReducer>
export type RootState = ReturnType<typeof rootReducer>;

// Export the rootReducer
export default rootReducer;
