import aboutImg from '/logo-b.png'

function About() {

  return (
    <>
      <section className="flex flex-col gap-8 w-full bg-light justify-center items-center py-12 px-8 md:px-16" id="about">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center justify-center">
          <div className="w-full overflow-hidden rounded-global">
            <img src={aboutImg} alt="Nosotros" className="w-full h-full object-contain"/>
          </div>
          <div className='flex flex-col gap-6'>
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl tracking-title text-center md:text-left">¿QUIÉNES SOMOS?</h3>
              <p className="text-md text-center md:text-left tracking-wide">Somos una empresa mexicana, con 25 años de experiencia en la rehabilitación, mantenimiento y conservación de imagen en inmuebles</p>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="text-xl tracking-title text-center md:text-left">NUESTRA EXPERIENCIA</h3>
              <ul className="border-l-2 border-primary pl-6 -ml-2">
                <li className="flex items-center gap-4">
                  <span className="inline-block aspect-square w-2 min-w-2 bg-primary rounded-full"></span>
                  Más de 25 años de experiencia en proyectos comerciales
                </li>
                <li className="flex items-center gap-4">
                  <span className="inline-block aspect-square w-2 min-w-2 bg-primary rounded-full"></span>
                  Cumplimiento estricto de normas y estándares de seguridad
                </li>
                <li className="flex items-center gap-4">
                  <span className="inline-block aspect-square w-2 min-w-2 bg-primary rounded-full"></span>
                  Optimización de recursos y costos
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 bg-primary/10 border-primary/70 border-2 border-dashed rounded-global p-8 max-w-2xl">
          <span className="text-md tracking-navbar text-primary font-medium">NUESTRO COMPROMISO</span>
          <p className="text-sm tracking-wide">
            Trabajar con responsabilidad, calidad y transparencia en cada proyecto, cuidando la seguridad de las personas, el valor del inmueble y la satisfacción total de nuestros clientes.
          </p>
        </div>
      </section>
    </>
  )
}

export default About