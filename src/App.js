import React from 'react';
import './App.css';
import TopBar from "./components/top-bar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';

class App extends React.Component {
  
  render() {
    return (
      <div className="App" id="main-wrapper" >
      <TopBar />
      <Footer />
      </div>  
    );
  }
}

export default App;
