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
        <section className="rounded-[2.5rem] border border-white/5 bg-zinc-900/40 p-6 shadow-2xl backdrop-blur-xl sm:p-10">
          <div className="grid gap-5">
            
            {/* Contenedor de Información (Grid para poner correo y teléfono lado a lado en pantallas grandes) */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="group rounded-2xl border border-white/5 bg-zinc-950/50 p-5 transition-colors hover:bg-zinc-900/80">
                <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-zinc-500">
                  Correo
                </p>
                <p className="mt-3 text-base font-medium text-yellow-300 transition-colors group-hover:text-yellow-200">
                  sourdev.inf@gmail.com
                </p>
              </div>

              <div className="group rounded-2xl border border-white/5 bg-zinc-950/50 p-5 transition-colors hover:bg-zinc-900/80">
                <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-zinc-500">
                  WhatsApp
                </p>
                <p className="mt-3 text-base font-medium text-yellow-300 transition-colors group-hover:text-yellow-200">
                  +591 68079141
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/5 bg-zinc-950/50 p-5 transition-colors hover:bg-zinc-900/80">
              <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-zinc-500">
                Respuesta
              </p>
              <p className="mt-3 text-base font-medium text-yellow-300">
                En menos de 24 horas
              </p>
            </div>

            {/* Call to Action - WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-yellow-400 px-8 py-4 text-sm font-bold tracking-wide text-zinc-950 transition-all hover:scale-[1.02] hover:bg-yellow-300 active:scale-[0.98] shadow-[0_0_30px_-10px_rgba(250,204,21,0.25)]"
            >
              Escribir ahora por WhatsApp
            </a>
            
          </div>
        </section>
      </div>
    </main>
  );
}