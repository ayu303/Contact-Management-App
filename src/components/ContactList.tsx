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

      {/* Table for displaying contacts */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-gray-200">
              {/* Table headers */}
              <th className="px-4 py-2">First Name</th>
              <th className="px-4 py-2">Last Name</th>
              <th className="px-4 py-2">Contact Number</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Map through each contact and display its details */}
            {contacts.map((contact) => (
              <tr key={contact.id} className="border-t">
                {/* Display contact details */}
                <td className="px-4 py-2 text-center">{contact.firstName}</td>
                <td className="px-4 py-2 text-center">{contact.lastName}</td>
                <td className="px-4 py-2 text-center">{contact.number}</td>
                <td className="px-4 py-2 text-center">{contact.status}</td>
                {/* Actions for the contact (Edit and Delete) */}
                <td className="px-4 py-2 flex justify-center">
                  {/* Edit button */}
                  <button onClick={() => onEditContact(contact.id)} className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-1 px-2 rounded mr-2">Edit</button>
                  {/* Delete button */}
                  <button onClick={() => onDeleteContact(contact.id)} className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactList;
