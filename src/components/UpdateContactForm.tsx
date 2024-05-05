import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateContact } from '../redux/contactSlice';

// Component for updating a contact
const UpdateContactForm: React.FC<{ editContact: any; onUpdateContact: (contact: any) => void }> = ({ editContact, onUpdateContact }) => {
  const dispatch = useDispatch();

  // State variables for form inputs and error messages
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const[number,setNumber]=useState('');
  const [status, setStatus] = useState<'active' | 'inactive'>('active');
  const [errorMessage, setErrorMessage] = useState('');
  const [numbererror,setnumbererror]= useState('');

  // useEffect to populate form fields when editContact prop changes
  useEffect(() => {
    if (editContact) {
      setFirstName(editContact.firstName);
      setLastName(editContact.lastName);
      setNumber(editContact.number);
      setStatus(editContact.status);
    }
  }, [editContact]);

  // Function to handle form submission
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
    // Construct updated contact object
    const updatedContact = {
      id: editContact.id,
      firstName,
      lastName,
      number,
      status,
    };
    // Dispatch action to update contact in Redux store
    dispatch(updateContact({ id: editContact.id, contact: updatedContact }));
    // Call onUpdateContact callback to update parent component
    onUpdateContact(updatedContact);
  };
  
  return (
    // Form for updating contact details
    <form onSubmit={handleFormSubmit} className="mt-4">
      {/* Form title */}
      <h2 className="text-2xl font-semibold mb-4">Edit Contact Form</h2>

      {/* First Name input */}
      <div className="mb-4">
        <label htmlFor="firstName" className="block text-sm font-semibold mb-1">First Name</label>
        <input type="text" id="firstName" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="border border-gray-300 rounded-md p-2 w-full" />
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
         Save changes
      </button>
    </form>
  );
};

export default UpdateContactForm;
