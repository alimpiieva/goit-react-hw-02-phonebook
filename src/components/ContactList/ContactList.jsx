import React from 'react';
import { ContactsList, ContactItem, DeleteButton } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ContactsList>
    {contacts.map(contact => (
      <ContactItem key={contact.id}>
        <span>{contact.name}: {contact.number}</span>
        <DeleteButton onClick={() => onDeleteContact(contact.id)}>Delete</DeleteButton>
      </ContactItem>
    ))}
  </ContactsList>
);

export default ContactList;
