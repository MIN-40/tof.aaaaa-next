import Link from 'next/link';
import { notFound } from 'next/navigation';
import AddToCartButton from '../../../components/AddToCartButton';
import DetailCartToggle from '../../../components/DetailCartToggle';
import { categoryLabels, detailImages, getProduct, products, relatedProducts, shippingPolicy, stockLabel, won } from '../../../data/products';
import { site } from '../../../data/site';

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
    alternates: {
      canonical: `/products/${product.slug}/`,
    },
    openGraph: {
      type: 'website',
      siteName: site.name,
      title: `${product.name} | tof.aaaaa`,
      description: product.description,
      url: `/products/${product.slug}/`,
      images: product.img ? [{ url: product.img, width: 1200, height: 1600, alt: product.name }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} | tof.aaaaa`,
      description: product.description,
      images: product.img ? [product.img] : [],
    },
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const cuts = detailImages(product);
  const related = relatedProducts(product);

  return (
    <main className="productPage wrap">
      <div className="productTop"><Link className="backLink" href="/">← Back to shop</Link><DetailCartToggle /></div>
      <section className="productHero">
        <div className="productPhoto">
          {product.img ? <img src={product.img} alt={product.name} /> : <b>{product.cat}</b>}
        </div>
        <div className="productText">
          <p className="eyebrow">tof.aaaaa / {categoryLabels[product.cat] || product.cat}</p>
          <h1>{product.name}</h1>
          <p className="productDesc">{product.description}</p>
          <div className="productMetaRow"><span>{stockLabel(product)}</span><span>{product.badge || 'classic'}</span></div>
          <dl className="specTable">
            <div><dt>소재</dt><dd>{product.material}</dd></div>
            <div><dt>사이즈</dt><dd>{product.size}</dd></div>
            <div><dt>관리</dt><dd>{product.care}</dd></div>
            <div><dt>안내</dt><dd>{product.notice}</dd></div>
          </dl>
          <div className="optionBox"><b>Options</b>{product.options?.map((option) => <span key={option}>{option}</span>)}</div>
          <b className="productPrice">{won(product.price)}</b>
          <AddToCartButton product={product}>장바구니 담기</AddToCartButton>
          <div className="productAccordions">
            <details><summary>배송 안내</summary><p>기본 배송비 {won(shippingPolicy.fee)} / {won(shippingPolicy.freeOver)} 이상 무료배송<br />{shippingPolicy.leadTime}<br />택배사: {shippingPolicy.carrier}</p></details>
            <details><summary>교환·환불 안내</summary><p>상품 수령 후 7일 이내 문의해 주세요. 착용 흔적, 오염, 훼손, 구성품 누락 시 교환/환불이 어렵습니다.</p></details>
          </div>

        </div>
      </section>
      <section className="productCuts">
        <h2>Detail Cuts</h2>
        {cuts.map((src) => <img key={src} src={src} alt={`${product.name} detail`} />)}
      </section>
      <section className="relatedProducts">
        <h2>Related Pieces</h2>
        <div className="relatedGrid">
          {related.map((item) => (
            <Link className="relatedCard" href={`/products/${item.slug}`} key={item.slug}>
              <div>{item.img ? <img src={item.img} alt={item.name} /> : <b>{item.cat}</b>}</div>
              <span>{item.name}</span>
              <small>{won(item.price)}</small>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
