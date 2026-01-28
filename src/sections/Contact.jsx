import { useState } from "react"
import { PhoneIcon , MailIcon, WhatsAppIcon, FacebookIcon, InstagramIcon, XTwitterIcon, LinkedInIcon, SendIcon } from "../components/Icons"
import ContactStatus from "../components/ContactStatus";

const FloatingInput = ({type, name, text}) => {
  return (
    <>
      <div className="relative">
        <input 
          type={type} 
          name={name} 
          className="peer block w-full border border-transparent border-b-light/30 p-3 rounded-global outline-none" 
          id={name} 
          placeholder=" " 
          autoComplete="off" 
          required
        />
        <label 
          htmlFor={name} 
          className="
            absolute 
            cursor-text 
            text-light/60 
            peer-focus:text-light 
            left-3 
            top-3 
            peer-focus:-top-4 
            peer-focus:left-1 
            peer-focus:text-sm 
            peer-not-placeholder-shown:-top-4 
            peer-not-placeholder-shown:left-1 
            peer-not-placeholder-shown:text-sm 
            transition-all 
            duration-300
          ">
            {text}
          </label>
      </div>
    </>
  )
}

const SocialButton = ({path, icon}) => {
  const Icon = icon;

  return (
    <>
      <a 
        href={`https://www.${path}.com`}
        target="_blank" 
        rel="noopener noreferrer" 
        className="p-2 cursor-pointer rounded-global hover:text-primary hover:bg-light transition-colors duration-200"
      >
        <Icon size={25}/>
      </a>
    </>
  )
}

const CopyText = ({text}) => {
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 21800);
    } catch (err) {
      console.warn("No se pudo copiar al portapapeles");
    }
  };

  return (
    <>
      <div className="relative flex items-center p-1">
        <p 
          onClick={handleCopy}
          className="w-auto font-light cursor-pointer break-all"
          title="Haz click para copiar">
            {text}
        </p>
        {isCopied && (
          <span className="hidden md:block absolute top-8 bg-primary-dark/60 text-white text-xs px-2 py-1 border border-light font-sans">
            Copiado
          </span>
        )}
      </div>
    </>
  );
};

function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [sendingDone, setSendingDone] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormSubmitted(true);
    setSendingDone(false);

    try {
      const res = await fetch("https://formspree.io/f/xdkqwqnn", {
        method: "POST",
        headers: { 'Accept': 'application/json' },
        body: new FormData(e.target)
      });
      if(res.ok) {
        setTimeout(() => {
          setSendingDone(true);
        }, 1000);
        setTimeout(() => {
          setFormSubmitted(false)
          setSendingDone(false);
        }, 4000);
      }
    } catch(error) {
      console.error("Error uncaught", error);
    }
  }

  return (
    <>
      <section className="flex justify-center items-center bg-light px-4 my-8" id="contact">
        <div className="w-full max-w-5xl bg-linear-to-br from-primary-dark to-primary text-light rounded-global p-8 md:p-12 flex flex-col md:flex-row gap-12 md:gap-16">
          <div className="flex flex-col gap-8 flex-1 py-8">
            <h2 className='text-2xl text-center tracking-title text-light'>CONTÁCTANOS</h2>
            <div className="grid grid-cols-[auto_1fr] gap-y-6 gap-x-4">
              <div className="flex items-center justify-center">
                <PhoneIcon size={20}/>
              </div>
              <CopyText text={'+52 55 7601 4517'}/>
              <div className="flex items-center justify-center">
                <WhatsAppIcon size={20}/>
              </div>
              <CopyText text={'+52 55 3241 6727'}/>
              <div className="flex items-center justify-center">
                <MailIcon size={20}/>
              </div>
              <CopyText text={'grodriguezmained@gmail.com'}/>
            </div>
            {/* <div className="flex flex-row gap-4 md:gap-2 justify-center md:justify-start">
              <SocialButton path="facebook" icon={FacebookIcon} />
              <SocialButton path="instagram" icon={InstagramIcon} />
              <SocialButton path="x" icon={XTwitterIcon} />
              <SocialButton path="linkedin" icon={LinkedInIcon} />
            </div> */}
          </div>
          {
            formSubmitted? (
              <ContactStatus sendingDone={sendingDone}/>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8 flex-1 p-0 md:p-6">
                <input type="text" name="_gotcha" className="hidden"/>
                <FloatingInput type={"text"} name={"name"} text={"Nombre"}/>
                <FloatingInput type={"email"} name={"email"} text={"Correo"}/>
                <FloatingInput type={"tel"} name={"phone"} text={"Teléfono"}/>
                <div className="relative">
                  <textarea 
                    name="message" 
                    rows="3" 
                    className="peer block w-full border border-transparent border-b-light/30 p-3 rounded-global outline-none" 
                    id="message" 
                    placeholder=" " 
                    required
                  ></textarea>
                  <label 
                    htmlFor="message" 
                    className="
                      absolute 
                      cursor-text 
                      text-light/60 
                      peer-focus:text-light 
                      left-3 
                      top-3 
                      peer-focus:-top-6 
                      peer-focus:left-1 
                      peer-focus:text-sm 
                      peer-not-placeholder-shown:-top-6 
                      peer-not-placeholder-shown:left-1 
                      peer-not-placeholder-shown:text-sm 
                      transition-all 
                      duration-300
                    ">Mensaje</label>
                </div>
                <button type="submit" className="flex items-center gap-3 justify-center w-full bg-primary-light/50 hover:bg-primary-light text-white font-light px-6 py-3 rounded-global transition duration-200 cursor-pointer">
                  <span>Enviar mensaje</span>
                  <SendIcon size={20}/>
                </button>
              </form>
            )
          }
        </div>
      </section>
    </>
  )
}

export default Contact