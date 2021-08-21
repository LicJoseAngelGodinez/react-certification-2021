import React, { useLayoutEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import AuthProvider from '../../providers/Auth'
import HomePage from '../../pages/Home'
import VideoDetail from '../../pages/VideoDetail/VideoDetail'
import LoginPage from '../../pages/Login'
import NotFound from '../../pages/NotFound'
import SecretPage from '../../pages/Secret'
import Navbar from '../Navbar/Navbar'
import Private from '../Private'
import Layout from '../Layout'
import { random } from '../../utils/fns'
import { DataProvider } from '../../Context/AppContext'

function App() {

  useLayoutEffect(() => {
    const { body } = document;


    function rotateBackground() {
      const xPercent = random(100);
      const yPercent = random(100);
      body.style.setProperty('--bg-position', `${xPercent}% ${yPercent}%`);
    }

    const intervalId = setInterval(rotateBackground, 3000);
    body.addEventListener('click', rotateBackground);

    return () => {
      clearInterval(intervalId);
      body.removeEventListener('click', rotateBackground);
    };
  }, []);

  return (
    <BrowserRouter>
      <DataProvider>
        <AuthProvider>
          <Navbar/>
          <Layout>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path='/:id' render={(props) => {
                return ( <VideoDetail {...props } /> )
              }}/>
              <Route exact path="/login">
                <LoginPage />
              </Route>
              <Private exact path="/secret">
                <SecretPage />
              </Private>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Layout>
        </AuthProvider>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
