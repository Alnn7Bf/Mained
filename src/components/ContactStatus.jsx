import { CheckIcon } from "../components/Icons";

function ContactStatus({ sendingDone }) {
  return (
    <>
        <div className="flex flex-col bg-light/10 justify-center items-center text-center gap-6 flex-1 p-6">
            {
                !sendingDone? (
                <>
                    <h3 className="text-xl tracking-title text-light">ENVIANDO CORREO...</h3>
                    <p className="text-light/80 max-w-sm">
                    Por favor espere un momento.
                    </p>
                    <div className="w-8 h-8 border-4 border-light/40 border-t-light rounded-full animate-spin"></div>
                </>
                ) : (
                <>
                    <h3 className="text-xl tracking-title text-light">CORREO ENVIADO!</h3>
                    <p className="text-light/80 max-w-sm">
                    Gracias por escribirnos. Le responderemos lo más pronto posible.
                    </p>
                    <CheckIcon size={32}/>
                </>
                )
            }
        </div>
    </>
  );
}

export default ContactStatus;
