import Link from 'next/link';
import { won } from '../data/products';

export default function ProductCard({ product, onAddCart, onOpenDetail }) {
  return (
    <article className="product" onClick={() => onOpenDetail(product)}>
      <span className="badge">{product.badge || product.cat}</span>
      <div className="thumb">
        {product.img ? <img src={product.img} alt={product.name} /> : <b>{product.cat}</b>}
      </div>
      <h3>{product.name}</h3>
      <p>tof.aaaaa / {product.cat}</p>
      <b>{won(product.price)}</b>
      <div>
        <button onClick={(e) => { e.stopPropagation(); onAddCart(product); }} disabled={product.sold}>
          {product.sold ? 'Sold Out' : 'Add Cart'}
        </button>
        <Link onClick={(e) => e.stopPropagation()} href={`/products/${product.slug}`}>View Page</Link>
      </div>
    </article>
  );
}
