import React from 'react';

const ContactsFilter = ({ filter, onFilterChange }) => {
  return (
    <input
      type="text"
      name="filter"
      value={filter}
      onChange={onFilterChange}
      placeholder="Search contacts..."
    />
  );
};

export default ContactsFilter;
