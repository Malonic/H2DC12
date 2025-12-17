export default function AboutSection() {
  return (
    <section
      className="relative py-20"
      style={{
        backgroundColor: "#f8fafc",
        backgroundImage: `
          linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)
        `,
        backgroundSize: "32px 32px"
      }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADING ================= */}
        <h2 className="text-[24px] tracking-[0.35em] font-normal uppercase text-black mb-14 text-center">
          About H2DC12 Avenue
        </h2>

        {/* ================= ABOUT CONTENT ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start mb-20">

          {/* LEFT: Text */}
          <div className="text-left">
            <p
              className="text-[16px] leading-[28px] text-[#111]"
              style={{ textAlign: "justify", hyphens: "auto" }}
            >
              H2DC12 Avenue Private Limited is an IIT Delhi–incubated clean energy
              startup focused on developing membrane-less microfluidic
              electrolyzers for cost-effective and sustainable green hydrogen
              production. Founded by Prof. Suddhasatwa Basu and his team, the
              company’s patented technology eliminates the need for expensive
              ion-exchange membranes by using a co-laminar microfluidic design
              that efficiently separates hydrogen and oxygen gases during
              electrolysis. This innovation significantly reduces system cost,
              enhances operational efficiency, and enables compact and
              decentralized hydrogen generation systems.
              <br /><br />
              With three granted patents and multiple international research
              publications, H2DC12 has successfully developed a 5-cell
              electrolyzer stack capable of producing approximately 90% pure
              hydrogen at 228 mL/h, with stable operation up to 90 °C. The startup
              is advancing toward a 20-cell, 0.5 kW stack for larger-scale
              applications, aiming to decarbonize India through accessible,
              high-performance green hydrogen technologies.
            </p>
          </div>

          {/* RIGHT: Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/images/about/team.png"
              alt="H2DC12 Avenue team and organizational structure"
              className="w-full max-w-md object-contain shadow-lg rounded-lg"
            />
          </div>

        </div>

        {/* ================= AWARDS & RECOGNITION ================= */}
        <div>

          <h3 className="text-[18px] tracking-[0.3em] uppercase font-normal mb-10 text-center">
            Awards & Recognition
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* Certificate 1 */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <img
                src="/images/awards/startup-india.png"
                alt="Startup India Certificate of Recognition"
                className="w-full object-contain mb-4"
              />
              <p className="text-sm text-slate-700 text-center">
                Certificate of Recognition — Startup India, DPIIT
              </p>
            </div>

            {/* Certificate 2 */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <img
                src="/images/awards/best-startup-iitd.png"
                alt="Best Startup Award IIT Delhi"
                className="w-full object-contain mb-4"
              />
              <p className="text-sm text-slate-700 text-center">
                Best Startup Award — IIT Delhi (INUP-i2i)
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
