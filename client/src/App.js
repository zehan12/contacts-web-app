import React, { Component, Fragment } from 'react';
import './App.scss';
import Header from './components/Header';
import Hero from './components/Hero';
import ContactList from './components/ContactList';
import Footer from './components/Footer';

// class App extends Component {
//   render() {
//     return (
//       <div>

//       </div>
//     );
//   }
// }
function App() {
  return (
    <Fragment>
      <ContactList />
      <Header />
      <Hero />
      <Footer />

    </Fragment>
  )
}

export default App;
