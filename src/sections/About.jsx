import aboutImg from '../assets/logo-b.png'

function About() {

  return (
    <>
      <section className="flex flex-col md:flex-row w-full bg-light justify-center items-center py-16 px-8 md:px-16" id="about">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="w-full overflow-hidden rounded-global">
            <img src={aboutImg} alt="Nosotros" className="w-full h-full object-contain"/>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl tracking-title text-center md:text-left">¿QUIÉNES SOMOS?</h2>
            <p className="text-md text-center md:text-left tracking-wide">Somos una empresa mexicana, con 25 años de experiencia en la rehabilitación, mantenimiento y conservación de imagen en inmuebles</p>
            <span className="bg-primary text-light text-center md:text-right rounded-global px-4 py-2 tracking-navbar">NUESTRO COMPROMISO</span>
            <ul className="text-left space-y-1 border-2 border-transparent border-l-primary py-3 px-6">
              <li className="flex items-center gap-4">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Calidad
              </li>
              <li className="flex items-center gap-4">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Seguridad
              </li>
              <li className="flex items-center gap-4">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Ahorro
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default About