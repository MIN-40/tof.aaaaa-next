export const categoryLabels = {
  necklace: 'Necklace',
  bracelet: 'Bracelet',
  set: 'Set',
  keyring: 'Keyring',
};

export const shippingPolicy = {
  fee: 3000,
  freeOver: 50000,
  carrier: 'CJ대한통운 또는 편의점 택배',
  leadTime: '입금 확인 후 보통 2~5일 내 발송',
};

const common = {
  material: '비즈 / 참 / 금속 부자재',
  size: '핸드메이드 특성상 개체별 차이가 있습니다.',
  care: '물, 땀, 향수, 화장품에 오래 닿지 않게 보관해 주세요.',
  notice: '비즈 배열과 색감은 상품마다 조금씩 다를 수 있습니다.',
  options: ['기본 길이', '선물 포장 요청'],
  stock: 3,
};

export const products = [
  { slug:'tof-beads-necklace', name:'Tof Beads Necklace', cat:'necklace', price:78000, badge:'new', img:'/images/IMG_0397.jpeg', description:'작은 구슬들이 모여 톺아의 첫인상을 만드는 목걸이입니다. 가볍게 걸쳐도 존재감이 남는 데일리 포인트 아이템입니다.', ...common },
  { slug:'peace-beads-bracelet', name:'Peace Beads Bracelet', cat:'bracelet', price:42000, badge:'new', img:'/images/IMG_0713.jpeg', description:'평화와 사랑의 무드를 손목 위에 작게 담은 비즈 팔찌입니다. 다른 팔찌와 레이어드하기 좋습니다.', ...common },
  { slug:'love-charm-necklace', name:'Love Charm Necklace', cat:'necklace', price:59000, badge:'', img:'/images/IMG_0740.jpeg', description:'작은 참 장식이 움직일 때마다 은은하게 보이는 목걸이입니다. 단독 착용과 레이어드 모두 잘 어울립니다.', ...common },
  { slug:'tiny-world-bracelet', name:'Tiny World Bracelet', cat:'bracelet', price:89000, badge:'', img:'/images/IMG_0748.jpeg', description:'작은 세계를 손목에 두른 듯한 팔찌입니다. 다양한 색과 질감의 비즈가 자연스럽게 섞여 있습니다.', ...common },
  { slug:'color-beads-charm', name:'Color Beads Charm', cat:'necklace', price:52000, badge:'new', img:'/images/IMG_8106.jpeg', description:'색감이 있는 비즈와 참을 조합한 목걸이입니다. 무채색 착장에 작은 포인트가 됩니다.', ...common },
  { slug:'flower-beads-necklace', name:'Flower Beads Necklace', cat:'necklace', price:68000, badge:'new', img:'/images/IMG_0502.jpeg', description:'꽃처럼 부드러운 인상을 주는 비즈 목걸이입니다. 따뜻하고 동그란 톺아의 분위기를 담았습니다.', ...common },
  { slug:'tiny-beads-bracelet', name:'Tiny Beads Bracelet', cat:'bracelet', price:39000, badge:'new', img:'/images/IMG_0505.jpeg', description:'작은 비즈들이 손목을 따라 가볍게 이어지는 팔찌입니다. 매일 착용하기 좋은 기본 아이템입니다.', ...common },
  { slug:'world-peace-necklace', name:'World Peace Necklace', cat:'necklace', price:72000, badge:'', img:'/images/IMG_3207.JPG', description:'지구와 평화의 이미지를 떠올리며 만든 목걸이입니다. 톺아의 메시지를 가장 직접적으로 담은 제품입니다.', ...common },
  { slug:'mixed-color-bracelet', name:'Mixed Color Bracelet', cat:'bracelet', price:43000, badge:'', img:'/images/IMG_3245.JPG', description:'여러 색의 비즈를 자연스럽게 섞은 팔찌입니다. 손목 위에서 작은 리듬감을 만들어 줍니다.', ...common },
  { slug:'tof-charm-set', name:'Tof Charm Set', cat:'set', price:89000, badge:'new', img:'/images/IMG_3953.JPG', description:'목걸이와 팔찌를 함께 연출할 수 있는 세트 구성입니다. 톺아의 색감을 한 번에 경험할 수 있습니다.', ...common },
  { slug:'little-love-necklace', name:'Little Love Necklace', cat:'necklace', price:62000, badge:'', img:'/images/IMG_4003.JPG', description:'작은 사랑의 형태를 담은 목걸이입니다. 과하지 않지만 가까이서 보면 섬세한 포인트가 있습니다.', ...common },
  { slug:'daily-beads-set', name:'Daily Beads Set', cat:'set', price:98000, badge:'', img:'/images/IMG_4184.JPG', description:'매일 착용하기 좋은 비즈 액세서리 세트입니다. 자연스러운 레이어드 스타일을 완성합니다.', ...common },
  { slug:'hook-key-chain', name:'Hook Key Chain', cat:'keyring', price:36000, badge:'', description:'가방이나 열쇠에 걸 수 있는 키링입니다. 작은 오브제처럼 들고 다니기 좋습니다.', ...common },
  { slug:'rust-chain-necklace', name:'Rust Chain Necklace', cat:'necklace', price:96000, badge:'', description:'조금 더 묵직한 체인 무드의 목걸이입니다. 비즈 제품과 함께 레이어드하기 좋습니다.', ...common },
  { slug:'plate-chain-bracelet', name:'Plate Chain Bracelet', cat:'bracelet', price:69000, badge:'sold out', sold:true, description:'플레이트 디테일이 있는 체인 팔찌입니다. 현재 품절 상품입니다.', ...common },
  { slug:'mini-lock-pendant', name:'Mini Lock Pendant', cat:'necklace', price:55000, badge:'', description:'작은 잠금 장식에서 영감을 받은 펜던트 목걸이입니다. 미니멀한 포인트로 착용하기 좋습니다.', ...common },
  { slug:'carabiner-chain', name:'Carabiner Chain', cat:'keyring', price:46000, badge:'', description:'카라비너 형태의 체인 키링입니다. 가방, 팬츠, 키홀더에 다양하게 연결할 수 있습니다.', ...common },
  { slug:'heavy-link-necklace', name:'Heavy Link Necklace', cat:'necklace', price:118000, badge:'sold out', sold:true, description:'무게감 있는 링크 체인 목걸이입니다. 현재 품절 상품입니다.', ...common }
];

export const won = (n) => '₩' + n.toLocaleString('ko-KR');

export function getProduct(slug) {
  return products.find((p) => p.slug === slug);
}

export function detailImages(product) {
  if (product?.detailImages?.length) return product.detailImages;
  const imgs = products.filter((p) => p.img).map((p) => p.img);
  const start = Math.max(0, imgs.indexOf(product?.img));
  return [product?.img, ...imgs.slice(start + 1), ...imgs.slice(0, start)].filter(Boolean).slice(0, 4);
}

export function stockLabel(product) {
  if (product?.sold) return '품절';
  if (product?.stock <= 2) return `소량 재고 ${product.stock}개`;
  return '주문 가능';
}

export function relatedProducts(product, limit = 4) {
  return products
    .filter((item) => item.slug !== product.slug && (item.cat === product.cat || item.badge === 'new'))
    .slice(0, limit);
}
