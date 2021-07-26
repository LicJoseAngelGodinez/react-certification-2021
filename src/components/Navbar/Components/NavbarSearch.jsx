import React from 'react'
import { Search } from '@material-ui/icons'

const NavbarSearch = () => {
  return (
    <>
      <Search
          fontSize="small"
      />
      <input
          disabled
          type="text"
          placeholder="Search..."
      />
    </>
  )
}

export default NavbarSearch;
