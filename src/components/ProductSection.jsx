export default function ProductSection({ id, title, children }) {
  return (
    <section
      id={id}
      className="scroll-mt-28 py-16 border-b border-slate-200 last:border-b-0"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-8">
          {title}
        </h2>
        <div className="space-y-6 text-slate-700 leading-relaxed">
          {children}
        </div>
      </div>
    </section>
  );
}
