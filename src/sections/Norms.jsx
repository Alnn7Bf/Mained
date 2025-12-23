import { useState } from "react";
import {NavArrowDownIcon, NavArrowUpIcon} from "../components/Icons"
import useScreenWidth from "../hooks/useScreenWidth"

const normas = [
  {
    code: "NOM-009-STPS-2011",
    description: "Condiciones de seguridad para trabajos en altura.",
    ref: ''
  },
  {
    code: "Norma ANSI Z 359.1",
    description: "Requisitos de sistemas personales de detención de caídas.",
    ref: ''
  },
  {
    code: "ANSI A10.32",
    description: "Especificaciones de equipos y sistemas de protección contra caídas en construcción.",
    ref: ''
  },
  {
    code: "Norma OSHA 29 CFR 1926",
    description: "Regulaciones de seguridad en la construcción en Estados Unidos.",
    ref: ''
  },
  {
    code: "Norma NOM-017-STPS-2008",
    description: "Requisitos para la selección, uso y manejo del equipo de protección personal.",
    ref: ''
  },
  {
    code: "Norma NOM-015-STPS-2001",
    description: "Condiciones térmicas elevadas o abatidas — protección del trabajador.",
    ref: ''
  },
  {
    code: "Norma NOM-013-STPS-1993",
    description: "Condiciones de seguridad e higiene en trabajos que generen radiaciones no ionizantes.",
    ref: ''
  },
  {
    code: "NMX-EC-17025-IMNC-2006",
    description: "Requisitos generales para la competencia de los laboratorios de ensayo y calibración.",
    ref: ''
  },
  {
    code: "NMX-CC-9001-IMNC-2008",
    description: "Sistema de gestión de calidad basado en ISO 9001.",
    ref: ''
  },
  {
    code: "NRF-024-PEMEX-2009",
    description: "Especificaciones y lineamientos de seguridad para trabajos en instalaciones de PEMEX.",
    ref: ''
  },
  {
    code: "NRF-063-CFE-2007",
    description: "Requisitos técnicos para trabajos y equipos utilizados en instalaciones eléctricas de CFE.",
    ref: ''
  },
  {
    code: "NRF-032-CFE-2010",
    description: "Lineamientos técnicos para estructuras y obras relacionadas con redes eléctricas.",
    ref: ''
  },
  {
    code: "NMX-S-058/1-SCFI-2005",
    description: "Requisitos generales para equipos de protección personal contra caídas.",
    ref: ''
  },
  {
    code: "NMX-S-058/5-SCFI-2005",
    description: "Especificaciones de desempeño para componentes de sistemas de detención de caídas.",
    ref: ''
  },
  {
    code: "PROY-NMX-S-058/2-SCFI-2006",
    description: "Proyecto de norma para líneas de vida y sistemas horizontales de protección.",
    ref: ''
  }
];

function Norms() {
  const [isOpen, setIsOpen] = useState(false);
  const width = useScreenWidth();

  const limit = width >= 768 ? 6 : 3;
  const modal = isOpen ? normas : normas.slice(0, limit);

  return (
    <>
      <section className="flex justify-center bg-light w-full px-10 py-10" id="norms">
        <div className="max-w-6xl w-full flex flex-col gap-4">
          <h2 className='text-2xl text-center tracking-title'>MARCO NORMATIVO</h2>
          <p className="text-md text-center md:text-left text-primary">Cumplimos con las normas aplicables para garantizar seguridad, calidad y confianza en nuestros servicios:</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {
              modal.map(({code, description, ref}, index) => (
                <li key={index} className="p-4 rounded-global bg-white border-l-4 border-primary cursor-pointer shadow-md" onClick={() => ref && window.open(ref, '_blank')}>
                  <h3 className="text-lg font-medium tracking-wide">{code}</h3>
                  {
                    isOpen?
                    (
                      <p className="text-sm text-primary/80">{description}</p>
                    ) : (
                      <></>
                    )
                  }
                </li>
              ))
            }
          </ul>
          <button className="flex flex-row gap-2 items-center bg-primary text-white font-light mx-auto py-2 px-6 rounded-global hover:bg-primary/90" onClick={() => {setIsOpen(!isOpen)}}>
            Ver {isOpen? 'menos' : 'más'}
            {isOpen? <NavArrowUpIcon size={20}/> : <NavArrowDownIcon size={20}/>}
          </button>
        </div>
      </section>
    </>
  )
}

export default Norms