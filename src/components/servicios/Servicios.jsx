import './servicios.css'

export const Servicios = () => {
    return (
        <>
            <section className='servicio'>

                <h2 className='servicio-title'>Ofrecemos Soluciones Innovadoras en Ingeniería </h2>
                <hr className='servicio-hr' />
                <div className='services container'>
                    <div className="service">
                        <img src="/icons/edificio.png" alt="" />
                        <h3>Proyectos de ingeniería</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    </div>
                    <div className="service">
                        <img src="/icons/energia.png" alt="" />
                        <h3>Gestor energético de edificios</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    </div>
                    <div className="service">
                        <img src="/icons/obra.png" alt="" />
                        <h3>Direcciones de obra</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    </div>
                    <div className="service">
                        <img src="icons/asesoria.png" alt="" />
                        <h3>Asesoría técnica</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    </div>
                    <div className="service">
                        <img src="/icons/gestion.png" alt="" />
                        <h3>Gestión proyectos
                            (PMI)</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    </div>
                    <div className="service">
                        <img src="/icons/economia.png" alt="" />
                        <h3>Trámites en administración</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    </div>
                    <div className="service">
                        <img src="/icons/pymes.png" alt="" />
                        <h3>Servicios PYMES</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    </div>

                </div>
            </section>
        </>
    )
}
