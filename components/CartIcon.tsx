'use client';

import Link from 'next/link';
import { FiShoppingCart } from 'react-icons/fi';
import { useCartStore } from '@/lib/store';
import { motion } from 'framer-motion';

export default function CartIcon() {
  const itemCount = useCartStore((state) => state.getItemCount());

  return (
    <Link href="/cart" className="relative">
      <div className="relative p-2 hover:bg-white/10 rounded-lg transition-colors">
        <FiShoppingCart className="w-6 h-6 text-white" />
        {itemCount > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
          >
            {itemCount > 99 ? '99+' : itemCount}
          </motion.div>
        )}
      </div>
    </Link>
  );
}

