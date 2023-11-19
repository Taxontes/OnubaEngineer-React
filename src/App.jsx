import './App.css'
import { Navbar } from './components/navbar/Navbar'
import { Servicios } from './components/servicios/Servicios'
import { About } from './components/about/About'
import { Diseños } from './components/diseños/Diseños'
import { Footer } from './components/footer/Footer'
import { Contacto } from './components/contacto/Contacto'
import { Valores } from './components/valores/Valores'
function App() {


  return (
    <>
      <section id='inicio'>
        <Navbar />
      </section>

      <section id='About'>
        <About />
      </section>
      <section>
        <Valores />
      </section>
      <section id='Diseño'>
        <Diseños />
      </section>
      <section id='Servicios'>
        <Servicios />
      </section>
      <section id='Contacto'>
        <Contacto />
      </section>

    </>
  )
}

export default App
