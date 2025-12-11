import { Phone , Mail, Facebook, Instagram, XTwitter, LinkedIn} from "../components/Icons"

function Contact() {

  return (
    <>
      <section className="flex justify-center items-center bg-light px-4 pb-6" id="contact">
        <div className="w-full max-w-5xl bg-linear-to-br from-primary-dark to-primary text-light rounded-global p-8 md:p-12 flex flex-col md:flex-row gap-12 md:gap-16">
          <div className="flex flex-col gap-8 flex-1 py-8">
            <h2 className='text-2xl text-center tracking-title text-light'>CONTACTO</h2>
            <div className="grid grid-cols-[auto_1fr] gap-y-6 gap-x-4">
              <div className="flex items-center justify-center">
                <Phone size={18}/>
              </div>
              <p className="font-light cursor-text">+52 55 7601 4517</p>
              <div className="flex items-center justify-center">
                <Phone size={18}/>
              </div>
              <p className="font-light cursor-text">+52 55 3241 6727</p>
              <div className="flex items-center justify-center">
                <Mail size={18}/>
              </div>
              <p className="font-light cursor-text break-all">grodriguezmained@gmail.com</p>
            </div>
            <div className="flex flex-row gap-4 md:gap-2 justify-center md:justify-start">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 cursor-pointer rounded-global hover:text-primary hover:bg-light transition-colors duration-200">
                <Facebook size={20}/>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 cursor-pointer rounded-global hover:text-primary hover:bg-light transition-colors duration-200">
                <Instagram size={20}/>
              </a>
              <a href="https://www.x.com" target="_blank" rel="noopener noreferrer" className="p-2 cursor-pointer rounded-global hover:text-primary hover:bg-light transition-colors duration-200">
                <XTwitter size={20}/>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 cursor-pointer rounded-global hover:text-primary hover:bg-light transition-colors duration-200">
                <LinkedIn size={20}/>
              </a>
            </div>
          </div>
          <form action="" method="POST" className="flex flex-col gap-8 flex-1 rounded-global p-0 md:p-6">
            <div className="relative">
              <input type="text" name="name" className="peer block w-full border border-transparent border-b-light/30 p-3 rounded-global outline-none" id="name" placeholder=" " autoComplete="off" required/>
              <label htmlFor="name" className="absolute cursor-text text-light/60 peer-focus:text-light left-3 top-3 peer-focus:-top-6 peer-focus:left-1 peer-focus:text-sm peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:left-1 peer-not-placeholder-shown:text-sm transition-all duration-300">Nombre</label>
            </div>
            <div className="relative">
              <input type="email" name="email" className="peer block w-full border border-transparent border-b-light/30 p-3 rounded-global outline-none" id="email" placeholder=" " autoComplete="off" required/>
              <label htmlFor="email" className="absolute cursor-text text-light/60 peer-focus:text-light left-3 top-3 peer-focus:-top-6 peer-focus:left-1 peer-focus:text-sm peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:left-1 peer-not-placeholder-shown:text-sm transition-all duration-300">Correo</label>
            </div>
            <div className="relative">
              <textarea name="message" rows="4" className="peer block w-full border border-transparent border-b-light/30 p-3 rounded-global outline-none" id="message" placeholder=" " required></textarea>
              <label htmlFor="message" className="absolute cursor-text text-light/60 peer-focus:text-light left-3 top-3 peer-focus:-top-6 peer-focus:left-1 peer-focus:text-sm peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:left-1 peer-not-placeholder-shown:text-sm transition-all duration-300">Mensaje</label>
            </div>
            <button type="submit" className="w-full bg-light text-dark py-3 rounded-global hover:bg-light/80 transition duration-200">Enviar mensaje</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact