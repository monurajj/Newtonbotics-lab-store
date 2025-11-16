'use client';

import Link from 'next/link';
import { FiCheck, FiShoppingBag, FiPackage } from 'react-icons/fi';

interface OrderConfirmedClientProps {
  orderId: string;
}

export default function OrderConfirmedClient({ orderId }: OrderConfirmedClientProps) {
  const estimatedDelivery = new Date();
  estimatedDelivery.setDate(estimatedDelivery.getDate() + 5);

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black/95 backdrop-blur-lg border border-white/10 rounded-xl p-8 md:p-12 text-center">
          {/* Success Icon */}
          <div className="mb-6 flex justify-center">
            <div className="bg-green-500/20 rounded-full p-6">
              <FiCheck className="w-16 h-16 text-green-500" />
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Order Confirmed!
          </h1>
          <p className="text-white/60 mb-8">
            Thank you for your purchase. We've received your order and will process it shortly.
          </p>

          {/* Order Number */}
          <div className="bg-black/40 rounded-xl p-6 mb-8 border border-white/10">
            <p className="text-white/60 text-sm mb-2">Order Number</p>
            <p className="text-2xl font-bold text-white font-mono">{orderId.toUpperCase()}</p>
            <button
              onClick={() => {
                navigator.clipboard.writeText(orderId);
              }}
              className="mt-4 text-red-500 hover:text-red-400 text-sm font-medium transition-colors"
            >
              Copy Order Number
            </button>
          </div>

          {/* Order Details */}
          <div className="bg-black/40 rounded-xl p-6 mb-8 border border-white/10 text-left">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <FiPackage className="w-5 h-5" />
              Order Summary
            </h2>
            <div className="space-y-2 text-white/80">
              <p>Estimated Delivery: {estimatedDelivery.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
              <p>You will receive an email confirmation shortly with tracking information.</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              <FiShoppingBag className="w-5 h-5" />
              Continue Shopping
            </Link>
            <Link
              href="/account"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg border border-white/20 transition-colors inline-flex items-center justify-center gap-2"
            >
              View Orders
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

