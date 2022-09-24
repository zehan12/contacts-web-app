import React, { Component, Fragment } from 'react';
import './App.scss';
import Header from './components/Header';
import Home from './components/Home';
import ContactList from './components/ContactList';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


function App() {
  return (
    <Fragment>
        <Header />
        <Switch>
          <Route path="/contact">
            <ContactList />
          </Route>
          <Route exact path="/">
          {/* <ContactList /> */}
            <Home />
          </Route>
        </Switch>
        <Footer />
    </Fragment>
  )
}

export default App;
