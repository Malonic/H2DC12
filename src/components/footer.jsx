import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0b132b] text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              H2DC12 Avenue Pvt. Ltd.
            </h3>
            <p className="text-sm leading-relaxed">
              A-33 S/F KH. No. 93/95, Gali No. 2,<br />
              New Usmanpur, Delhi – 110053
            </p>
            <p className="text-sm mt-3">
              CIN: U29300PN2021PTC204130
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products" className="hover:text-white transition">
                  Products & Services
                </Link>
              </li>
              <li>
                <Link to="/ip" className="hover:text-white transition">
                  Intellectual Property
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-white transition">
                  Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Contact Us
            </h3>
            <p className="text-sm mb-2">📞 +91 90284 42757</p>
            <p className="text-sm">✉️ h2dcavenue@gmail.com</p>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 my-10" />

        {/* Bottom */}
        <p className="text-center text-sm text-slate-400">
          © 2025 H2DC12 Avenue Private Limited. Decarbonize India.
        </p>
      </div>
    </footer>
  );
}
