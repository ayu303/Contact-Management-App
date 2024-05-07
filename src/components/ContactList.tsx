import React from 'react';

// Define the props interface for ContactList component
interface ContactListProps {
  contacts: any[]; // Array of contacts
  onEditContact: (id: number) => void; // Function to handle edit contact action
  onDeleteContact: (id: number) => void; // Function to handle delete contact action
}

// ContactList component
const ContactList: React.FC<ContactListProps> = ({ contacts, onEditContact, onDeleteContact }) => {
  return (
    <div className="mt-4">
      {/* Title */}
      <h2 className="text-2xl font-semibold mb-4">Contact List</h2>

      {/* Display message if contact list is empty */}
      {contacts.length === 0 && (
        <div className="text-center text-gray-500 bg-gray-100 p-4 rounded-lg">
          No Contact Found. Please Add Contact From Create Contact Button.
        </div>
      )}

      {/* Display each contact in a separate box */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Map through each contact and display it */}
        {contacts.map((contact) => (
          <div key={contact.id} className="bg-white rounded-lg p-4 shadow-md">
            {/* Contact details */}
            <p className="mb-2"><strong className="text-gray-700">First Name:</strong> {contact.firstName}</p>
            <p className="mb-2"><strong className="text-gray-700">Last Name:</strong> {contact.lastName}</p>
            <p className="mb-2"><strong className="text-gray-700">Contact Number:</strong> {contact.number}</p>
            <p className="mb-2"><strong className="text-gray-700">Status:</strong> {contact.status}</p>
            {/* Edit and Delete buttons */}
            <div className="flex justify-center mt-4">
              {/* Edit button */}
              <button onClick={() => onEditContact(contact.id)} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-2 rounded mr-2 transition-colors duration-300 ease-in-out">Edit</button>
              {/* Delete button */}
              <button onClick={() => onDeleteContact(contact.id)} className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded transition-colors duration-300 ease-in-out">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactList;
