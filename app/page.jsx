'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
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
  const [currentSection, setCurrentSection] = useState(0);
  const currentSectionRef = useRef(0);
  const wheelLock = useRef(false);
  const edgeScrollRef = useRef({ key: '', time: 0, count: 0, total: 0 });
  const sectionCount = 3;
  const t = text[lang];

  useEffect(() => {
    currentSectionRef.current = currentSection;
  }, [currentSection]);

  const goToSection = (index) => {
    const next = Math.max(0, Math.min(sectionCount - 1, index));
    currentSectionRef.current = next;
    setCurrentSection(next);
  };

  useEffect(() => {
    const sectionIds = ['top', 'shop', 'guide'];

    const canScrollInside = (element, direction) => {
      if (!element) return false;
      const scrollable = element.closest('.products');
      if (!scrollable) return false;
      const hasOverflow = scrollable.scrollHeight > scrollable.clientHeight + 2;
      if (!hasOverflow) return false;
      if (direction > 0) return scrollable.scrollTop + scrollable.clientHeight < scrollable.scrollHeight - 2;
      return scrollable.scrollTop > 2;
    };

    const onWheel = (event) => {
      if (window.innerWidth <= 900 || detail) return;
      if (Math.abs(event.deltaY) < 6) return;
      const direction = event.deltaY > 0 ? 1 : -1;
      if (currentSectionRef.current === 1) {
        const scrollable = event.target?.closest?.('.products');
        if (canScrollInside(event.target, direction)) {
          edgeScrollRef.current = { key: '', time: 0, count: 0, total: 0 };
          return;
        }
        if (scrollable) {
          const edgeKey = `shop-${direction}`;
          const now = Date.now();
          const previous = edgeScrollRef.current;
          const isSameEdge = previous.key === edgeKey && now - previous.time < 1800;
          const nextCount = isSameEdge ? previous.count + 1 : 1;
          const nextTotal = isSameEdge ? previous.total + Math.abs(event.deltaY) : Math.abs(event.deltaY);
          const canLeaveProductPage = nextCount >= 3 || nextTotal >= 260;
          edgeScrollRef.current = { key: edgeKey, time: now, count: nextCount, total: nextTotal };
          if (!canLeaveProductPage) {
            event.preventDefault();
            event.stopPropagation();
            return;
          }
        }
      }
      event.preventDefault();
      event.stopPropagation();
      if (wheelLock.current) return;
      wheelLock.current = true;
      edgeScrollRef.current = { key: '', time: 0, count: 0, total: 0 };
      goToSection(currentSectionRef.current + direction);
      window.setTimeout(() => { wheelLock.current = false; }, 820);
    };

    const onKeyDown = (event) => {
      if (window.innerWidth <= 900 || detail) return;
      if (!['ArrowDown', 'PageDown', 'Space', 'ArrowUp', 'PageUp'].includes(event.code)) return;
      event.preventDefault();
      const direction = ['ArrowUp', 'PageUp'].includes(event.code) ? -1 : 1;
      goToSection(currentSectionRef.current + direction);
    };

    const onHashChange = () => {
      const target = sectionIds.indexOf(window.location.hash.replace('#', ''));
      if (target >= 0) goToSection(target);
    };

    onHashChange();
    window.addEventListener('wheel', onWheel, { passive: false, capture: true });
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('hashchange', onHashChange);
    return () => {
      window.removeEventListener('wheel', onWheel, { capture: true });
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('hashchange', onHashChange);
    };
  }, [detail]);

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

      <div className="sectionControls" aria-label="Page navigation">
        {Array.from({ length: sectionCount }).map((_, index) => (
          <button
            aria-label={`Go to section ${index + 1}`}
            className={currentSection === index ? 'active' : ''}
            key={index}
            onClick={() => goToSection(index)}
            type="button"
          />
        ))}
      </div>

      <div className="snapContainer">
        <div className="fullpageTrack" style={{ transform: `translate3d(0, calc(-${currentSection} * (100vh - 105px)), 0)` }}>
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
        </div>
      </div>

      {detail && <ProductDetailModal product={detail} t={t} onClose={() => setDetail(null)} onAddCart={(product) => { addCart(product); setDetail(null); }} />}
    </>
  );
}
