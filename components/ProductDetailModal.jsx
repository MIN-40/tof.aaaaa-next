import { detailImages, won } from '../data/products';

export default function ProductDetailModal({ product, t, onClose, onAddCart }) {
  if (!product) return null;
  return (
    <div className="modal" onClick={onClose}>
      <div className="detail" onClick={(e) => e.stopPropagation()}>
        <div className="detailMain">
          {product.img && <img src={product.img} alt={product.name} />}
        </div>
        <div>
          <button onClick={onClose}>{t.close}</button>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <div className="spec">
            소재: {product.material}<br />
            사이즈: {product.size}<br />
            관리: {product.care}<br />
            안내: {product.notice}
          </div>
          <b>{won(product.price)}</b>
          <button className="checkout" onClick={() => onAddCart(product)}>{t.add}</button>
        </div>
        <div className="detailCuts">
          {detailImages(product).map((src) => <img key={src} src={src} alt="detail" />)}
        </div>
      </div>
    </div>
  );
}
