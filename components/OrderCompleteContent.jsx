import Link from 'next/link';

export default function OrderCompleteContent({ orderId }) {
  return (
    <main className="completePage wrap">
      <Link className="brand smallBrand" href="/">tof<span>.aaaaa</span></Link>
      <section className="completeBox">
        <h1>주문이 완료되었습니다</h1>
        <p className="completeLead">주문 내용이 정상적으로 접수되었습니다. 아래 입금 정보로 입금해 주세요.</p>
        <div className="bankInfo"><b>주문번호</b><br />{orderId || '-'}</div>
        <div className="bankInfo"><b>입금 정보</b><br />기업은행 22908005401016<br />예금주 김사랑<br /><span style={{color:'#777'}}>입금자명은 주문자 이름과 같게 입력해 주세요.</span></div>
        <div className="completeActions">
          <Link className="checkout" href="/">쇼핑 계속하기</Link>
          <Link className="cartClearWide" href="/cart">장바구니 보기</Link>
        </div>
      </section>
    </main>
  );
}
