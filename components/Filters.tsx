'use client';

import { useState } from 'react';
import { FiX, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { categories } from '@/lib/data';

interface FiltersProps {
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
  onClearFilters: () => void;
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Filters({
  selectedCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
  priceRange,
  onPriceRangeChange,
  onClearFilters,
  isOpen = true,
  onClose,
}: FiltersProps) {
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [isPriceOpen, setIsPriceOpen] = useState(true);

  const sortOptions = [
    { value: 'newest', label: 'Newest' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'popular', label: 'Most Popular' },
  ];

  const maxPrice = 100;

  const hasActiveFilters = selectedCategory !== null || priceRange[1] < maxPrice;

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && onClose && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Filters Sidebar */}
      <div
        className={`
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          fixed md:sticky top-0 left-0 h-full md:h-auto z-50 md:z-auto
          w-80 md:w-64 bg-black/95 backdrop-blur-lg border-r md:border-r-0 md:border-0 border-white/10
          transition-transform duration-300 md:translate-x-0
          overflow-y-auto
        `}
      >
        <div className="p-6">
          {/* Mobile Close Button */}
          {onClose && (
            <div className="flex items-center justify-between mb-6 md:hidden">
              <h2 className="text-xl font-bold text-white">Filters</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <FiX className="w-5 h-5 text-white" />
              </button>
            </div>
          )}

          <div className="space-y-8">
            {/* Sort By */}
            <div>
              <label className="block text-white font-semibold mb-3 text-sm">Sort By</label>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => onSortChange(e.target.value)}
                  className="w-full bg-gray-800/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500/50 transition-all duration-300 appearance-none cursor-pointer hover:border-white/30"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value} className="bg-gray-900">
                      {option.label}
                    </option>
                  ))}
                </select>
                <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60 pointer-events-none" />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <button
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className="w-full flex items-center justify-between text-white font-semibold mb-3 text-sm"
              >
                <span>Category</span>
                {isCategoryOpen ? (
                  <FiChevronUp className="w-4 h-4 text-white/60 transition-transform" />
                ) : (
                  <FiChevronDown className="w-4 h-4 text-white/60 transition-transform" />
                )}
              </button>
              {isCategoryOpen && (
                <div className="space-y-2">
                  <button
                    onClick={() => onCategoryChange(null)}
                    className={`w-full text-left px-4 py-2.5 rounded-lg transition-all duration-300 ${
                      selectedCategory === null
                        ? 'bg-red-600 text-white shadow-lg shadow-red-600/30 font-medium'
                        : 'bg-gray-800/50 text-white/90 hover:bg-gray-700/50 hover:text-white'
                    }`}
                  >
                    All Categories
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => onCategoryChange(category.id)}
                      className={`w-full text-left px-4 py-2.5 rounded-lg transition-all duration-300 ${
                        selectedCategory === category.id
                          ? 'bg-red-600 text-white shadow-lg shadow-red-600/30 font-medium'
                          : 'bg-gray-800/50 text-white/90 hover:bg-gray-700/50 hover:text-white'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Price Range */}
            <div>
              <button
                onClick={() => setIsPriceOpen(!isPriceOpen)}
                className="w-full flex items-center justify-between text-white font-semibold mb-3 text-sm"
              >
                <span>Price Range</span>
                {isPriceOpen ? (
                  <FiChevronUp className="w-4 h-4 text-white/60 transition-transform" />
                ) : (
                  <FiChevronDown className="w-4 h-4 text-white/60 transition-transform" />
                )}
              </button>
              {isPriceOpen && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-white text-sm font-medium">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                  <div className="relative">
                    <input
                      type="range"
                      min="0"
                      max={maxPrice}
                      step="1"
                      value={priceRange[1]}
                      onChange={(e) => onPriceRangeChange([priceRange[0], Number(e.target.value)])}
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                      style={{
                        background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${(priceRange[1] / maxPrice) * 100}%, #374151 ${(priceRange[1] / maxPrice) * 100}%, #374151 100%)`
                      }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Clear Filters */}
            {hasActiveFilters && (
              <button
                onClick={onClearFilters}
                className="w-full bg-gray-800/50 hover:bg-gray-700/50 text-white font-medium py-2.5 px-4 rounded-lg border border-white/20 hover:border-red-500/50 transition-all duration-300"
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

