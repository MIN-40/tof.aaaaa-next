'use client';

import Link from 'next/link';
import { useCart } from '../../components/CartProvider';
import { won } from '../../data/products';


export default function CartPage() {
  const { cart, total, qty, removeCart, clearCart } = useCart();

  return (
    <main className="cartPage wrap">
      <div className="cartPageTop">
        <Link className="backLink" href="/">← Continue shopping</Link>
        <Link className="brand smallBrand" href="/">tof<span>.aaaaa</span></Link>
      </div>

      <section className="cartPageHead">
        <h1>Cart</h1>
        <p>{qty} items in your cart</p>
      </section>

      {cart.length ? (
        <section className="cartPageGrid">
          <div className="cartList">
            {cart.map((item, index) => (
              <article className="cartLine" key={item.name}>
                <div className="cartLineImg">
                  {item.img ? <img src={item.img} alt={item.name} /> : <b>{item.cat}</b>}
                </div>
                <div>
                  <h3>{item.name}</h3>
                  <p>tof.aaaaa / {item.cat}</p>
                  <span>수량 {item.qty}</span>
                </div>
                <b>{won(item.price * item.qty)}</b>
                <button onClick={() => removeCart(index)}>삭제</button>
              </article>
            ))}
          </div>

          <aside className="cartSummary">
            <h2>Order Summary</h2>
            <div><span>상품 수량</span><b>{qty}</b></div>
            <div><span>상품 금액</span><b>{won(total)}</b></div>
            <div><span>배송비</span><b>{total >= 50000 ? '무료' : '₩3,000'}</b></div>
            <div className="summaryTotal"><span>Total</span><b>{won(total + (total >= 50000 ? 0 : 3000))}</b></div>
            <Link className="checkout" href="/order">주문하기</Link>
            <button className="cartClearWide" onClick={clearCart}>모두 삭제</button>
          </aside>
        </section>
      ) : (
        <section className="emptyCartPage">
          <h2>장바구니가 비었습니다.</h2>
          <p>마음에 드는 작은 장신구를 천천히 톺아보세요.</p>
          <Link className="checkout" href="/">쇼핑 계속하기</Link>
        </section>
      )}


    </main>
  );
}
