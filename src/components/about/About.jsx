import './about.css'

export const About = () => {
    return (
        <>
            <section className='about container'>

                <div className="about-content container">
                    <div className="about-txt">
                        <h2>Transformando Desafíos Técnicos en Oportunidades</h2>
                        <span>Descubre <mark className="palabra-destacada">Onuba Engineer</mark> </span>
                        <hr />
                        <p>Especialistas en Ingeniería para Instalaciones de Aire Comprimido, <mark className="palabra-destacada">Construcción de Naves</mark> ,Energía Solar y <mark className="palabra-destacada">Gestión de Proyectos</mark> .
                        </p>
                        <br />
                        <p>Con más de <mark className="palabra-destacada"> 30 años de experiencia</mark></p>
                        <br />
                        <p>Nuestro compromiso con la excelencia se refleja en la <mark className="palabra-destacada">calidad</mark> inigualable de nuestros servicios y en la satisfacción de nuestros clientes.</p>
                        <br />
                        <p>En Onuba Engineer, integramos la <mark className="palabra-destacada">sostenibilidad</mark> en cada paso, ofreciendo soluciones energéticas eficientes y amigables con el medio ambiente.</p>


                    </div>
                    <div className="about-img">
                        <img src="/slider/ingenieros.avif" alt="" />
                    </div>
                </div>


            </section>

        </>
    )
}
