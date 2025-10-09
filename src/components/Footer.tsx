// components/Footer.tsx

import Link from 'next/link';
import { Instagram, Linkedin, Mail, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full mt-20 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">WIRALGS</h2>
          <p className="text-sm text-white/80 max-w-xs">
            Kreativní skupina – weby, grafika, video a foto, které pomáhají značkám růst.
          </p>
          <div className="flex gap-4">
            <Link
              href="https://instagram.com/wiralgs"
              target="_blank"
              className="hover:opacity-80 transition-opacity"
            >
              <Instagram size={20} />
            </Link>
            <Link
              href="mailto:info@wiralgs.com"
              target="_blank"
              className="hover:opacity-80 transition-opacity"
            >
              <Mail size={20} />
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide">Navigace</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/portfolio" className="text-white/80 hover:text-white">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white/80 hover:text-white">
                O nás
              </Link>
            </li>
            <li>
              <Link href="/kontakt" className="text-white/80 hover:text-white">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide">Kontakt</h3>
          <ul className="space-y-2 text-sm">
            <li>
              Email:{' '}
              <a href="mailto:info@wiralgs.com" className="text-white hover:underline">
                info@wiralgs.com
              </a>
            </li>
            <li>Praha, Česká republika</li>
          </ul>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-white/20 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-white/70">
            © {new Date().getFullYear()} <span className="font-medium text-white">WIRALGS</span>. Všechna práva vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  );
}
