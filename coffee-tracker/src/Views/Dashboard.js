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
                <p><span></span>Hola Moises, siempre es un gusto!</p>
                <div className="circulo">
                    <Link to={'/'}><img src={reloj} alt="Nolberto Foto"/></Link>
                </div>
            </section>
            <article className="section horas">
                <p id="consumo">Consumo diario</p>
                <img src= {graphic} alt="grafico"/>
            </article>
            <article className="section sleep" id="consejo">
                <p>Consejo del día</p>
                <section>
                    <p>Earum rem voluptas ut repellat tempore debitis voluptatem qui quo quae esse eos rerum dicta officia. Molestiae architecto enim vel quo eligendi illo dolores dolorem dolorem est dolor ducimus est esse. Repudiandae debitis et rerum animi recusandae facilis tempore quisquam voluptatum tempora.</p>
                </section>
            </article>
            <article className="section sensor">
                <p>Temperatura</p>
                <section className="temperatura">
                    <p>22°</p>
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
                <p>Cafés de hoy</p>
                <p id="doorNumber">10</p>
            </article>
        </section>
    </section>
  );
}

export default Dashboard;

