import React from 'react';
import { AppBar, IconButton, Toolbar, InputBase } from '@material-ui/core';
import { Menu, Search, AccountCircle } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import './Navbar.styles.css';

const useStyles = makeStyles(() => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#910089',
  },
  menuleft: {
    display: 'flex',
    alignItems: 'center'
  },
  menuright: {
    display: 'flex',
    alignItems: 'center'
  },
  searchInput: {
    marginLeft: '.5rem',
    display: 'flex',
    borderRadius: 4,
    backgroundColor: '#690064',
    alignItems: 'center',
    '&:hover': {
      backgroundColor: '#9b3396'
    },
    '& input': {
      color: 'white'
    },
  },
  searchIcon: {
    padding: '0 .5rem',
    display: 'flex',
    alignItems: 'center'
  }
}));


function Navbar() {

  const classes = useStyles();

  return (
    <AppBar position="fixed">

        <Toolbar className={classes.toolbar}>

          <div className={classes.menuleft}>

            <IconButton edge="start" color="inherit" aria-label="menu">
                <Menu fontSize="small"/>
            </IconButton>

            <div className={classes.searchInput}>

              <div className={classes.searchIcon}>
                <Search />
              </div>

              <InputBase
                disabled
                placeholder="Buscar…"
                inputProps={{ 'aria-label': 'buscar' }}
              />

            </div>
          </div>

          <div className={classes.menuright}>

            <FormGroup row>

              <FormControlLabel
                control={
                  <Switch 
                  disabled
                  name="darkModeControl" 
                  color="default"
                />}
                label="Dark Mode"
              />

            </FormGroup>

            <IconButton edge="end" color="inherit" aria-label="menu">
              <AccountCircle fontSize="large" />
            </IconButton>

          </div>

        </Toolbar>

    </AppBar>
  );
}

export default Navbar;