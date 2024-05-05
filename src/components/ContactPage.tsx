import React, { useEffect, useState } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import UpdateContactForm from './UpdateContactForm'; // Import the UpdateContactForm component

const ContactPage: React.FC = () => {
  const [contacts, setContacts] = useState<any[]>([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editContact, setEditContact] = useState<any>(null); // State variable to track the contact being edited

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  const handleCreateContactClick = () => {
    setIsFormVisible(true);
    setEditContact(null); // Reset the edit contact state when creating a new contact
  };

  const handleCreateContact = (newContact: any) => {
    const updatedContacts = [...contacts, newContact];
    setContacts(updatedContacts);
    setIsFormVisible(false);
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  const handleEditContact = (id: number) => {
    console.log(id)
    const contactToEdit = contacts.find(contact => contact.id === id);
    if (contactToEdit) {
      setIsFormVisible(true);
      setEditContact(contactToEdit);
    }
  };

  const handleDeleteContact = (id: number) => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  // Define a function to handle updating a contact
  const handleUpdateContact = (updatedContact: any) => {
    const updatedContacts = contacts.map(contact =>
      contact.id === updatedContact.id ? updatedContact : contact
    );
    setContacts(updatedContacts);
    setIsFormVisible(false);
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  return (
   
    <div className="container mx-auto  p-10 bg-slate-400">
      
      <button onClick={handleCreateContactClick} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">Create Contact</button>
      {/* Conditionally render the appropriate form component based on isFormVisible and editContact */}
      {isFormVisible && (editContact ? 
        <UpdateContactForm editContact={editContact} onUpdateContact={handleUpdateContact} /> : 
        <ContactForm onCreateContact={handleCreateContact} />)}
      <ContactList contacts={contacts} onEditContact={handleEditContact} onDeleteContact={handleDeleteContact} />
    
    </div>
  );
};

export default ContactPage;
