import { useState } from "react";
import useWaveAnimation from "../hooks/useWaveAnimation"
import { PlusIcon, MinusIcon } from "./Icons";

function ServiceCard({ image, icon, title, description, longDescription, position}) {
  const Icon = icon;
  const bgPosition = useWaveAnimation(position);

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="relative overflow-hidden rounded-global cursor-pointer" onClick={handleClick}>
        <div className="absolute inset-0 bg-cover transition-opacity duration-300" style={{ backgroundImage: `url(${image})`, backgroundPosition: `0% ${bgPosition}%` }}></div>
        <div className={`relative h-full flex flex-col gap-2 items-center bg-black/40 ${isOpen? 'md:bg-black/40 md:text-light' : 'md:bg-light md:text-black'} md:hover:bg-black/40 text-light md:text-black hover:text-light transition-colors duration-300`}>
          <div className="absolute top-0 right-0 p-2">
            {
              isOpen? (
                <MinusIcon size={28}/>
              ) : (
                <PlusIcon size={28}/>
              )
            }
          </div>
          <div className={`flex flex-col p-6 pb-0 mb-3 justify-center items-center transition-all duration-300 ease-in`}>
            <div className="flex h-24 w-24 justify-center items-center">
              <Icon size={60} />
            </div>
            <h3 className="text-xl font-medium tracking-widest text-center text-inherit">
              {title}
            </h3>
            <p className="text-sm text-inherit/60 text-center">{description}</p>
          </div>
          <div className={`overflow-hidden transition-all duration-300 ease-in ${isOpen? "max-h-60 md:max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
            <div className="pt-0 p-5 text-sm text-inherit/80">
              <p className="">{longDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceCard;