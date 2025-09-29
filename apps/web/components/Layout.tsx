"use client";
import LuxButton from "./LuxButton";
import CustomCursor from "./CustomCursor";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Radio', href: '/radio' },
    { name: 'Hosts', href: '/hosts' },
    { name: 'Timetable', href: '/timetable' },
    { name: 'Shop', href: '/shop' },
    { name: 'Membership', href: '/membership' },
  ];

  const dropdownItems = [
    { name: 'Press', href: '/press' },
    { name: 'About', href: '/about' },
    { name: 'Legal', href: '/legal' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <CustomCursor />
      
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-40 bg-black/90 backdrop-blur-lg border-b border-orange-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo-kinetic.svg"
                alt="HOTMESS"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-orange-400 transition-colors font-medium"
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="text-white hover:text-orange-400 transition-colors font-medium flex items-center"
                >
                  More
                  <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-black border border-orange-500/30 rounded-lg shadow-orange-glow">
                    {dropdownItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-white hover:text-orange-400 hover:bg-orange-500/10 transition-colors"
                        onClick={() => setDropdownOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}\n              </div>
              
              <LuxButton className="ml-4">Join Now</LuxButton>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white hover:text-orange-400"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-orange-500/30 py-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-white hover:text-orange-400 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {dropdownItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-gray-300 hover:text-orange-400 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 py-2">
                <LuxButton className="w-full">Join Now</LuxButton>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="min-h-screen">
        {children}
      </main>

      {/* Luxury Footer */}
      <footer className="bg-black border-t border-orange-500/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="col-span-1 md:col-span-2">
              <Image
                src="/logo-kinetic.svg"
                alt="HOTMESS"
                width={180}
                height={64}
                className="mb-4"
              />
              <p className="text-gray-300 text-lg mb-6 max-w-md">
                Premium men-only queer ecosystem. Radio, records, apparel and care-first community.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-orange-500 hover:text-orange-400 transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.988-5.367 11.988-11.988C24.005 5.367 18.638.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.864 3.5 13.49 3.5 11.987c0-1.503.698-2.877 1.626-3.704.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.827 1.626 2.201 1.626 3.704 0 1.503-.698 2.877-1.626 3.704-.875.807-2.026 1.297-3.323 1.297z"/>
                  </svg>
                </a>
                <a href="#" className="text-orange-500 hover:text-orange-400 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-gray-300 hover:text-orange-400 transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Support</h3>
              <ul className="space-y-2">
                {dropdownItems.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-gray-300 hover:text-orange-400 transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-orange-500/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 HOTMESS. All rights reserved. 18+ only.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/legal" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/legal" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/legal" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}