import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header1 from './Header1';
import Content1 from './Content1';
import Footer1 from './Footer1';

class App extends Component {
  render() {
    return (
      <div className="bg-color">
        <Header1/>
        <Content1/>
        <Footer1/>
      </div>
    );
  }
}

export default App;
