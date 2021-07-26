import React from 'react'
import NavbarStyles from './NavbarStyles'
import NavbarDrawerMenu from './Components/NavbarDrawerMenu'
import NavbarSearch from './Components/NavbarSearch'
import NavbarThemeSwitch from './Components/NavbarThemeSwitch'
import NavbarSessionButton from './Components/NavbarSessionButton'

export default function Navbar() {    

    return (
        <NavbarStyles>
            <div className="navbar__wrapper">
                <div className="navbar__left">
                    <div className="navbar__menu">
                        <NavbarDrawerMenu />
                    </div>
                    <div className="navbar__search">
                        <NavbarSearch />
                    </div>
                </div>
                <div className="navbar__right">
                    <div className="navbar__theme">
                        <NavbarThemeSwitch />
                    </div>
                    <div className="navbar__account">
                        <NavbarSessionButton/>
                    </div>
                </div>
            </div>
        </NavbarStyles>
    )
}
