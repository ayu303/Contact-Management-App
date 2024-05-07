import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contactSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/rootReducer';

// ContactForm component for creating a new contact
const ContactForm: React.FC<{ onCreateContact: (contact: any) => void }> = ({ onCreateContact }) => {
  const dispatch = useDispatch();
  const contacts = useSelector((state: RootState) => state.contacts); // Access contacts from Redux state
  // State variables for form inputs and error messages
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const[number,setNumber]=useState('');
  const [status, setStatus] = useState<'active' | 'inactive'>('active');
  const [errorMessage, setErrorMessage] = useState('');
  const[numbererror,setnumbererror]=useState('');
  
 

  // Function to handle form submission
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //validation for number exist or not
    const numberExists = contacts.some(contact => contact.number === number);
    if (numberExists) {
      setErrorMessage('Contact number already exists');
      return;
    }
    // Validation for contact number length
    if (number.length !== 10) {
      setErrorMessage('Contact number must be of 10 digits');
      return;
    }
    // Validation for first name length
    if (firstName.length < 2 ) {
      setnumbererror(' Name must be of  2 or more characters');
      return;
    }
    // Construct new contact object
    const newContact = {
      id: Date.now(),
      firstName,
      lastName,
      number,
      status,
    };
    // Dispatch action to add contact to Redux store
    dispatch(addContact(newContact));
    // Call onCreateContact callback to update parent component
    onCreateContact(newContact);
    // Clear form fields after submission
    setFirstName('');
    setLastName('');
    setNumber('');
    setStatus('active');
  };
  
  return (
    // Form for creating a new contact
    <form onSubmit={handleFormSubmit} className="mt-4">
      {/* Form title */}
      <h2 className="text-2xl font-semibold mb-4">Create Contact Form</h2>

      {/* First Name input */}
      <div className="mb-4">
        <label htmlFor="firstName" className="block text-sm font-semibold mb-1">First Name</label>
        <input type="text" id="firstName" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="border border-gray-300 rounded-md p-2 w-full" />
        {/* Display error message for first name */}
        {numbererror && <p className="text-red-500 text-sm">{numbererror}</p>}
      </div>

      {/* Last Name input */}
      <div className="mb-4">
        <label htmlFor="lastName" className="block text-sm font-semibold mb-1">Last Name</label>
        <input type="text" id="lastName" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} className="border border-gray-300 rounded-md p-2 w-full" />
      </div>

      {/* Contact Number input */}
      <div className="mb-4">
        <label htmlFor="number" className="block text-sm font-semibold mb-1">Contact Number</label>
        <input type="number" id="number" name="number" value={number} onChange={(e) => setNumber(e.target.value)} className="border border-gray-300 rounded-md p-2 w-full" />
        {/* Display error message for contact number */}
        {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
      </div>

      {/* Status selection */}
      <div className="mb-4">
        <label htmlFor="status" className="block text-sm font-semibold mb-1">Status</label>
        <select id="status" name="status" value={status} onChange={(e) => setStatus(e.target.value as 'active' | 'inactive')} className="border border-gray-300 rounded-md p-2 w-full">
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      {/* Submit button */}
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
      >
         Save
      </button>
    </form>
  );
};

export default ContactForm;
