import { useState } from 'react'
import {IconMenu, IconClose} from './Icons'

const LinkItem = ({ref, text, onClick}) => {
  return (
    <>
      <a href={ref} className={`px-6 py-6 md:py-3 lg:px-8 xl:px-10 tracking-navbar text-xs font-medium hover:text-black/50 transition-all duration-500`} onClick={onClick}>{text}</a>
    </>
  )
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`z-20 flex fixed w-dvw ${isOpen? 'bg-light/90' : 'bg-light/50'} md:bg-light/50 justify-center flex-col md:flex-row text-black transition-all duration-500`} id="menu">
      <label className="cursor-pointer md:hidden m-2" onClick={toggleMenu}>
        {isOpen? <IconClose size={36}/> : <IconMenu size={36}/>}
      </label>
      <div className={`flex flex-col md:flex-row w-full justify-center items-center overflow-hidden ${isOpen? 'h-96' : 'h-0'} md:h-auto transition-all duration-500`} id="menu-toggle">
          <LinkItem ref={'#'} text={'INICIO'} onClick={toggleMenu}/>
          <LinkItem ref={'#'} text={'NOSOTROS'} onClick={toggleMenu}/>
          <LinkItem ref={'#'} text={'SERVICIOS'} onClick={toggleMenu}/>
          <LinkItem ref={'#'} text={'GALERIA'} onClick={toggleMenu}/>
          <LinkItem ref={'#'} text={'CONTACTO'} onClick={toggleMenu}/>
      </div>
    </nav>
  )
}

export default Navbar