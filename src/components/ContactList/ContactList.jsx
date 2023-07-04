import React from 'react';
import { ContactsList, ContactItem, DeleteButton } from './ContactList.styled';
import PropTypes from 'prop-types';

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

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
