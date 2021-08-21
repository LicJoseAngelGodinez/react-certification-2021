
import React, { useContext } from 'react'
import { Search } from '@material-ui/icons'
import { DataContext } from '../../../Context/AppContext'
import { useHistory } from 'react-router-dom'

const NavbarSearch = () => {

  const { searchTerm, setSearchTerm } = useContext(DataContext);

  const history = useHistory();

  const handleSearchInput = ( event ) => {
    if ( event.key === 'Enter' ) {
      event.preventDefault();
      let { value } = event.target;
      setSearchTerm(value);
      history.push('/');
    }
  }

  return (
    <>
      <Search
          fontSize="small"
      />
      <input
          type="text"
          placeholder="Search..."
          defaultValue={searchTerm}
          onKeyPress={handleSearchInput}
      />
    </>
  )
}

export default NavbarSearch;
