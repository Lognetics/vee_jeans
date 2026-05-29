import { notFound } from 'next/navigation';
import ProductDetail from '@/components/ProductDetail';
import { PRODUCTS, getProduct, getRelatedProducts } from '@/lib/products';
import { getReviewsForProduct, REVIEWS } from '@/lib/reviews';

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) return { title: 'Product not found' };
  return {
    title: `${product.name} — Vee_jeans`,
    description: product.description.slice(0, 160),
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) notFound();
  const related = getRelatedProducts(product, 4);
  const productReviews = getReviewsForProduct(product.id);
  // Augment with a few general reviews if the product has none stored
  const reviews = productReviews.length >= 3 ? productReviews : [...productReviews, ...REVIEWS].slice(0, 6);
  return <ProductDetail product={product} related={related} reviews={reviews} />;
}
