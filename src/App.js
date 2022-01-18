import React from 'react';
import './App.css';
import NavBar from "./components/nav-bar";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <NavBar/>
            </div>
        );
    }
}

export default App;
