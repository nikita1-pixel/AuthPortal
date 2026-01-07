import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Terminal, Globe, Cpu } from 'lucide-react'; // Using icons for a tech feel

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-gray-400 py-12 border-t border-white/5 mt-auto">
      <div className="container mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Section 1: Brand Identity */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="text-amber-500" size={24} />
              <span className="text-white font-bold text-xl tracking-tight">SystemAuth</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Advanced identity management and audit logging infrastructure. Securely managing system access since 2024.
            </p>
          </div>

          {/* Section 2: Quick Links Grid */}
          <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4">System</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/admin/dashboard" className="hover:text-amber-500 transition-colors">Dashboard</Link></li>
                <li><Link href="/admin/users" className="hover:text-amber-500 transition-colors">User Registry</Link></li>
                <li><Link href="/admin/logs" className="hover:text-amber-500 transition-colors">Audit Logs</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Compliance</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy-policy" className="hover:text-amber-500 transition-colors">Data Privacy</Link></li>
                <li><Link href="/terms" className="hover:text-amber-500 transition-colors">Terms of Service</Link></li>
                <li><Link href="/security" className="hover:text-amber-500 transition-colors">Security Policy</Link></li>
              </ul>
            </div>
          </div>

          {/* Section 3: Status & Socials */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4">System Status</h3>
            <div className="flex items-center gap-2 text-emerald-500 text-sm mb-6">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              All Systems Operational
            </div>
            <div className="flex space-x-4">
              {/* Using subtle Lucide icons for social/links */}
              <Link href="#" className="hover:text-white transition-colors"><Terminal size={20} /></Link>
              <Link href="#" className="hover:text-white transition-colors"><Globe size={20} /></Link>
              <Link href="#" className="hover:text-white transition-colors"><Cpu size={20} /></Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} SystemAuth Management Portal. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Built with Next.js 16</span>
            <span>v1.0.4-stable</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;