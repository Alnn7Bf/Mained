function Footer() {

  return (
    <>
      <footer className="flex flex-col justify-center items-center bg-linear-to-tr from-primary-dark to-primary text-light px-10">
        <div className="flex flex-col max-w-5xl border-b border-light/20 p-10 justify-center items-center gap-2">
          <h3 className="text-xl font-light tracking-widest">MAINED</h3>
          <p className="text-light/60 mt-2 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, itaque error eum tempore ipsum repudiandae temporibus ullam culpa hic quibusdam quas incidunt recusandae, labore similique. Sed ullam suscipit dolore earum.
          </p>
        </div>
        <div className="text-center p-6">
          <p className="text-light/50 text-sm">
            © {new Date().getFullYear()} Mained | Mantenimiento Integral. Todos los derechos reservados. | Desarrollo: <a href="https://www.instagram.com/alnn7_bf" target="_blank" rel="noopener noreferrer" className="text-light/80">Alan Bf</a>
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer