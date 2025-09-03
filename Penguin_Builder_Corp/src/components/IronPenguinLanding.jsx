import React from "react";
import Logo from "/public/assets/Final_logo_Iron_Pen.png"

export default function IronPenguinLanding() {
  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-200 p-6">
      <main className="w-full max-w-4xl mx-auto">
        {/* Hero headline */}
        <section className="mt-10 text-center">
          <img
            src={Logo}
            alt="Iron Penguin Builders Logo"
            className="mx-auto max-w-xs md:max-w-sm lg:max-w-md h-auto"
          />
          <h2 className="text-3xl md:text-5xl leading-tight font-serif text-amber-100 mt-6">
            Custom Homes. Built to
            <br className="hidden md:block" /> Endure. Designed to Impress.
          </h2>
          <p className="mt-6 text-base md:text-lg text-neutral-300 max-w-2xl mx-auto">
            Iron Penguin Builders is coming soon—delivering detail-driven
            construction and modern design across Rhode Island.
          </p>
        </section>

        {/* About */}
        <section className="mt-12 md:mt-16">
          <h3 className="text-center text-xl md:text-2xl font-semibold text-amber-100">
            About
          </h3>
          <p className="mt-4 text-neutral-300 leading-relaxed max-w-3xl mx-auto text-base md:text-lg">
            Based in Warwick, Rhode Island, Iron Penguin Builders focuses on
            modern residential construction with an emphasis on craftsmanship,
            coastal durability, and creative execution. We specialize in custom
            homes, ADUs, and container builds that challenge convention—built
            with intention, finished with precision.
          </p>
        </section>

        {/* Grid: Who we serve / Services */}
        <section className="mt-12 md:mt-16 grid md:grid-cols-2 gap-10">
          <div>
            <h4 className="text-sm font-semibold tracking-widest text-neutral-400">
              WHO WE SERVE
            </h4>
            <ul className="mt-4 space-y-2 text-neutral-300">
              <li>Warwick, East Greenwich, Narragansett, Newport</li>
              <li>and Greater Rhode Island.</li>
              <li className="italic text-neutral-400 mt-2">
                Now booking projects for 2026.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold tracking-widest text-neutral-400">
              SERVICES
            </h4>
            <ul className="mt-4 space-y-2 text-neutral-300">
              <li>Custom Home Building</li>
              <li>Container Homes & Modular Spaces</li>
              <li>Architectural ADUs</li>
              <li>Design–Build Consultations</li>
            </ul>
          </div>
        </section>

        {/* Email sign-up */}
        <section className="mt-14 md:mt-20 text-center">
          <h3 className="text-2xl md:text-3xl font-serif text-amber-100">
            Want to get on the list?
          </h3>
          <p className="mt-3 text-neutral-400">
            We’ll reach out when we’re accepting new clients.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-xl mx-auto"
          >
            <input
              type="email"
              placeholder="Email"
              className="flex-1 px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-700 text-neutral-200 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-300/50"
              required
            />
            <button
              type="submit"
              className="px-5 py-3 rounded-xl bg-amber-300 text-neutral-900 font-semibold hover:bg-amber-200 transition"
            >
              LET’S BUILD
            </button>
          </form>
        </section>

        {/* Footer */}
        <footer className="mt-12 md:mt-16 text-center text-sm text-neutral-500">
          <p>info@ironpenguinbuilders.com · ironpenguinbuilders.com</p>
        </footer>
      </main>
    </div>
  );
}
