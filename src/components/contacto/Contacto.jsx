import './contacto.css'
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export const Contacto = () => {
    return (
        <>
            <section className='fondo-contacto'>
                <div className="contenedor-contacto ">
                    <div className="box-info">
                        <h1>CONTÁCTATE CON NOSOTROS</h1>
                        <div className="data">
                            <p><i className="fa-solid fa-phone"></i> +1 408 224 4587</p>
                            <p><i className="fa-solid fa-envelope"></i> livingcodedev@gmail.com</p>
                            <p><i className="fa-solid fa-location-dot"></i> 30 Grant Ave San Francisco CA 94108-5834. USA</p>
                        </div>
                        <div className="contacto-links">

                            <div className="contacto-link">
                                <ul>
                                    <a href="#"><FaFacebookF /></a>
                                    <a href="#"><FaLinkedin /></a>
                                    <a href="#"><FaInstagram /></a>
                                    <a href="#"><SiGmail /></a>

                                </ul>

                            </div>
                        </div>

                    </div>
                    <form>
                        <div className="input-box">
                            <input type="text" placeholder="Nombre y apellido" required />
                            <i className="fa-solid fa-user"></i>
                        </div>
                        <div className="input-box">
                            <input type="email" required placeholder="Correo electrónico" />
                            <i className="fa-solid fa-envelope"></i>
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder="Asunto" />
                            <i className="fa-solid fa-pen-to-square"></i>
                        </div>
                        <div className="input-box">
                            <textarea placeholder="Escribe tu mensaje..."></textarea>
                        </div>
                        <button type="submit">Enviar mensaje</button>
                    </form>

                </div>
            </section>



        </>
    )
}
