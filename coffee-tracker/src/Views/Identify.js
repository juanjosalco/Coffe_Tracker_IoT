import LogImage from "../Assets/LogIn image.png"
import Logo from "../Assets/logo.svg"
import "../CSS/logIn.css"
import {Link} from "react-router-dom";


function Identify() {
  return (
    <section id="container">
        <img src = {LogImage} alt="3D image"/>
        <section className="LogIn">
            <Link to={'/'}><img src={Logo} alt="logo SUFEE"/></Link>
            <section>
                <form action="">
                    <label for="nombre">
                        <span>Nombre:</span>
                        <input type="text" id="nombre" placeholder="Javier Hernandez"/>
                    </label>
                    <label for="correo">
                        <span>Correo:</span>
                        <input type="text" id="correo" placeholder="Javier@gmail.com"/>
                    </label>
                </form>
            </section>
            <section className="submit">
                <h3>¿Has olvidado tu contraseña?</h3>
                <Link to={'/dashboard'}>Iniciar Sesión</Link>
            </section>
        </section>
    </section>
  );
}

export default Identify;





