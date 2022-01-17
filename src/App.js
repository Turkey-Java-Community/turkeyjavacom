import React from 'react';
import './App.css';
import TopBar from "./components/top-bar";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  
  render() {
    return (
      <div>
        <TopBar />
      </div>

    );
  }
}

export default App;
