import React, { useContext } from 'react'
import Switch from '@material-ui/core/Switch'
import { DataContext } from '../../../Context/AppContext';

const NavbarThemeSwitch = () => {

  const [state, setState] = React.useState({
    checkedTheme: false,
  });

  const { setSelectedTheme } = useContext(DataContext);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    const theme = event.target.checked ? 'dark' : 'light';
    setSelectedTheme(theme);
  };
  return (
    <>
      <Switch
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
