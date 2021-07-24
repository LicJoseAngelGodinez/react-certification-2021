import React from 'react'
import NavbarStyles from './NavbarStyles'
import { AccountCircle, Menu, Search } from '@material-ui/icons'
import Switch from '@material-ui/core/Switch';


export default function Navbar() {

    const [state, setState] = React.useState({
        checkedTheme: false,
      });
    
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };

    return (
        <NavbarStyles>
            
            <div className="navbar__wrapper">


                <div className="navbar__left">

                    <div className="navbar__menu">

                        <Menu
                            fontSize="small"
                        />

                    </div>

                    <div className="navbar__search">

                        <Search
                            fontSize="small"
                        />

                        <input
                            disabled
                            type="text"
                            placeholder="Search..."
                        />

                    </div>

                </div>


                <div className="navbar__right">

                    <div className="navbar__theme">

                        <Switch
                            disabled
                            checked={state.checkedTheme}
                            onChange={handleChange}
                            color="default"
                            name="checkedTheme"
                            inputProps={{ 'aria-label': 'Dark mode' }}
                        />

                        <label htmlFor="checkedTheme">Dark mode</label>

                    </div>

                    <div className="navbar__account">

                        <AccountCircle
                            fontSize="large"
                        />

                    </div>

                </div>

            </div>

        </NavbarStyles>
    )
}
