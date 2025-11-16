'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiShoppingCart } from 'react-icons/fi';
import type { Product } from '@/lib/data';
import { useCartStore } from '@/lib/store';
import { useToast } from '@/lib/toast-context';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);
  const { addToast } = useToast();

  const categoryColors = {
    '3d-printed': 'bg-blue-500',
    'laser-engraved': 'bg-red-500',
    electronics: 'bg-green-500',
  };

  const categoryLabels = {
    '3d-printed': '3D Print',
    'laser-engraved': 'Laser',
    electronics: 'Electronics',
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1);
    addToast(`${product.name} added to cart`, 'success');
  };

  return (
    <Link href={`/products/${product.id}`}>
      <div className="group relative bg-gradient-to-br from-black/95 via-black/90 to-black/95 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:border-red-500/60 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-red-500/25">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-red-500/0 to-red-500/0 group-hover:from-red-500/10 group-hover:via-red-500/5 group-hover:to-red-500/10 transition-all duration-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl -z-0" />
        
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-black via-black/50 to-black">
          <Image
            src={product.thumbnail}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-125 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
          
          {/* Enhanced gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 group-hover:via-black/60 transition-all duration-500" />
          
          {/* Subtle animated overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(239,68,68,0.15),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* NEW Badge - Enhanced */}
          {product.isNew && (
            <div className="absolute top-4 left-4 bg-gradient-to-br from-red-500 to-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl shadow-red-500/50 z-10 backdrop-blur-sm border border-red-400/50 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-red-500/70 transition-all duration-300">
              <span className="relative z-10">NEW</span>
              <div className="absolute inset-0 bg-red-400/50 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          )}
          
          {/* SALE Badge - Enhanced */}
          {product.originalPrice && (
            <div className="absolute top-4 right-4 bg-gradient-to-br from-green-500 to-green-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl shadow-green-500/50 z-10 backdrop-blur-sm border border-green-400/50 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-green-500/70 transition-all duration-300 animate-pulse">
              <span className="relative z-10">SALE</span>
              <div className="absolute inset-0 bg-green-400/50 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          )}
        </div>
        
        <div className="relative p-6 bg-gradient-to-b from-black/80 via-black/70 to-black/80 backdrop-blur-sm border-t border-white/10 group-hover:border-red-500/30 transition-all duration-500">
          {/* Category and Stock Status */}
          <div className="flex items-start justify-between gap-2 mb-4">
            <span className={`${categoryColors[product.category]} text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg backdrop-blur-sm border border-white/20 group-hover:scale-105 transition-transform duration-300`}>
              {categoryLabels[product.category]}
            </span>
            <span className={`text-xs font-semibold px-2.5 py-1.5 rounded-lg backdrop-blur-sm border ${
              product.isInStock 
                ? 'text-green-300 bg-green-500/20 border-green-500/30 group-hover:bg-green-500/30 group-hover:border-green-500/50' 
                : 'text-red-300 bg-red-500/20 border-red-500/30'
            } transition-all duration-300 flex items-center gap-1.5`}>
              {product.isInStock ? (
                <>
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                  In Stock
                </>
              ) : (
                <>
                  <span className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                  Out of Stock
                </>
              )}
            </span>
          </div>
          
          {/* Product Name */}
          <h3 className="font-bold text-white mb-4 line-clamp-2 min-h-[3.5rem] group-hover:text-red-400 transition-colors duration-300 text-lg leading-tight">
            {product.name}
          </h3>
          
          {/* Price and Rating */}
          <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/10 group-hover:border-red-500/30 transition-colors">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-white/40 line-through group-hover:text-white/30 transition-colors">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            {product.rating > 0 && (
              <div className="flex items-center gap-1.5 text-sm text-amber-400 bg-amber-400/15 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-amber-400/20 group-hover:bg-amber-400/25 group-hover:border-amber-400/40 transition-all duration-300 shadow-lg shadow-amber-400/10">
                <span className="text-amber-400 text-base">★</span>
                <span className="font-semibold">{product.rating}</span>
              </div>
            )}
          </div>
          
          {/* Add to Cart Button - Enhanced */}
          <button
            onClick={handleAddToCart}
            disabled={!product.isInStock}
            className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 disabled:from-white/10 disabled:to-white/5 disabled:text-white/40 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] shadow-lg shadow-red-600/30 hover:shadow-xl hover:shadow-red-500/50 disabled:shadow-none border border-red-500/30 hover:border-red-400/50 disabled:border-white/10 relative overflow-hidden group/btn"
          >
            {/* Button shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
            <FiShoppingCart className="w-5 h-5 relative z-10 group-hover/btn:scale-110 transition-transform duration-300" />
            <span className="relative z-10">Add to Cart</span>
          </button>
        </div>
        
        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full" />
      </div>
    </Link>
  );
}

