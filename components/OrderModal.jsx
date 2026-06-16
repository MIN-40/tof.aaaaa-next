export default function OrderModal({ t, onSubmit, onClose }) {
  return (
    <div className="modal">
      <form className="order" onSubmit={onSubmit}>
        <h2>Order</h2>
        <input name="name" placeholder="주문자 이름" required />
        <input name="phone" placeholder="연락처" required />
        <textarea name="address" placeholder="주소 / 요청사항" required />
        <label><input type="checkbox" required /> 개인정보 수집 및 이용 동의</label>
        <button>{t.done}</button>
        <button type="button" onClick={onClose}>{t.close}</button>
      </form>
    </div>
  );
}
