import React, { useContext } from 'react'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import { Menu } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router'
import { DataContext } from '../../../Context/AppContext'

const useStyles = makeStyles({
  list: {
      width: 250,
  },
  paperDark: {
    background: '#565656',
    color: 'white'
  },
  paperLight: {
    background: 'white',
    color: 'black'
  }
});

const NavbarDrawerMenu = () => {

  const classes = useStyles();
  const history = useHistory();
  const { selectedTheme } = useContext(DataContext);

  const [state, setState] = React.useState({
    menuDrawer: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
    }

    setState({ ...state, menuDrawer: open });
  };

  const goHome = () => {
    history.push('/');
  }

  const list = () => (
      <div
          className={classes.list}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
      >
          <List>
              <ListItem button key="menuDrawer">
                  <ListItemText primary="Home" onClick={goHome}/>
              </ListItem>
              <Divider />
          </List>
      </div>
  );


  return (
    <>
      <Menu
          onClick={toggleDrawer(true)}
          fontSize="small"
      />
      <Drawer
          open={state.menuDrawer}
          onClose={toggleDrawer(false)}
          classes={{paper: selectedTheme === 'dark' ? classes.paperDark :  classes.paperLight}}
          >
          {list()}
      </Drawer>
    </>
  )
}

export default NavbarDrawerMenu;
