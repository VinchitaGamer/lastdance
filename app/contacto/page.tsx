export default function ContactPage() {
  const whatsappNumber = "59168079141";
  const whatsappMessage = encodeURIComponent(
    "Hola, vengo de la página web y estoy interesado en sus servicios."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <main className="flex-1 bg-zinc-950 px-4 py-20 text-zinc-50 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:gap-16 lg:grid-cols-[0.95fr_1.05fr] items-center">
        
        {/* Sección de texto */}
        <section className="space-y-6 lg:space-y-8">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-yellow-300">
            Contacto
          </p>
          <h1 className="max-w-xl text-5xl font-bold tracking-tight leading-[1.1] sm:text-6xl lg:text-7xl">
            Hagamos que tu web empiece a trabajar.
          </h1>
          <p className="max-w-lg text-lg leading-relaxed text-zinc-400">
            Cuéntanos qué necesitas y armamos una ruta clara para avanzar con foco.
          </p>
        </section>

        {/* Sección de tarjetas de contacto */}
        <section className="rounded-none border-2 border-white bg-zinc-950 p-6 shadow-[8px_8px_0px_0px_#facc15] sm:p-10">
          <div className="grid gap-5">
            
            {/* Contenedor de Información (Grid para poner correo y teléfono lado a lado en pantallas grandes) */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="group rounded-none border-2 border-white/10 bg-zinc-900/40 p-5 transition-all duration-300 shadow-[3px_3px_0px_0px_rgba(255,255,255,0.03)] hover:border-yellow-400 hover:shadow-[4px_4px_0px_0px_#facc15]">
                <p className="text-[10px] font-mono font-semibold uppercase tracking-[0.35em] text-zinc-500">
                  Correo
                </p>
                <p className="mt-3 text-sm font-mono font-bold text-yellow-300 transition-colors group-hover:text-yellow-200">
                  sourdev.inf@gmail.com
                </p>
              </div>

              <div className="group rounded-none border-2 border-white/10 bg-zinc-900/40 p-5 transition-all duration-300 shadow-[3px_3px_0px_0px_rgba(255,255,255,0.03)] hover:border-yellow-400 hover:shadow-[4px_4px_0px_0px_#facc15]">
                <p className="text-[10px] font-mono font-semibold uppercase tracking-[0.35em] text-zinc-500">
                  WhatsApp
                </p>
                <p className="mt-3 text-sm font-mono font-bold text-yellow-300 transition-colors group-hover:text-yellow-200">
                  +591 68079141
                </p>
              </div>
            </div>

            <div className="rounded-none border-2 border-white/10 bg-zinc-900/40 p-5 transition-all duration-300 shadow-[3px_3px_0px_0px_rgba(255,255,255,0.03)] hover:border-yellow-400 hover:shadow-[4px_4px_0px_0px_#facc15]">
              <p className="text-[10px] font-mono font-semibold uppercase tracking-[0.35em] text-zinc-500">
                Respuesta
              </p>
              <p className="mt-3 text-sm font-mono font-bold text-yellow-300">
                En menos de 24 horas
              </p>
            </div>

            {/* Call to Action - WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center rounded-none border-2 border-black bg-yellow-400 px-8 py-4 text-sm font-mono font-black uppercase tracking-wider text-zinc-950 transition-all shadow-[6px_6px_0px_0px_#ffffff] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_#ffffff] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            >
              Escribir ahora por WhatsApp
            </a>
            
          </div>
        </section>
      </div>
    </main>
  );
}