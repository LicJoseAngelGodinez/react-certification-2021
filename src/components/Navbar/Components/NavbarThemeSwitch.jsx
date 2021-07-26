import React from 'react'
import Switch from '@material-ui/core/Switch'

const NavbarThemeSwitch = () => {

  const [state, setState] = React.useState({
    checkedTheme: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <>
      <Switch
          disabled
          checked={state.checkedTheme}
          onChange={handleChange}
          color="default"
          name="checkedTheme"
          inputProps={{ 'aria-label': 'Dark mode' }}
      />
      <label htmlFor="checkedTheme">Dark mode</label>
    </>
  )
}

export default NavbarThemeSwitch;
