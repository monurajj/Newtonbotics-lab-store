'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiShoppingCart, FiMinus, FiPlus, FiArrowLeft } from 'react-icons/fi';
import ProductGallery from '@/components/ProductGallery';
import ProductCard from '@/components/ProductCard';
import type { Product, Category } from '@/lib/data';
import { useCartStore } from '@/lib/store';
import { useToast } from '@/lib/toast-context';

interface ProductDetailClientProps {
  product: Product;
  category?: Category;
  relatedProducts: Product[];
}

export default function ProductDetailClient({
  product,
  category,
  relatedProducts,
}: ProductDetailClientProps) {
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);
  const { addToast } = useToast();

  const categoryColors = {
    '3d-printed': 'bg-blue-500',
    'laser-engraved': 'bg-red-500',
    electronics: 'bg-green-500',
  };

  const handleAddToCart = () => {
    addItem(product, quantity);
    addToast(`${product.name} added to cart`, 'success');
  };

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.max(1, Math.min(product.stock, prev + delta)));
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-6"
        >
          <FiArrowLeft className="w-4 h-4" />
          Back to Products
        </Link>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div>
            <ProductGallery images={product.images} productName={product.name} />
          </div>

          {/* Product Info */}
          <div>
            {/* Badges */}
            <div className="flex items-center gap-3 mb-4">
              <span className={`${categoryColors[product.category]} text-white text-sm font-medium px-3 py-1 rounded`}>
                {category?.name || product.category}
              </span>
              {product.isNew && (
                <span className="bg-red-500 text-white text-sm font-medium px-3 py-1 rounded">
                  NEW
                </span>
              )}
              {product.originalPrice && (
                <span className="bg-green-500 text-white text-sm font-medium px-3 py-1 rounded">
                  SALE
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            {product.rating > 0 && (
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={`text-lg ${
                        i < Math.floor(product.rating)
                          ? 'text-amber-500'
                          : 'text-white/20'
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-white/60">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
            )}

            {/* Price */}
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-4xl font-bold text-white">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-2xl text-white/60 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            {/* Stock Status */}
            <div className="mb-6">
              <p className={`text-sm font-medium ${product.isInStock ? 'text-green-500' : 'text-red-500'}`}>
                {product.isInStock ? `In Stock (${product.stock} available)` : 'Out of Stock'}
              </p>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-3">Description</h3>
              <p className="text-white/80 leading-relaxed">{product.description}</p>
              <p className="text-white/80 leading-relaxed mt-4">{product.longDescription}</p>
            </div>

            {/* Add to Cart */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <label className="text-white font-medium">Quantity:</label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                    className="p-2 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg border border-white/20 transition-colors"
                  >
                    <FiMinus className="w-4 h-4" />
                  </button>
                  <span className="text-white font-semibold w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    disabled={quantity >= product.stock}
                    className="p-2 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg border border-white/20 transition-colors"
                  >
                    <FiPlus className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <button
                onClick={handleAddToCart}
                disabled={!product.isInStock}
                className="w-full bg-red-600 hover:bg-red-700 disabled:bg-white/10 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-lg flex items-center justify-center gap-3 transition-colors"
              >
                <FiShoppingCart className="w-5 h-5" />
                <span>Add to Cart</span>
              </button>
            </div>

            {/* Specifications */}
            <div className="bg-black/40 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Specifications</h3>
              <dl className="space-y-3">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex border-b border-white/10 pb-2">
                    <dt className="text-white/60 font-medium capitalize w-1/3">
                      {key.replace(/([A-Z])/g, ' $1').trim()}:
                    </dt>
                    <dd className="text-white flex-1">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-white mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

