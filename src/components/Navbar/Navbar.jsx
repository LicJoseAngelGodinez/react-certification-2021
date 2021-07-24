import React from 'react'
import NavbarStyles from './NavbarStyles'
import { AccountCircle, Menu, Search } from '@material-ui/icons'


export default function Navbar() {
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
                            type="text"
                            placeholder="Search..."
                        />

                    </div>

                </div>


                <div className="navbar__right">

                    <div className="navbar__theme">

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
