import React from 'react'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { AccountCircle } from '@material-ui/icons'

const NavbarSessionButton = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
      setAnchorEl(null);
  };

  return (
    <>
     <AccountCircle
          onClick={handleClick}
          fontSize="large"
      />
      <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
      >
          <MenuItem onClick={handleClose}>Iniciar Sesión</MenuItem>
      </Menu> 
    </>
  )
}

export default NavbarSessionButton;
