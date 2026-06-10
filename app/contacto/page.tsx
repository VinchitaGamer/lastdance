export default function ContactPage() {
  return (
    <main className="flex-1 bg-zinc-950 px-4 py-20 text-zinc-50 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <section className="space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-yellow-300">Contacto</p>
          <h1 className="max-w-xl text-5xl font-semibold leading-none sm:text-6xl">
            Hagamos que tu web empiece a trabajar.
          </h1>
          <p className="max-w-lg text-lg leading-8 text-zinc-300">
            Cuéntanos qué necesitas y armamos una ruta clara para avanzar con foco.
          </p>
        </section>

        <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl sm:p-8">
          <div className="grid gap-4">
            <div className="rounded-2xl border border-white/10 bg-zinc-900/70 p-4">
              <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">Correo</p>
              <p className="mt-2 text-lg text-yellow-300">hola@sourdev.com</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-zinc-900/70 p-4">
              <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">Respuesta</p>
              <p className="mt-2 text-lg text-yellow-300">En menos de 24 horas</p>
            </div>
            <a
              href="mailto:hola@sourdev.com"
              className="inline-flex items-center justify-center rounded-full border border-yellow-400/60 bg-yellow-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-yellow-300"
            >
              Escribir ahora
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}