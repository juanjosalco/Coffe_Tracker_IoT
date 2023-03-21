import '../CSS/header.css';

function Header() {
  return (
    <header>
        <img src="../Assets/logo.svg" alt="Logo"/>
        <nav>
            <ul>
                <li>Inicio</li>
                <li>¿Quiénes Somos?</li>
                <li>Planes</li>
                <a id="logIn" href="../HTML/login.html">LogIn</a>
                <a id="signUp" href="../HTML/login.html">SignUp</a>
            </ul>
        </nav>
    </header>
  );
}

export default Header;
