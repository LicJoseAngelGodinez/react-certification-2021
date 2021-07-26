import React from 'react'
import NavbarStyles from './NavbarStyles'
import { AccountCircle, Menu, Search } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Switch from '@material-ui/core/Switch';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import MenuWrapper from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles({
    list: {
    width: 250,
    },
});

export default function Navbar() {

    const classes = useStyles();

    const [state, setState] = React.useState({
        checkedTheme: false,
        menuDrawer: false,
    });

    const [anchorEl, setAnchorEl] = React.useState(null);
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
        }
    
        setState({ ...state, menuDrawer: open });
    };

    const list = () => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
            <ListItem button key="menuDrawer">
                <ListItemText primary="Menu" />
            </ListItem>
            <Divider />
            </List>
        </div>
    );

    return (
        <NavbarStyles>
            
            <div className="navbar__wrapper">


                <div className="navbar__left">

                    <div className="navbar__menu">

                        <Menu
                            onClick={toggleDrawer(true)}
                            fontSize="small"
                        />
                        <Drawer open={state.menuDrawer} onClose={toggleDrawer(false)}>
                            {list()}
                        </Drawer>

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
                            onClick={handleClick}
                            fontSize="large"
                        />
                        <MenuWrapper
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Iniciar Sesión</MenuItem>
                        </MenuWrapper>

                    </div>

                </div>

            </div>

        </NavbarStyles>
    )
}
