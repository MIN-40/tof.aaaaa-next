export default function Guide({ text }) {
  return (
    <section id="guide" className="wrap guide">
      <h2>Shopping Guide</h2>
      <p>{text}</p>
      <div className="guideGrid">
        <div><h3>Product Info</h3><p>비즈/참/체인을 조합한 핸드메이드 액세서리입니다.</p></div>
        <div><h3>Order & Payment</h3><p>기업은행 22908005401016 / 예금주 김사랑</p></div>
        <div><h3>Shipping</h3><p>기본 배송비 3,000원, 5만원 이상 무료배송.</p></div>
        <div><h3>Exchange / Refund</h3><p>수령 후 7일 이내 문의 가능, 착용/훼손 시 불가.</p></div>
      </div>
    </section>
  );
}
