import image from "../assets/header-bg.jpg"

function Hero() {
  return (
    <>
      <section className="relative h-dvh w-full grid place-items-center" id="start">
        <div className="absolute inset-0 -z-10 bg-cover bg-top" style={{backgroundImage: `url(${image})`}}></div>
        <div className="absolute inset-0 z-0 bg-black/30"></div>
        <div className="relative flex flex-col gap-2 text-center">
          <h1 className="text-white tracking-hero text-4xl text-shadow-md">MAINED</h1>
          <p className="text-white tracking-navbar  text-shadow-md">MANTENIMIENTO INTEGRAL</p>
        </div>
      </section>
    </>
  )
}

export default Hero