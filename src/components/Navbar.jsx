import { useState } from 'react'
import {IconMenu, IconClose} from './Icons'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`z-20 flex fixed w-dvw bg-white/${isOpen? '80' : '40'} md:bg-white/40 justify-center flex-col md:flex-row text-black transition-all duration-500`} id="menu">
      <label className="cursor-pointer md:hidden m-2" onClick={toggleMenu}>
        {isOpen? <IconClose size={36}/> : <IconMenu size={36}/>}
      </label>
      <div className={`flex flex-col md:flex-row w-full justify-center items-center overflow-hidden ${isOpen? 'h-96' : 'h-0'} md:h-auto transition-all duration-500`} id="menu-toggle">
          <a href="" className={`px-6 py-6 md:py-3 lg:px-8 xl:px-10 tracking-navbar text-xs font-medium transition-all duration-500 `}>INICIO</a>
          <a href="" className={`px-6 py-6 md:py-3 lg:px-8 xl:px-10 tracking-navbar text-xs font-medium transition-all duration-500 `}>NOSOTROS</a>
          <a href="" className={`px-6 py-6 md:py-3 lg:px-8 xl:px-10 tracking-navbar text-xs font-medium transition-all duration-500 `}>SERVICIOS</a>
          <a href="" className={`px-6 py-6 md:py-3 lg:px-8 xl:px-10 tracking-navbar text-xs font-medium transition-all duration-500 `}>GALERIA </a>
          <a href="" className={`px-6 py-6 md:py-3 lg:px-8 xl:px-10 tracking-navbar text-xs font-medium transition-all duration-500 `}>CONTACTO</a>
      </div>
    </nav>
  )
}

export default Navbar