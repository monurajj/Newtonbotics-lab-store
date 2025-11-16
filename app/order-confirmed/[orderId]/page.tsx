import OrderConfirmedClient from './OrderConfirmedClient';

interface OrderConfirmedPageProps {
  params: Promise<{ orderId: string }>;
}

export default async function OrderConfirmedPage({ params }: OrderConfirmedPageProps) {
  const { orderId } = await params;
  return <OrderConfirmedClient orderId={orderId} />;
}

