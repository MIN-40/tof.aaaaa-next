'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useCart } from '../../components/CartProvider';
import { won } from '../../data/products';

const GOOGLE_SHEET_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbwQUJS6GwxsLwEJVUi-XHaoAtBhn8JDjHL27p2pABCPxZglX5RR7rQwf0Xy7MnHJpAd/exec';

function makeOrderId() {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  return `TOF-${d.getFullYear()}${pad(d.getMonth()+1)}${pad(d.getDate())}-${pad(d.getHours())}${pad(d.getMinutes())}${pad(d.getSeconds())}`;
}

export default function OrderPage() {
  const router = useRouter();
  const { cart, total, qty, setCart } = useCart();
  const [sending, setSending] = useState(false);
  const shipping = total >= 50000 || total === 0 ? 0 : 3000;
  const finalTotal = total + shipping;

  async function submitOrder(e) {
    e.preventDefault();
    if (!cart.length) return alert('장바구니가 비었습니다.');
    setSending(true);
    const form = new FormData(e.currentTarget);
    const orderId = makeOrderId();
    form.append('orderId', orderId);
    form.append('items', cart.map((item, i) => `${i+1}. ${item.name} × ${item.qty} - ${won(item.price * item.qty)}`).join('\n'));
    form.append('total', won(finalTotal));
    form.append('memo', `상품금액 ${won(total)} / 배송비 ${shipping ? won(shipping) : '무료'}`);
    try {
      await fetch(GOOGLE_SHEET_WEB_APP_URL, { method: 'POST', body: form, mode: 'no-cors' });
      setCart([]);
      e.currentTarget.reset();
      router.push(`/complete?orderId=${encodeURIComponent(orderId)}`);
    } finally {
      setSending(false);
    }
  }

  return (
    <main className="orderPage wrap">
      <div className="cartPageTop">
        <Link className="backLink" href="/cart">← Back to cart</Link>
        <Link className="brand smallBrand" href="/">tof<span>.aaaaa</span></Link>
      </div>

      <section className="cartPageHead">
        <h1>Order</h1>
        <p>주문 정보를 입력해 주세요.</p>
      </section>

      <section className="orderPageGrid">
        <form className="orderForm" onSubmit={submitOrder}>
          <h2>Buyer Info</h2>
          <input name="name" placeholder="주문자 이름" minLength="2" required />
          <input name="phone" placeholder="연락처 예: 010-0000-0000" pattern="[0-9\-\s]{9,}" required />
          <textarea name="address" placeholder="주소 / 요청사항" minLength="8" required />
          <div className="privacyBox"><b>개인정보 수집 및 이용 안내</b><br />수집 항목: 이름, 연락처, 주소, 주문 상품<br />수집 목적: 주문 확인, 입금 확인, 배송 및 고객 응대<br />보관 기간: 주문 처리 완료 후 운영상 필요한 기간</div>
          <label className="consentLine"><input type="checkbox" required /> 위 개인정보 수집 및 이용에 동의합니다.</label>
          <button className="checkout" disabled={sending || !cart.length}>{sending ? '전송 중...' : '주문 완료'}</button>
        </form>

        <aside className="cartSummary">
          <h2>Order Summary</h2>
          {cart.length ? cart.map((item) => (
            <div key={item.name}><span>{item.name} × {item.qty}</span><b>{won(item.price * item.qty)}</b></div>
          )) : <p>장바구니가 비었습니다.</p>}
          <div><span>상품 수량</span><b>{qty}</b></div>
          <div><span>상품 금액</span><b>{won(total)}</b></div>
          <div><span>배송비</span><b>{shipping ? won(shipping) : '무료'}</b></div>
          <div className="summaryTotal"><span>Total</span><b>{won(finalTotal)}</b></div>
          <div className="finalCheck"><b>주문 전 확인</b><br />주문 완료 후 아래 계좌로 입금해 주세요. 입금자명은 주문자 이름과 같게 입력해 주세요.</div>
          <div className="bankInfo"><b>입금 정보</b><br />기업은행 22908005401016<br />예금주 김사랑</div>
        </aside>
      </section>

    </main>
  );
}
