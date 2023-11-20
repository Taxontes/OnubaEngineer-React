import './servicios.css'

export const Servicios = () => {
    return (
        <>
            <section className='servicio'>
                <header className='header-service'>

                    <h2 className='servicio-title'>¡Descubre la excelencia en soluciones ingenieriles con nosotros!</h2>
                    <h3 className='servicio-subtitle'>Ofrecemos Soluciones Innovadoras en Ingeniería </h3>

                    <h3 className='subsection container'>En <mark className="palabra-destacada">Onueba Engineer</mark>, llevamos la innovación a otro nivel, ofreciendo servicios de <mark className="palabra-destacada">ingeniería</mark> que transformarán tus proyectos en realidades sólidas y eficientes. Con un enfoque progresista respaldado por nuestro equipo altamente calificado, te proporcionamos soluciones que van más allá de las expectativas convencionales.</h3>
                </header>
                <h2 className='servicio-subtitle'>Servicios </h2>
                    <hr className='servicio-hr' /> 
                <div className='services container'>

                    <div className="service">
                        <img src="/icons/edificio.png" alt="" />
                        <h3>Proyectos de ingeniería</h3>
                        <p>Cálculo de Estructuras</p>
                        <p>Instalaciones</p>
                        <p>Mediciones y Presupuestos</p>
                        <p><mark className="palabra-destacada">Fotovoltaicas</mark></p>
                    </div>
                    <div className="service">
                        <img src="/icons/energia.png" alt="" />
                        <h3>Gestor energético de edificios</h3>
                        <p><mark className="palabra-destacada">Optimizar</mark> la Energía Consumida.</p>
                        <p>Inversiones <mark className="palabra-destacada">Viabilidad</mark> Técnica y Económica</p>
                        <p>Mantenimiento.</p>
                    </div>
                    <div className="service">
                        <img src="/icons/obra.png" alt="" />
                        <h3>Direcciones de Obra</h3>
                        <p>Control de Ejecución.</p>
                        <p><mark className="palabra-destacada">Certificaciones</mark></p>
                        <p>Libro del Edificio.</p>

                    </div>
                    <div className="service">
                        <img src="icons/asesoria.png" alt="" />
                        <h3>Asesoría técnica</h3>
                        <p>Revisión y Análisis de proyectos.</p>
                        <p><mark className="palabra-destacada">Emisión de Certificados</mark> de Obra.</p>
                        <p>Asesoriamientos Técnicos de Ejecución.</p>
                    </div>
                    <div className="service">
                        <img src="/icons/gestion.png" alt="" />
                        <h3>Gestión proyectos
                            (PMI)</h3>
                        <p>Inicio y Planificación.</p>
                        <p>Ejecución y Control.</p>
                        <p>Cierre.</p>


                    </div>
                    <div className="service">
                        <img src="/icons/economia.png" alt="" />
                        <h3>Trámites en administración</h3>
                        <p>Licencias de Obras, Apertura.</p>
                        <p>Tramitador PUES Junta de Andalucía.</p>
                        <p><mark className="palabra-destacada">Licitaciones Públicas.</mark></p>

                    </div>
                    <div className="service" id='service1'>
                        <img src="/icons/pymes.png" alt="" />
                        <h3>Servicios PYMES</h3>
                        <p>Estudio, Ánalisis Situación Inicial.</p>
                        <p>Propuestas de <mark className="palabra-destacada">Mejoras</mark>.</p>
                        <p>Implantación y Seguimiento.</p>
                    </div>
                </div>

            </section>
        </>
    )
}
