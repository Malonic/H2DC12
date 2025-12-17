import React from "react";

export default function MilestonesSection() {
  const milestones = [
    {
      year: "2021",
      title: "Startup Registration",
      text: "Complete Bootstrap",
      status: "completed",
    },
    {
      year: "2023",
      title: "Project Delivery",
      text: "Allied projects delivery & closure report submission",
      status: "completed",
    },
    {
      year: "2024",
      title: "Commercialization",
      text: "First commercialization of 3D printed electrolyzer parts",
      status: "current",
    },
    {
      year: "2025",
      title: "Installation & Delivery",
      text: "Installation of BOP & delivery of a μEC",
      status: "future",
    },
    {
      year: "2030",
      title: "Scale Up",
      text: "Technology commercialization and trading",
      status: "future",
    },
  ];

  const details = [
    {
      label: "Status & Funding",
      value:
        "Technology Readiness Level 4. Completely self-grown bootstrap company.",
      colSpan: "md:col-span-2",
    },
    {
      label: "Readiness",
      value:
        "Electrolyzer deployment: ~1 month lead time. 3D printed parts: ~2 weeks.",
      colSpan: "md:col-span-1",
    },
    {
      label: "Manufacturing Capacity",
      value:
        "Manufacturing of 5-cell electrolyzer stacks (2.5 W). Planned installation of a 0.5 kW membraneless stack at IIT Delhi.",
      colSpan: "md:col-span-1",
    },
    {
      label: "Current Clients",
      value:
        "Academic and research laboratories including CeNS Bengaluru, IIT Delhi, and IIT Roorkee.",
      colSpan: "md:col-span-1",
    },
    {
      label: "Revenue & Projections",
      value:
        "Pre-revenue product stage. ~₹5 lakh generated via technical services. Projected ₹1 lakh/month by 2030.",
      colSpan: "md:col-span-2",
    },
  ];

  return (
    <section className="relative py-16 bg-slate-50"

      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "32px 32px",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10">

          <h2 className="text-2xl md:text-4xl font-semibold text-slate-900 mb-3">
            Milestones Achieved
          </h2>
          <p className="text-base text-slate-600 leading-[28px] max-w-2xl">
            A chronological overview of our technical and organizational progress
            toward scalable green hydrogen systems.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-16">

          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[3px] bg-slate-300 -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-14 relative">
            {milestones.map((item, idx) => {
              const isFuture = item.status === "future";
              const isCurrent = item.status === "current";

              return (
                <div key={idx} className="relative text-center">
                  {/* Node */}
                  <div
                    className={`mx-auto w-6 h-6 rounded-full border-[3px] bg-white relative z-10
                      ${
                        isFuture
                          ? "border-slate-300"
                          : "border-sky-600 shadow-[0_0_0_6px_rgba(14,165,233,0.12)]"
                      }
                      ${isCurrent ? "scale-110" : ""}
                    `}
                  />

                  <div className="mt-6">
                    <span className="inline-block text-[11px] font-medium tracking-[0.15em] uppercase text-slate-500 mb-2">
                      {item.year}
                    </span>
                    <h3 className="text-sm font-semibold text-slate-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[13px] text-slate-600 leading-[20px] max-w-[180px] mx-auto">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Details */}
        <div className="space-y-6 max-w-5xl text-[15px] leading-[26px] text-slate-700">
          {details.map((item, idx) => (
            <p key={idx}>
              <span className="font-semibold text-slate-900">
                {">"} {item.label}:
              </span>{" "}
              {item.value}
            </p>
          ))}
        </div>

      </div>
    </section>
  );
}
