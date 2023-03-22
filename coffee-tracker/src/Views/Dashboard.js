import reloj from "../Assets/taza inicio.png"
import graphic from "../Assets/grafic.png"
import night from "../Assets/night.svg"
import cafe from "../Assets/cafe.png"
import "../CSS/user.css"
import {Link} from "react-router-dom";


function Dashboard() {
  return (
    <section className="user-side">
        <section className="information-part">
            <section className="top-part">
                <p><span></span>Hola Javier, siempre es un gusto!</p>
                <div className="circulo">
                    <Link to={'/'}><img src={reloj} alt="Nolberto Foto"/></Link>
                </div>
            </section>
            <article className="section horas">
                <p>Salida de Casa</p>
                <img src= {graphic} alt="grafico"/>
            </article>
            <article className="section sleep">
                <p>Horas de Sueño</p>
                <section>
                    <img src= {night} alt="icono noche"/>
                    <p>6.5</p>
                </section>
            </article>
            <article className="section sensor">
                <p>Sensores</p>
                <section className="sensores">
                    <p><span></span>Cafetera</p>
                    <p><span></span>Puerta</p>
                    <p><span></span>Ventana</p>
                </section>
            </article>
            <article className="section coffee">
                <p>Consumo Semanal</p>
                <section>
                    <p>6.5</p>
                    <img src= {cafe} alt="icono noche"/>
                </section>
            </article>
            <article className="section cup">
                <p>Vaso de Café</p>
                <p id="cupSize">500ml</p>
            </article>
            <article className="section door">
                <p>Puerta Abierta</p>
                <p id="doorNumber">10</p>
            </article>
        </section>
    </section>
  );
}

export default Dashboard;

