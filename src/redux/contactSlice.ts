// contactSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the contact type
interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  number:string;
  status: 'active' | 'inactive';
}

// Define the initial state
const initialState: Contact[] = [];

// Create a slice
const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.push(action.payload);
    },
    updateContact: (state, action: PayloadAction<{ id: number; contact: Contact }>) => {
      const { id, contact } = action.payload;
      const existingContactIndex = state.findIndex(c => c.id === id);
      if (existingContactIndex !== -1) {
        state[existingContactIndex] = contact;
     
  
      }
    },
    
    deleteContact: (state, action: PayloadAction<number>) => {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

// Export the action creators
export const { addContact, updateContact, deleteContact } = contactSlice.actions;

// Export the reducer
export default contactSlice.reducer;
