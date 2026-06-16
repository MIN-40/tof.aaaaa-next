export default function CompleteModal({ orderId, onClose }) {
  return (
    <div className="modal">
      <div className="order">
        <h2>주문이 완료되었습니다</h2>
        <p>주문번호: {orderId}</p>
        <p>기업은행 22908005401016<br />예금주 김사랑</p>
        <button onClick={onClose}>확인</button>
      </div>
    </div>
  );
}
