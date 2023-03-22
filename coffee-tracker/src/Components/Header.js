import '../CSS/header.css';
import logo from "../Assets/logo.svg"
import {Link} from "react-router-dom";

function Header() {
  return (
    <header>
        <img src= {logo} alt="Logo"/>
        <nav>
            <ul>
                <li>Inicio</li>
                <li>¿Quiénes Somos?</li>
                <li>Planes</li>
                <Link to={'/identify'} id="logIn">LogIn</Link>
                <Link to={'/identify'} id="signUp">SignUp</Link>
            </ul>
        </nav>
    </header>
  );
}

export default Header;
