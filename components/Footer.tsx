"use client";

import React from "react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { FaDribbble, FaInstagram, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    mainPages: [
      { name: "Home V1", href: "/" },
      { name: "Home V2", href: "/" },
      { name: "About us", href: "/about" },
      { name: "Project", href: "/projects" },
      { name: "Pricing", href: "/pricing" },
    ],
    innerPages: [
      { name: "Blog", href: "/blog" },
      { name: "Blog Details", href: "/blog/details" },
      { name: "Project Details", href: "/projects/details" },
      { name: "Service Details", href: "/services/details" },
      { name: "Contact", href: "/contact" },
    ],
    utilityPages: [
      { name: "Style Guide", href: "/style-guide" },
      { name: "Changelog", href: "/changelog" },
      { name: "License", href: "/license" },
      { name: "404", href: "/404" },
    ],
  };

  return (
    <footer className="bg-black text-white pt-24 pb-8 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          
          {/* CTA Section */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8 max-w-md">
              Let's Build Your Growth Today
            </h2>
            <Link 
              href="/contact"
              className="group flex items-center gap-3 bg-[#007b7f] hover:bg-[#008c91] transition-all duration-300 rounded-full pl-8 pr-2 py-2 text-lg font-medium"
            >
              Book A Free Call
              <span className="bg-white text-black p-3 rounded-full transition-transform duration-300 group-hover:rotate-45">
                <FiArrowUpRight size={20} />
              </span>
            </Link>
          </div>

          {/* Links Section */}
          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-bold mb-6">Main Pages</h4>
              <ul className="space-y-4">
                {footerLinks.mainPages.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6">Inner Pages</h4>
              <ul className="space-y-4">
                {footerLinks.innerPages.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6">Utility Pages</h4>
              <ul className="space-y-4">
                {footerLinks.utilityPages.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Brand Name Marquee Section */}
        <div className="relative mb-12">
          <h1 className="text-[18vw] font-black leading-none uppercase tracking-tighter text-white select-none">
            SFCOLLAB
          </h1>
          
          {/* Social Icons - Positioned relative to the large text */}
          <div className="absolute top-0 right-0 flex items-center gap-6 mt-8">
            <Link href="#" className="p-3 border border-gray-800 rounded-full hover:bg-white hover:text-black transition-all">
              <FaDribbble size={20} />
            </Link>
            <Link href="#" className="p-3 border border-gray-800 rounded-full hover:bg-white hover:text-black transition-all">
              <FaInstagram size={20} />
            </Link>
            <Link href="#" className="p-3 border border-gray-800 rounded-full hover:bg-white hover:text-black transition-all">
              <FaXTwitter size={20} />
            </Link>
            <Link href="#" className="p-3 border border-gray-800 rounded-full hover:bg-white hover:text-black transition-all">
              <FaGithub size={20} />
            </Link>
          </div>

          {/* Status Pill */}
          <div className="absolute bottom-8 right-0">
            <div className="flex items-center gap-2 bg-[#0a0a0a] border border-gray-800 rounded-full px-4 py-2 text-sm font-medium">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              Operational
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {currentYear} All rights reserved, Developed by SF Team</p>
          <div className="flex items-center gap-2">
            <span>Powered by</span>
            <span className="text-white font-medium">SF Engine</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
