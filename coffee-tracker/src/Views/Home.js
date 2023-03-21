import Footer from "../Components/Footer";
import Header from "../Components/Header";


function Home() {
  return (
    <>
        <Header/>
        <section id="Banner">
            <img src="../Assets/taza inicio.png" alt="cafe taza"/>
            <section>
                <h1>Consume cuando lo necesitas, disfruta mientras lo vives</h1>
            <p>Atrevete a conocer los beneficios de conocer tus hábitos de consumo</p>
            <button>Descubre más del mundo que diseñamos para ti</button>
            </section>
        </section>
        <section id="QS">
            <h1>¿Quiénes Somos?</h1>
            <section>
                <img src="../Assets/reloj.png" alt="Reloj"/>
                <p>SUFEE es una compañía creada en el año 2022 por un grupo de estudiantes los cuales buscar solucionar problemas diarias de las personas, en este caso el café, a  través de tecnología del internet de las cosas, podremos ayudarte a automatizar tu consumo de café, para que solo tengas que tomar el vaso y  disfrutar sin presionar nada. </p>
            </section>
        </section>
        <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="..." class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
                <img src="..." class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
                <img src="..." class="d-block w-100" alt="..."/>
            </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
            </button>
        </div>
        <section id="Servicio">
            <h1>Servicio</h1>
            <img src="../Assets/process.svg" alt="proceso"/>
        </section>
        <section id="Equipo">
            <h1>Nuestro Equipo</h1>
            <section id="Nosotros">
                <section class="Integrante">
                    <div class="circulo">
                        <img src="../Assets/Nolberto.png" alt="Nolberto Foto"/>
                    </div>
                    <h3>Nolberto Castro</h3>
                    <p>FrontEnd - Ui/Ux Designer</p>
                </section>
                <section class="Integrante">
                    <div class="circulo">
                        <img src="../Assets/Carlos.png" alt="Carlos"/>
                    </div>
                    <h3>Carlos Arellano</h3>
                    <p>Product Manager</p>
                </section>
                <section class="Integrante">
                    <div class="circulo">
                        <img src="../Assets/Israel.png" alt="Israel"/>
                    </div>
                    <h3>Israel Vidal</h3>
                    <p>Ai developer</p>
                </section>
                <section class="Integrante">
                    <div class="circulo">
                        <img src="../Assets/Chuy.png" alt="Chuy"/>
                    </div>
                    <h3>Jesus Diaz</h3>
                    <p>Backend Programmer</p>
                </section>
                <section class="Integrante">
                    <div class="circulo">
                        <img src="../Assets/Javier.png" alt="Javier"/>
                    </div>
                    <h3>Javier Hernandez</h3>
                    <p>Ai Developer</p>
                </section>
            </section>
        </section>
        <Footer/>
    </>
  );
}

export default Home;










