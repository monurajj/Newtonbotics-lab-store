'use client';

import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { FiSearch } from 'react-icons/fi';
import ProductCard from '@/components/ProductCard';
import { searchProducts } from '@/lib/data';

export default function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchQuery, setSearchQuery] = useState(query);

  const results = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return searchProducts(searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    setSearchQuery(query);
  }, [query]);

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for products..."
              className="w-full bg-white/10 border border-white/20 rounded-lg px-12 py-4 text-white placeholder-white/40 focus:outline-none focus:border-red-500 transition-colors"
            />
          </div>
        </div>

        {/* Results */}
        {searchQuery.trim() ? (
          <>
            <h2 className="text-2xl font-bold text-white mb-6">
              {results.length} result{results.length !== 1 ? 's' : ''} for "{searchQuery}"
            </h2>
            {results.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-white/60 text-lg mb-4">No products found</p>
                <p className="text-white/40 text-sm">
                  Try searching with different keywords.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {results.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <p className="text-white/60 text-lg">Start typing to search for products</p>
          </div>
        )}
      </div>
    </div>
  );
}

