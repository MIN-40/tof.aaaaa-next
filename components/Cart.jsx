import { won } from '../data/products';

export default function Cart({ cart, total, t, onClear, onClose, onRemove, onOrder }) {
  return (
    <aside className="cart">
      <div className="cartHead">
        <h3>Cart</h3>
        <div>
          <button onClick={onClear}>{t.clear}</button>
          <button onClick={onClose}>×</button>
        </div>
      </div>
      {cart.length ? cart.map((item, index) => (
        <div className="cartItem" key={item.name}>
          <span>{item.name} × {item.qty}</span>
          <b>{won(item.price * item.qty)}</b>
          <button onClick={() => onRemove(index)}>삭제</button>
        </div>
      )) : <p>{t.empty}</p>}
      <b>Total {won(total)}</b>
      <button className="checkout" disabled={!cart.length} onClick={onOrder}>{t.order}</button>
    </aside>
  );
}
