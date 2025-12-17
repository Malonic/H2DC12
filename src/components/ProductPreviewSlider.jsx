import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const products = [
  {
    title: "Membraneless Microfluidic Electrolyzer",
    category: "Clean Energy",
    image: "/images/products/stack.jpg",
    anchor: "membraneless-electrolyzer",
  },
  {
    title: "Microfluidic Electrochemical Units",
    category: "Research Hardware",
    image: "/images/products/product2.jpg",
    anchor: "microfluidic-units",
  },
  {
    title: "Additive Manufacturing",
    category: "Fabrication",
    image: "/images/products/product3.jpg",
    anchor: "additive-manufacturing",
  },
  {
    title: "Testing & Characterization",
    category: "Services",
    image: "/images/products/product4.jpg",
    anchor: "testing-characterization",
  },
];

export default function ProductPreviewSlider() {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  const active = products[index];

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 400);
    return () => clearTimeout(timer);
  }, [index]);

  const prev = () =>
    setIndex((i) => (i - 1 + products.length) % products.length);

  const next = () =>
    setIndex((i) => (i + 1) % products.length);

  return (
    <section
      className="relative w-full overflow-hidden py-14 lg:py-18"
      style={{
        backgroundColor: "#f8fafc",
        backgroundImage: `
          linear-gradient(to right, rgba(15,23,42,0.06) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(15,23,42,0.06) 1px, transparent 1px)
        `,
        backgroundSize: "32px 32px",
      }}
    >
      {/* subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] left-[10%] w-72 h-72 bg-sky-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[15%] right-[10%] w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 mb-3 text-[11px] tracking-[0.25em] uppercase rounded-full bg-sky-50 border border-sky-100 text-sky-700">
            Our Solutions
          </span>
          <h2 className="text-2xl md:text-4xl font-semibold text-slate-900">
            Precision Electrochemistry
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-slate-600 text-base leading-relaxed">
            Hardware and services designed for high-performance microfluidic electrochemical applications.
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          {/* desktop arrows */}
          <div className="hidden xl:block absolute top-1/2 -left-6 -translate-y-1/2 z-20">
            <NavButton onClick={prev} icon="←" label="Previous" />
          </div>
          <div className="hidden xl:block absolute top-1/2 -right-6 -translate-y-1/2 z-20">
            <NavButton onClick={next} icon="→" label="Next" />
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">

            {/* IMAGE */}
            <div className="relative md:w-1/2 bg-slate-50 border-b md:border-b-0 md:border-r border-slate-100 p-8 flex items-center justify-center">
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: "radial-gradient(#64748b 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
              <img
                key={index}
                src={active.image}
                alt={active.title}
                className={`max-h-[320px] object-contain drop-shadow-xl transition-all duration-500 ${
                  isAnimating ? "scale-95 opacity-0" : "scale-100 opacity-100"
                }`}
              />
            </div>

            {/* CONTENT */}
            <div className="relative md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                  backgroundImage: "radial-gradient(#64748b 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />

              <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs uppercase tracking-[0.25em] text-sky-700">
                    {active.category}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-slate-300" />
                  <span className="text-xs text-slate-400">
                    0{index + 1} / 0{products.length}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-4">
                  {active.title}
                </h3>

                <div className="flex gap-4 flex-wrap">
                  <button
                    onClick={() =>
                      navigate(`/products#${active.anchor}`)
                    }
                    className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl text-sm font-medium shadow-lg shadow-slate-900/20"
                  >
                    View Details
                  </button>

                  <button
                    onClick={() => navigate("/contact")}
                    className="px-6 py-3 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 border border-transparent hover:border-slate-200"
                  >
                    Contact Sales
                  </button>
                </div>
              </div>

              {/* mobile controls */}
              <div className="mt-8 flex items-center gap-4 xl:hidden">
                <button onClick={prev} className="h-10 w-10 rounded-full border border-slate-200">←</button>
                <button onClick={next} className="h-10 w-10 rounded-full border border-slate-200">→</button>
                <div className="flex-1 h-1 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-slate-900 transition-all"
                    style={{ width: `${((index + 1) / products.length) * 100}%` }}
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NavButton({ onClick, icon, label }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className="h-12 w-12 rounded-full bg-white border border-slate-100 shadow-md flex items-center justify-center text-xl text-slate-600 hover:text-sky-600 transition"
    >
      {icon}
    </button>
  );
}
