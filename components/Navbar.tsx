'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX, FiSearch, FiUser } from 'react-icons/fi';
import CartIcon from './CartIcon';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/category/3d-printed', label: '3D Prints' },
    { href: '/category/laser-engraved', label: 'Laser Engraved' },
    { href: '/category/electronics', label: 'Electronics' },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-black/95 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-white">
              NewtonBotics <span className="text-red-500">Store</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-red-500 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Search Icon */}
            <Link
              href="/search"
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Search"
            >
              <FiSearch className="w-5 h-5 text-white" />
            </Link>

            {/* Account Icon */}
            <Link
              href="/account"
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Account"
            >
              <FiUser className="w-5 h-5 text-white" />
            </Link>

            {/* Cart Icon */}
            <CartIcon />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <FiX className="w-6 h-6 text-white" />
              ) : (
                <FiMenu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white/80 hover:text-red-500 transition-colors font-medium px-2 py-1"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

