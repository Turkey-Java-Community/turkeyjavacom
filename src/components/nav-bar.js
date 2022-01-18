import './top-bar.css';
import logo from '../icons/duke.png';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import TeamMember from './team-member';


class NavBar extends React.Component {
    state = {
        members: [
            {
                "id": 1,
                "name": "Evren Tan",
                "role": "CO-FOUNDER",
                "title": "A Software Craftsman",
                "overview": "A Java Geek",
                "imageURL": "https://turkeyjava.com/wp-content/uploads/2021/12/bnprIVIS_400x400.jpg",
                "twitterURL" : "https://twitter.com/evrn_tan",
                "linkedinURL" : "https://www.linkedin.com/in/evren-tan/",
                "gitHubURL" : "https://github.com/evrentan",
                "personalBlogURL" : "https://evrentan.com/",
                "mediumURL" : "https://evrentan.com/",
                "instagramURL" : ""
            },

            {
                "id": 2,
                "name": "Furkan Şahin KULAKSIZ",
                "role": "CO-FOUNDER",
                "title": "A Java and Javascript Lover",
                "overview": "A developer who loves to design",
                "imageURL": "https://turkeyjava.com/wp-content/uploads/2021/12/tBONWAEb_400x400.jpg",
                "twitterURL" : "https://twitter.com/furrrrkaaan",
                "linkedinURL" : "https://www.linkedin.com/in/frknshnklksz/",
                "gitHubURL" : "https://github.com/fsk",
                "personalBlogURL" : "",
                "mediumURL" : "https://furkankulaksiz68.medium.com/",
                "instagramURL" : "https://www.instagram.com/furkansahinkulaksiz/"
            },

            {
                "id": 3,
                "name": "Taner GENÇ",
                "role": "CORE TEAM",
                "title": "",
                "overview": "",
                "imageURL": "https://turkeyjava.com/wp-content/uploads/2021/12/DfMbf8dt_400x400.jpg",
                "twitterURL" : "https://twitter.com/gencdevops",
                "linkedinURL" : "https://www.linkedin.com/in/taner-gen%C3%A7-5672381b2/",
                "gitHubURL" : "",
                "personalBlogURL" : "",
                "mediumURL" : "",
                "instagramURL" : "https://www.instagram.com/gencdevops/"
            },

            {
                "id": 4,
                "name": "Seyda ÖZDEMİR",
                "role": "CORE TEAM",
                "title": "",
                "overview": "",
                "imageURL": "https://turkeyjava.com/wp-content/uploads/2021/12/2c1ab006-2b0e-4ca2-81e1-3ca16b7ab5e7.jpg",
                "twitterURL" : "",
                "linkedinURL" : "",
                "gitHubURL" : "",
                "personalBlogURL" : "",
                "mediumURL" : "",
                "instagramURL" : ""
            },

            {
                "id": 5,
                "name": "Gökhan AYRANCIOĞLU",
                "role": "CORE TEAM",
                "title": "Software developer since high school years",
                "overview": "A software engineer related to software architecture",
                "imageURL": "https://turkeyjava.com/wp-content/uploads/2021/12/vWVykkGD_400x400.jpg",
                "twitterURL" : "https://twitter.com/gokhanadev",
                "linkedinURL" : "https://www.linkedin.com/in/gokhan-a/",
                "gitHubURL" : "https://github.com/g-khan",
                "personalBlogURL" : "https://gokhana.dev/",
                "mediumURL" : "https://gokhana.medium.com/",
                "instagramURL" : ""
            },

            {
                "id": 6,
                "name": "Sezer Tanrıverdioğlu",
                "role": "CORE TEAM",
                "title": "",
                "overview": "",
                "imageURL": "https://turkeyjava.com/wp-content/uploads/2021/12/46f0c1bf-8ab6-447d-8543-629fdda5f31b.jpg",
                "twitterURL" : "",
                "linkedinURL" : "",
                "gitHubURL" : "",
                "personalBlogURL" : "",
                "mediumURL" : "",
                "instagramURL" : ""
            },

            {
                "id": 7,
                "name": "İbrahim Başar YARGICI",
                "role": "CORE TEAM",
                "title": "",
                "overview": "Computer Engineering student with a passion for software development, especially in Java technologies",
                "imageURL": "https://turkeyjava.com/wp-content/uploads/2021/12/457d4b11-8a0e-4a22-adce-4e343a943de4.jpg",
                "twitterURL" : "",
                "linkedinURL" : "https://www.linkedin.com/in/ibrahimbasaryargici",
                "gitHubURL" : "https://github.com/basarYargici",
                "personalBlogURL" : "",
                "mediumURL" : "",
                "instagramURL" : ""
            },

            {
                "id": 8,
                "name": "Gizem ÇOBAN",
                "role": "CORE TEAM",
                "title": "",
                "overview": "",
                "imageURL": "https://turkeyjava.com/wp-content/uploads/2021/12/4da179d2-ade5-4c53-8288-7c2cf6816542.jpg",
                "twitterURL" : "",
                "linkedinURL" : "",
                "gitHubURL" : "",
                "personalBlogURL" : "",
                "mediumURL" : "",
                "instagramURL" : ""
            },

            {
                "id": 9,
                "name": "Yavuz Sinan AYDEMİR",
                "role": "CORE TEAM",
                "title": "",
                "overview": "",
                "imageURL": "https://turkeyjava.com/wp-content/uploads/2021/12/ysa.jpg",
                "twitterURL" : "",
                "linkedinURL" : "",
                "gitHubURL" : "",
                "personalBlogURL" : "",
                "mediumURL" : "",
                "instagramURL" : ""
            },
        ]
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/about" component={About} />
                    <Route path="/team" children={ <TeamMember members={this.state.members} />} />
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
}

export default NavBar;

function About() {
    return <h2>About</h2>;
}

function Contact() {
    return <h2>Contact</h2>;
}

