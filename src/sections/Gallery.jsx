import { useState } from "react";
import galleryImages from "../hooks/useGalleryImages"
import useRotatingGallery from "../hooks/useRotatingGallery"
import { CloseIcon } from "../components/Icons";

const sizeMap = { 
  0: "md:col-span-2 lg:col-span-1", 
  1: "md:row-span-2 lg:row-span-1 lg:col-span-2", 
  2: "sm:col-span-2 md:col-span-1 md:row-span-2", 
  3: "lg:col-span-2", 
  4: "md:col-span-2 md:row-span-2 lg:col-span-1", 
  5: "sm:col-span-2 md:col-span-1 lg:col-span-2 lg:row-span-2", 
  6: "md:col-span-2 lg:col-span-1", 
  7: "lg:col-span-2" 
};

const ElementGallery = ({image, position, className, handleClick}) => {
  return (
    <>
      <div 
        className={`w-full overflow-hidden cursor-pointer ${sizeMap[className]}`} 
        onClick={handleClick}
      >
        <img 
          src={image} 
          alt="" 
          loading='lazy' 
          className="w-full h-full object-cover rounded-global" 
          style={{ objectPosition: `center ${position}%` }}
        />
      </div>
    </>
  )
}

function Gallery() {
  const { images, isFading } = useRotatingGallery(galleryImages, 4500);
  const [activeImage, setActiveImage] = useState(null);

  return (
    <>
      <section className="flex flex-col items-center justify-center bg-linear-to-br from-primary-dark to-primary p-6" id="gallery">
        <h2 className='text-2xl text-center tracking-title m-3 text-light'>GALERÍA DE TRABAJOS</h2>
        <p className="text-md text-center md:text-left text-light max-w-5xl">Una selección de proyectos y trabajos recientes. Cada imagen representa parte del proceso, el detalle y la calidad que se busca en cada entrega, mostrando diferentes enfoques, estilos y resultados finales.</p>
        <div className={`m-6 w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[20rem] grid-flow-dense gap-3 transition-all duration-200 ${isFading? "opacity-0 blur-xs" : "opacity-100 blur-0"}`}>
          {
            images.map(({src, position}, index) => (
              <ElementGallery key={index} image={src} position={position} className={index} handleClick={() => setActiveImage(src)}/>
            ))
          }
        </div>
      </section>
      {
        activeImage && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" 
            onClick={() => setActiveImage(null)}
          >
            <div className="w-full h-full items-center overflow-hidden flex justify-center">
              <img 
                src={activeImage} 
                alt="" 
                className="rounded-global cursor-pointer object-contain max-w-full max-h-full"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(activeImage, '_blank', 'noopener,noreferrer');
                }}
              />
            </div>
            <div className="absolute top-0 right-0 cursor-pointer text-white p-1 m-1">
              <CloseIcon size={36}/>
            </div>
          </div>
        )
      }
    </>
  )
}

export default Gallery