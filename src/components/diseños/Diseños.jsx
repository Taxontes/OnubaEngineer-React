import './diseño.css'

export const Diseños = () => {
    return (
        <>
            <section >
                <h2 className='servicio-title'>Algunos de nuestros proyectos</h2>
                <hr className='diseño-hr-title' />

                <div className='diseño'>

                    <div data-aos="fade-up" data-aos-duration="2000" className="diseño-content container">
                        <div className="diseño-img">
                            <img src="/slider/navesIndustriales.jpg" alt="" />
                        </div>
                        <div className="diseño-txt">
                            <span>seccion</span>
                            <h2>Construcción de infraestructuras</h2>
                            <hr className='diseño-hr' />
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus quo necessitatibus pariatur possimus. Nemo enim fugit saepe ullam aut harum et hic soluta tempore sapiente non, corporis, repellat nobis rerum!</p>
                            <br />
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus quo necessitatibus pariatur possimus. Nemo enim fugit saepe ullam aut harum et hic soluta tempore sapiente non, corporis, repellat nobis rerum!</p>

                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1500" className="diseño-content container">
                        <div className="diseño-txt">
                            <span>seccion</span>
                            <h2>Sobre nosotros</h2>
                            <hr className='diseño-hr' />
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus quo necessitatibus pariatur possimus. Nemo enim fugit saepe ullam aut harum et hic soluta tempore sapiente non, corporis, repellat nobis rerum!</p>
                            <br />
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus quo necessitatibus pariatur possimus. Nemo enim fugit saepe ullam aut harum et hic soluta tempore sapiente non, corporis, repellat nobis rerum!</p>

                        </div>
                        <div className="diseño-img">
                            <img src="/slider/paneles_solares_instalacion.jpg" alt="" />
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1500" className="diseño-content container">
                        <div className="diseño-img">
                            <img src="/slider/placasSolares.webp" alt="" />
                        </div>
                        <div className="diseño-txt">
                            <span>seccion</span>
                            <h2>Instalación placas solares</h2>
                            <hr className='diseño-hr' />
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus quo necessitatibus pariatur possimus. Nemo enim fugit saepe ullam aut harum et hic soluta tempore sapiente non, corporis, repellat nobis rerum!</p>
                            <br />
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus quo necessitatibus pariatur possimus. Nemo enim fugit saepe ullam aut harum et hic soluta tempore sapiente non, corporis, repellat nobis rerum!</p>

                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}
