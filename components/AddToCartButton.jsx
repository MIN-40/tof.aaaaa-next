'use client';

import { useState } from 'react';
import { useCart } from './CartProvider';

export default function AddToCartButton({ product, children = '장바구니 담기' }) {
  const { addCart } = useCart();
  const [added, setAdded] = useState(false);

  function handleClick() {
    addCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  }

  return (
    <>
      <button className="checkout" disabled={product.sold} onClick={handleClick}>
        {product.sold ? 'Sold Out' : children}
      </button>
      {added && <p className="addedNotice">장바구니에 담겼습니다. 메인 페이지 Cart에서 확인할 수 있어요.</p>}
    </>
  );
}
