import { useEffect } from "react";

export default function ProductsPage() {

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) return;

      const id = hash.replace("#", "");
      const el = document.getElementById(id);

      if (el) {
        // wait for layout + images
        requestAnimationFrame(() => {
          el.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        });
      }
    };

    // run on first load
    scrollToHash();

    // run on hash changes
    window.addEventListener("hashchange", scrollToHash);

    return () => {
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);


  
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-20 lg:px-8 lg:py-28 space-y-24">
        {/* =====================================================
            1. MEMBRANELESS MICROFLUIDIC ELECTROLYZER
        ===================================================== */}
        <section
          id="membraneless-electrolyzer"
          className="scroll-mt-24"
        >
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
            <div className="space-y-8">
              <h1 className="text-balance text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
                1) Membraneless Microfluidic Electrolyzer
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                This technology represents a paradigm shift from conventional Proton
                Exchange Membrane (PEM) or alkaline electrolyzers by completely
                eliminating the solid physical membrane separator.
              </p>

              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
                    The Core Problem & Solution
                  </h2>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    Traditional electrolyzers rely on physical membranes (like Nafion)
                    to separate hydrogen and oxygen gases. However, these membranes,
                    along with flow plates and liquid distribution layers,
                    significantly increase the complexity and cost of the system. The
                    cost of electrolysis production remains high (USD $10.3/Kg)
                    compared to fossil-fuel-derived hydrogen.
                  </p>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    The proposed solution is a Membraneless Microfluidic technique that
                    relies on fluid dynamics rather than physical barriers.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
                    Operating Mechanism
                  </h2>
                  <ul className="space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed list-disc pl-5">
                    <li>
                      <strong className="text-blue-700">Co-Laminar Flow:</strong>{' '}
                      The device utilizes a co-laminar flow mechanism. Inside the
                      micro-channels, the anolyte and catholyte streams flow parallel
                      to each other without mixing due to the low Reynolds number
                      characteristic of microfluidics.
                    </li>
                    <li>
                      <strong className="text-blue-700">Gas Separation:</strong>{' '}
                      This flow regime creates a virtual interface that naturally
                      inhibits gas intermixing while allowing ion transport, leading to
                      controlled product separation.
                    </li>
                    <li>
                      <strong className="text-blue-700">Mass Transport:</strong>{' '}
                      The microfluidic architecture provides a high surface-to-volume
                      ratio and a high rate of convective mass transport, which
                      optimizes thermodynamic equilibrium without compromising current
                      density.
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
                    Key Advantages
                  </h2>
                  <ul className="space-y-2.5 text-sm sm:text-base text-slate-700 list-disc pl-5">
                    <li>
                      <strong className="text-blue-700">Cost Reduction:</strong>{' '}
                      Removing the membrane reduces the overall cost and complexity of
                      the stack.
                    </li>
                    <li>
                      <strong className="text-blue-700">Versatility:</strong> It
                      allows for easy flow control and operates efficiently with
                      porous electrodes.
                    </li>
                    <li>
                      <strong className="text-blue-700">Tandem Operation:</strong>{' '}
                      The system supports electrolysis-fuel cell tandem operations.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <figure className="relative">
              <div className="group relative rounded-3xl border border-slate-200 bg-slate-50/80 backdrop-blur-xl p-4 sm:p-6 shadow-[0_18px_50px_rgba(15,23,42,0.12)] ring-1 ring-slate-100">
                <div className="pointer-events-none absolute inset-px rounded-3xl bg-gradient-to-br from-blue-500/10 via-sky-400/5 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src="/images/products/p1i1.png"
                  alt="Membraneless microfluidic electrolyzer schematic"
                  className="relative w-full h-auto rounded-2xl object-contain"
                />
              </div>
              <figcaption className="mt-4 text-xs sm:text-sm text-slate-500 text-center">
                Membraneless microfluidic electrolyzer illustrating co-laminar flow–based
                gas separation without a physical membrane.
              </figcaption>

              <div className="group relative rounded-3xl border border-slate-200 bg-slate-50/80 backdrop-blur-xl p-4 sm:p-6 shadow-[0_18px_50px_rgba(15,23,42,0.12)] ring-1 ring-slate-100">
                <div className="pointer-events-none absolute inset-px rounded-3xl bg-gradient-to-br from-blue-500/10 via-sky-400/5 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src="/images/products/p1i2.png"
                  alt="Membraneless microfluidic electrolyzer schematic"
                  className="relative w-full h-auto rounded-2xl object-contain"
                />
              </div>
              <figcaption className="mt-4 text-xs sm:text-sm text-slate-500 text-center">
                Figure 1. (a) Electrochemical characterization under accelerated stress testing (AST), (b) comparison of the performance of the micro-EC before and after AST by linear sweep voltammetry (LSV), (c) galvanostatic electrochemical impedance spectroscopy (GEIS), and (d) Purity of gas collected at cathode via the gas-chromatography.

              </figcaption>
              
            </figure>
          </div>
        </section>

        {/* =====================================================
            2. MICROFLUIDIC ELECTROCHEMICAL UNITS
        ===================================================== */}
        <section
          id="microfluidic-units"
          className="scroll-mt-24"
        >
          <div className="space-y-10">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">
              <div className="space-y-6">
                <h1 className="text-balance text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
                  2) Microfluidic Electrochemical Units (Stack & Design)
                </h1>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  The individual micro-electrochemical units (μEC) are designed to be
                  modular, allowing for easy scale-up via stacking technology.
                </p>

                <div className="space-y-6">
                  <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
                    Stack Specifications (5-Cell Stack)
                  </h2>
                  <ul className="space-y-2.5 text-sm sm:text-base text-slate-700 leading-relaxed list-disc pl-5">
                    <li>
                      <strong className="text-blue-700">Dimensions & Weight:</strong>{' '}
                      Compact footprint of 5 cm × 4 cm × 3.5 cm with a weight of
                      approximately 50 grams.
                    </li>
                    <li>
                      <strong className="text-blue-700">Electrode Area:</strong> Total
                      active electrode area of 2.6 cm².
                    </li>
                    <li>
                      <strong className="text-blue-700">Voltage:</strong> Operates at
                      2.5 V.
                    </li>
                    <li>
                      <strong className="text-blue-700">Current Density:</strong> High
                      current density of ~1 A/cm² (997 mA/cm²).
                    </li>
                    <li>
                      <strong className="text-blue-700">Efficiency:</strong>{' '}
                      Volumetric collection efficiency of ~80%.
                    </li>
                    <li>
                      <strong className="text-blue-700">Power Consumption:</strong>{' '}
                      Extremely efficient at 0.007 Wh/mL.
                    </li>
                    <li>
                      <strong className="text-blue-700">Production Rate:</strong>{' '}
                      Practical hydrogen collection rate of 228 mL/h at an electrolyte
                      flow rate of 80 mL/h.
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
                    Balance of Plant (BOP)
                  </h2>
                  <ul className="space-y-2.5 text-sm sm:text-base text-slate-700 leading-relaxed list-disc pl-5">
                    <li>Electrolyte tanks and reused electrolyte recirculation.</li>
                    <li>Gas separators and storage for both H₂ and O₂.</li>
                    <li>Pressure controllers and gauges for safe operation.</li>
                    <li>
                      Data loggers and HMI (Human-Machine Interface) for monitoring.
                    </li>
                  </ul>
                </div>
              </div>

              <figure className="space-y-10">
                <div className="group relative rounded-3xl border border-slate-200 bg-slate-50/80 backdrop-blur-xl p-4 sm:p-6 shadow-[0_18px_50px_rgba(15,23,42,0.12)] ring-1 ring-slate-100">
                  <div className="pointer-events-none absolute inset-px rounded-3xl bg-gradient-to-br from-sky-500/10 via-blue-500/5 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img
                    src="/images/products/p2i1.png"
                    alt="Membraneless microfluidic electrolyzer schematic"
                    className="relative w-full h-auto rounded-2xl object-contain"
                  />
                </div>
                <figcaption className="text-xs sm:text-sm text-slate-500 text-center">
                  Figure 2. (b) LSV study given flow optimization, (c) CA stability at 80 mL/min flow rate at an applied potential of 2.5 V, (c) Purity of gas generated at cathode side at different electrolyte flow conditions. 
                </figcaption>

                <div className="group relative rounded-3xl border border-slate-200 bg-slate-50/80 backdrop-blur-xl p-4 sm:p-6 shadow-[0_18px_50px_rgba(15,23,42,0.12)] ring-1 ring-slate-100">
                  <div className="pointer-events-none absolute inset-px rounded-3xl bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img
                    src="/images/products/p2i2.png"
                    alt="Membraneless microfluidic electrolyzer schematic"
                    className="relative w-full h-auto rounded-2xl object-contain"
                  />
                </div>
                <figcaption className="text-xs sm:text-sm text-slate-500 text-center">
                  Portable Balance of Plant:
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* =====================================================
            3. ADDITIVE MANUFACTURING
        ===================================================== */}
        <section
          id="additive-manufacturing"
          className="scroll-mt-24"
        >
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">
            <div className="space-y-6">
              <h1 className="text-balance text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
                3) Additive Manufacturing (Fabrication)
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                H2DC12 Avenue leverages additive manufacturing (3D printing) to
                achieve rapid prototyping and distinctive geometric control, which
                is difficult with traditional manufacturing.
              </p>

              <div className="space-y-6">
                <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
                  Fabrication Process
                </h2>
                <ul className="space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed list-disc pl-5">
                  <li>
                    <strong className="text-blue-700">3D Printed Housing:</strong>{' '}
                    The device body is fabricated using 3D printing techniques,
                    utilizing specific resins (clear and tough resins) to create the
                    microfluidic channels.
                  </li>
                  <li>
                    <strong className="text-blue-700">Rapid Production:</strong>{' '}
                    Manufacturing of 3D printed parts takes only about 2 weeks, allowing
                    fast iteration and deployment.
                  </li>
                  <li>
                    <strong className="text-blue-700">Electrode Integration:</strong>{' '}
                    Porous Nickel foam electrodes sputtered with Platinum (Pt) catalysts
                    are integrated into the flow-through design.
                  </li>
                </ul>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Milestones: The startup achieved the first commercialization of
                  3D printed electrolyzer parts in 2024.
                </p>
              </div>
            </div>

            <figure className="relative">
              <div className="group relative rounded-3xl border border-slate-200 bg-slate-50/80 backdrop-blur-xl p-4 sm:p-6 shadow-[0_18px_50px_rgba(15,23,42,0.12)] ring-1 ring-slate-100">
                <div className="pointer-events-none absolute inset-px rounded-3xl bg-gradient-to-br from-fuchsia-500/10 via-violet-500/5 to-sky-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src="/images/products/p3i1.png"
                  alt="Membraneless microfluidic electrolyzer schematic"
                  className="relative w-full h-auto rounded-2xl object-contain"
                />
              </div>
              <figcaption className="mt-4 text-xs sm:text-sm text-slate-500 text-center">
                Device Fabrication.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* =====================================================
            4. TESTING & CHARACTERIZATION
        ===================================================== */}
        <section
          id="testing-characterization"
          className="scroll-mt-24"
        >
          <div className="space-y-12">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">
              <div className="space-y-6">
                <h1 className="text-balance text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
                  4) Testing & Characterization
                </h1>

                <div className="space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
                      Flow Dynamics & Optimization
                    </h2>
                    <ul className="space-y-2.5 text-sm sm:text-base text-slate-700 leading-relaxed list-disc pl-5">
                      <li>
                        Intermixing observed at lower velocities (0.16 m/s and 0.23 m/s).
                      </li>
                      <li>
                        Optimal laminar flow achieved at 0.34 m/s with no intermixing,
                        ensuring high gas purity.
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
                      Electrochemical Performance
                    </h2>
                    <ul className="space-y-2.5 text-sm sm:text-base text-slate-700 leading-relaxed list-disc pl-5">
                      <li>
                        Gas chromatography confirms production of 90% pure hydrogen (H₂).
                      </li>
                      <li>
                        Stack tested under thermal stress from 25°C to 60°C.
                      </li>
                      <li>
                        Current density increases with temperature; gas purity remains
                        above 80%.
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
                      Durability & Material Characterization
                    </h2>
                    <ul className="space-y-2.5 text-sm sm:text-base text-slate-700 leading-relaxed list-disc pl-5">
                      <li>
                        380 hours of Accelerated Stress Testing (AST) with negligible
                        degradation.
                      </li>
                      <li>
                        Stable galvanostatic operation over 10,000 seconds.
                      </li>
                      <li>
                        SEM analysis validates uniform platinum coating on porous nickel
                        foam electrodes.
                      </li>
                      <li>
                        SEM imagery confirms highly porous nickel structure supporting
                        high surface-to-volume ratios.
                      </li>
                      <li>
                        Uniform catalyst distribution correlates with high current
                        density (~1 A/cm²) and durability.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <figure className="space-y-10">
                <div className="group relative rounded-3xl border border-slate-200 bg-slate-50/80 backdrop-blur-xl p-4 sm:p-6 shadow-[0_18px_50px_rgba(15,23,42,0.12)] ring-1 ring-slate-100">
                  <div className="pointer-events-none absolute inset-px rounded-3xl bg-gradient-to-br from-sky-500/10 via-blue-500/5 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img
                    src="/images/products/p4i1.png"
                    alt="Membraneless microfluidic electrolyzer schematic"
                    className="relative w-full h-auto rounded-2xl object-contain"
                  />
                </div>
                <figcaption className="text-xs sm:text-sm text-slate-500 text-center">
                  Figure 3. (a) & (b) LSV under temperature-varied operations and subsequent gas purity analysis of clear resin stack respectively (c) LSV for tough resin-made stack at different temperatures, and (d) CA stability for a tough resin-made stack @ 40 oC clearly showing sturdy operation potentials.
                </figcaption>

                <div className="group relative rounded-3xl border border-slate-200 bg-slate-50/80 backdrop-blur-xl p-4 sm:p-6 shadow-[0_18px_50px_rgba(15,23,42,0.12)] ring-1 ring-slate-100">
                  <div className="pointer-events-none absolute inset-px rounded-3xl bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img
                    src="/images/products/p4i2.png"
                    alt="Membraneless microfluidic electrolyzer schematic"
                    className="relative w-full h-auto rounded-2xl object-contain"
                  />
                </div>
                <figcaption className="text-xs sm:text-sm text-slate-500 text-center">
                  Scanning Electron Microscopy (SEM) image showing the porous architecture of the Nickel foam electrode sputtered with Platinum catalyst, ensuring optimal mass transport and catalytic activity.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
