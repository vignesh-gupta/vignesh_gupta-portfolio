import React from 'react';

import './App.scss'

import { About , Footer , Header , Skills , Work , Testimonial } from './container';
import { Navbar } from './components';


function App() {
  return (
    <div className="app">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Navbar />
      <Header />
      <About />
      <Work /> 
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
