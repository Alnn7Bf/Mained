import { useState } from 'react'
import useScreenWidth from "../hooks/useScreenWidth"
import { MenuIcon, CloseIcon, NavArrowDownIcon, NavArrowUpIcon } from './Icons'

  
const LinkItem = ({children, onClick}) => {
  return (
    <>
      <a className={`flex gap-2 items-center p-4 md:py-3 lg:px-8 xl:px-10 tracking-navbar text-xs font-medium hover:text-gray-700 cursor-pointer`} onClick={onClick}>{children}</a>
    </>
  )
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const screenWidth = useScreenWidth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsMoreOpen(false);
  };

  const linkFunction = (ref) => {
    setIsMoreOpen(false);
    setIsOpen(false);

    const element = document.getElementById(ref);
    if(!element) return;
    
    const offset = screenWidth >= 768 ? -40 : -52;

    window.scrollTo({
      top: element.getBoundingClientRect().top + window.scrollY + offset,
      behavior: 'smooth'
    });
  }

  return (
    <nav 
      className={`
        z-20 
        flex 
        fixed 
        w-dvw 
        ${isOpen? 'bg-light/80' : 'bg-light/50'} 
        md:bg-light/50 
        justify-center 
        flex-col 
        md:flex-row 
        backdrop-blur-xs 
        text-black 
        transition-all 
        duration-500 
        shadow-sm
      `} 
      id="menu"
    >
      <label className="md:hidden m-2">
        <div 
          className='cursor-pointer w-min' 
          onClick={toggleMenu}
        >
          {isOpen? <CloseIcon size={36}/> : <MenuIcon size={36}/>}
        </div> 
      </label>
      <div 
        className={`
          flex 
          flex-col
          md:flex-row 
          ${isOpen? 'h-dvh' : 'h-0'}
          md:h-auto
          w-full 
          justify-start 
          md:justify-center
          items-center 
          md:items-start
          overflow-hidden 
          transition-all 
          duration-500
        `} 
        id="menu-toggle"
      >
        <LinkItem children={'INICIO'} onClick={() => linkFunction('start')}/>
        <LinkItem children={'NOSOTROS'} onClick={() => linkFunction('about')}/>
        <LinkItem children={'SERVICIOS'} onClick={() => linkFunction('services')}/>
        <LinkItem children={'GALERÍA'} onClick={() => linkFunction('gallery')}/>
        {
          screenWidth >= 768? (
            <div className='relative flex flex-col items-center justify-center transition-all duration-500'>
              <LinkItem onClick={() => setIsMoreOpen(!isMoreOpen)}> 
                <>MÁS</>
                {
                  isMoreOpen? <NavArrowUpIcon size={15}/> : <NavArrowDownIcon size={15}/>
                }
              </LinkItem>
              <div className={`
                ${isMoreOpen? "max-h-20 opacity-100" : "max-h-0 opacity-0"}
                w-0
                flex 
                flex-col 
                items-center 
                transition-all 
                duration-500
              `}>
                <LinkItem children={'CLIENTES'} onClick={() => linkFunction('clients')}/>
                <LinkItem children={'NORMATIVIDAD'} onClick={() => linkFunction('norms')}/>
              </div>
            </div>
          ) : (
            <>
              <LinkItem children={'CLIENTES'} onClick={() => linkFunction('clients')}/>
              <LinkItem children={'NORMATIVIDAD'} onClick={() => linkFunction('norms')}/>
            </>
          )
        }
        <LinkItem children={'CONTACTO'} onClick={() => linkFunction('contact')}/>
      </div>
    </nav>
  )
}

export default Navbar