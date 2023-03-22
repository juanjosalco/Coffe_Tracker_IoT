import Footer from "../Components/Footer";
import Header from "../Components/Header";

import taza from "../Assets/taza inicio.png";
import reloj from "../Assets/reloj.png"
import process from "../Assets/process.svg"

function Home() {
  return (
    <>
        <Header/>
        <section id="Banner">
            <img src = {taza} alt="cafe taza"/>
            <section>
                <h1>Consume cuando lo necesitas, disfruta mientras lo vives</h1>
            <p>Atrevete a conocer los beneficios de conocer tus hábitos de consumo</p>
            <button>Descubre más del mundo que diseñamos para ti</button>
            </section>
        </section>
        <section id="QS">
            <h1>¿Quiénes Somos?</h1>
            <section>
                <img src={reloj} alt="Reloj"/>
                <p>SUFEE es una compañía creada en el año 2022 por un grupo de estudiantes los cuales buscar solucionar problemas diarias de las personas, en este caso el café, a  través de tecnología del internet de las cosas, podremos ayudarte a automatizar tu consumo de café, para que solo tengas que tomar el vaso y  disfrutar sin presionar nada. </p>
            </section>
        </section>
        <section id="Servicio">
            <h1>Servicio</h1>
            <img src={process} alt="proceso"/>
        </section>
        <Footer/>
    </>
  );
}

export default Home;










