import { getProductsByCategory, categories } from '@/lib/data';
import CategoryPageClient from './CategoryPageClient';
import { notFound } from 'next/navigation';

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const categoryData = categories.find((c) => c.slug === category);

  if (!categoryData) {
    notFound();
  }

  const products = getProductsByCategory(categoryData.id);

  return <CategoryPageClient categorySlug={category} categoryData={categoryData} initialProducts={products} />;
}

