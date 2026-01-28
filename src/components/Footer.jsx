function Footer() {

  return (
    <>
      <footer className="flex flex-col justify-center items-center bg-linear-to-tr from-primary-dark to-primary text-light px-10">
        <div className="hidden md:flex flex-col max-w-5xl border-b border-light/20 p-10 justify-center items-center gap-2">
          <h3 className="text-xl font-light tracking-widest">MAINED</h3>
          <p className="text-light/60 mt-2 text-sm text-center">
            Ofrecemos soluciones integrales de limpieza, mantenimiento general y trabajos especializados en altura. Nuestro compromiso es brindar un servicio profesional, seguro y eficiente para mantener tus espacios en óptimas condiciones.
          </p>
        </div>
        <div className="text-center px-6 py-10 md:py-6">
          <p className="text-light/50 text-sm">
            © {new Date().getFullYear()} Mained | Mantenimiento Integral. Todos los derechos reservados. | Desarrollo: 
            <a 
              href="https://www.instagram.com/alnn7_bf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-light/80"
            >Alan Bf</a>
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer