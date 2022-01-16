import './top-bar.css';
import logo from '../icons/duke.png';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes
} from "react-router-dom";
import TeamMembers from './TeamMembers';

export default function TopBar() {
    return (
        <Router>
            <Switch>
                <Route path="/about" component={About} />
                <Route path="/team" component={TeamMembers} />
                <Route path="/contact" component={Contact} />
                <Route path="/" exact render={() => (
                    <div className="top-bar">

                        <div className="bar-icon">
                            <a href="https://turkeyjava.com">
                                <img src={logo} alt="Turkey Java Community" className="img-responsive" />
                            </a>
                        </div>

                        <ul className="menu">
                            <li className="menu-item">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="menu-item">
                                <Link to="/about">About Us</Link>
                            </li>
                            <li className="menu-item">
                                <Link to="/team">Our Team</Link>
                            </li>
                            <li className="menu-item">
                                <Link to="/contact">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                )}>
                </Route>
            </Switch>
        </Router>
    );
}

function About() {
    return <h2>About</h2>;
}

function Contact() {
    return <h2>Contact</h2>;
}