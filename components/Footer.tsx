"use client";

import React from "react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
// import { FaDribbble, FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaDribbble, FaInstagram, FaGithub, FaLinkedin, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Button from "./Button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    mainPages: [
      { name: "Platform", href: "/" },
      { name: "How it works", href: "/" },
      { name: "Features", href: "/about" },
      // { name: "Contact", href: "/projects" },
      { name: "Help & Support", href: "/contact" },
    ],
    utilityPages: [
      { name: "Join waitlist", href: "/waitlist" },
      { name: "Privacy policy", href: "/privacy-policy" },
      { name: "Terms of service", href: "/terms-of-service" },
      { name: "Data Collection policy", href: "/data-collection-policy" },
      // { name: "Help & Support", href: "/contact" },
    ],
  };

  return (
    <footer className="bg-black text-white pt-24 pb-8 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          
          {/* CTA Section */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <h2 className="text-3xl md:text-4xl leading-tight mb-8 max-w-sm">
              Let's Build Your Growth Today
            </h2>
            <Button variant="primary" className="hover:border">Get Started</Button>
          </div>

          {/* Links Section */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg mb-4">Main Pages</h4>
              <ul className="space-y-2">
                {footerLinks.mainPages.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg mb-4">Utility Pages</h4>
              <ul className="space-y-2">
                {footerLinks.utilityPages.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Brand Name Marquee Section */}
        <div className="flex items-center justify-between">
          <h1 className="text-[14vw] font-black leading-none uppercase tracking-tighter text-white/50 select-none">
            SFCOLLAB
          </h1>
          
          {/* Social Icons - Positioned relative to the large text */}
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-6">
            <Link href="https://www.linkedin.com/company/sfcollab" className=" ">
              <FaLinkedinIn size={20} className="text-gray-400 hover:text-white" />
            </Link>
            <Link href="https://www.instagram.com/sfcollab_official/" className=" ">
              <FaInstagram size={20} className="text-gray-400 hover:text-white" />
            </Link>
            <Link href="https://www.tiktok.com/@sfcollab_official" className=" ">
              <FaTiktok size={20} className="text-gray-400 hover:text-white" />
            </Link>
            <Link href="#" className=" ">
              <FaXTwitter size={20} className="text-gray-400 hover:text-white" />
            </Link>
            </div>
              <span className="text-gray-400 text-xs">sfcollab333@gmail.com</span>
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
