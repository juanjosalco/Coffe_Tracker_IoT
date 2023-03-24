import {Link} from "react-router-dom";
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

// CSS

import "../CSS/user.css"

// Assets

import reloj from "../Assets/taza inicio.png"
import graphic from "../Assets/grafic.png"
import cafe from "../Assets/cafe.png"


function Dashboard() {

    let temperature;
    let liquidContent;
    let time;

    const firebaseConfig = {
        apiKey: "AIzaSyCwW0QqNpjvaxDyxoyflvEr3LOI2HijTgo",
        authDomain: "tec-week-iot.firebaseapp.com",
        databaseURL: "https://tec-week-iot-default-rtdb.firebaseio.com",
        projectId: "tec-week-iot",
        storageBucket: "tec-week-iot.appspot.com",
        messagingSenderId: "382023793289",
        appId: "1:382023793289:web:0aa51482d20468c767a458",
        measurementId: "G-7C2K0B0XG8"
      };
      
      firebase.initializeApp(firebaseConfig);
      
      const database = firebase.database();
    
      const tempRef = database.ref('Temperatura');
      tempRef.on('value', (snapshot) => {
        console.log(snapshot.val())
        temperature = snapshot.val();
      })
      const liquidRef = database.ref('Llenado');
      liquidRef.on('value', (snapshot) => {
        liquidContent = snapshot.val();
      })

      const timeRef = database.ref('LDR');
      timeRef.on('value', (snapshot) => {
        time = snapshot.val();
      })

      const handleTime = (time) => {
        return time > 30 ? "Buenos días" : "Buenas noches"
      }
    

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
                <p id="consumo">{handleTime(time)}</p>
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
                    <p>{temperature}°</p>
                </section>
            </article>
            <article className="section coffee">
                <p>Consumo semanal</p>
                <section>
                    <p>3L</p>
                    <img src= {cafe} alt="icono noche"/>
                </section>
            </article>
            <article className="section cup">
                <p>Vaso de Café</p>
                <p id="cupSize">{(100 - liquidContent) * 10} ml</p>
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

