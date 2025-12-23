import ServiceCard from '../components/ServiceCard'
import {Icon1, Icon2, Icon3, Icon4} from '../components/Icons'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'

const services = [
  {
    image: img1,
    icon: Icon1,
    title: "POR EVENTO",
    description: "Limpieza por evento único.", 
    longDescription: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo ipsa numquam voluptatum commodi, ullam animi nihil quia impedit non sunt consequatur error blanditiis praesentium quas aut fugiat doloremque id nisi.', 
    position: 27
  }, {
    image: img2,
    icon: Icon2,
    title: "IMPLANT",
    description: "Personal cuidadosamente seleccionado y capacitado.", 
    longDescription: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo ipsa numquam voluptatum commodi, ullam animi nihil quia impedit non sunt consequatur error blanditiis praesentium quas aut fugiat doloremque id nisi.', 
    position: 40
  }, {
    image: img3,
    icon: Icon3,
    title: "INSIDE / OUTSIDE",
    description: "Limpieza de ventanas por ambas caras para ofrecer mejores resultados.", 
    longDescription: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo ipsa numquam voluptatum commodi, ullam animi nihil quia impedit non sunt consequatur error blanditiis praesentium quas aut fugiat doloremque id nisi.', 
    position: 30
  }, {
    image: img4, 
    icon: Icon4, 
    title: "TRABAJOS EN ALTURAS",
    description: "Que contribuyen a mejorar la imagen del inmueble.", 
    longDescription: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo ipsa numquam voluptatum commodi, ullam animi nihil quia impedit non sunt consequatur error blanditiis praesentium quas aut fugiat doloremque id nisi.', 
    position: 35
  }
]

function Services() {

  return (
    <>
      <section className="flex w-full bg-linear-to-tr from-primary-dark to-primary justify-center px-8 md:px-24 pb-12" id="services">
        <div className='flex flex-col w-full justify-center items-center max-w-6xl'>
          <h2 className='text-2xl text-center tracking-title m-6 text-light'>SERVICIOS</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
              services.map(({image, icon, title, description, longDescription, position}, i) => (
                <ServiceCard key={i} image={image} icon={icon} title={title} description={description} longDescription={longDescription} position={position}/>
              ))
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Services