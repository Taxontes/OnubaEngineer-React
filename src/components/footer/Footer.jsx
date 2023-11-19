import './footer.css'
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <div className="container">
                    <div className="footer-row">
                        <div className="footer-links">
                            <h4>Servicios</h4>
                            <ul>
                                <li><a href="#"></a></li>
                                <li><a href="#"></a></li>
                                <li><a href="#"></a></li>
                                <li><a href="#"></a></li>
                            </ul>
                        </div>
                        <div className="footer-links">
                            <h4>Experiencia</h4>
                            <ul>
                                <li><a href="#"></a></li>
                                <li><a href="#"></a></li>
                                <li><a href="#"></a></li>
                                <li><a href="#"></a></li>
                            </ul>
                        </div>
                        <div className="footer-links">
                            <h4>Sobre Nosotros</h4>
                            <ul>
                                <li><a href="#"></a></li>
                                <li><a href="#"></a></li>
                                <li><a href="#"></a></li>
                                <li><a href="#"></a></li>
                            </ul>
                        </div>
                        <div className="footer-links">
                            <h4>Redes sociales</h4>
                            <div className="social-link">
                                <ul>
                                    <a href="#"><FaFacebookF /></a>
                                    <a href="#"><FaLinkedin /></a>
                                    <a href="#"><FaInstagram /></a>
                                    <a href="#"><SiGmail /></a>

                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
