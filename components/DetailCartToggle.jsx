'use client';

import Link from 'next/link';
import { useCart } from './CartProvider';

export default function DetailCartToggle() {
  const { qty } = useCart();
  return <Link className="detailCartOpen" href="/cart">Cart ({qty})</Link>;
}
