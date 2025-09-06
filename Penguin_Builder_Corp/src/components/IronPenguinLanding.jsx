import React from "react";
import Logo from "/assets/Final_logo_Iron_Pen.png";

export default function IronPenguinLanding() {
  return (
    <div className="min-h-screen bg-neutral-800 text-neutral-200 p-6 font-poppins">
      <main className="w-full max-w-4xl mx-auto">
        {/* Hero headline */}
        <section className="mt-10 text-center">
          <img
            src={Logo}
            alt="Iron Penguin Builders Logo"
            className="mx-auto max-w-xs md:max-w-sm lg:max-w-md h-auto"
          />
          <h2 className="text-3xl md:text-5xl leading-tight font-poppins text-amber-100 mt-6">
            GENRERAL CONTRACTING
            <br className="hidden md:block" /> IN RHODE ISLAND
          </h2>
        </section>

        {/* About */}
        <section className="mt-12 md:mt-16">
          <h3 className="text-center text-xl md:text-2xl font-semibold text-amber-100">
            ABOUT
          </h3>
          <p className="mt-6 mx-auto max-w-2xl text-center text-lg md:text-xl leading-8 md:leading-9 font-light text-[#d7c9b2] [text-wrap:balance]">
            Based in Warwick, Rhode Island, Iron Penguin Builders brings over 15
            years of combined experience in contracting and metal work. Our team
            is committed to delivering projects with precision, durability, and
            modern craftsmanship — every build designed to stand the test of
            time.
          </p>
        </section>

        {/* Footer / Coming Soon */}
        <section className="mt-20 md:mt-28">
          <p className="text-center text-base md:text-3xl uppercase tracking-[0.25em] text-[#d7c9b2] font-bold">
            FULL WEBSITE COMING SOON
          </p>
        </section>
      </main>
    </div>
  );
}
