import React from 'react';
import PropTypes from 'prop-types';

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

ContactsFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
}

export default ContactsFilter;
