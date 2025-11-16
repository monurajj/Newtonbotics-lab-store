import { getProductById, categories } from '@/lib/data';
import ProductDetailClient from './ProductDetailClient';
import { notFound } from 'next/navigation';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const category = categories.find((c) => c.id === product.category);
  const relatedProducts = product.relatedProducts
    .map((id) => getProductById(id))
    .filter((p): p is NonNullable<typeof p> => p !== undefined)
    .slice(0, 4);

  return <ProductDetailClient product={product} category={category} relatedProducts={relatedProducts} />;
}

