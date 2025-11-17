import bg from "../assets/header-bg.jpg"

function Hero() {
  return (
    <>
      <section className="relative h-dvh w-full grid place-items-center">
        <div className="absolute inset-0 -z-10 bg-[url('./assets/header-bg.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 z-0 bg-black/40"></div>
        <div className="relative flex flex-col gap-2 text-center">
          <h1 className="text-white tracking-hero text-4xl text-shadow-lg">MAINED</h1>
          <p className="text-white tracking-hero  text-shadow-lg">MANTENIMIENTO INTEGRAL</p>
        </div>
      </section>
    </>
  )
}

export default Hero