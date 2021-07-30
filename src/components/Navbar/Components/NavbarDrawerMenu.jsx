import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import { Menu } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  list: {
      width: 250,
  },
});

const NavbarDrawerMenu = () => {

  const classes = useStyles();

  const [state, setState] = React.useState({
    menuDrawer: false,
  });

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
    <>
      <Menu
          onClick={toggleDrawer(true)}
          fontSize="small"
      />
      <Drawer open={state.menuDrawer} onClose={toggleDrawer(false)}>
          {list()}
      </Drawer>
    </>
  )
}

export default NavbarDrawerMenu;
