import image from "../assets/header-bg.jpg"

function Hero() {
  return (
    <>
      <section className="relative h-dvh w-full grid place-items-center" id="start">
        <div 
          className="absolute inset-0 -z-10 bg-cover bg-top" 
          style={{backgroundImage: `url(${image})`}}
        />
        <div 
          className="absolute inset-0 z-0 bg-black/60"
        />
        <div className="relative z-10 flex flex-col items-center gap-4 px-6 text-center">
          <h1 className="text-light text-4xl tracking-hero font-light text-shadow-md">MAINED</h1>
          <span className="w-60 h-px bg-light/60"></span>
          <h3 className="text-light text-lg tracking-title font-light text-shadow-md">MANTENIMIENTO INTEGRAL</h3>
          <p className="text-light text-sm tracking-widest font-light max-w-sm text-shadow-md">REHABILITACIÓN, MANTENIMIENTO Y CONSERVACIÓN DE INMUEBLES</p>
      </div>
      </section>
    </>
  )
}

export default Hero