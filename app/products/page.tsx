'use client';

import { useState, useMemo } from 'react';
import { FiFilter } from 'react-icons/fi';
import ProductCard from '@/components/ProductCard';
import Filters from '@/components/Filters';
import LoadingSpinner from '@/components/LoadingSpinner';
import { products } from '@/lib/data';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState('newest');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    // Category filter
    if (selectedCategory) {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // Price filter
    filtered = filtered.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Sort
    const sorted = [...filtered];
    switch (sortBy) {
      case 'price-low':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'popular':
        sorted.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      case 'newest':
      default:
        sorted.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
    }

    return sorted;
  }, [selectedCategory, sortBy, priceRange]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedProducts.length / productsPerPage);
  const paginatedProducts = filteredAndSortedProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handleClearFilters = () => {
    setSelectedCategory(null);
    setPriceRange([0, 100]);
    setSortBy('newest');
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen py-8 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            All Products
          </h1>
          <p className="text-white/70 text-base">
            {filteredAndSortedProducts.length} product{filteredAndSortedProducts.length !== 1 ? 's' : ''} found
          </p>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <aside className="hidden md:block">
            <Filters
              selectedCategory={selectedCategory}
              onCategoryChange={(cat) => {
                setSelectedCategory(cat);
                setCurrentPage(1);
              }}
              sortBy={sortBy}
              onSortChange={(sort) => {
                setSortBy(sort);
                setCurrentPage(1);
              }}
              priceRange={priceRange}
              onPriceRangeChange={(range) => {
                setPriceRange(range);
                setCurrentPage(1);
              }}
              onClearFilters={handleClearFilters}
            />
          </aside>

          {/* Mobile Filters Button */}
          <div className="md:hidden mb-6">
            <button
              onClick={() => setFiltersOpen(true)}
              className="flex items-center gap-2 bg-gray-800/50 hover:bg-gray-700/50 text-white px-5 py-3 rounded-lg border border-white/20 hover:border-red-500/50 transition-all duration-300 font-medium"
            >
              <FiFilter className="w-5 h-5" />
              Filters
            </button>
          </div>

          {/* Mobile Filters */}
          {filtersOpen && (
            <Filters
              selectedCategory={selectedCategory}
              onCategoryChange={(cat) => {
                setSelectedCategory(cat);
                setCurrentPage(1);
              }}
              sortBy={sortBy}
              onSortChange={(sort) => {
                setSortBy(sort);
                setCurrentPage(1);
              }}
              priceRange={priceRange}
              onPriceRangeChange={(range) => {
                setPriceRange(range);
                setCurrentPage(1);
              }}
              onClearFilters={handleClearFilters}
              isOpen={filtersOpen}
              onClose={() => setFiltersOpen(false)}
            />
          )}

          {/* Products Grid */}
          <div className="flex-1">
            {paginatedProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-white/60 text-lg mb-4">No products found</p>
                <p className="text-white/40 text-sm">
                  Try adjusting your filters to see more products.
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                  {paginatedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {/* Enhanced Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2 mt-12">
                    <button
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                      className="px-6 py-2.5 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg border border-white/20 transition-all duration-300 hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/10"
                    >
                      Previous
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-4 py-2.5 rounded-lg border transition-all duration-300 ${
                          currentPage === page
                            ? 'bg-red-600 border-red-600 text-white shadow-lg shadow-red-600/30 scale-105'
                            : 'bg-white/10 hover:bg-white/20 border-white/20 text-white hover:border-red-500/50'
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                    <button
                      onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                      disabled={currentPage === totalPages}
                      className="px-6 py-2.5 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg border border-white/20 transition-all duration-300 hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/10"
                    >
                      Next
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

