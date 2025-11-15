import { useRef } from "react";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

import bg from "../assets/header-bg.jpg"

gsap.registerPlugin(ScrollTrigger);

const sectionData = {
  img: bg, text: "texto"
}

const getRatio = (el) => window.innerHeight / (window.innerHeight + el.offsetHeight);

const ParallaxSection = ({img, text}) => {
  <section>
    <div className={`bg-${img}`}>
    <h2>{text}</h2>
    </div>
  </section>
}

function Hero() {


  return (
    <>
      
    </>
  )
}

export default Hero