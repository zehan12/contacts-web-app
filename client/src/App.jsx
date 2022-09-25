import React, { Component, Fragment } from 'react';
import './App.scss';
import Header from './components/Header';
import Home from './components/Home';
import ContactList from './components/ContactList';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import ContactDetail from './components/ContactDetail';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SendMessage from './components/SendMessage';


function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <Switch>

          <Route path="/contacts/:id" children={<ContactDetail />} />

          <Route path="/contact">
            <ContactList />
          </Route>

          <Route path="/create" >
            <ContactForm />
          </Route>

          <Route exact path="/sendmessage/:id" >
            <SendMessage />
          </Route>

          <Route path="/message/history">
            <MessageHistory />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>


        </Switch>
        <Footer />
      </Router>
    </Fragment>
  )
}

export default App;
