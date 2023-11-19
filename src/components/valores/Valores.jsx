import React from 'react'
import './valores.css'

export const Valores = () => {
    return (
        <>
            <h2 className='tilulo-valores'> Explorando los Valores Centrales de la Empresa</h2>
            <section className='valores'>
                <div className="card">
                    <div className="face front">
                        <img src="/valores/responsabilidad.jpg" alt="" />
                        <h3 className='card-title'>Responsabilidad</h3>
                    </div>
                    <div className="face back">
                        <h3 className='card-title'>Responsabilidad</h3>
                        <p>En nuestra empresa , la responsabilidad es nuestra piedra angular. Nos comprometemos a abordar cada proyecto  con integridad y diligencia.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="face front">
                        <img src="/valores/profesionalidad.webp" alt="" />
                        <h3 className='card-title'>Profesionalidad</h3>
                    </div>
                    <div className="face back">
                        <h3 className='card-title'>Profesionalidad</h3>
                        <p>En nuestra empresa, la profesionalidad guía cada acción, desde la interacción con clientes hasta la ejecución de proyectos.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="face front">
                        <img src="/valores/honestidad.jpg" alt="" />
                        <h3 className='card-title'>Honestidad</h3>
                    </div>
                    <div className="face back">
                        <h3 className='card-title'>Honestidad</h3>
                        <p>
                            Cimiento de nuestra empresa. <br /><br />
                            Desde la concepción hasta la ejecución de proyectos, con una comunicación transparente y directa.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="face front">
                        <img src="/valores/lealtad.jpg" alt="" />
                        <h3 className='card-title'>Leatltad</h3>
                    </div>
                    <div className="face back">
                        <h3 className='card-title'>Leatltad</h3>
                        <p>Más que un valor; es un vínculo que fortalece nuestra colaboración. <br /><br /> Nos comprometemos a cultivar relaciones sólidas, con nuestros clientes .</p>
                    </div>
                </div>
                <div className="card">
                    <div className="face front">
                        <img src="/valores/compromiso.webp" alt="" />
                        <h3 className='card-title'>Compromiso</h3>
                    </div>
                    <div className="face back">
                        <h3 className='card-title'>Compromiso</h3>
                        <p>Motor de nuestra empresa. Nos comprometemos a superar expectativas, abrazar desafíos y ofrecer soluciones excepcionales en cada proyecto. </p>
                    </div>
                </div>

            </section>
            {/* <div className="wave"></div> */}


        </>
    )
}
