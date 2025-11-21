import { useState, useEffect } from 'react'
import {IconMenu, IconClose} from './Icons'
  
const LinkItem = ({text, onClick}) => {
  return (
    <>
      <a className={`px-6 py-6 md:py-3 lg:px-8 xl:px-10 tracking-navbar text-xs font-medium hover:text-gray-700 cursor-pointer`} onClick={onClick}>{text}</a>
    </>
  )
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const linkFunction = (ref) => {
    toggleMenu();
    document.getElementById(ref)?.scrollIntoView({behavior:'smooth'});
  }

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (!aboutSection) return;

      const top = aboutSection.getBoundingClientRect().top;

      setScrolled(top <= 0);
    };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <nav className={`z-20 flex fixed w-dvw ${isOpen? 'bg-light/80' : 'bg-light/50'} md:bg-light/50 justify-center flex-col md:flex-row backdrop-blur-xs text-black transition-all duration-500 shadow-sm`} id="menu">
      <label className="cursor-pointer md:hidden m-2" onClick={toggleMenu}>
        {isOpen? <IconClose size={36}/> : <IconMenu size={36}/>}
      </label>
      <div className={`flex flex-col md:flex-row w-full justify-center items-center overflow-hidden ${isOpen? 'h-96' : 'h-0'} md:h-auto transition-all duration-500`} id="menu-toggle">
          <LinkItem text={'INICIO'} onClick={() => linkFunction('start')}/>
          <LinkItem text={'NOSOTROS'} onClick={() => linkFunction('about')}/>
          <LinkItem text={'SERVICIOS'} onClick={() => linkFunction('services')}/>
          <LinkItem text={'GALERIA'} onClick={() => linkFunction('gallery')}/>
          <LinkItem text={'CONTACTO'} onClick={() => linkFunction('contact')}/>
      </div>
    </nav>
  )
}

export default Navbar