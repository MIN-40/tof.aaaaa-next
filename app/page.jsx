'use client';

import { useMemo, useState } from 'react';
import { useCart } from '../components/CartProvider';
import Guide from '../components/Guide';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import ProductDetailModal from '../components/ProductDetailModal';
import { products } from '../data/products';
import { site } from '../data/site';

const text = {
  kr: {
    hero: <>톺아 이야기<br/><br/>내 몸에 걸치는 액세서리들,<br/>좋아하는 곳에 늘 함께하는 작은 장신구들은<br/>그 사람의 취향과 색깔을 듬뿍 담기에<br/>더 매력적이라고 생각해요.<br/><br/>조그만 구슬들로 모인<br/>수많은 '누구'들을 천천히 톺아보기 원해요.<br/><br/>그렇게 우리가 서로를 자세히 바라볼 때,<br/>뜻밖의 사랑을 발견할 수 있지 않을까요?<br/><br/>삶의 순간들,<br/>그 사이 소중함을 모조리 톺아보며.<br/><br/>🌍🌎🌏<br/>평화와 사랑으로!</>,
    order: '주문하기', add: '장바구니 담기', close: '닫기', clear: '모두 삭제', empty: '장바구니가 비었습니다.', done: '주문 완료', guide: '상품·주문·배송·교환/환불·개인정보 안내'
  },
  en: {
    hero: <>Tofa Story<br/><br/>The accessories we wear,<br/>and the small ornaments that stay with us,<br/>feel more beautiful because they hold<br/>a person’s taste and color.<br/><br/>🌍🌎🌏<br/>With peace and love!</>,
    order: 'Order', add: 'Add to Cart', close: 'Close', clear: 'Clear all', empty: 'Your cart is empty.', done: 'Complete Order', guide: 'Product · Order · Shipping · Exchange/Refund · Privacy'
  }
};

export default function Home() {
  const [lang, setLang] = useState('kr');
  const [category, setCategory] = useState('all');
  const [query, setQuery] = useState('');
  const { qty, addCart } = useCart();
  const [detail, setDetail] = useState(null);
  const t = text[lang];

  const cats = useMemo(() => ['all', ...new Set(products.map((p) => p.cat))], []);
  const list = products.filter((p) =>
    (category === 'all' || (category === 'new' ? p.badge === 'new' : p.cat === category)) &&
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Store',
    name: site.name,
    alternateName: site.koreanName,
    url: site.url,
    image: `${site.url}${site.image}`,
    description: site.description,
    email: site.email,
    brand: { '@type': 'Brand', name: site.name },
    sameAs: [],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header qty={qty} onCategoryChange={setCategory} onLanguageChange={setLang} />

      <div className="snapContainer">
        <section id="top" className="hero snapSection">
          <div>
            <h1>tof.aaaaa</h1>
            <p>{t.hero}</p>
          </div>
          <div className="ticker"><div>NEW ACCESSORY DROP · STEEL CHAIN · TOF.AAAAA · NEW ACCESSORY DROP · STEEL CHAIN · TOF.AAAAA ·</div></div>
        </section>

        <main id="shop" className="wrap shop snapSection">
          <aside className="side">
            <h3>Category</h3>
            {cats.map((cat) => <button className={category === cat ? 'active' : ''} key={cat} onClick={() => setCategory(cat)}>{cat}</button>)}
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search" />
          </aside>
          <section className="products">
            <h2>{category === 'all' ? 'Accessories' : category}</h2>
            <p>{list.length} products</p>
            <div className="grid">
              {list.map((product) => <ProductCard key={product.name} product={product} onAddCart={addCart} onOpenDetail={setDetail} />)}
            </div>
          </section>
        </main>

        <Guide text={t.guide} />
        <footer className="snapSection">© 2026 tof.aaaaa. all rights reserved.</footer>
      </div>

      {detail && <ProductDetailModal product={detail} t={t} onClose={() => setDetail(null)} onAddCart={(product) => { addCart(product); setDetail(null); }} />}
    </>
  );
}
