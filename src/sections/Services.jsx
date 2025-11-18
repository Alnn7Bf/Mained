import ServiceCard from '../components/ServiceCard'
import {Icon1, Icon2, Icon3, Icon4} from '../components/Icons'
import bg from '../assets/header-bg.jpg'

function Services() {
  const services = [
    {
      image: bg,
      icon: Icon1,
      title: "POR EVENTO",
      description: "Limpieza por evento único."
    }, {
      image: bg,
      icon: Icon2,
      title: "IMPLANT",
      description: "Personal cuidadosamente seleccionado y capacitado."
    }, {
      image: bg,
      icon: Icon3,
      title: "INSIDE / OUTSIDE",
      description: "Limpieza de ventanas por ambas caras para ofrecer mejores resultados."
    }, {
      image: bg,
      icon: Icon4,
      title: "TRABAJOS EN ALTURAS",
      description: "Que contribuyen a mejorar la imagen del inmueble."
    }
  ]


  return (
    <>
      <section className="flex w-full bg-primary/70 justify-center px-8 md:px-24" id="services">
        <div className='flex flex-col w-full justify-center items-center'>
          <h2 className='text-2xl text-center tracking-title m-6'>SERVICIOS</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
              services.map(({image, icon, title, description}, index) => (
                <ServiceCard key={index} image={image} icon={icon} title={title} description={description}/>
              ))
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Services