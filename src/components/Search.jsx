import React from 'react'

const Search = ({ onChange, placeholder = 'Type to filter...' }) => (
  <div className="mr1">
    <input className='FormField' type="search" onChange={onChange} placeholder={placeholder}/>
  </div>
);

Search.displayName = 'Search'

Search.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  placeholder: React.PropTypes.string
}

export default Search;
