import React, { useContext } from 'react';

import './Layout.styles.css';
import { DataContext } from '../../Context/AppContext';

function Layout({ children }) {

  const { selectedTheme } = useContext(DataContext);

  return <main className={`container ${selectedTheme}`}>{children}</main>;
}

export default Layout;
