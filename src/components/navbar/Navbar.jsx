import './navbar.css';

export const Navbar = () => {
    return (
        <>
            <header className='header'>
                <div className="menu-header container">
                    <a href="#" className='logo-header'>Logo</a>
                    <input type="checkbox" id='menu-header' />
                    <label htmlFor="menu">
                        <img src="/menu.png" alt="" className='menu-icono' />
                    </label>
                    <nav className='navbar-enlaces'>
                        <ul>
                            <li><a href="#">Inicio</a></li>
                            <li><a href="#Servicios">Servicios</a></li>
                            <li><a href="#About">Sobre Nosotros</a></li>
                            <li><a href="#Diseño">ALGO MAS</a></li>
                        </ul>
                    </nav>
                </div>

                <video autoPlay muted loop className="video-background">
                    <source src="/videoNavbar.webm" type="video/mp4" />

                </video>

                <div data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" className="header-content container">
                    <div className="header-txt">
                        <h1>The Best Engineers</h1>
                        <h3>We improve the welfare of society</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed officia facilis esse dolores corrupti iste debitis earum qui veritatis quidem cupiditate minima saepe, fugiat maxime mollitia facere nisi nesciunt vero?</p>
                        <a href="#About" className='btn-1-header'>Información</a>
                    </div>
                </div>
            </header>
        </>
    );
};
