'use client';

import { useSearchParams } from 'next/navigation';
import OrderCompleteContent from '../../components/OrderCompleteContent';

export default function CompleteClient() {
  const searchParams = useSearchParams();
  return <OrderCompleteContent orderId={searchParams.get('orderId')} />;
}
