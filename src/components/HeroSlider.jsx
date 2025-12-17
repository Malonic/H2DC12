import { useEffect, useState } from "react"

const slides = [
  {
    image: "/images/hero/hero3.png",
    text: "IIT Delhi Incubated Clean Energy Research"
  },
  {
    image: "/images/hero/hero1.png",
    text: "Membraneless Microfluidic Electrolysis"
  },
  {
    image: "/images/hero/hero2.png",
    text: "Decarbonizing Hydrogen at the Microscale"
  }
  
]

export default function HeroSlider() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

 return (
  <section className="relative h-[80vh] w-full overflow-hidden">

    {/* Background Image */}
    <img
      src={slides[index].image}
      className="absolute inset-0 w-full h-full object-cover brightness-90 contrast-110"
      alt=""
    />

    {/* Overlay (USE ONLY ONE – gradient is best) */}
    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/20 to-slate-900/40" />

    {/* Text Content */}
    <div className="relative z-10 h-full flex items-center justify-center px-6">
      <h1 className="text-3xl md:text-5xl font-light tracking-[0.2em] text-white text-center max-w-4xl">
        {slides[index].text}
      </h1>
    </div>

  </section>
)

}
