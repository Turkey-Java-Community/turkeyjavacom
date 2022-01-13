import './top-bar.css'
import logo from '../icons/duke.png'

export default function TopBar() {
    return (
        <div className="top-bar">
            <div className="bar-icon">
                <a href="https://turkeyjava.com">
                    <img src={logo} alt="Turkey Java Community" className="img-responsive"/>
                </a>
            </div>
            <ul className="menu">
                <li className="menu-item"><a href="#team">Team</a></li>
                <li className="menu-item"><a href="#about">About Us</a></li>
                <li className="menu-item"><a href="#contact">Contact Us</a></li>
            </ul>
        </div>
    )
}