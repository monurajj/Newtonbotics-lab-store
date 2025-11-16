'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FiShoppingBag, FiGrid, FiZap, FiCpu, FiPrinter, FiPackage, FiShield, FiAward } from 'react-icons/fi';
import ProductCard from '@/components/ProductCard';
import { getFeaturedProducts, categories } from '@/lib/data';

export default function Home() {
  const featuredProducts = getFeaturedProducts().slice(0, 8);

  const categoryIcons = {
    '3d-printed': FiPrinter,
    'laser-engraved': FiZap,
    electronics: FiCpu,
  };

  const benefits = [
    {
      icon: FiPackage,
      title: 'Lab-Made Quality',
      description: 'All products are made in our robotics lab with attention to detail and quality.',
    },
    {
      icon: FiShield,
      title: 'No Pre-payment Required',
      description: 'Order with confidence. No advance payments required - pay when you receive your order.',
    },
    {
      icon: FiAward,
      title: 'Support Research',
      description: 'Your purchases help fund robotics research and education.',
    },
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-black via-black to-red-950/30 overflow-hidden py-20 z-10">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.08),transparent_70%)]" />
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30" />
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative z-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 text-red-400 text-sm font-medium mb-4">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                Robotics Lab Store
              </div>

              {/* Main Heading */}
              <div className="space-y-3">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Premium{' '}
                  <span className="relative inline-block">
                    <span className="relative z-10 text-red-500">Robotics</span>
                    <span className="absolute bottom-0 left-0 right-0 h-2.5 bg-red-500/20 -z-0 transform -skew-x-12"></span>
                  </span>
                  <br />
                  <span className="text-white/90">Products Made in Our Lab</span>
          </h1>
              </div>

              {/* Description */}
              <p className="text-lg md:text-xl text-white/70 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-12 md:mb-16 lg:mb-20">
                High-quality 3D prints, laser engraving, and electronics from our robotics lab.
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-white/50 pt-6 ">
                <div className="flex items-center gap-2 ">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>No Advance Payments </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Lab Quality Guarantee</span>
                </div>
              </div>
            </div>

            {/* Right Column - Visual Elements */}
            <div className="relative hidden lg:block">
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Main Visual Card */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-red-500/5 rounded-2xl border border-red-500/20 backdrop-blur-sm transform rotate-3 hover:rotate-6 transition-transform duration-500">
                  <div className="absolute inset-4 bg-black/40 rounded-xl border border-white/10 p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                          <FiPrinter className="w-6 h-6 text-red-500" />
                        </div>
                        <div>
                          <div className="text-white font-semibold">3D Printed</div>
                          <div className="text-white/60 text-sm">Precision Components</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                          <FiZap className="w-6 h-6 text-red-500" />
                        </div>
                        <div>
                          <div className="text-white font-semibold">Laser Engraved</div>
                          <div className="text-white/60 text-sm">Custom Designs</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                          <FiCpu className="w-6 h-6 text-red-500" />
                        </div>
                        <div>
                          <div className="text-white font-semibold">Electronics</div>
                          <div className="text-white/60 text-sm">Robotics Components</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-500/20 rounded-full blur-xl animate-pulse" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-red-500/10 rounded-full blur-2xl animate-pulse delay-1000" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer for gap between sections */}
      <div className="h-16 md:h-24"></div>

      {/* Stats Section */}
      <section className="relative py-16 bg-black/60 border-y border-white/10 z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="grid grid-cols-3 gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-red-500 mb-2">30+</div>
              <div className="text-base md:text-lg text-white/70 font-medium">Products</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-red-500 mb-2">3</div>
              <div className="text-base md:text-lg text-white/70 font-medium">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-red-500 mb-2">100%</div>
              <div className="text-base md:text-lg text-white/70 font-medium">Lab Made</div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer for gap between sections */}
      <div className="h-16 md:h-24"></div>

      {/* Shop by Category Section */}
      <section id="categories" className="relative py-20 bg-black z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Shop by Category
          </h2>
          <p className="text-white/60 text-center mb-0 max-w-2xl mx-auto">
            Explore our curated collections of robotics products
          </p>
          <div className="h-12 md:h-16"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {categories.map((category) => {
              const Icon = categoryIcons[category.id as keyof typeof categoryIcons] || FiGrid;
              return (
                <Link
                  key={category.id}
                  href={`/category/${category.slug}`}
                  className="group relative bg-gradient-to-br from-black/95 via-black/90 to-black/95 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:border-red-500/60 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-red-500/20"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-red-500/0 to-red-500/0 group-hover:from-red-500/10 group-hover:via-red-500/5 group-hover:to-red-500/10 transition-all duration-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl -z-0" />
                  
                  <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-black via-black/50 to-black">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-125 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Enhanced gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30 group-hover:via-black/80 group-hover:to-black/40 transition-all duration-500" />
                    {/* Subtle animated overlay */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(239,68,68,0.15),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Icon container with enhanced effects */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 p-6 z-10">
                      <div className="relative">
                        {/* Animated background glow */}
                        <div className="absolute inset-0 bg-red-500/40 rounded-full blur-2xl scale-75 group-hover:scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                        {/* Icon container */}
                        <div className="relative bg-gradient-to-br from-red-500/40 via-red-500/30 to-red-500/40 backdrop-blur-md rounded-full p-6 border-2 border-red-500/60 group-hover:border-red-500 group-hover:shadow-lg group-hover:shadow-red-500/50 transition-all duration-500 group-hover:scale-110">
                          <Icon className="w-12 h-12 text-red-400 group-hover:text-red-300 transition-colors duration-300" />
                        </div>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white text-center drop-shadow-2xl group-hover:drop-shadow-[0_0_20px_rgba(239,68,68,0.5)] transition-all duration-500">
                        {category.name}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Enhanced bottom section */}
                  <div className="relative p-6 bg-gradient-to-b from-black/80 via-black/70 to-black/80 backdrop-blur-sm border-t border-white/10 group-hover:border-red-500/30 transition-all duration-500">
                    <p className="text-white/80 text-sm mb-5 line-clamp-2 leading-relaxed group-hover:text-white/90 transition-colors">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between pt-5 border-t border-white/10 group-hover:border-red-500/30 transition-colors">
                      <span className="text-white/60 text-sm font-medium group-hover:text-white/80 transition-colors flex items-center gap-2">
                        <FiPackage className="w-4 h-4" />
                        {category.productCount} products
                      </span>
                      <span className="text-red-500 font-semibold group-hover:text-red-400 transition-all duration-300 flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 group-hover:bg-red-500/20 border border-transparent group-hover:border-red-500/30">
                        Shop Now
                        <span className="group-hover:translate-x-1 transition-transform duration-300 text-lg">→</span>
                      </span>
                    </div>
                  </div>
                  
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Spacer for gap between sections */}
      <div className="h-16 md:h-24"></div>

      {/* Featured Products Section */}
      <section className="relative py-16 bg-black z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="text-center mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">Featured Products</h2>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto leading-relaxed">
              Handpicked quality products from our robotics lab
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-semibold transition-all duration-300 group px-6 py-3 rounded-lg bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 hover:border-red-500/50 shadow-lg shadow-red-500/10 hover:shadow-xl hover:shadow-red-500/20"
            >
              View All Products
              <span className="group-hover:translate-x-1 transition-transform duration-300 text-lg">→</span>
            </Link>
          </div>
          <div className="h-12 md:h-16"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Spacer for gap between sections */}
      <div className="h-16 md:h-24"></div>

      {/* Why Shop With Us Section */}
      <section className="relative py-16 bg-black/40 z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <h2 className="text-3xl font-bold text-white text-center mb-0">
            Why Shop With Us
          </h2>
          <div className="h-12 md:h-16"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-black/95 backdrop-blur-lg border border-white/10 rounded-xl p-8 text-center hover:border-white/20 transition-all"
                >
                  <div className="bg-red-500/20 rounded-full p-4 inline-flex mb-4">
                    <Icon className="w-8 h-8 text-red-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-white/60">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Spacer for gap between sections */}
      <div className="h-16 md:h-24"></div>

   
    </div>
  );
}
