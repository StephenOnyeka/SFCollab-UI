"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "@/components/Button";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { X, ChevronDown } from "lucide-react";
import { MdOutlineMenu } from "react-icons/md";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Stop body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const links = [
    { name: "Home", href: "/" },
    { name: "Platform", href: "/about" },
    { name: "How it works", href: "/how-it-works" },
    { name: "Features", href: "/features" },
    { name: "Contact", href: "/contact" },
  ];

  const menuVariants: Variants = {
    closed: {
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const linkVariants: Variants = {
    closed: { y: 20, opacity: 0 },
    open: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <nav className="relative w-full bg-white py-4 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative flex items-center gap-3 decoration-none z-50" onClick={() => setIsOpen(false)}>
          <div className="relative w-8 h-8">
            <Image alt="logo" src={"/logo.svg"} width={100} height={100} />
          </div>
          <span className="text-2xl text-[#1A1A1A] font-semibold">SFCollab</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {links.slice(1).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[15px] font-medium text-gray-700 hover:text-black transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Button variant="dark" className="px-7 py-3 text-[15px] font-semibold">
            Get Started
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="md:hidden relative z-50 p-2 -mr-2 text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {/* {isOpen ? <X strokeWidth={1.5} size={32} /> : <Menu strokeWidth={1.5} size={32} />} */}
          {/* {isOpen ? <X size={32} /> : <MdMenu size={32} />} */}
          {isOpen ? <X size={32} /> : <MdOutlineMenu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            // className="fixed inset-0 bg-white z-40 flex flex-col px-6 pt-28 pb-8 h-screen overflow-y-auto"
            className="fixed inset-0 bg-white z-40 flex flex-col px-6 pt-28 pb-8 h-[calc(80vh)] overflow-y-auto"
            // className="fixed inset-0 bg-white z-40 flex flex-col px-6 pt-28 pb-8 h-[calc(100vh-100px)] overflow-y-auto"
          >
            {/* Mobile Links */}
            <div className="flex flex-col space-y-6 grow">
              {links.map((link, i) => (
                <motion.div custom={i} variants={linkVariants} key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-gray-900 block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Actions */}
            <motion.div
              custom={links.length + 1}
              variants={linkVariants}
              // className="mt-2 flex flex-col space-y-3 pb-8"
              className="mt-2 pb-8"
            >
              <Button
                variant="dark"
                 className="w-[200px] h-[52px] text-base font-semibold rounded-[24px] bg-black text-white flex justify-center items-center"
                //  className="w-fit"
                 onClick={() => setIsOpen(false)}
              >
                 Get Started
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
